// 이음 - Extended onboarding: name, username, country, interests, grade, hobbies

const GRADES = [
  '초등학교 4학년', '초등학교 5학년', '초등학교 6학년',
  '중학교 1학년', '중학교 2학년', '중학교 3학년',
  '고등학교 1학년', '고등학교 2학년', '고등학교 3학년',
  '대학교 1학년', '대학교 2학년', '대학교 3학년', '대학교 4학년',
];

const ALL_HOBBIES = [
  'K-Pop', '만화', '베이킹', '사진', '축구', '영화',
  '게임', '독서', '여행', '그림', '요리', '음악',
  '댄스', '운동', '애니메이션', '언어', '패션', '카페투어',
];

// User's own country options
const USER_COUNTRIES = { ...COUNTRIES };

function OnboardingScreen({ onComplete }) {
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [langCode, setLangCode] = React.useState('ko');
  const [country, setCountry] = React.useState('KR');
  const [interestsCountry, setInterestsCountry] = React.useState([]);
  const [grade, setGrade] = React.useState('');
  const [hobbies, setHobbies] = React.useState([]);

  const t = UI_STRINGS[langCode] || UI_STRINGS.ko;
  const TOTAL = 7;

  // Validation per step
  const canProceed =
    step === 0 ? true :                                 // language (default = ko)
    step === 1 ? true :                                 // welcome
    step === 2 ? name.trim().length > 0 :               // name
    step === 3 ? username.trim().length >= 3 :          // username min 3
    step === 4 ? !!country :                            // own country
    step === 5 ? interestsCountry.length > 0 :          // at least 1 interest country
    step === 6 ? !!grade && hobbies.length > 0 :        // grade + at least 1 hobby
    true;

  const goNext = () => {
    if (!canProceed) return;
    if (step < TOTAL - 1) {
      setStep(step + 1);
    } else {
      onComplete({
        name: name.trim(),
        username: username.trim(),
        langCode,
        country,
        interestsCountry,
        grade,
        hobbies,
      });
    }
  };

  // Step order: [language, welcome, name, username, country, interests, grade+hobbies]
  const defaultLabels = ['언어', '환영', '이름', '유저네임', '내 국가', '관심 국가', '학년 · 취미'];
  const baseLabels = t.step_labels || defaultLabels;
  // If translation was written in old order [welcome, language, ...], swap first two to match new order
  const stepLabels = [baseLabels[1] || defaultLabels[0], baseLabels[0] || defaultLabels[1], ...baseLabels.slice(2)];
  const stepLabel = stepLabels[step];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--ie-bg)' }}>
      {/* Progress bar */}
      <div style={{
        padding: '24px', display: 'flex', alignItems: 'center', gap: 16,
        maxWidth: 640, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} style={{
            width: 40, height: 40, borderRadius: 12, background: 'white',
            border: '1px solid var(--ie-line)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>{Icon.back(20)}</button>
        ) : <div style={{ width: 40 }}/>}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 5, borderRadius: 3,
                background: i <= step ? 'var(--ie-coral)' : 'var(--ie-line)',
                transition: 'all .25s',
              }}/>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', textAlign: 'center', fontWeight: 600 }}>
            {step + 1} / {TOTAL} · {stepLabel}
          </div>
        </div>
        <div style={{ width: 40 }}/>
      </div>

      {/* Body */}
      <div style={{
        flex: 1, padding: '20px 32px', overflowY: 'auto',
        maxWidth: 640, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        {step === 0 && <LanguageStep t={t} langCode={langCode} setLangCode={setLangCode} />}
        {step === 1 && <WelcomeStep t={t} langCode={langCode} />}
        {step === 2 && <NameStep t={t} name={name} setName={setName} />}
        {step === 3 && <UsernameStep t={t} username={username} setUsername={setUsername} />}
        {step === 4 && <CountryStep t={t} country={country} setCountry={setCountry} langCode={langCode} />}
        {step === 5 && <InterestsStep t={t} interestsCountry={interestsCountry} setInterestsCountry={setInterestsCountry} langCode={langCode} />}
        {step === 6 && <GradeHobbiesStep t={t} grade={grade} setGrade={setGrade} hobbies={hobbies} setHobbies={setHobbies} langCode={langCode} />}
      </div>

      {/* CTA */}
      <div style={{
        padding: '16px 24px 30px', background: 'var(--ie-bg)',
        maxWidth: 640, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        <button
          onClick={goNext}
          disabled={!canProceed}
          style={{
            width: '100%', padding: '18px', borderRadius: 16,
            background: canProceed ? 'var(--ie-coral)' : 'var(--ie-line-2)',
            color: canProceed ? 'white' : 'var(--ie-ink-4)',
            fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'background .15s',
            cursor: canProceed ? 'pointer' : 'not-allowed',
          }}
        >
          {step === TOTAL - 1 ? t.start_test : t.continue}
          {Icon.right(18, 'currentColor')}
        </button>
      </div>
    </div>
  );
}

// ─── Step 0: Welcome ────────────────────────────
function WelcomeStep({ t, langCode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 40 }}>
      <div style={{
        width: 100, height: 100, borderRadius: 32,
        background: 'linear-gradient(135deg, var(--ie-coral), var(--ie-coral-deep))',
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: 52,
        boxShadow: '0 20px 40px rgba(46,107,255,0.28)',
        marginBottom: 30,
      }}>이</div>

      <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1.2 }}>
        {t.welcome}
      </div>
      <div style={{ fontSize: 15, color: 'var(--ie-ink-3)', lineHeight: 1.5, maxWidth: 320, marginBottom: 40 }}>
        {t.welcome_desc}
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { icon: '🌏', text: t.feature_match },
          { icon: '💬', text: t.feature_translate },
          { icon: '📚', text: t.feature_learn },
        ].map((f, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 16px', background: 'white',
            border: '1px solid var(--ie-line)', borderRadius: 14,
          }}>
            <div style={{ fontSize: 24 }}>{f.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, textAlign: 'left' }}>{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Step: Language ─────────────────────────────
function LanguageStep({ t, langCode, setLangCode }) {
  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 1</StepBadge>
      <StepTitle>{t.lang_label}</StepTitle>
      <StepDesc>{t.lang_desc}</StepDesc>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {LANGUAGES.map(l => {
          const active = l.code === langCode;
          return (
            <button
              key={l.code}
              onClick={() => setLangCode(l.code)}
              style={{
                padding: '14px 12px', borderRadius: 14,
                background: active ? 'var(--ie-coral-tint)' : 'white',
                border: '2px solid ' + (active ? 'var(--ie-coral)' : 'var(--ie-line)'),
                display: 'flex', alignItems: 'center', gap: 10,
                cursor: 'pointer', transition: 'all .15s',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 24 }}>{l.flag}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: active ? 'var(--ie-coral-deep)' : 'var(--ie-ink)' }}>
                  {l.native}
                </div>
              </div>
              {active && Icon.check(18, 'var(--ie-coral)')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step: Name ─────────────────────────────────
function NameStep({ t, name, setName }) {
  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 2</StepBadge>
      <StepTitle>{t.name_title}</StepTitle>
      <StepDesc>{t.name_desc}</StepDesc>

      <TextInput value={name} onChange={setName} placeholder={t.name_placeholder} maxLength={20} autoFocus/>

      {name.trim() && (
        <div style={{
          marginTop: 20, padding: 16,
          background: 'var(--ie-coral-tint)', borderRadius: 14,
          border: '1px solid var(--ie-coral-soft)',
          animation: 'ie-fadeup .3s ease',
        }}>
          <div style={{ fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 700, marginBottom: 2 }}>
            {t.name_greeting}
          </div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>
            {name.trim()}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Step: Username ─────────────────────────────
function UsernameStep({ t, username, setUsername }) {
  const valid = username.trim().length >= 3 && /^[a-zA-Z0-9_.]+$/.test(username.trim());
  const tooShort = username.trim().length > 0 && username.trim().length < 3;
  const badChars = username.trim().length >= 3 && !/^[a-zA-Z0-9_.]+$/.test(username.trim());

  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 3</StepBadge>
      <StepTitle>{t.username_title}</StepTitle>
      <StepDesc>{t.username_desc}</StepDesc>

      <div style={{
        background: 'white',
        border: '2px solid ' + (valid ? 'var(--ie-coral)' : badChars || tooShort ? '#ef4444' : 'var(--ie-line)'),
        borderRadius: 14,
        display: 'flex', alignItems: 'center',
        padding: '4px 14px',
        transition: 'border-color .15s',
      }}>
        <span style={{ color: 'var(--ie-ink-4)', fontSize: 16, fontWeight: 600, marginRight: 4 }}>@</span>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value.toLowerCase())}
          placeholder={t.username_placeholder}
          maxLength={20}
          autoFocus
          style={{
            flex: 1, border: 'none', outline: 'none',
            padding: '14px 4px', fontSize: 16, fontWeight: 600,
            background: 'transparent', fontFamily: 'inherit', color: 'var(--ie-ink)',
            minWidth: 0,
          }}
        />
        {valid && Icon.check(20, 'var(--ie-coral)')}
      </div>

      {tooShort && (
        <div style={{ fontSize: 12, color: '#ef4444', marginTop: 8, fontWeight: 600 }}>
          {t.username_too_short}
        </div>
      )}
      {badChars && (
        <div style={{ fontSize: 12, color: '#ef4444', marginTop: 8, fontWeight: 600 }}>
          {t.username_bad_chars}
        </div>
      )}
      {!username && (
        <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginTop: 8 }}>
          {t.username_hint}
        </div>
      )}
    </div>
  );
}

// ─── Step: My Country ───────────────────────────
function CountryStep({ t, country, setCountry, langCode }) {
  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 4</StepBadge>
      <StepTitle>{t.country_title}</StepTitle>
      <StepDesc>{t.country_desc}</StepDesc>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {Object.entries(USER_COUNTRIES).map(([code, c]) => {
          const active = code === country;
          return (
            <button
              key={code}
              onClick={() => setCountry(code)}
              style={{
                padding: '16px 14px', borderRadius: 14,
                background: active ? 'var(--ie-coral-tint)' : 'white',
                border: '2px solid ' + (active ? 'var(--ie-coral)' : 'var(--ie-line)'),
                display: 'flex', alignItems: 'center', gap: 12,
                cursor: 'pointer', transition: 'all .15s',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 28 }}>{c.flag}</div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: active ? 'var(--ie-coral-deep)' : 'var(--ie-ink)' }}>
                {countryName(code, langCode)}
              </div>
              {active && Icon.check(18, 'var(--ie-coral)')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step: Interests Country ────────────────────
function InterestsStep({ t, interestsCountry, setInterestsCountry, langCode }) {
  const toggle = (code) => {
    setInterestsCountry(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 5</StepBadge>
      <StepTitle>{t.interests_title}</StepTitle>
      <StepDesc>{t.interests_desc}</StepDesc>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {Object.entries(COUNTRIES).map(([code, c]) => {
          const active = interestsCountry.includes(code);
          return (
            <button
              key={code}
              onClick={() => toggle(code)}
              style={{
                padding: '14px', borderRadius: 14,
                background: active ? 'var(--ie-coral-tint)' : 'white',
                border: '2px solid ' + (active ? 'var(--ie-coral)' : 'var(--ie-line)'),
                display: 'flex', alignItems: 'center', gap: 12,
                cursor: 'pointer', transition: 'all .15s',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 26 }}>{c.flag}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: active ? 'var(--ie-coral-deep)' : 'var(--ie-ink)' }}>
                  {countryName(code, langCode)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--ie-ink-3)' }}>{c.lang}</div>
              </div>
              {active && Icon.check(18, 'var(--ie-coral)')}
            </button>
          );
        })}
      </div>

      {interestsCountry.length > 0 && (
        <div style={{
          marginTop: 16, padding: '10px 14px',
          background: 'var(--ie-coral-tint)', borderRadius: 10,
          fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 600,
        }}>
          ✓ {interestsCountry.length}{t.interests_selected}
        </div>
      )}
    </div>
  );
}

// ─── Step: Grade + Hobbies ──────────────────────
function GradeHobbiesStep({ t, grade, setGrade, hobbies, setHobbies, langCode }) {
  const [showGradeDropdown, setShowGradeDropdown] = React.useState(false);

  const toggleHobby = (id) => {
    setHobbies(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <StepBadge>STEP 6</StepBadge>
      <StepTitle>{t.grade_hobbies_title}</StepTitle>
      <StepDesc>{t.grade_hobbies_desc}</StepDesc>

      {/* Grade */}
      <div style={{ marginBottom: 24, position: 'relative' }}>
        <FieldLabel>{t.grade_label}</FieldLabel>
        <button
          onClick={() => setShowGradeDropdown(!showGradeDropdown)}
          style={{
            width: '100%', background: 'white',
            border: '2px solid ' + (grade ? 'var(--ie-coral)' : 'var(--ie-line)'),
            borderRadius: 12, padding: '14px 16px',
            fontSize: 15, fontWeight: 600, textAlign: 'left',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer', color: grade ? 'var(--ie-ink)' : 'var(--ie-ink-4)',
          }}
        >
          <span>{grade ? gradeName(grade, langCode) : t.grade_placeholder}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: showGradeDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s' }}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        {showGradeDropdown && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
            background: 'white', border: '1px solid var(--ie-line)',
            borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxHeight: 240, overflowY: 'auto', zIndex: 20,
            padding: 6,
          }}>
            {GRADE_OPTIONS.map(g => (
              <button key={g.id} onClick={() => { setGrade(g.id); setShowGradeDropdown(false); }} style={{
                width: '100%', padding: '10px 12px', borderRadius: 8,
                background: g.id === grade ? 'var(--ie-coral-tint)' : 'transparent',
                color: g.id === grade ? 'var(--ie-coral-deep)' : 'var(--ie-ink)',
                fontSize: 14, fontWeight: g.id === grade ? 700 : 500,
                textAlign: 'left', cursor: 'pointer',
              }}>{gradeName(g.id, langCode)}</button>
            ))}
          </div>
        )}
      </div>

      {/* Hobbies */}
      <div>
        <FieldLabel>{t.hobbies_label} <span style={{ color: 'var(--ie-ink-4)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>· {hobbies.length}{t.hobbies_selected}</span></FieldLabel>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {HOBBY_OPTIONS.map(h => {
            const on = hobbies.includes(h.id);
            return (
              <button key={h.id} onClick={() => toggleHobby(h.id)} style={{
                padding: '8px 14px', borderRadius: 999,
                background: on ? 'var(--ie-ink)' : 'white',
                border: '1.5px solid ' + (on ? 'var(--ie-ink)' : 'var(--ie-line)'),
                color: on ? 'white' : 'var(--ie-ink-2)',
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>#{hobbyName(h.id, langCode)}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Reusable step atoms ───────────────────────
function StepBadge({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 12px', borderRadius: 999,
      background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
      marginBottom: 16,
    }}>{children}</div>
  );
}
function StepTitle({ children }) {
  return (
    <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: 8 }}>
      {children}
    </div>
  );
}
function StepDesc({ children }) {
  return (
    <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 24, lineHeight: 1.5 }}>
      {children}
    </div>
  );
}
function TextInput({ value, onChange, placeholder, maxLength, autoFocus }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      autoFocus={autoFocus}
      style={{
        width: '100%', padding: '16px 18px',
        background: 'white',
        border: '2px solid ' + (value.trim() ? 'var(--ie-coral)' : 'var(--ie-line)'),
        borderRadius: 14, fontSize: 16, fontWeight: 600,
        fontFamily: 'inherit', color: 'var(--ie-ink)',
        outline: 'none', boxSizing: 'border-box',
        transition: 'border-color .15s',
      }}
    />
  );
}

Object.assign(window, { OnboardingScreen, GRADES, ALL_HOBBIES });
