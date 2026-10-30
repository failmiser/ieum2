// 이음 - Home, Personality Test, Matching Loading screens

function HomeScreen({ onNav, onOpenFriends, onStartMatching, onStartTest, onOpenLesson, profile }) {
  const displayName = (profile && profile.name) || USER.name;
  const pType = profile && profile.personalityType;
  const langCode = (profile && profile.langCode) || 'ko';
  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ padding: '58px 20px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <IeumLogo size={24} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onOpenFriends} style={{
            padding: '8px 12px', background: 'var(--ie-line-2)', borderRadius: 999,
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
          }}>
            {Icon.chat(16)} 친구
            <span style={{
              minWidth: 18, height: 18, borderRadius: 9, background: 'var(--ie-coral)',
              color: 'white', fontSize: 11, fontWeight: 700, display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: '0 5px',
            }}>{FRIENDS.filter(f => f.unread).length || 0}</span>
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div style={{ padding: '12px 20px 20px' }}>
        <div style={{ fontSize: 13, color: 'var(--ie-ink-3)', marginBottom: 4 }}>안녕하세요, {displayName}님 👋</div>
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25 }}>
          오늘은 어떤 나라의<br/>
          <span style={{ color: 'var(--ie-coral)' }}>친구</span>를 만나볼까요?
        </div>
      </div>

      {/* Main matching CTA card */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          background: 'var(--ie-ink)', color: 'white',
          borderRadius: 24, padding: 22, position: 'relative', overflow: 'hidden',
        }}>
          {/* decorative orbs */}
          <div style={{
            position: 'absolute', top: -30, right: -30, width: 160, height: 160,
            borderRadius: '50%', background: 'var(--ie-coral)', opacity: 0.85,
          }}/>
          <div style={{
            position: 'absolute', top: 20, right: 40, width: 60, height: 60,
            borderRadius: '50%', background: 'var(--ie-butter)', opacity: 0.8,
          }}/>

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 999,
              background: 'rgba(255,255,255,0.12)',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
              marginBottom: 12,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'ie-blink 1.5s infinite' }}/>
              <span>지금 2,847명 접속중</span>
            </div>

            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 6 }}>
              AI가 나와 잘 맞는<br/>친구를 찾아드려요
            </div>
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 20, maxWidth: 220 }}>
              성격 · 관심사 기반 매칭으로<br/>더 빠르게 가까워져요
            </div>

            <button onClick={onStartMatching} style={{
              background: 'var(--ie-coral)', color: 'white',
              padding: '14px 24px', borderRadius: 14,
              fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              매칭 시작하기
              {Icon.right(18)}
            </button>
          </div>
        </div>
      </div>

      {/* Personality result card */}
      <div style={{ padding: '0 16px 16px' }}>
        {pType ? (
          <button onClick={onStartTest} style={{
            width: '100%', textAlign: 'left',
            background: 'var(--ie-coral-tint)', borderRadius: 20, padding: 18,
            border: '1px solid var(--ie-coral-soft)',
            display: 'flex', gap: 14, alignItems: 'center',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 16, background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 30,
            }}>{pType.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700, marginBottom: 2, letterSpacing: '0.05em' }}>
                {pType.key}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ie-ink)', letterSpacing: '-0.02em' }}>
                {pType.label[langCode] || pType.label.ko}
              </div>
              <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', marginTop: 2, lineHeight: 1.4 }}>
                {(pType.desc[langCode] || pType.desc.ko).slice(0, 30)}...
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700 }}>재검사 ›</div>
          </button>
        ) : (
          <button onClick={onStartTest} style={{
            width: '100%', textAlign: 'left',
            background: 'var(--ie-coral-tint)', borderRadius: 20, padding: 18,
            border: '1px solid var(--ie-coral-soft)',
            display: 'flex', gap: 14, alignItems: 'center',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ie-coral-deep)',
            }}>{Icon.sparkle(26)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700, marginBottom: 2, letterSpacing: '0.02em' }}>
                시작하기
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ie-ink)' }}>
                성격 테스트 하러가기
              </div>
              <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', marginTop: 2 }}>
                더 잘 맞는 친구를 찾을 수 있어요
              </div>
            </div>
            {Icon.right(20, 'var(--ie-coral-deep)')}
          </button>
        )}
      </div>

      {/* Today's language study */}
      <div style={{ padding: '4px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em' }}>오늘의 학습</div>
        <button onClick={() => onNav('study')} style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 600 }}>더보기 ›</button>
      </div>
      <div style={{ padding: '0 16px 20px', display: 'flex', gap: 10, overflowX: 'auto' }} className="ie-noscroll">
        <button onClick={() => onOpenLesson && onOpenLesson('JP-1')} style={{
          minWidth: 200, background: 'white', borderRadius: 18, padding: 16,
          border: '1px solid var(--ie-line)', textAlign: 'left', cursor: 'pointer',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>🇯🇵</div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600, marginBottom: 2 }}>UNIT 1 · 시작 전</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>인사와 자기소개</div>
          <div style={{ height: 6, background: 'var(--ie-line-2)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: '0%', height: '100%', background: 'var(--ie-coral)' }}/>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ie-coral)', marginTop: 6, fontWeight: 700 }}>레슨 시작하기 →</div>
        </button>
        <button onClick={() => onNav('study')} style={{
          minWidth: 200, background: 'white', borderRadius: 18, padding: 16,
          border: '1px solid var(--ie-line)', textAlign: 'left', cursor: 'pointer',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>🇫🇷</div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600, marginBottom: 2 }}>준비 중</div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Bonjour, 인사하기</div>
          <div style={{ height: 6, background: 'var(--ie-line-2)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: '0%', height: '100%', background: 'var(--ie-coral)' }}/>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', marginTop: 6 }}>학습에서 확인 →</div>
        </button>
      </div>

      {/* Streak & stats — fresh account, all zero */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          background: 'white', border: '1px solid var(--ie-line)', borderRadius: 20,
          padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
        }}>
          <div style={{ textAlign: 'center', padding: '4px 0' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ie-ink-3)' }}>0</div>
            <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600 }}>연속 학습</div>
          </div>
          <div style={{ textAlign: 'center', padding: '4px 0', borderLeft: '1px solid var(--ie-line)', borderRight: '1px solid var(--ie-line)' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ie-ink-3)' }}>{FRIENDS.length}</div>
            <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600 }}>친구 수</div>
          </div>
          <div style={{ textAlign: 'center', padding: '4px 0' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ie-ink-3)' }}>0<span style={{ fontSize: 12, color: 'var(--ie-ink-4)' }}>/10</span></div>
            <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600 }}>수집한 키트</div>
          </div>
        </div>
      </div>

      {/* Motto */}
      <div style={{ padding: '20px 24px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: 'var(--ie-ink-4)', fontWeight: 600, letterSpacing: '0.02em', lineHeight: 1.5 }}>
          청소년의 국제교류 기회 확대를 위한<br/>
          AI 기반 국제교류 플랫폼
        </div>
      </div>
    </div>
  );
}

// ─── Personality Test v2 — 10 questions × 4 choices ─────
function PersonalityTest({ onClose, onFinish, langCode = 'ko', userName = '' }) {
  const BASE = (typeof PERSONALITY_QUESTIONS_V2 !== 'undefined') ? PERSONALITY_QUESTIONS_V2 : PERSONALITY_QUESTIONS;
  // Shuffle question order + option order ONCE per session.
  // Each shuffled option keeps `_origQ` / `_origO` so scoring stays canonical.
  const QUESTIONS = React.useMemo(() => {
    const shuf = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    return shuf(BASE.map((q, origQ) => ({ q, origQ }))).map(({ q, origQ }) => {
      if (!q.options) return { ...q, _origQ: origQ };
      const withIdx = q.options.map((o, oi) => ({ ...o, _origQ: origQ, _origO: oi }));
      return { ...q, options: shuf(withIdx), _origQ: origQ };
    });
  }, []);
  const [idx, setIdx] = React.useState(0);
  const [picks, setPicks] = React.useState([]);  // array of { origQ, origO }
  const [result, setResult] = React.useState(null);
  const t = UI_STRINGS[langCode] || UI_STRINGS.ko;
  const q = QUESTIONS[idx];
  const total = QUESTIONS.length;

  // Build the choice list — supports both the new 4-option and legacy a/b format
  const choices = q.options
    ? q.options.map((o) => ({ key: o.text[langCode] || o.text.ko, origQ: o._origQ, origO: o._origO }))
    : [
        { key: q.a[langCode] || q.a.ko, origQ: q._origQ != null ? q._origQ : idx, origO: 0 },
        { key: q.b[langCode] || q.b.ko, origQ: q._origQ != null ? q._origQ : idx, origO: 1 },
      ];

  const answer = (choiceIdx) => {
    const chosen = choices[choiceIdx];
    const na = [...picks, { origQ: chosen.origQ, origO: chosen.origO }];
    setPicks(na);
    if (idx < total - 1) {
      setTimeout(() => setIdx(idx + 1), 200);
    } else {
      // compute result — with safety fallback
      setTimeout(() => {
        let type;
        try {
          type = computePersonality(na);
        } catch (e) {
          console.error('computePersonality failed:', e);
        }
        // Fallback: pick first personality type if compute failed
        if (!type) {
          const keys = Object.keys(PERSONALITY_TYPES);
          type = PERSONALITY_TYPES[keys[0]];
        }
        setResult(type);
      }, 400);
    }
  };

  // Result screen — fun reveal
  if (result) {
    const matches = (typeof PERSONALITY_MATCHES !== 'undefined' && PERSONALITY_MATCHES[result.key]) || { good: [], tough: [] };
    const i18n = result.i18n || {};
    const loc = i18n[langCode] || i18n.en || i18n.ko || {};
    const tagline = loc.tagline || '';
    const charm = loc.charm || [];
    const warning = loc.warning || '';
    const label = loc.label || result.label?.[langCode] || result.label?.en || result.key;
    const desc = loc.desc || result.desc?.[langCode] || '';

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(180deg, var(--ie-coral-tint) 0%, var(--ie-bg) 520px)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 60px', width: '100%', boxSizing: 'border-box' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 700, letterSpacing: '0.15em' }}>
              {t.result_title}
            </div>
          </div>

          {/* Big emoji badge */}
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{
              width: 170, height: 170, borderRadius: '50%',
              background: 'white',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 88,
              border: '4px solid var(--ie-coral-soft)',
              boxShadow: '0 24px 70px rgba(46,107,255,0.22)',
              animation: 'ie-fadeup .6s ease',
            }}>{result.emoji}</div>
          </div>

          {/* Type name */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--ie-coral-deep)', letterSpacing: '0.15em', marginBottom: 6 }}>
              {result.key}
            </div>
            <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1.1 }}>
              {label}
            </div>
            {tagline && (
              <div style={{
                display: 'inline-block', padding: '8px 18px', marginBottom: 18,
                background: 'var(--ie-coral)', color: 'white',
                borderRadius: 999, fontSize: 14, fontWeight: 700,
                boxShadow: '0 8px 24px rgba(46,107,255,0.3)',
              }}>“{tagline}”</div>
            )}
            <div style={{ fontSize: 17, color: 'var(--ie-ink-2)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
              {desc}
            </div>
          </div>

          {/* Charm points */}
          {charm.length > 0 && (
            <div style={{
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 22, padding: 24, marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>✨</div>
                <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {langCode === 'en' ? 'Your charm points' : '나의 매력 포인트'}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {charm.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 12, alignItems: 'center',
                    padding: '12px 14px', background: 'var(--ie-line-2)', borderRadius: 12,
                  }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: '50%',
                      background: 'var(--ie-coral)', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 800, flexShrink: 0,
                    }}>{i + 1}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{c}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Watch out */}
          {warning && (
            <div style={{
              background: 'var(--ie-butter)', border: 'none',
              borderRadius: 18, padding: 18, marginBottom: 16,
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <div style={{ fontSize: 22, flexShrink: 0 }}>💡</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#8a6d00', letterSpacing: '0.05em', marginBottom: 4 }}>
                  {langCode === 'en' ? 'ONE THING TO NOTE' : '살짝 알아두면 좋은 점'}
                </div>
                <div style={{ fontSize: 14, color: '#5c4a00', fontWeight: 600, lineHeight: 1.5 }}>{warning}</div>
              </div>
            </div>
          )}

          {/* Compatibility */}
          {matches.good.length > 0 && (
            <div style={{
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 22, padding: 24, marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>💫</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em' }}>BEST MATCH</div>
                  <div style={{ fontSize: 16, fontWeight: 800 }}>
                    {langCode === 'en' ? 'You click with' : '나와 찰떡인 성격'}
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}>
                {matches.good.map(key => {
                  const m = PERSONALITY_TYPES[key];
                  if (!m) return null;
                  const mLoc = (m.i18n && (m.i18n[langCode] || m.i18n.en)) || {};
                  return (
                    <div key={key} style={{
                      padding: 14, background: 'var(--ie-coral-tint)',
                      borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12,
                    }}>
                      <div style={{ fontSize: 32 }}>{m.emoji}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em' }}>
                          {mLoc.label || m.label?.[langCode] || key}
                        </div>
                        {mLoc.tagline && (
                          <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 600, marginTop: 2 }}>
                            {mLoc.tagline}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tough match */}
          {matches.tough && matches.tough.length > 0 && (
            <div style={{
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 22, padding: 20, marginBottom: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ fontSize: 20 }}>🌗</div>
                <div style={{ fontSize: 14, fontWeight: 800 }}>
                  {langCode === 'en' ? 'A little tricky with' : '조금 노력이 필요한 성격'}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {matches.tough.map(key => {
                  const m = PERSONALITY_TYPES[key];
                  if (!m) return null;
                  const mLoc = (m.i18n && (m.i18n[langCode] || m.i18n.en)) || {};
                  return (
                    <div key={key} style={{
                      padding: '8px 14px', background: 'var(--ie-line-2)',
                      borderRadius: 999, fontSize: 13, fontWeight: 700,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <span>{m.emoji}</span>{mLoc.label || m.label?.[langCode] || key}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => onFinish(result)}
            style={{
              width: '100%', padding: '18px', borderRadius: 16,
              background: 'var(--ie-coral)', color: 'white',
              fontSize: 16, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              cursor: 'pointer', border: 'none',
              boxShadow: '0 12px 32px rgba(46,107,255,0.3)',
            }}
          >
            {t.start_matching}
            {Icon.right(20, 'white')}
          </button>
        </div>
      </div>
    );
  }

  // Question screen
  const qText = q.text[langCode] || q.text.ko;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--ie-bg)' }}>
      {/* Header */}
      <div style={{
        padding: '24px 24px 16px', display: 'flex', alignItems: 'center', gap: 16,
        maxWidth: 720, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        <button onClick={onClose} style={{
          width: 40, height: 40, borderRadius: 12, background: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid var(--ie-line)', cursor: 'pointer',
        }}>{Icon.close(20)}</button>
        <div style={{ flex: 1, height: 10, background: 'var(--ie-line-2)', borderRadius: 5, overflow: 'hidden' }}>
          <div style={{ width: `${((idx+1)/total)*100}%`, height: '100%', background: 'var(--ie-coral)', transition: 'width .3s' }}/>
        </div>
        <div className="ie-mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--ie-ink-3)' }}>
          {idx+1}/{total}
        </div>
      </div>

      {/* Question */}
      <div style={{
        flex: 1, padding: '40px 24px 60px',
        maxWidth: 720, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ fontSize: 12, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 14 }}>
          {(t.question || 'QUESTION').toUpperCase()} {String(idx+1).padStart(2, '0')}
        </div>
        <div key={idx} style={{
          fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.3,
          marginBottom: 40, animation: 'ie-fadeup .3s ease',
        }}>{qText}</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {choices.map((c, i) => {
            const label = String.fromCharCode(65 + i);
            const isFirst = i === 0;
            return (
              <button key={i} onClick={() => answer(i)} style={{
                padding: 18, background: 'white', border: '2px solid var(--ie-line)',
                borderRadius: 18, textAlign: 'left', display: 'flex', gap: 14, alignItems: 'center',
                transition: 'all .15s', cursor: 'pointer',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ie-coral)'; e.currentTarget.style.background = 'var(--ie-coral-tint)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ie-line)'; e.currentTarget.style.background = 'white'; }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 12,
                  background: isFirst ? 'var(--ie-coral-tint)' : 'var(--ie-line-2)',
                  color: isFirst ? 'var(--ie-coral-deep)' : 'var(--ie-ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 16, flexShrink: 0,
                }}>{label}</div>
                <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.4 }}>{c.key}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Matching Loading ─────────────────────────────
function MatchingLoading({ onCancel, onMatched, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [step, setStep] = React.useState(0);
  const steps = [
    T('loading_step1'),
    T('loading_step2'),
    T('loading_step3'),
    T('loading_step4'),
  ];

  React.useEffect(() => {
    if (step < steps.length - 1) {
      const t = setTimeout(() => setStep(step + 1), 1400);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => onMatched(), 1500);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      background: 'var(--ie-ink)', color: 'white',
      alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative',
    }}>
      <button onClick={onCancel} style={{
        position: 'absolute', top: 60, left: 20,
        width: 36, height: 36, borderRadius: 12,
        background: 'rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{Icon.close(20, 'white')}</button>

      {/* Rotating globe */}
      <div style={{ position: 'relative', width: 220, height: 220, marginBottom: 40 }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(46,107,255,0.4), transparent 70%)',
          animation: 'ie-pulse 2s ease-in-out infinite',
        }}/>
        <div style={{
          position: 'absolute', inset: 30, borderRadius: '50%',
          border: '2px dashed rgba(255,255,255,0.15)',
          animation: 'ie-rotate 20s linear infinite',
        }}/>
        <div style={{
          position: 'absolute', inset: 55, borderRadius: '50%',
          background: 'linear-gradient(135deg, #2E6BFF, #1A4FD8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(46,107,255,0.4)',
        }}>
          <div style={{ animation: 'ie-rotate 8s linear infinite' }}>
            {Icon.globe(60, 'white')}
          </div>
        </div>
        {/* Orbiting dots (country flags) */}
        {['🇯🇵','🇺🇸','🇫🇷','🇻🇳'].map((f, i) => {
          const angle = (i * 90);
          return (
            <div key={i} style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 40, height: 40,
              transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg) translate(-50%, -50%)`,
              transformOrigin: '0 0',
              animation: `ie-rotate 12s linear infinite`,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%', background: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              }}>{f}</div>
            </div>
          );
        })}
      </div>

      <div style={{
        fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em',
        fontWeight: 700, marginBottom: 10, fontFamily: 'var(--font-mono)',
      }}>{T('loading_ai')}</div>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
        {steps[step]}
      </div>

      <div style={{ width: '100%', maxWidth: 280 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 4px',
            opacity: i <= step ? 1 : 0.3,
            transition: 'opacity .3s',
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: i < step ? 'var(--ie-coral)' : (i === step ? 'rgba(46,107,255,0.3)' : 'rgba(255,255,255,0.1)'),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: i === step ? '2px solid var(--ie-coral)' : 'none',
              animation: i === step ? 'ie-pulse 1.2s ease-in-out infinite' : 'none',
            }}>
              {i < step && Icon.check(14, 'white')}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, PersonalityTest, MatchingLoading });
