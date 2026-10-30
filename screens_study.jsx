// 이음 - Study (Teacher + AI Self-study)

function StudyScreen({ onOpenTeachers, onOpenSelfStudy, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  return (
    <div style={{ paddingBottom: 100 }}>
      <ScreenHeader title={T('study_title')} subtitle={T('study_subtitle')} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ padding: '0 0 20px', fontSize: 14, color: 'var(--ie-ink-3)', letterSpacing: '-0.02em', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
          {T('study_desc')}
        </div>

        {/* Two big options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Teacher */}
          <button onClick={onOpenTeachers} style={{
            background: 'var(--ie-ink)', color: 'white', textAlign: 'left',
            borderRadius: 22, padding: 22, position: 'relative', overflow: 'hidden',
            border: 'none', cursor: 'pointer',
          }}>
            <div style={{
              position: 'absolute', top: -20, right: -20, width: 130, height: 130,
              borderRadius: '50%', background: 'var(--ie-coral)', opacity: 0.85,
            }}/>
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: 10, letterSpacing: '0.1em', opacity: 0.6, fontWeight: 700, marginBottom: 6,
              }}>{T('study_teacher_label')}</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>
                {T('study_teacher_title')}
              </div>
              <div style={{ fontSize: 12, opacity: 0.7, maxWidth: 240, marginBottom: 40, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {T('study_teacher_desc')}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px', borderRadius: 12,
                background: 'rgba(255,255,255,0.15)',
                fontSize: 13, fontWeight: 700,
              }}>
                {T('study_teacher_cta')} {Icon.right(16, 'white')}
              </div>
            </div>
          </button>

          {/* Self study */}
          <button onClick={onOpenSelfStudy} style={{
            background: 'white', color: 'var(--ie-ink)', textAlign: 'left',
            borderRadius: 22, padding: 22, position: 'relative', overflow: 'hidden',
            border: '1px solid var(--ie-line)', cursor: 'pointer',
          }}>
            <div style={{
              position: 'absolute', top: -20, right: -20, width: 130, height: 130,
              borderRadius: '50%', background: 'var(--ie-butter)',
            }}/>
            <div style={{ position: 'relative' }}>
              <div style={{
                fontSize: 10, letterSpacing: '0.1em', color: 'var(--ie-coral)', fontWeight: 700, marginBottom: 6,
              }}>{T('study_self_label')}</div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>
                {T('study_self_title')}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', maxWidth: 240, marginBottom: 40, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {T('study_self_desc')}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px', borderRadius: 12,
                background: 'var(--ie-ink)', color: 'white',
                fontSize: 13, fontWeight: 700,
              }}>
                {T('study_self_cta')} {Icon.right(16, 'white')}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Teacher list ────────────────────────────────
function TeacherList({ onBack, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [booked, setBooked] = React.useState(null);
  return (
    <div style={{ paddingBottom: 100, position: 'relative' }}>
      {booked && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }} onClick={() => setBooked(null)}>
          <div style={{
            background: 'white', borderRadius: 22, padding: 24, maxWidth: 320, width: '100%',
            textAlign: 'center', animation: 'ie-fadeup .3s ease',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 50, marginBottom: 12 }}>📅</div>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>
              {T('teachers_book_done_title')}
            </div>
            <div style={{ fontSize: 13, color: 'var(--ie-ink-3)', marginBottom: 14, lineHeight: 1.5 }}>
              {T('teachers_book_done_desc_a')} <strong>{booked.name}</strong><br/>
              <strong style={{ color: 'var(--ie-coral)' }}>{booked.next}</strong> {T('teachers_book_done_desc_b')}
            </div>
            <div style={{ padding: 12, background: 'var(--ie-line-2)', borderRadius: 12, fontSize: 12, color: 'var(--ie-ink-2)', marginBottom: 16 }}>
              {T('teachers_book_done_note')}
            </div>
            <button onClick={() => setBooked(null)} style={{
              width: '100%', padding: 12, borderRadius: 12,
              background: 'var(--ie-coral)', color: 'white',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>{T('teachers_confirm')}</button>
          </div>
        </div>
      )}
      <ScreenHeader title={T('teachers_title')} subtitle={T('teachers_subtitle')} onBack={onBack} />

      {/* Filter chips */}
      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 6, overflowX: 'auto' }} className="ie-noscroll">
        {[T('teachers_filter_all'),`🇯🇵 ${countryName('JP', langCode)}`,`🇺🇸 ${countryName('US', langCode)}`,`🇫🇷 ${countryName('FR', langCode)}`,`🇻🇳 ${countryName('VN', langCode)}`,`🇩🇪 ${countryName('DE', langCode)}`].map((t, i) => (
          <button key={t} style={{
            padding: '7px 14px', borderRadius: 999, whiteSpace: 'nowrap',
            background: i === 0 ? 'var(--ie-ink)' : 'white',
            color: i === 0 ? 'white' : 'var(--ie-ink-2)',
            fontSize: 12, fontWeight: 600,
            border: '1px solid ' + (i === 0 ? 'var(--ie-ink)' : 'var(--ie-line)'),
          }}>{t}</button>
        ))}
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {TEACHERS.map((t, i) => {
          const c = COUNTRIES[t.country];
          return (
            <div key={i} style={{
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 18, padding: 16,
              display: 'flex', gap: 14,
            }}>
              <Avatar name={t.name} country={t.country} size={56}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: '#F0A500' }}>
                    {Icon.star(14, '#F0A500', true)}
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ie-ink)' }}>{t.rating}</span>
                    <span style={{ fontSize: 11, color: 'var(--ie-ink-4)', fontWeight: 500 }}>({t.reviews})</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginBottom: 8 }}>
                  {c.flag} {t.subject}
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    padding: '4px 8px', background: 'var(--ie-line-2)',
                    borderRadius: 8, fontSize: 11, fontWeight: 600, color: 'var(--ie-ink-2)',
                  }}>{T('teachers_next')} · {t.next}</div>
                  <button onClick={() => setBooked(t)} style={{
                    padding: '7px 14px', borderRadius: 10,
                    background: 'var(--ie-coral)', color: 'white',
                    fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  }}>{T('teachers_book')}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── AI Self Study — Language picker + Duolingo-style path ────
// Persist progress via a module-level object (in-memory; survives navigation)
const LESSON_PROGRESS = {};
// Structure: LESSON_PROGRESS[country] = { completedUnits: Set<number> }

function getProgress(country) {
  if (!LESSON_PROGRESS[country]) {
    LESSON_PROGRESS[country] = { completedUnits: new Set() };
  }
  return LESSON_PROGRESS[country];
}

function markUnitComplete(country, unit) {
  getProgress(country).completedUnits.add(unit);
}

function SelfStudy({ onBack, onOpenLesson, onOpenChats, profile }) {
  const langCode = (profile && profile.langCode) || 'ko';
  const T = (k) => tt(langCode, k);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  // Rerender key to reflect completed units when returning from a lesson
  const [tick, setTick] = React.useState(0);

  // Refresh on mount and when returning
  React.useEffect(() => {
    setTick(t => t + 1);
  }, [selectedCountry]);

  // All languages are always available for self-study.
  // Interest countries only affect friend-finding + profile display.
  const allLangs = Object.keys(LEARNING_PATHS);
  const displayLangs = allLangs;

  // ─── Language picker screen ─────
  if (!selectedCountry) {
    return (
      <div style={{ paddingBottom: 80, background: 'var(--ie-bg)', minHeight: '100vh' }}>
        <ScreenHeader title={T('self_title')} subtitle={T('self_subtitle')} onBack={onBack} />
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 24, lineHeight: 1.55 }}>
            {T('self_pick_desc')}<br/>
            <span style={{ fontSize: 12, color: 'var(--ie-ink-4)' }}>
              {T('self_pick_hint_all')}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {displayLangs.map(code => {
              const c = COUNTRIES[code];
              if (!c) return null;
              const path = LEARNING_PATHS[code] || [];
              const progress = getProgress(code);
              const completedCount = progress.completedUnits.size;
              const totalUnits = path.length;
              const pct = totalUnits > 0 ? (completedCount / totalUnits) * 100 : 0;

              return (
                <button
                  key={code}
                  onClick={() => setSelectedCountry(code)}
                  style={{
                    background: 'white', border: '1px solid var(--ie-line)',
                    borderRadius: 18, padding: 20, textAlign: 'left',
                    cursor: 'pointer', transition: 'transform .12s, border-color .12s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ie-coral)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--ie-line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 42, marginBottom: 10 }}>{c.flag}</div>
                  <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 3 }}>
                    {langName(code, langCode)}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginBottom: 14 }}>
                    {countryName(code, langCode)} · {c.lang}
                  </div>
                  <div style={{ height: 6, background: 'var(--ie-line-2)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'var(--ie-coral)', transition: 'width .3s' }}/>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                    <span style={{ color: 'var(--ie-ink-3)', fontWeight: 600 }}>
                      {completedCount}/{totalUnits} {T('self_units_completed')}
                    </span>
                    <span style={{ color: 'var(--ie-coral)', fontWeight: 700 }}>
                      {completedCount === 0 ? T('self_start_cta') : completedCount === totalUnits ? T('self_all_done') : T('self_continue_cta')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* AI conversation practice */}
          <div style={{ marginTop: 24 }}>
            <button onClick={onOpenChats} style={{
              width: '100%', textAlign: 'left',
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 18, padding: 16,
              display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: 'var(--ie-coral-tint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--ie-coral)',
              }}>{Icon.sparkle(24)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{T('self_ai_practice_title')}</div>
                <div style={{ fontSize: 11, color: 'var(--ie-ink-3)' }}>{T('self_ai_practice_desc')}</div>
              </div>
              {Icon.right(20, 'var(--ie-ink-3)')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Selected country: unit path ─────
  const country = COUNTRIES[selectedCountry];
  const path = LEARNING_PATHS[selectedCountry] || [];
  const progress = getProgress(selectedCountry);
  const completedCount = progress.completedUnits.size;

  // Determine which unit is "active" (first not-yet-completed)
  const nextUnitIdx = path.findIndex(l => !progress.completedUnits.has(l.unit));
  const activeUnit = nextUnitIdx === -1 ? -1 : path[nextUnitIdx].unit;

  return (
    <div style={{ paddingBottom: 80, background: 'var(--ie-bg)', minHeight: '100vh' }}>
      <ScreenHeader
        title={`${country.flag} ${langName(selectedCountry, langCode)}`}
        subtitle={T('self_title')}
        onBack={() => setSelectedCountry(null)}
        right={
          <div style={{
            padding: '6px 12px', borderRadius: 999,
            background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
            fontSize: 12, fontWeight: 700,
          }}>{completedCount}/{path.length}</div>
        }
      />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Stats bar */}
        <div style={{
          background: 'var(--ie-ink)', color: 'white',
          borderRadius: 18, padding: '16px 20px', marginBottom: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 600, letterSpacing: '0.02em', marginBottom: 2 }}>{T('self_stat_streak')}</div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>🔥 {USER.streak}일</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }}/>
            <div>
              <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 600, letterSpacing: '0.02em', marginBottom: 2 }}>{T('self_stat_xp')}</div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{USER.xp.toLocaleString()}</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.15)' }}/>
            <div>
              <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 600, letterSpacing: '0.02em', marginBottom: 2 }}>{T('self_stat_level')}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ie-coral)' }}>Lv.{USER.level}</div>
            </div>
          </div>
        </div>

        {/* Unit path */}
        <div style={{ position: 'relative', paddingLeft: 22 }}>
          <div style={{
            position: 'absolute', left: 20, top: 20, bottom: 20,
            width: 3, background: 'var(--ie-line)',
          }}/>
          {path.map((l, i) => {
            const done = progress.completedUnits.has(l.unit);
            const active = l.unit === activeUnit;
            const locked = !done && !active;
            const hasContent = !!LESSON_CONTENT[`${selectedCountry}-${l.unit}`];
            const bg = done ? '#22c55e' : (active ? 'var(--ie-coral)' : 'var(--ie-line-2)');
            const canOpen = (done || active) && hasContent;
            const open = () => {
              if (!canOpen) return;
              onOpenLesson && onOpenLesson(`${selectedCountry}-${l.unit}`);
            };

            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <button
                  onClick={open}
                  disabled={!canOpen}
                  style={{
                    position: 'relative', zIndex: 1,
                    width: 48, height: 48, borderRadius: '50%', background: bg,
                    border: '3px solid var(--ie-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: active ? '0 0 0 4px var(--ie-coral-soft)' : 'none',
                    color: done || active ? 'white' : 'var(--ie-ink-4)',
                    fontWeight: 800, fontSize: 15,
                    cursor: canOpen ? 'pointer' : 'default',
                  }}
                >
                  {done ? Icon.check(22, 'white') : (locked ? '🔒' : l.unit)}
                </button>
                <button
                  onClick={open}
                  disabled={!canOpen}
                  style={{
                    flex: 1, padding: '14px 16px',
                    background: active ? 'white' : (done ? 'rgba(34,197,94,0.05)' : 'transparent'),
                    borderRadius: 14, textAlign: 'left',
                    border: active ? '1px solid var(--ie-coral-soft)' : (done ? '1px solid rgba(34,197,94,0.2)' : 'none'),
                    opacity: locked ? 0.55 : 1,
                    cursor: canOpen ? 'pointer' : 'default',
                  }}
                >
                  <div style={{ fontSize: 11, color: done ? '#16a34a' : 'var(--ie-ink-3)', fontWeight: 700, marginBottom: 2, letterSpacing: '0.02em' }}>
                    {T('self_unit_label')} {l.unit} {done && T('self_unit_done')} {!hasContent && !done && T('self_unit_coming')}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>{l.title}</div>
                  {active && hasContent && (
                    <div style={{ fontSize: 12, color: 'var(--ie-coral)', marginTop: 4, fontWeight: 600 }}>
                      {T('self_learning_now')} · +10 XP
                    </div>
                  )}
                  {done && (
                    <div style={{ fontSize: 12, color: '#16a34a', marginTop: 4, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      {Icon.check(14, '#16a34a')} {T('self_completed_short')}
                    </div>
                  )}
                </button>
                {active && hasContent && (
                  <button onClick={open} style={{
                    padding: '10px 18px', borderRadius: 12,
                    background: 'var(--ie-coral)', color: 'white',
                    fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap', cursor: 'pointer',
                  }}>{T('self_start_btn')}</button>
                )}
              </div>
            );
          })}
        </div>

        {/* All done celebration */}
        {activeUnit === -1 && path.length > 0 && (
          <div style={{
            marginTop: 24, padding: 24,
            background: 'linear-gradient(135deg, #DDE7FF, #EEF3FF)',
            border: '1px solid var(--ie-coral-soft)',
            borderRadius: 20, textAlign: 'center',
          }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>🎉</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
              {T('self_country_done_title').replace('{country}', langName(selectedCountry, langCode))}
            </div>
            <div style={{ fontSize: 13, color: 'var(--ie-ink-3)' }}>
              {T('self_country_done_desc')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { StudyScreen, TeacherList, SelfStudy, LESSON_PROGRESS, markUnitComplete, getProgress });
