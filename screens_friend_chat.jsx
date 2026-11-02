// 이음 - Friend chat screen (accessed from friends list)
// Same AI chat mechanic as video call, but as a dedicated chat page

function FriendChatScreen({ friend, onBack, onCall, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const country = COUNTRIES[friend.country];
  const [messages, setMessages] = React.useState(() => {
    // Seed with the last message from friend list as first bubble
    return friend.lastMsg
      ? [{ from: 'them', text: friend.lastMsg, translation: null, time: friend.status }]
      : [];
  });
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput('');
    setMessages(prev => [...prev, { from: 'me', text, time: '방금' }]);
    setTyping(true);
    if (typeof bumpStat === 'function') { bumpStat('messages'); bumpStat('chats'); }

    const meName = (typeof USER !== 'undefined' && USER.name) ? USER.name : '친구';
    const persona = `너는 "${friend.name}"이라는 ${country.name} 청소년이야. 지금 친구 "${meName}"와 이음(Ieum) 앱에서 채팅 중이고, ${meName}는 너희 나라 문화와 언어를 배우고 싶어해.

대화 규칙:
1. 너는 ${country.lang} 원어민이라 자기 모국어로 자연스럽게 말해. 한국어는 몰라.
2. 실제 청소년처럼 짧고 편하게, 반말/캐주얼하게, 이모지도 가끔 써.
3. 상대방이 방금 한 말에 **반드시 이어서 반응해**. 새로운 주제로 갑자기 튀지 마.
4. 한 번에 1-2문장만. 자연스러운 후속 질문도 좋아.
5. 대화 흐름을 기억해. 이미 했던 얘기 반복하지 마.

출력은 반드시 이 JSON 오브젝트만:
{"native": "너의 모국어 답변", "korean": "그 답변의 자연스러운 한국어 번역"}`;

    const history = messages.slice(-12).map(m => ({
      role: m.from === 'me' ? 'user' : 'assistant',
      content: m.from === 'me' ? m.text : JSON.stringify({ native: m.text, korean: m.translation || m.text }),
    }));

    try {
      const reply = await ieumAskAI([
        { role: 'system', content: persona },
        ...history,
        { role: 'user', content: text },
      ]);
      const parsed = ieumParseBilingual(reply) || { native: '...', korean: '' };
      setMessages(prev => [...prev, {
        from: 'them',
        text: parsed.native,
        translation: parsed.korean,
        time: '방금',
      }]);
    } catch (e) {
      setMessages(prev => [...prev, {
        from: 'them', text: '...', translation: '(연결에 문제가 생겼어요)', time: '방금',
      }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ie-bg)' }}>
      {/* Header */}
      <div style={{
        padding: '52px 12px 12px', display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: '1px solid var(--ie-line)', background: 'white',
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.back(22)}</button>
        <div style={{ position: 'relative' }}>
          <Avatar name={friend.name} country={friend.country} size={40}/>
          {friend.status === '온라인' && (
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 11, height: 11, borderRadius: '50%',
              background: '#4ade80', border: '2px solid white',
            }}/>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
            {friend.name}
            <span style={{ fontSize: 13, opacity: 0.7 }}>{country.flag}</span>
          </div>
          <div style={{ fontSize: 11, color: friend.status === '온라인' ? '#22c55e' : 'var(--ie-ink-3)', fontWeight: 600 }}>
            {friend.status === '온라인' ? '● 온라인' : friend.status}
          </div>
        </div>
        <button onClick={onCall} style={{
          width: 36, height: 36, borderRadius: 12,
          background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.video(20)}</button>
      </div>

      {/* Translation banner */}
      <div style={{
        padding: '8px 16px', background: 'var(--ie-coral-tint)',
        borderBottom: '1px solid var(--ie-coral-soft)',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <div style={{ color: 'var(--ie-coral-deep)' }}>{Icon.translate(14)}</div>
        <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 600 }}>
          {T('friend_chat_translate_on')} · {country.lang}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{
        flex: 1, overflowY: 'auto', padding: '16px 14px 6px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {messages.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '40px 20px',
            color: 'var(--ie-ink-3)',
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{country.flag}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ie-ink)', marginBottom: 4 }}>{T('friend_chat_empty_title').replace('{name}', friend.name)}</div>
            <div style={{ fontSize: 12, color: 'var(--ie-ink-3)' }}>{T('friend_chat_empty_desc')}</div>
          </div>
        )}
        {messages.map((m, i) => (
          <FriendChatBubble key={i} msg={m} country={country}/>
        ))}
        {typing && (
          <div style={{
            alignSelf: 'flex-start', display: 'flex', gap: 4,
            background: 'white', padding: '12px 14px',
            borderRadius: '16px 16px 16px 4px',
            border: '1px solid var(--ie-line)',
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--ie-ink-3)',
                animation: `ie-typing 1.2s ${i*0.15}s infinite`,
              }}/>
            ))}
          </div>
        )}
      </div>

      {/* Suggestions when empty */}
      {messages.length <= 1 && !typing && (
        <div style={{ padding: '4px 14px 8px', display: 'flex', gap: 6, overflowX: 'auto' }} className="ie-noscroll">
          {(T('friend_chat_suggestions') || []).map(s => (
            <button key={s} onClick={() => setInput(s)} style={{
              whiteSpace: 'nowrap', padding: '8px 12px', borderRadius: 999,
              background: 'white', color: 'var(--ie-ink-2)',
              fontSize: 12, fontWeight: 500,
              border: '1px solid var(--ie-line)',
            }}>{s}</button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{
        padding: '10px 12px 30px', display: 'flex', gap: 8, alignItems: 'flex-end',
        background: 'white', borderTop: '1px solid var(--ie-line)',
      }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder={T('friend_chat_input_placeholder')}
          rows={1}
          style={{
            flex: 1, resize: 'none', minHeight: 40, maxHeight: 100,
            background: 'var(--ie-bg)',
            border: '1px solid var(--ie-line)',
            borderRadius: 14, padding: '10px 14px',
            color: 'var(--ie-ink)', fontSize: 14, fontFamily: 'inherit',
            outline: 'none',
          }}
        />
        <button onClick={sendMessage} disabled={!input.trim() || typing} style={{
          width: 40, height: 40, borderRadius: 14,
          background: input.trim() && !typing ? 'var(--ie-coral)' : 'var(--ie-line-2)',
          color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .15s',
          cursor: input.trim() && !typing ? 'pointer' : 'default',
        }}>{Icon.send(18, input.trim() && !typing ? 'white' : 'var(--ie-ink-4)')}</button>
      </div>
    </div>
  );
}

// ─── Bubble variant for light-mode friend chat ────
function FriendChatBubble({ msg, country }) {
  const mine = msg.from === 'me';
  return (
    <div style={{
      alignSelf: mine ? 'flex-end' : 'flex-start',
      maxWidth: '82%',
      display: 'flex', flexDirection: 'column', gap: 3,
      animation: 'ie-fadeup .25s ease',
    }}>
      <div style={{
        padding: '10px 14px',
        borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: mine ? 'var(--ie-coral)' : 'white',
        color: mine ? 'white' : 'var(--ie-ink)',
        fontSize: 14, lineHeight: 1.4,
        border: mine ? 'none' : '1px solid var(--ie-line)',
        wordBreak: 'break-word',
      }}>{msg.text}</div>
      {!mine && msg.translation && (
        <div style={{
          padding: '2px 12px', fontSize: 11, color: 'var(--ie-ink-3)',
          display: 'flex', gap: 5, alignItems: 'flex-start', lineHeight: 1.4,
        }}>
          <span style={{ color: 'var(--ie-coral)', flexShrink: 0 }}>↳</span>
          <span>{msg.translation}</span>
        </div>
      )}
    </div>
  );
}

// ─── Chats Tab ────────────────────────────────
// Two lists, split by my interest countries:
//   • My Chats      → students from the countries I said I'm interested in
//   • Find Friends  → everyone else, recommended by grade (you add them yourself)
function ChatsScreen({ onOpenChat, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [tab, setTab] = React.useState('chats');   // 'chats' | 'add'
  const [chatSearch, setChatSearch] = React.useState('');
  // Bumped whenever a friend is added so My Chats re-reads the FRIENDS array
  const [revision, setRevision] = React.useState(0);
  const friendCountAtRender = (typeof FRIENDS !== 'undefined') ? FRIENDS.length : 0;
  // Keep the list in sync if FRIENDS changes from outside this component
  React.useEffect(() => {
    if (friendCountAtRender !== revision) setRevision(friendCountAtRender);
  }, [friendCountAtRender]);

  const myInterests = (typeof USER !== 'undefined' && USER.interests_country) ? USER.interests_country : [];
  const directory = (typeof USER_DIRECTORY !== 'undefined' ? USER_DIRECTORY : []);

  // Anyone I've actually added (FRIENDS) always shows in My Chats — even if
  // their country isn't in my interests.
  const addedUsernames = new Set(FRIENDS.map(f => f.username));

  // Interest-country students from the directory.
  const interestPool = directory
    .filter(u => myInterests.length === 0 || myInterests.includes(u.country));

  // Merge: my added friends FIRST (so the newest additions are on top),
  // then interest-country students who aren't friends yet.
  const merged = [
    ...FRIENDS.map(f => ({ ...f, _isFriend: true })),
    ...interestPool
      .filter(u => !addedUsernames.has(u.username))
      .map(u => ({ ...u, _isFriend: false })),
  ];
  // de-duplicate (an added friend may also appear via interest pool)
  const seen = new Set();
  const chatPool = merged.filter(u => {
    const k = u.username || u.name;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  const myChats = chatPool
    .filter(u => !chatSearch.trim() ||
      (u.name || '').toLowerCase().includes(chatSearch.toLowerCase()) ||
      (u.username || '').toLowerCase().includes(chatSearch.toLowerCase()));

  return (
    <div style={{ paddingBottom: 80 }}>
      <ScreenHeader title={T('chats_title')} subtitle={T('chats_subtitle')} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 4, padding: 4,
          background: 'var(--ie-line-2)', borderRadius: 12, marginBottom: 20,
        }}>
          <button onClick={() => setTab('chats')} style={{
            flex: 1, padding: '10px', borderRadius: 10,
            background: tab === 'chats' ? 'white' : 'transparent',
            color: tab === 'chats' ? 'var(--ie-ink)' : 'var(--ie-ink-3)',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
            boxShadow: tab === 'chats' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
            transition: 'all .15s',
          }}>{T('chats_tab_my')}{myChats.length > 0 ? ` · ${myChats.length}` : ''}</button>
          <button onClick={() => setTab('add')} style={{
            flex: 1, padding: '10px', borderRadius: 10,
            background: tab === 'add' ? 'white' : 'transparent',
            color: tab === 'add' ? 'var(--ie-ink)' : 'var(--ie-ink-3)',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
            boxShadow: tab === 'add' ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
            transition: 'all .15s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>{Icon.plus(16, tab === 'add' ? 'var(--ie-ink)' : 'var(--ie-ink-3)')} {T('chats_tab_add')}</button>
        </div>

        {tab === 'chats' ? (
          <>
            <div style={{
              padding: '12px 14px', marginBottom: 16,
              background: 'var(--ie-coral-tint)', borderRadius: 12,
              fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 600, lineHeight: 1.5,
            }}>
              {myInterests.length > 0
                ? T('chats_interest_note').replace('{n}', myInterests.length)
                : T('chats_interest_none')}
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{
                background: 'white', border: '1px solid var(--ie-line)',
                borderRadius: 12, padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ie-ink-4)" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
                <input
                  type="text"
                  value={chatSearch}
                  onChange={e => setChatSearch(e.target.value)}
                  placeholder={T('chats_search')}
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    fontSize: 14, background: 'transparent', fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            {myChats.length === 0 ? (
              <div style={{ padding: '60px 30px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>💬</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{T('chats_empty_title')}</div>
                <div style={{ fontSize: 13, color: 'var(--ie-ink-3)', lineHeight: 1.5, marginBottom: 20 }}>
                  {T('chats_empty_desc').split('\n').map((line, i) => <React.Fragment key={i}>{i>0 && <br/>}{line}</React.Fragment>)}
                </div>
                <button onClick={() => setTab('add')} style={{
                  padding: '12px 20px', borderRadius: 12,
                  background: 'var(--ie-coral)', color: 'white',
                  fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  {Icon.plus(16, 'white')} {T('chats_empty_cta')}
                </button>
              </div>
            ) : (
              <div>
                {myChats.map((u, i) => (
                  <ChatRow key={u.username || i} user={u} onOpenChat={onOpenChat} langCode={langCode} />
                ))}
                {myChats.length === 0 && chatSearch.trim() && (
                  <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--ie-ink-3)', fontSize: 13 }}>
                    "{chatSearch}" {T('chats_no_results')}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <AddFriendTab
            onOpenChat={onOpenChat}
            langCode={langCode}
            onFriendAdded={() => { setRevision(FRIENDS.length); setTab('chats'); }}
          />
        )}
      </div>
    </div>
  );
}

// ─── Row used in My Chats ──────────────────────
function ChatRow({ user, onOpenChat, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const country = COUNTRIES[user.country] || {};
  return (
    <button
      onClick={() => onOpenChat(user)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        width: '100%', padding: '14px', borderRadius: 14,
        textAlign: 'left', background: 'white',
        border: '1px solid var(--ie-line)',
        marginBottom: 8, cursor: 'pointer',
        transition: 'transform .12s, border-color .12s',
      }}
      onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ie-coral-soft)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ie-line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ position: 'relative' }}>
        <Avatar name={user.name} country={user.country} size={54}/>
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: 13, height: 13, borderRadius: '50%',
          background: '#4ade80', border: '2.5px solid white',
        }}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
          <div style={{ fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
            {user.name}
            <span style={{ fontSize: 12, opacity: 0.7 }}>{country.flag}</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-4)' }}>{T('chat_row_online')}</div>
        </div>
        <div style={{
          fontSize: 13, color: 'var(--ie-ink-3)',
          display: 'flex', gap: 8, alignItems: 'center',
        }}>
          <span>{countryName(user.country, langCode)}</span>
          <span>·</span>
          <span>{gradeName(user.grade, langCode)}</span>
        </div>
        {user._isFriend && (
          <div style={{
            display: 'inline-block', marginTop: 5, padding: '2px 8px', borderRadius: 999,
            background: '#dcfce7', color: '#166534', fontSize: 10, fontWeight: 700,
          }}>✓ {T('chat_row_friend')}</div>
        )}
      </div>
      <div style={{
        padding: '8px 14px', borderRadius: 10,
        background: user._isFriend ? 'var(--ie-coral)' : 'var(--ie-line-2)',
        color: user._isFriend ? 'white' : 'var(--ie-ink-2)',
        fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
      }}>{T('chat_row_start')}</div>
    </button>
  );
}

// ─── Add Friend Tab ────────────────
// Grade ordering so students mostly meet their own age group.
const GRADE_ORDER = ['elem4','elem5','elem6','mid1','mid2','mid3','high1','high2','high3','uni1','uni2','uni3','uni4'];
const gradeIndex = (g) => {
  const i = GRADE_ORDER.indexOf(g);
  return i === -1 ? 99 : i;
};

function AddFriendTab({ onOpenChat, langCode = 'ko', onFriendAdded }) {
  const T = (k) => tt(langCode, k);
  const [query, setQuery] = React.useState('');
  const [addedUsernames, setAddedUsernames] = React.useState([]);
  const [toast, setToast] = React.useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // My grade drives the ordering — same/near grades rise to the top.
  const myGrade = (typeof USER !== 'undefined' && USER.grade) ? USER.grade : null;
  const myGradeIdx = myGrade ? gradeIndex(myGrade) : null;
  // Anyone within this band of my own grade counts as "my year group"
  const NEAR = 1;

  const byGradeThenRandom = (list) => {
    const ranked = list.map((u, i) => {
      const gi = gradeIndex(u.grade);
      // distance from my grade (0 = same year). Unknown grade → large penalty
      const dist = myGradeIdx == null ? 0 : Math.abs(gi - myGradeIdx);
      return { u, dist, tie: Math.random() };
    });
    ranked.sort((a, b) => (a.dist - b.dist) || (a.tie - b.tie));
    return ranked.map(r => ({ ...r.u, _sameYear: myGradeIdx != null && r.dist <= NEAR }));
  };

  // Students from my interest countries live in "My Chats", so this tab
  // recommends everyone ELSE (every nationality, ranked by grade).
  // Searching still reaches the whole directory.
  const myInterests = (typeof USER !== 'undefined' && USER.interests_country) ? USER.interests_country : [];

  const q = query.trim().toLowerCase().replace(/^@/, '');
  const friendUsernames = new Set(FRIENDS.map(f => f.username));

  const searched = (q.length > 0
    ? USER_DIRECTORY.filter(u =>
        u.username.toLowerCase().includes(q) ||
        u.name.toLowerCase().includes(q))
    : USER_DIRECTORY.filter(u => myInterests.length === 0 || !myInterests.includes(u.country))
  ).filter(u => !friendUsernames.has(u.username));   // already added → lives in My Chats
  const results = byGradeThenRandom(searched);

  const isAlreadyFriend = (username) =>
    FRIENDS.some(f => f.username === username) || addedUsernames.includes(username);

  const addFriend = (user) => {
    // Already a friend? Skip.
    if (FRIENDS.some(f => f.username === user.username)) return;
    // Push into FRIENDS array (mutate for prototype persistence).
    // They immediately appear in "My Chats".
    FRIENDS.push({
      name: user.name,
      username: user.username,
      country: user.country,
      grade: user.grade,
      status: '온라인',
      lastMsg: '',
      unread: 0,
    });
    setAddedUsernames(prev => [...prev, user.username]);
    if (typeof bumpStat === 'function') bumpStat('friends');
    showToast(T('add_toast_added').replace('{name}', user.name));
  };

  // Add then jump straight to My Chats so the new friend is visible.
  const addAndGo = (user) => {
    addFriend(user);
    setTimeout(() => onFriendAdded && onFriendAdded(user), 700);
  };

  const exactMatch = results.find(u => u.username.toLowerCase() === q);
  const notFound = q.length >= 3 && results.length === 0;

  return (
    <div style={{ position: 'relative' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: 60, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ie-ink)', color: 'white',
          padding: '12px 20px', borderRadius: 999,
          fontSize: 14, fontWeight: 600, zIndex: 200,
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          animation: 'ie-fadeup .3s ease',
        }}>{toast}</div>
      )}

      {/* Search bar with prefix @ */}
      <div style={{
        background: 'white',
        border: '2px solid ' + (q.length > 0 ? 'var(--ie-coral)' : 'var(--ie-line)'),
        borderRadius: 14, padding: '4px 14px',
        display: 'flex', alignItems: 'center', gap: 6,
        transition: 'border-color .15s', marginBottom: 6,
      }}>
        <span style={{ color: 'var(--ie-ink-4)', fontSize: 16, fontWeight: 600 }}>@</span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value.replace(/^@/, ''))}
          placeholder={T('add_username_placeholder')}
          autoFocus
          style={{
            flex: 1, border: 'none', outline: 'none',
            padding: '14px 4px', fontSize: 15, fontWeight: 600,
            background: 'transparent', fontFamily: 'inherit',
            minWidth: 0,
          }}
        />
        {query && (
          <button onClick={() => setQuery('')} style={{
            width: 24, height: 24, borderRadius: '50%',
            background: 'var(--ie-line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>{Icon.close(14, 'var(--ie-ink-3)')}</button>
        )}
      </div>

      <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginBottom: 20, paddingLeft: 4, lineHeight: 1.6 }}>
        {T('add_hint')}<br/>
        <span style={{ color: 'var(--ie-ink-4)' }}>{T('add_recommend_note')}</span>
      </div>

      {/* Exact match highlight */}
      {exactMatch && !isAlreadyFriend(exactMatch.username) && (
        <div style={{
          background: 'var(--ie-coral-tint)', border: '1px solid var(--ie-coral-soft)',
          borderRadius: 16, padding: 16, marginBottom: 20,
          animation: 'ie-fadeup .3s ease',
        }}>
          <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 10 }}>
            {T('add_exact_match')}
          </div>
          <UserRow user={exactMatch} onAdd={() => addAndGo(exactMatch)} onOpenChat={onOpenChat} added={false} highlighted langCode={langCode}/>
        </div>
      )}

      {/* Not found */}
      {notFound && (
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{T('add_not_found_title')}</div>
          <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', lineHeight: 1.5 }}>
            {T('add_not_found_desc').replace('{q}', q)}
          </div>
        </div>
      )}

      {/* Suggestions / results list */}
      {!notFound && results.length > 0 && (
        <div>
          <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 10, textTransform: 'uppercase' }}>
            {q ? T('add_results_label') : T('add_suggested_grade')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {results.filter(u => !exactMatch || u.username !== exactMatch.username).map(user => (
              <UserRow
                key={user.username}
                user={user}
                onAdd={() => addAndGo(user)}
                onOpenChat={onOpenChat}
                added={isAlreadyFriend(user.username)}
                langCode={langCode}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Single user row in add-friend list ─────────
function UserRow({ user, onAdd, onOpenChat, added, highlighted, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const country = COUNTRIES[user.country];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: 14, borderRadius: 14,
      background: highlighted ? 'white' : 'white',
      border: '1px solid ' + (highlighted ? 'var(--ie-coral-soft)' : 'var(--ie-line)'),
    }}>
      <Avatar name={user.name} country={user.country} size={48}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
          {user.name}
          <span style={{ fontSize: 12, opacity: 0.7 }}>{country.flag}</span>
          {user._sameYear && (
            <span style={{
              fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 999,
              background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
              letterSpacing: '-0.01em',
            }}>⭐ {T('add_same_year')}</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontFamily: 'var(--font-mono)' }}>
          @{user.username}
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 4, fontSize: 11, color: 'var(--ie-ink-4)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span>{countryName(user.country, langCode)}</span>
          <span>· {gradeName(user.grade, langCode)}</span>
        </div>
        {(() => {
          const pk = user.ptype || (typeof personalityForUser === 'function' ? personalityForUser(user.username).key : null);
          const pt = pk && PERSONALITY_TYPES[pk];
          if (!pt) return null;
          const loc = (pt.i18n && (pt.i18n[langCode] || pt.i18n.en)) || {};
          const mine = (typeof USER !== 'undefined' && USER && USER.personalityType) || null;
          const isMatch = mine && PERSONALITY_MATCHES && (PERSONALITY_MATCHES[mine.key]?.good || []).includes(pk);
          const isTough = mine && PERSONALITY_MATCHES && (PERSONALITY_MATCHES[mine.key]?.tough || []).includes(pk);
          return (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              marginTop: 5, padding: '3px 9px', borderRadius: 999,
              background: isMatch ? 'var(--ie-coral-tint)' : isTough ? 'var(--ie-line-2)' : 'var(--ie-line-2)',
              border: '1px solid ' + (isMatch ? 'var(--ie-coral-soft)' : 'var(--ie-line)'),
            }}>
              <span style={{ fontSize: 12 }}>{pt.emoji}</span>
              <span style={{
                fontSize: 10, fontWeight: 700,
                color: isMatch ? 'var(--ie-coral-deep)' : 'var(--ie-ink-3)',
              }}>{loc.label || pk}</span>
              {isMatch && <span style={{ fontSize: 9, color: 'var(--ie-coral)' }}>★</span>}
            </div>
          );
        })()}
      </div>
      {added ? (
        <button onClick={() => onOpenChat({ name: user.name, username: user.username, country: user.country, status: '온라인', lastMsg: '' })} style={{
          padding: '8px 14px', borderRadius: 10,
          background: 'var(--ie-line-2)', color: 'var(--ie-ink-2)',
          fontSize: 12, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          {Icon.check(14, 'var(--ie-ink-2)')} {T('add_btn_friend')}
        </button>
      ) : (
        <button onClick={onAdd} style={{
          padding: '8px 14px', borderRadius: 10,
          background: 'var(--ie-coral)', color: 'white',
          fontSize: 12, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          {Icon.plus(14, 'white')} {T('add_btn_add')}
        </button>
      )}
    </div>
  );
}

Object.assign(window, { FriendChatScreen, FriendChatBubble, ChatsScreen, AddFriendTab, UserRow });
