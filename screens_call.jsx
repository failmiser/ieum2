// 이음 - Video Call, Match Result, Friends drawer

// ─── Match Result (shown after loading) ─────────────
function MatchResult({ match, onAccept, onSkip, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const country = COUNTRIES[match.country];
  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      background: 'var(--ie-ink)', color: 'white',
      padding: '60px 24px 30px', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* bg glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(46,107,255,0.35), transparent 60%)',
      }}/>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 12px', borderRadius: 999,
          background: 'rgba(46,107,255,0.2)',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#7FA9FF',
          marginBottom: 16,
        }}>{T('match_success_label')}</div>

        <div style={{ fontSize: 20, fontWeight: 700, opacity: 0.7, marginBottom: 30 }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: 'var(--ie-coral)' }}>{match.match}%</span>
          <span style={{ fontSize: 14, opacity: 0.6 }}>{T('match_percent_suffix')}</span>
        </div>

        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
          <Avatar name={match.name} country={match.country} size={140} style={{ border: '4px solid rgba(255,255,255,0.1)' }}/>
        </div>

        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 4 }}>{match.name}</div>
        <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 24 }}>
          {country.flag} {countryName(match.country, langCode)} · {gradeName(match.grade, langCode)}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: 16,
          marginBottom: 24, textAlign: 'left',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 13, opacity: 0.6 }}>{T('match_row_lang')}</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>{country.lang}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <span style={{ fontSize: 13, opacity: 0.6 }}>{T('match_row_common')}</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>{match.hobbies.join(' · ')}</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: 12, width: '100%', position: 'relative', zIndex: 1 }}>
        <button onClick={onSkip} style={{
          flex: 1, padding: '16px', borderRadius: 16,
          background: 'rgba(255,255,255,0.08)', color: 'white',
          fontSize: 15, fontWeight: 700,
        }}>{T('match_retry')}</button>
        <button onClick={onAccept} style={{
          flex: 2, padding: '16px', borderRadius: 16,
          background: 'var(--ie-coral)', color: 'white',
          fontSize: 15, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {Icon.video(20)} {T('match_call')}
        </button>
      </div>
    </div>
  );
}

// ─── Video Call (Omegle style) with real AI chat ─────
function VideoCallScreen({ match, onEnd, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [duration, setDuration] = React.useState(0);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: 'them', text: `こんにちは！はじめまして 😊`, translation: '안녕하세요! 처음 뵙겠습니다', time: '방금' },
  ]);
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const [subtitle, setSubtitle] = React.useState(null);
  const country = COUNTRIES[match.country];
  const scrollRef = React.useRef(null);

  // Timer
  React.useEffect(() => {
    const t = setInterval(() => setDuration(d => d + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Auto-scroll chat to bottom on new message
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Show latest their-message as subtitle (auto-hide after 5s)
  React.useEffect(() => {
    const last = messages[messages.length - 1];
    if (last && last.from === 'them') {
      setSubtitle(last);
      const t = setTimeout(() => setSubtitle(null), 6000);
      return () => clearTimeout(t);
    }
  }, [messages]);

  const mm = String(Math.floor(duration/60)).padStart(2,'0');
  const ss = String(duration%60).padStart(2,'0');

  // Send user message and get AI reply
  const sendMessage = async () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput('');
    const userMsg = { from: 'me', text, time: '방금' };
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);
    if (typeof bumpStat === 'function') { bumpStat('messages'); bumpStat('chats'); }

    // Build persona context for AI — natural, contextual conversation
    const meName = (typeof USER !== 'undefined' && USER.name) ? USER.name : '친구';
    const persona = `너는 "${match.name}"이라는 ${country.name} 청소년이야. 관심사는 ${match.hobbies.join(', ')}. 지금 친구 "${meName}"와 이음(Ieum) 앱에서 화상통화 중이고, ${meName}는 너희 나라 문화와 언어를 배우고 싶어해.

대화 규칙:
1. 너는 ${country.lang} 원어민이라 자기 모국어로 자연스럽게 말해. 한국어는 몰라.
2. 실제 청소년처럼 말해 — 짧고 편하게, 반말/캐주얼하게, 이모지도 가끔 써.
3. 상대방이 방금 한 말에 **반드시 이어서 반응해**. 새로운 주제로 갑자기 튀지 마. 상대가 물어보면 답하고, 상대 답변에 궁금해하고, 자연스러운 후속 질문을 던져.
4. 한 번에 1-2문장만. 길게 늘어놓지 마.
5. 대화 흐름을 기억해. 이미 했던 얘기 반복하지 마.
6. 가끔은 너희 나라 얘기(음식, 학교, 문화)를 자연스럽게 꺼내도 좋아. ${meName}가 배우려고 하니까.

출력은 반드시 이 JSON 오브젝트만 (다른 텍스트 절대 금지):
{"native": "너의 모국어 답변", "korean": "그 답변의 자연스러운 한국어 번역"}`;

    // Full conversation history for context (last 12 messages)
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
        from: 'them',
        text: '...',
        translation: '(연결에 문제가 생겼어요)',
        time: '방금',
      }]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div style={{
      height: '100%', position: 'relative', overflow: 'hidden',
      background: `linear-gradient(160deg, ${country.color}, ${country.ink})`,
    }}>
      {/* Remote video "faux" */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 40% 30%, ${country.color}, ${country.ink} 80%)`,
      }}/>
      <div style={{
        position: 'absolute', top: '22%', left: '50%', transform: 'translateX(-50%)',
        width: 180, height: 180, borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 100, fontWeight: 800, color: 'white',
      }}>{match.name[0]}</div>

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, padding: '52px 16px 12px',
        display: 'flex', alignItems: 'center', gap: 10, zIndex: 5,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.4), transparent)',
      }}>
        <button onClick={onEnd} style={{
          width: 36, height: 36, borderRadius: 12,
          background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.back(20, 'white')}</button>
        <div style={{ flex: 1, color: 'white' }}>
          <div style={{ fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
            {match.name}
            <span style={{ fontSize: 12, opacity: 0.7 }}>{country.flag}</span>
          </div>
          <div className="ie-mono" style={{ fontSize: 11, opacity: 0.8 }}>{mm}:{ss}</div>
        </div>
        <div style={{
          padding: '6px 10px', borderRadius: 999,
          background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(10px)',
          color: 'white', fontSize: 11, fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff4d4d' }}/>
          LIVE
        </div>
      </div>

      {/* Self view (small pip) */}
      <div style={{
        position: 'absolute', top: 100, right: 16,
        width: 100, height: 140, borderRadius: 16, overflow: 'hidden',
        background: 'var(--ie-ink)',
        border: '2px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)', zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: 'var(--ie-coral)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 24,
        }}>김</div>
        <div style={{
          position: 'absolute', bottom: 6, left: 6, right: 6,
          fontSize: 10, color: 'white', textAlign: 'center', fontWeight: 600,
          textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        }}>{T('call_me')}</div>
      </div>

      {/* Real-time translation subtitle (fades in/out) */}
      {subtitle && !chatOpen && (
        <div style={{
          position: 'absolute', bottom: 140, left: 16, right: 16,
          zIndex: 5, animation: 'ie-fadeup .3s ease',
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)',
            borderRadius: 18, padding: '14px 16px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ color: 'var(--ie-coral)' }}>{Icon.translate(14)}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em' }}>
                {T('call_translate_realtime')} · {country.lang}
              </div>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 4, fontStyle: 'italic' }}>
              "{subtitle.text}"
            </div>
            <div style={{ color: 'white', fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em' }}>
              {subtitle.translation || subtitle.text}
            </div>
          </div>
        </div>
      )}

      {/* Bottom control bar */}
      <div style={{
        position: 'absolute', bottom: 30, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 14, zIndex: 5,
      }}>
        {[
          { icon: Icon.mic(22, 'white'), bg: 'rgba(255,255,255,0.15)' },
          { icon: Icon.camera(22, 'white'), bg: 'rgba(255,255,255,0.15)' },
          { icon: Icon.translate(22, 'white'), bg: 'var(--ie-coral)' },
          { icon: Icon.chat(22, 'white'), bg: chatOpen ? 'var(--ie-coral)' : 'rgba(255,255,255,0.15)', onClick: () => setChatOpen(!chatOpen), badge: messages.length > 1 && !chatOpen ? messages.length : null },
          { icon: Icon.hangup(22, 'white'), bg: '#e63946', onClick: onEnd },
        ].map((b, i) => (
          <button key={i} onClick={b.onClick} style={{
            position: 'relative',
            width: 52, height: 52, borderRadius: '50%',
            background: b.bg, backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            transition: 'background .2s',
          }}>
            {b.icon}
            {b.badge && (
              <div style={{
                position: 'absolute', top: -2, right: -2,
                minWidth: 18, height: 18, borderRadius: 9,
                background: 'var(--ie-coral)', color: 'white',
                fontSize: 10, fontWeight: 700, padding: '0 5px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid rgba(0,0,0,0.5)',
              }}>{b.badge}</div>
            )}
          </button>
        ))}
      </div>

      {/* Chat panel — slides up from bottom when open */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '68%',
        background: 'rgba(20, 18, 16, 0.92)',
        backdropFilter: 'blur(24px)',
        borderRadius: '24px 24px 0 0',
        border: '1px solid rgba(255,255,255,0.1)',
        transform: chatOpen ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform .3s cubic-bezier(0.32, 0.72, 0, 1)',
        zIndex: 10, display: 'flex', flexDirection: 'column',
      }}>
        {/* Drag handle + header */}
        <div style={{ padding: '10px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{
            width: 40, height: 4, borderRadius: 2,
            background: 'rgba(255,255,255,0.25)', margin: '0 auto 10px',
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar name={match.name} country={match.country} size={32}/>
              <div>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>{match.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80' }}/>
                  {T('call_chat_translate')}
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} style={{
              width: 30, height: 30, borderRadius: 10,
              background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.close(16, 'white')}</button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} style={{
          flex: 1, overflowY: 'auto', padding: '14px 14px 6px',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {messages.map((m, i) => (
            <ChatBubble key={i} msg={m} country={country}/>
          ))}
          {typing && (
            <div style={{
              alignSelf: 'flex-start', display: 'flex', gap: 4,
              background: 'rgba(255,255,255,0.08)', padding: '10px 14px',
              borderRadius: 16,
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.6)',
                  animation: `ie-typing 1.2s ${i*0.15}s infinite`,
                }}/>
              ))}
            </div>
          )}
        </div>

        {/* Suggestion chips */}
        {messages.length <= 2 && !typing && (
          <div style={{ padding: '4px 14px 8px', display: 'flex', gap: 6, overflowX: 'auto' }} className="ie-noscroll">
            {[
              '안녕! 반가워 😊',
              '어디 살아?',
              '너희 나라 음식 추천해줘',
              'K-Pop 좋아해?',
            ].map(s => (
              <button key={s} onClick={() => setInput(s)} style={{
                whiteSpace: 'nowrap', padding: '7px 12px', borderRadius: 999,
                background: 'rgba(255,255,255,0.1)', color: 'white',
                fontSize: 12, fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>{s}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{
          padding: '10px 12px 22px', display: 'flex', gap: 8, alignItems: 'flex-end',
          borderTop: '1px solid rgba(255,255,255,0.08)',
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
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 14, padding: '10px 14px',
              color: 'white', fontSize: 14, fontFamily: 'inherit',
              outline: 'none',
            }}
          />
          <button onClick={sendMessage} disabled={!input.trim() || typing} style={{
            width: 40, height: 40, borderRadius: 14,
            background: input.trim() && !typing ? 'var(--ie-coral)' : 'rgba(255,255,255,0.1)',
            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .15s',
            cursor: input.trim() && !typing ? 'pointer' : 'default',
          }}>{Icon.send(18, 'white')}</button>
        </div>
      </div>

      <style>{`
        @keyframes ie-typing {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}

// ─── Chat bubble ──────────────────────────────────
function ChatBubble({ msg, country }) {
  const mine = msg.from === 'me';
  return (
    <div style={{
      alignSelf: mine ? 'flex-end' : 'flex-start',
      maxWidth: '82%',
      display: 'flex', flexDirection: 'column', gap: 2,
      animation: 'ie-fadeup .25s ease',
    }}>
      <div style={{
        padding: '10px 14px', borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        background: mine ? 'var(--ie-coral)' : 'rgba(255,255,255,0.1)',
        color: 'white', fontSize: 14, lineHeight: 1.4,
        border: mine ? 'none' : '1px solid rgba(255,255,255,0.06)',
        wordBreak: 'break-word',
      }}>{msg.text}</div>
      {!mine && msg.translation && (
        <div style={{
          padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,0.55)',
          display: 'flex', gap: 5, alignItems: 'center', lineHeight: 1.4,
        }}>
          <span style={{ color: 'var(--ie-coral)', opacity: 0.7 }}>↳</span>
          <span>{msg.translation}</span>
        </div>
      )}
    </div>
  );
}

// ─── Friends drawer (slides in from RIGHT, viewport-fixed) ────────
function FriendsDrawer({ open, onClose, onSelect, onStartMatch, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.4)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .3s', zIndex: 100,
      }}/>
      {/* Panel from right — viewport-fixed */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 360, maxWidth: '90vw',
        background: 'var(--ie-bg)',
        transform: open ? 'translateX(0)' : 'translateX(105%)',
        transition: 'transform .3s cubic-bezier(0.32, 0.72, 0, 1)',
        zIndex: 101, display: 'flex', flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
      }}>
        {/* Header */}
        <div style={{ padding: '24px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.02em' }}>{T('drawer_label')}</div>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em' }}>{T('drawer_title')} <span style={{ color: 'var(--ie-ink-3)' }}>· {FRIENDS.length}</span></div>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 12,
            background: 'white', border: '1px solid var(--ie-line)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.close(20)}</button>
        </div>

        {/* Search */}
        <div style={{ padding: '0 20px 14px' }}>
          <div style={{
            background: 'white', border: '1px solid var(--ie-line)',
            borderRadius: 12, padding: '10px 14px', fontSize: 13,
            color: 'var(--ie-ink-4)',
          }}>{T('drawer_search')}</div>
        </div>

        {/* Tabs */}
        <div style={{ padding: '0 20px 14px', display: 'flex', gap: 6 }}>
          {[T('drawer_tab_all'), T('drawer_tab_online'), T('drawer_tab_recent')].map((t, i) => (
            <button key={t} style={{
              padding: '6px 12px', borderRadius: 999,
              background: i === 0 ? 'var(--ie-ink)' : 'transparent',
              color: i === 0 ? 'white' : 'var(--ie-ink-3)',
              fontSize: 12, fontWeight: 600,
              border: i === 0 ? 'none' : '1px solid var(--ie-line)',
            }}>{t}</button>
          ))}
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px' }}>
          {FRIENDS.length === 0 && (
            <div style={{ padding: '36px 16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>👋</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{T('drawer_empty_title')}</div>
              <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', lineHeight: 1.6 }}>
                {T('drawer_empty_desc')}
              </div>
            </div>
          )}
          {FRIENDS.map((f, i) => (
            <div key={i} onClick={() => onSelect && onSelect(f)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: 12, borderRadius: 14, cursor: 'pointer',
            }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ position: 'relative' }}>
                <Avatar name={f.name} country={f.country} size={46}/>
                {f.status === '온라인' && (
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 12, height: 12, borderRadius: '50%',
                    background: '#4ade80', border: '2px solid var(--ie-bg)',
                  }}/>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{f.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--ie-ink-4)' }}>{f.status}</div>
                </div>
                <div style={{
                  fontSize: 12, color: 'var(--ie-ink-3)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{f.lastMsg}</div>
              </div>
              {f.unread > 0 && (
                <div style={{
                  minWidth: 20, height: 20, borderRadius: 10,
                  background: 'var(--ie-coral)', color: 'white',
                  fontSize: 11, fontWeight: 700, padding: '0 6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{f.unread}</div>
              )}
            </div>
          ))}

          {/* Add friend button */}
          <button onClick={() => { onClose(); onStartMatch && onStartMatch(); }} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 12, borderRadius: 14, width: '100%',
            color: 'var(--ie-coral)', fontSize: 14, fontWeight: 700,
            cursor: 'pointer',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 23,
              border: '2px dashed var(--ie-coral-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ie-coral)',
            }}>{Icon.plus(22)}</div>
            {T('drawer_add')}
          </button>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { MatchResult, VideoCallScreen, FriendsDrawer, ChatBubble });
