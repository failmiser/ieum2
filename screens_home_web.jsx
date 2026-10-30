// 이음 - Web-optimized Home screen (replaces mobile-frame version)

function HomeScreenWeb({ onNav, onOpenFriends, onStartMatching, onStartTest, onOpenLesson, profile }) {
  const displayName = (profile && profile.name) || '친구';
  const pType = profile && profile.personalityType;
  const langCode = (profile && profile.langCode) || 'ko';
  const T = (key) => tt(langCode, key);

  return (
    <div className="ie-content" style={{ paddingBottom: 80 }}>
      {/* Greeting */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 6 }}>
          {T('home_greeting')}, {displayName} 👋
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          {T('home_headline_a')} <span style={{ color: 'var(--ie-coral)' }}>{T('home_headline_b')}</span>{T('home_headline_c')}
        </div>
      </div>

      {/* Top row: Big matching CTA + personality card */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20, marginBottom: 24 }} className="ie-home-hero">
        {/* Matching CTA */}
        <div style={{
          background: 'var(--ie-ink)', color: 'white',
          borderRadius: 24, padding: 32, position: 'relative', overflow: 'hidden',
          minHeight: 260,
        }}>
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 220, height: 220,
            borderRadius: '50%', background: 'var(--ie-coral)', opacity: 0.85,
          }}/>
          <div style={{
            position: 'absolute', top: 30, right: 60, width: 80, height: 80,
            borderRadius: '50%', background: 'var(--ie-butter)', opacity: 0.8,
          }}/>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
              display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 6,
              padding: '5px 12px', borderRadius: 999,
              background: 'rgba(255,255,255,0.12)',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.02em',
              marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'ie-blink 1.5s infinite' }}/>
              {T('home_now_online').replace('{n}', '2,847')}
            </div>

            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 10 }}>
              {T('home_ai_matching_title')}<br/>{T('home_ai_matching_title_2')}
            </div>
            <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 28, maxWidth: 380 }}>
              {T('home_ai_matching_desc')}
            </div>

            <button onClick={onStartMatching} style={{
              alignSelf: 'flex-start',
              background: 'var(--ie-coral)', color: 'white',
              padding: '14px 26px', borderRadius: 14,
              fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em',
              display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            }}>
              {T('home_start_matching')}
              {Icon.right(18, 'white')}
            </button>
          </div>
        </div>

        {/* Personality card */}
        {pType ? (
          <button onClick={onStartTest} style={{
            textAlign: 'left',
            background: 'var(--ie-coral-tint)', borderRadius: 24, padding: 24,
            border: '1px solid var(--ie-coral-soft)',
            display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer',
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20, background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 40,
            }}>{pType.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700, marginBottom: 4, letterSpacing: '0.05em' }}>
                {pType.key}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
                {pType.label[langCode] || pType.label.ko}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ie-ink-2)', lineHeight: 1.5 }}>
                {pType.desc[langCode] || pType.desc.ko}
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 700 }}>{T('home_ptype_retake')}</div>
          </button>
        ) : (
          <button onClick={onStartTest} style={{
            textAlign: 'left',
            background: 'var(--ie-coral-tint)', borderRadius: 24, padding: 24,
            border: '1px solid var(--ie-coral-soft)',
            display: 'flex', flexDirection: 'column', gap: 14, cursor: 'pointer',
            minHeight: 260, justifyContent: 'space-between',
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--ie-coral-deep)',
            }}>{Icon.sparkle(30)}</div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ie-coral-deep)', fontWeight: 700, marginBottom: 4, letterSpacing: '0.05em' }}>
                {T('home_ptype_start_label')}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 6 }}>
                {T('home_ptype_start')}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ie-ink-3)', lineHeight: 1.5 }}>
                {T('home_ptype_desc')}
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ie-coral-deep)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
              {T('home_ptype_start_cta')} {Icon.right(16, 'var(--ie-coral-deep)')}
            </div>
          </button>
        )}
      </div>

      {/* Stats row */}
      <div style={{
        background: 'white', border: '1px solid var(--ie-line)', borderRadius: 20,
        padding: 20, marginBottom: 32,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
      }}>
        <StatBlock label={T('home_stats_streak')} value={USER.streak} suffix={T('home_stats_streak_unit')} primary/>
        <StatBlock label={T('home_stats_friends')} value={FRIENDS.length} suffix={T('home_stats_friends_unit')} borderLeft borderRight/>
        <StatBlock label={T('home_stats_kits')} value={0} suffix="/10"/>
      </div>

      {/* Today's study section — show cards for interests_country if available */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' }}>{T('home_today')}</div>
        <button onClick={() => onNav('study')} style={{ fontSize: 13, color: 'var(--ie-coral)', fontWeight: 700, cursor: 'pointer' }}>
          {T('home_more')}
        </button>
      </div>
      <div className="ie-grid-3" style={{ marginBottom: 32 }}>
        {(() => {
          // Show top 3 language cards based on user's interests (if any) or default JP/FR/VN
          const interestList = (profile?.interestsCountry && profile.interestsCountry.length > 0)
            ? profile.interestsCountry
            : ['JP','FR','VN'];
          const displayList = interestList.slice(0, 3);
          return displayList.map(code => {
            const c = COUNTRIES[code];
            if (!c) return null;
            const hasLesson = LESSON_CONTENT[`${code}-1`];
            const firstLessonTitle = hasLesson ? hasLesson.title : c.lang;
            return (
              <StudyCard
                key={code}
                flag={c.flag}
                unit={1}
                unitLabel={`${T('home_unit')} 1 · ${T('home_unit_start')}`}
                title={firstLessonTitle}
                progress={0}
                cta={hasLesson ? T('home_unit_start_cta') : T('home_unit_check')}
                onClick={() => hasLesson ? (onOpenLesson && onOpenLesson(`${code}-1`)) : onNav('study')}
              />
            );
          });
        })()}
      </div>

      {/* Quick actions */}
      <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 14 }}>{T('home_quick')}</div>
      <div className="ie-grid-4" style={{ marginBottom: 32 }}>
        {[
          { icon: '💬', label: T('home_quick_chat'), desc: T('home_quick_chat_desc'), to: 'chats' },
          { icon: '🎓', label: T('home_quick_teacher'), desc: T('home_quick_teacher_desc'), to: 'study' },
          { icon: '📷', label: T('home_quick_scan'), desc: T('home_quick_scan_desc'), to: 'scan' },
          { icon: '🏆', label: T('home_quick_badges'), desc: T('home_quick_badges_desc'), to: 'store' },
        ].map((q, i) => (
          <button key={i} onClick={() => onNav(q.to)} style={{
            background: 'white', border: '1px solid var(--ie-line)',
            borderRadius: 18, padding: 20, textAlign: 'left', cursor: 'pointer',
            transition: 'transform .15s, border-color .15s',
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ie-coral)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ie-line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>{q.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>{q.label}</div>
            <div style={{ fontSize: 12, color: 'var(--ie-ink-3)' }}>{q.desc}</div>
          </button>
        ))}
      </div>

      {/* Motto footer */}
      <div style={{
        padding: '24px', textAlign: 'center', borderTop: '1px solid var(--ie-line)',
      }}>
        <IeumLogo size={22}/>
        <div style={{ fontSize: 12, color: 'var(--ie-ink-4)', marginTop: 10, lineHeight: 1.6 }}>
          {T('home_motto')}
        </div>
      </div>
    </div>
  );
}

function StatBlock({ label, value, suffix, primary, borderLeft, borderRight }) {
  return (
    <div style={{
      textAlign: 'center', padding: '4px 0',
      borderLeft: borderLeft ? '1px solid var(--ie-line)' : 'none',
      borderRight: borderRight ? '1px solid var(--ie-line)' : 'none',
    }}>
      <div style={{
        fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em',
        color: primary ? 'var(--ie-coral)' : 'var(--ie-ink)',
      }}>
        {value}<span style={{ fontSize: 14, color: 'var(--ie-ink-4)', fontWeight: 700 }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 600, marginTop: 2 }}>{label}</div>
    </div>
  );
}

function StudyCard({ flag, unit, unitLabel, title, progress, cta, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: 'white', border: '1px solid var(--ie-line)',
      borderRadius: 18, padding: 20, textAlign: 'left', cursor: 'pointer',
      transition: 'transform .15s, border-color .15s',
    }}
    onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ie-coral)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ie-line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ fontSize: 30, marginBottom: 10 }}>{flag}</div>
      <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600, marginBottom: 3 }}>{unitLabel || `UNIT ${unit}`}</div>
      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, letterSpacing: '-0.02em' }}>{title}</div>
      <div style={{ height: 6, background: 'var(--ie-line-2)', borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ width: `${progress}%`, height: '100%', background: 'var(--ie-coral)' }}/>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ie-coral)', fontWeight: 700 }}>{cta} →</div>
    </button>
  );
}

Object.assign(window, { HomeScreenWeb });
