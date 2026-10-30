// 이음 - Common components & icons

// ─── Icons (line style, minimal) ──────────────────
const Icon = {
  home: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9.5z"/></svg>,
  book: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4V4z"/><path d="M20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7V4z"/></svg>,
  qr: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 14v0M14 20h3M20 17v4"/></svg>,
  store: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1.5-5h15L21 9M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18"/><path d="M8 13h8"/></svg>,
  user: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>,
  chat: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L4 20l0.9-4.4A8 8 0 1121 12z"/></svg>,
  video: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3z"/></svg>,
  close: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  back: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  more: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>,
  right: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  plus: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  check: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>,
  star: (s=22, c='currentColor', filled=false) => <svg width={s} height={s} viewBox="0 0 24 24" fill={filled?c:'none'} stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.3L12 17.3 6.5 20.3l1.1-6.3L3 9.6l6.3-.9L12 3z"/></svg>,
  mic: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>,
  camera: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h3l2-2h6l2 2h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z"/><circle cx="12" cy="13" r="4"/></svg>,
  translate: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h9M8 3v2M11 5c-.5 4-3 7-7 8M6 9c1 3 3 5 6 6M13 20l5-11 5 11M15 16h6"/></svg>,
  hangup: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M12 8c-3.5 0-6.5 1-9 3l1.5 3a1 1 0 001-.2l2-1.7a1 1 0 00.4-.8V10a10 10 0 018 0v1.3c0 .3.2.6.4.8l2 1.7a1 1 0 001 .2L21 11c-2.5-2-5.5-3-9-3z"/></svg>,
  send: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M3 3l18 9-18 9 4-9-4-9z"/></svg>,
  sparkle: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg>,
  globe: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>,
  flash: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/></svg>,
  edit: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L20 8l-4-4L4 16v4z"/></svg>,
  medal: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h10l-2 6H9L7 3z"/><circle cx="12" cy="15" r="6"/><path d="M10 14l1.5 2 3-3"/></svg>,
  settings: (s=22, c='currentColor') => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
};

// ─── Country data ────────────────────────────────
const COUNTRIES = {
  KR: { flag: '🇰🇷', name: '한국', name_en: 'South Korea', color: '#C9D5F6', ink: '#1B3A5B', lang: '한국어' },
  JP: { flag: '🇯🇵', name: '일본', name_en: 'Japan', color: '#F6C9C1', ink: '#8B2A2A', lang: '日本語' },
  US: { flag: '🇺🇸', name: '미국', name_en: 'USA', color: '#C9D5F6', ink: '#1B3A5B', lang: 'English' },
  FR: { flag: '🇫🇷', name: '프랑스', name_en: 'France', color: '#D6C9F6', ink: '#2A1B5B', lang: 'Français' },
  VN: { flag: '🇻🇳', name: '베트남', name_en: 'Vietnam', color: '#F6E4A3', ink: '#5B3A1B', lang: 'Tiếng Việt' },
  BR: { flag: '🇧🇷', name: '브라질', name_en: 'Brazil', color: '#C6E4CE', ink: '#1B5B3A', lang: 'Português' },
  IN: { flag: '🇮🇳', name: '인도', name_en: 'India', color: '#F6D6A3', ink: '#5B3A1B', lang: 'हिन्दी' },
  EG: { flag: '🇪🇬', name: '이집트', name_en: 'Egypt', color: '#E8D5B0', ink: '#5B4A1B', lang: 'العربية' },
  DE: { flag: '🇩🇪', name: '독일', name_en: 'Germany', color: '#E8E0C0', ink: '#3A3A1B', lang: 'Deutsch' },
  ES: { flag: '🇪🇸', name: '스페인', name_en: 'Spain', color: '#F6D0A3', ink: '#8B4A1B', lang: 'Español' },
  TH: { flag: '🇹🇭', name: '태국', name_en: 'Thailand', color: '#F0C9D6', ink: '#8B1B4A', lang: 'ภาษาไทย' },
  MN: { flag: '🇲🇳', name: '몽골', name_en: 'Mongolia', color: '#D6E4F0', ink: '#1B3A5B', lang: 'Монгол хэл' },
};

// ─── Avatar (initial-based, no images) ──────────────
function Avatar({ name = '?', size = 40, country, style = {} }) {
  const initial = name.charAt(0).toUpperCase();
  const bg = country ? COUNTRIES[country]?.color : '#DDE7FF';
  const fg = country ? COUNTRIES[country]?.ink : '#1A4FD8';
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: size * 0.42,
      flexShrink: 0, position: 'relative',
      ...style,
    }}>
      {initial}
      {country && (
        <div style={{
          position: 'absolute', bottom: -2, right: -2,
          width: size * 0.4, height: size * 0.4, borderRadius: '50%',
          background: 'white', border: '1.5px solid white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: size * 0.28,
        }}>
          {COUNTRIES[country]?.flag}
        </div>
      )}
    </div>
  );
}

// ─── Brand logo/wordmark ─────────────────────────
function IeumLogo({ size = 28, dark = false }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
      <div style={{
        width: size, height: size, borderRadius: size * 0.28,
        background: 'var(--ie-coral)', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: size * 0.6,
        position: 'relative',
      }}>
        <span style={{ position: 'relative', top: -1 }}>이</span>
      </div>
      <span style={{
        fontWeight: 800, fontSize: size * 0.72,
        color: dark ? 'white' : 'var(--ie-ink)',
        letterSpacing: '-0.02em',
      }}>이음</span>
    </div>
  );
}

// ─── Bottom tab bar ──────────────────────────────
function TabBar({ current, onNav }) {
  const tabs = [
    { id: 'home', label: '홈', icon: Icon.home },
    { id: 'chats', label: '채팅', icon: Icon.chat },
    { id: 'study', label: '학습', icon: Icon.book },
    { id: 'scan', label: '스캔', icon: Icon.qr },
    { id: 'store', label: '스토어', icon: Icon.store },
    { id: 'profile', label: '내정보', icon: Icon.user },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--ie-line)',
      padding: '10px 8px 26px',
      display: 'flex', justifyContent: 'space-around',
      zIndex: 30,
    }}>
      {tabs.map(t => {
        const active = t.id === current;
        return (
          <button key={t.id} onClick={() => onNav(t.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 10px',
            color: active ? 'var(--ie-coral)' : 'var(--ie-ink-3)',
          }}>
            {t.icon(24)}
            <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '-0.02em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Top screen header (works on web too) ─────────────
function ScreenHeader({ title, subtitle, right, onBack }) {
  return (
    <div style={{
      padding: '32px 32px 20px',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12,
      maxWidth: 1080, margin: '0 auto', width: '100%', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', flex: 1, minWidth: 0 }}>
        {onBack && (
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--ie-line-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>{Icon.back(20)}</button>
        )}
        <div style={{ minWidth: 0 }}>
          {subtitle && <div style={{ fontSize: 12, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 4 }}>{subtitle}</div>}
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ie-ink)' }}>{title}</div>
        </div>
      </div>
      {right}
    </div>
  );
}

Object.assign(window, { Icon, COUNTRIES, Avatar, IeumLogo, TabBar, ScreenHeader });
