// 이음 - Web application shell (replaces phone frame)
// Responsive layout: sidebar on desktop, bottom nav on mobile

function WebShell({ current, onNav, onOpenFriends, children, hideNav = false, langCode = 'ko' }) {
  const T = (key) => (typeof tt === 'function' ? tt(langCode, key) : key);
  const tabs = [
    { id: 'home', label: T('nav_home'), icon: Icon.home },
    { id: 'chats', label: T('nav_chats'), icon: Icon.chat },
    { id: 'study', label: T('nav_study'), icon: Icon.book },
    { id: 'scan', label: T('nav_scan'), icon: Icon.qr },
    { id: 'store', label: T('nav_store'), icon: Icon.store },
    { id: 'achievements', label: T('nav_achievements'), icon: Icon.medal },
    { id: 'profile', label: T('nav_profile'), icon: Icon.user },
  ];

  if (hideNav) {
    // Fullscreen mode (onboarding, test, matching, video call, lesson)
    return <div style={{ width: '100%', minHeight: '100vh', background: 'var(--ie-bg)' }}>{children}</div>;
  }

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', background: 'var(--ie-bg)' }}>
      {/* ─── Desktop sidebar ─── */}
      <aside className="ie-sidebar" style={{
        width: 240, flexShrink: 0,
        borderRight: '1px solid var(--ie-line)',
        background: 'white',
        padding: '24px 16px',
        display: 'flex', flexDirection: 'column',
        position: 'sticky', top: 0, height: '100vh',
      }}>
        <div style={{ padding: '0 8px 24px' }}>
          <IeumLogo size={26}/>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {tabs.map(t => {
            const active = t.id === current;
            return (
              <button key={t.id} onClick={() => onNav(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 10, textAlign: 'left',
                background: active ? 'var(--ie-coral-tint)' : 'transparent',
                color: active ? 'var(--ie-coral-deep)' : 'var(--ie-ink-2)',
                fontWeight: active ? 700 : 500,
                fontSize: 14, cursor: 'pointer',
                transition: 'background .15s',
              }}
              onMouseOver={e => { if (!active) e.currentTarget.style.background = 'var(--ie-line-2)'; }}
              onMouseOut={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              >
                {t.icon(20, active ? 'var(--ie-coral-deep)' : 'var(--ie-ink-3)')}
                {t.label}
              </button>
            );
          })}
        </nav>

        {/* Friends open toggle */}
        <button onClick={onOpenFriends} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '10px 12px', borderRadius: 10,
          background: 'var(--ie-line-2)',
          fontSize: 13, fontWeight: 600, color: 'var(--ie-ink-2)',
          cursor: 'pointer',
        }}>
          {Icon.user(18)}
          {T('nav_friends')}
          <span style={{ marginLeft: 'auto',
            minWidth: 18, height: 18, borderRadius: 9, background: 'var(--ie-coral)',
            color: 'white', fontSize: 10, fontWeight: 700, padding: '0 5px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{FRIENDS.filter(f => f.unread).length || FRIENDS.length}</span>
        </button>
      </aside>

      {/* ─── Main content area ─── */}
      <main className="ie-main" style={{
        flex: 1, minWidth: 0,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Mobile top bar (visible only on mobile) */}
        <div className="ie-mobile-topbar" style={{
          display: 'none',
          padding: '18px 20px',
          borderBottom: '1px solid var(--ie-line)',
          background: 'white',
          alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <IeumLogo size={22}/>
          <button onClick={onOpenFriends} style={{
            padding: '8px 12px', background: 'var(--ie-line-2)', borderRadius: 999,
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600,
          }}>
            {Icon.chat(14)} {T('nav_friends')}
          </button>
        </div>

        <div style={{ flex: 1, overflow: 'auto' }}>
          {children}
        </div>

        {/* Mobile bottom nav */}
        <nav className="ie-mobile-nav" style={{
          display: 'none',
          borderTop: '1px solid var(--ie-line)',
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          padding: '8px 4px 12px',
          justifyContent: 'space-around',
          position: 'sticky', bottom: 0, zIndex: 10,
        }}>
          {tabs.map(t => {
            const active = t.id === current;
            return (
              <button key={t.id} onClick={() => onNav(t.id)} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                padding: '4px 8px',
                color: active ? 'var(--ie-coral)' : 'var(--ie-ink-3)',
                fontSize: 10, fontWeight: 600,
              }}>
                {t.icon(22, active ? 'var(--ie-coral)' : 'var(--ie-ink-3)')}
                {t.label}
              </button>
            );
          })}
        </nav>
      </main>
    </div>
  );
}

Object.assign(window, { WebShell });
