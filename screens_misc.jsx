// 이음 - QR Scanner, Store, Achievements, Profile Edit, Settings

// ─── QR Scanner ──────────────────────────────────
function QRScanner({ onNav, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [flash, setFlash] = React.useState(false);
  const [manual, setManual] = React.useState(false);
  const [manualCode, setManualCode] = React.useState('');
  const [scanned, setScanned] = React.useState(null);

  // Simulate scan detection every ~8s (for demo purposes, we don't auto-scan)
  const simulateScan = (country) => {
    if (typeof bumpStat === 'function') bumpStat('kits');
    setScanned(country);
  };

  if (scanned) {
    const c = COUNTRIES[scanned];
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(180deg, var(--ie-coral-tint), var(--ie-bg))',
        padding: '60px 24px 24px', alignItems: 'center', textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>
          {T('scan_success_label')}
        </div>
        <div style={{ fontSize: 80, marginBottom: 12 }}>{c.flag}</div>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>
          {countryName(scanned, langCode)} {T('scan_success_kit_suffix')}
        </div>
        <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 24 }}>
          {T('scan_success_added')}
        </div>
        <div style={{ padding: 20, background: 'white', border: '1px solid var(--ie-line)', borderRadius: 20, marginBottom: 24, maxWidth: 300 }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🏆</div>
          <div style={{ fontSize: 12, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 4 }}>{T('scan_success_badge_label')}</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>{T('scan_success_badge_title').replace('{country}', countryName(scanned, langCode))}</div>
          <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginTop: 4 }}>{T('scan_success_badge_desc').replace('{country}', countryName(scanned, langCode))}</div>
        </div>
        <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 340 }}>
          <button onClick={() => setScanned(null)} style={{
            flex: 1, padding: 14, borderRadius: 14,
            background: 'white', border: '1px solid var(--ie-line)',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
          }}>{T('scan_again')}</button>
          <button onClick={() => onNav && onNav('store')} style={{
            flex: 1, padding: 14, borderRadius: 14,
            background: 'var(--ie-coral)', color: 'white',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
          }}>{T('scan_view_badges')}</button>
        </div>
      </div>
    );
  }

  if (manual) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ie-bg)' }}>
        <div style={{ padding: '52px 16px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setManual(false)} style={{
            width: 36, height: 36, borderRadius: 12, background: 'white',
            border: '1px solid var(--ie-line)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.back(20)}</button>
          <div style={{ fontSize: 18, fontWeight: 800 }}>{T('scan_manual_title')}</div>
        </div>
        <div style={{ padding: '20px 20px', flex: 1 }}>
          <div style={{ fontSize: 13, color: 'var(--ie-ink-3)', marginBottom: 12 }}>
            {T('scan_manual_desc')}
          </div>
          <input type="text" value={manualCode} onChange={e => setManualCode(e.target.value)} placeholder={T('scan_manual_placeholder')}
            style={{
              width: '100%', padding: '14px 16px', background: 'white',
              border: '2px solid var(--ie-line)', borderRadius: 14,
              fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-mono)',
              outline: 'none', boxSizing: 'border-box',
            }}/>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 20 }}>
            <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600, width: '100%', marginBottom: 6 }}>{T('scan_manual_test')}</div>
            {Object.entries(COUNTRIES).slice(0, 5).map(([code, c]) => (
              <button key={code} onClick={() => { setManualCode(`${code}-2026-DEMO`); }} style={{
                padding: '6px 10px', borderRadius: 999, background: 'white',
                border: '1px solid var(--ie-line)', fontSize: 12, fontWeight: 600,
              }}>{c.flag} {code}</button>
            ))}
          </div>
        </div>
        <div style={{ padding: '10px 16px 30px' }}>
          <button onClick={() => {
            const code = manualCode.split('-')[0]?.toUpperCase();
            if (COUNTRIES[code]) {
              if (typeof bumpStat === 'function') bumpStat('kits');
              setScanned(code);
              setManual(false);
              setManualCode('');
            }
          }} disabled={!manualCode.trim()} style={{
            width: '100%', padding: 16, borderRadius: 14,
            background: manualCode.trim() ? 'var(--ie-coral)' : 'var(--ie-line-2)',
            color: manualCode.trim() ? 'white' : 'var(--ie-ink-4)',
            fontSize: 15, fontWeight: 700,
          }}>{T('scan_manual_submit')}</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#000', color: 'white', position: 'relative' }}>
      {/* Header */}
      <div style={{ padding: '58px 20px 12px', position: 'relative', zIndex: 5 }}>
        <div style={{ fontSize: 11, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 2 }}>
          {T('scan_label')}
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em' }}>{T('scan_title')}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
          {T('scan_desc')}
        </div>
      </div>

      {/* Camera frame */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {/* fake camera view */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, #2a2a2a, #0a0a0a 80%)',
        }}/>
        {/* fake surface */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(0deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%),
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.03), transparent 50%)
          `,
        }}/>

        {/* dim overlay with cutout */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          maskImage: 'radial-gradient(240px 240px at 50% 45%, transparent 99%, black 100%)',
          WebkitMaskImage: 'radial-gradient(240px 240px at 50% 45%, transparent 99%, black 100%)',
        }}/>

        {/* Scanning frame */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 260, height: 260,
        }}>
          {/* Corners */}
          {[
            { top: 0, left: 0, borderTop: '3px solid', borderLeft: '3px solid', borderTopLeftRadius: 12 },
            { top: 0, right: 0, borderTop: '3px solid', borderRight: '3px solid', borderTopRightRadius: 12 },
            { bottom: 0, left: 0, borderBottom: '3px solid', borderLeft: '3px solid', borderBottomLeftRadius: 12 },
            { bottom: 0, right: 0, borderBottom: '3px solid', borderRight: '3px solid', borderBottomRightRadius: 12 },
          ].map((s, i) => (
            <div key={i} style={{
              position: 'absolute', width: 34, height: 34,
              borderColor: 'var(--ie-coral)',
              ...s,
            }}/>
          ))}

          {/* Scanning line */}
          <div style={{
            position: 'absolute', left: 8, right: 8,
            height: 2, background: 'linear-gradient(90deg, transparent, var(--ie-coral), transparent)',
            boxShadow: '0 0 20px var(--ie-coral)',
            animation: 'ie-scanline 2s ease-in-out infinite',
          }}/>

          {/* Tiny QR emoji hint in the middle for aesthetic */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            fontSize: 60, opacity: 0.15,
          }}>▦</div>
        </div>

        <style>{`
          @keyframes ie-scanline {
            0%, 100% { top: 8px; }
            50% { top: calc(100% - 10px); }
          }
        `}</style>
      </div>

      {/* Bottom guide */}
      <div style={{
        padding: '20px 20px 120px', textAlign: 'center',
        color: 'rgba(255,255,255,0.8)', fontSize: 13,
      }}>
        <div style={{ marginBottom: 12 }}>{T('scan_frame_hint')}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <button onClick={() => setFlash(!flash)} style={{
            padding: '10px 16px', borderRadius: 12,
            background: flash ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)',
            color: flash ? '#000' : 'white',
            fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6,
          }}>{Icon.flash(16, flash ? '#000' : 'white')} {flash ? T('scan_flash_on') : T('scan_flash_off')}</button>
          <button onClick={() => setManual(true)} style={{
            padding: '10px 16px', borderRadius: 12,
            background: 'rgba(255,255,255,0.1)', color: 'white',
            fontSize: 12, fontWeight: 600,
          }}>{T('scan_manual')}</button>
        </div>
        <div style={{
          marginTop: 14, padding: 10, background: 'rgba(46,107,255,0.15)',
          borderRadius: 12, fontSize: 11, color: 'rgba(255,255,255,0.8)',
          border: '1px solid rgba(46,107,255,0.3)',
        }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{T('scan_demo_label')}</div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['JP','FR','VN'].map(code => (
              <button key={code} onClick={() => simulateScan(code)} style={{
                padding: '4px 8px', borderRadius: 8,
                background: 'rgba(255,255,255,0.15)', color: 'white',
                fontSize: 11, fontWeight: 600,
              }}>{COUNTRIES[code].flag} {COUNTRIES[code].name} 스캔</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Culture Kit Store ───────────────────────────
function StoreScreen({ onOpenAchievements, onOpenScan, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const [cart, setCart] = React.useState([]);
  const [toast, setToast] = React.useState(null);
  const [buying, setBuying] = React.useState(null);

  const addToCart = (kit) => {
    setCart(c => [...c, kit]);
    setToast(T('store_toast_cart').replace('{title}', kit.title));
    setTimeout(() => setToast(null), 2000);
  };

  const buyNow = (kit) => setBuying(kit);
  const confirmBuy = () => {
    setToast(T('store_toast_order_done').replace('{title}', buying.title));
    setBuying(null);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div style={{ paddingBottom: 100, position: 'relative' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: 60, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ie-ink)', color: 'white',
          padding: '10px 18px', borderRadius: 999,
          fontSize: 13, fontWeight: 600, zIndex: 100,
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          animation: 'ie-fadeup .3s ease',
          maxWidth: '90%',
        }}>{toast}</div>
      )}

      {buying && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 200, display: 'flex', alignItems: 'flex-end',
        }}>
          <div style={{
            background: 'white', width: '100%', borderRadius: '24px 24px 0 0',
            padding: 24, animation: 'ie-fadeup .3s ease',
          }}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--ie-line)', margin: '0 auto 16px' }}/>
            <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 60, height: 60, borderRadius: 14,
                background: COUNTRIES[buying.country].color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32,
              }}>{COUNTRIES[buying.country].flag}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{buying.title}</div>
                <div style={{ fontSize: 12, color: 'var(--ie-ink-3)' }}>{buying.desc}</div>
              </div>
            </div>
            <div style={{ padding: 14, background: 'var(--ie-line-2)', borderRadius: 12, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                <span style={{ color: 'var(--ie-ink-3)' }}>{T('store_checkout_price')}</span>
                <span>₩{buying.price.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}>
                <span style={{ color: 'var(--ie-ink-3)' }}>{T('store_checkout_ship')}</span>
                <span>{T('store_checkout_free')}</span>
              </div>
              <div style={{ borderTop: '1px solid var(--ie-line)', paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontSize: 15, fontWeight: 700 }}>
                <span>{T('store_checkout_total')}</span>
                <span style={{ color: 'var(--ie-coral)' }}>₩{buying.price.toLocaleString()}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <button onClick={() => setBuying(null)} style={{
                flex: 1, padding: 14, borderRadius: 12,
                background: 'white', border: '1px solid var(--ie-line)',
                fontSize: 14, fontWeight: 700,
              }}>{T('store_checkout_cancel')}</button>
              <button onClick={confirmBuy} style={{
                flex: 2, padding: 14, borderRadius: 12,
                background: 'var(--ie-coral)', color: 'white',
                fontSize: 14, fontWeight: 700,
              }}>{T('store_checkout_pay')}</button>
            </div>
          </div>
        </div>
      )}
      <ScreenHeader
        title={T('store_title')}
        subtitle={T('store_subtitle')}
        right={
          <button onClick={onOpenAchievements} style={{
            width: 36, height: 36, borderRadius: 12,
            background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.medal(20)}</button>
        }
      />

      <div style={{ padding: '0 20px 16px', fontSize: 13, color: 'var(--ie-ink-3)', lineHeight: 1.5 }}>
        각 나라의 문화를 담은 실물 키트예요.<br/>
        수집하면 업적 배지를 받을 수 있어요.
      </div>

      {/* Featured */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #DDE7FF, #EEF3FF)',
          borderRadius: 22, padding: 20,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 10, right: 10,
            padding: '4px 10px', borderRadius: 999,
            background: 'var(--ie-ink)', color: 'white',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
          }}>{T('store_best')}</div>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🇯🇵</div>
          <div style={{ fontSize: 11, color: 'var(--ie-ink-2)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 3 }}>
            {T('store_featured_label')}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 4 }}>
            {countryName('JP', langCode)} {T('scan_success_kit_suffix')}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ie-ink-2)', marginBottom: 16 }}>
            오리가미 · 다도 세트 · 젓가락 · 화투
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 600 }}>{T('store_items_count').replace('{n}', '8')}</div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>₩29,900</div>
            </div>
            <button onClick={() => buyNow(CULTURE_KITS.find(k => k.country === 'JP'))} style={{
              padding: '10px 16px', borderRadius: 12,
              background: 'var(--ie-ink)', color: 'white',
              fontSize: 13, fontWeight: 700,
            }}>{T('store_buy')}</button>
          </div>
        </div>
      </div>

      {/* Scan CTA */}
      <div style={{ padding: '0 16px 20px' }}>
        <button onClick={onOpenScan} style={{
          width: '100%', textAlign: 'left',
          background: 'white', border: '1px dashed var(--ie-coral-soft)',
          borderRadius: 16, padding: '14px 16px',
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.qr(20)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{T('store_scan_cta_q')}</div>
            <div style={{ fontSize: 11, color: 'var(--ie-ink-3)' }}>{T('store_scan_cta_desc')}</div>
          </div>
          {Icon.right(18, 'var(--ie-ink-3)')}
        </button>
      </div>

      {/* Grid of all kits */}
      <div style={{ padding: '4px 20px 8px', fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em' }}>
        {T('store_all')} <span style={{ color: 'var(--ie-ink-3)' }}>· {CULTURE_KITS.length}</span>
      </div>
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {CULTURE_KITS.map((k, i) => {
          const c = COUNTRIES[k.country];
          return (
            <button key={i} onClick={() => buyNow(k)} style={{
              textAlign: 'left', background: 'white',
              border: '1px solid var(--ie-line)',
              borderRadius: 16, overflow: 'hidden', padding: 0,
              cursor: 'pointer',
            }}>
              <div style={{
                height: 90, background: c.color, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 42,
              }}>
                {c.flag}
                {k.popular && (
                  <div style={{
                    position: 'absolute', top: 8, left: 8,
                    padding: '3px 7px', borderRadius: 999,
                    background: 'rgba(0,0,0,0.7)', color: 'white',
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.05em',
                  }}>{T('store_popular')}</div>
                )}
              </div>
              <div style={{ padding: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2, letterSpacing: '-0.02em' }}>{k.title}</div>
                <div style={{
                  fontSize: 10, color: 'var(--ie-ink-3)', marginBottom: 8,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{k.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 800 }}>₩{k.price.toLocaleString()}</div>
                  <div style={{
                    width: 26, height: 26, borderRadius: 8,
                    background: 'var(--ie-coral)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{Icon.plus(16, 'white')}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Achievements ────────────────────────────────
function AchievementsScreen({ onBack, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  // Live achievements (recomputed each render from USER_STATS)
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => { setTick(1); }, []);
  const list = (typeof getAchievements === 'function') ? getAchievements() : ACHIEVEMENTS;
  const earned = list.filter(a => a.earned).length;
  const total = list.length;
  return (
    <div style={{ paddingBottom: 100 }}>
      <ScreenHeader title={T('ach_title')} subtitle={T('ach_subtitle')} onBack={onBack} />

      {/* Progress banner */}
      <div style={{ padding: '0 16px 20px', maxWidth: 720, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{
          background: 'var(--ie-ink)', color: 'white',
          borderRadius: 20, padding: 18,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              background: 'var(--ie-coral)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28,
            }}>🏆</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, opacity: 0.6, fontWeight: 600, marginBottom: 2 }}>
                {T('ach_earned')}
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em' }}>
                {earned} / {total}
              </div>
              <div style={{ height: 5, background: 'rgba(255,255,255,0.15)', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ width: `${(earned/total)*100}%`, height: '100%', background: 'var(--ie-coral)' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        padding: '0 16px', display: 'grid', gap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        maxWidth: 720, margin: '0 auto', boxSizing: 'border-box',
      }}>
        {list.map((a, i) => (
          <div key={a.key || i} style={{
            background: 'white', border: '1px solid var(--ie-line)',
            borderRadius: 16, padding: 14, textAlign: 'center',
            opacity: a.earned ? 1 : 0.6,
            position: 'relative',
          }}>
            {a.earned && (
              <div style={{
                position: 'absolute', top: 10, right: 10,
                width: 20, height: 20, borderRadius: '50%',
                background: '#22c55e', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icon.check(12, 'white')}</div>
            )}
            <div style={{
              width: 60, height: 60, margin: '0 auto 10px',
              borderRadius: '50%', background: a.earned ? 'var(--ie-coral-tint)' : 'var(--ie-line-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 30, filter: a.earned ? 'none' : 'grayscale(1)',
            }}>{a.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2, letterSpacing: '-0.02em' }}>
              {typeof a.title === 'object' ? (a.title[langCode] || a.title.en) : a.title}
            </div>
            <div style={{ fontSize: 10, color: 'var(--ie-ink-3)', marginBottom: 6, lineHeight: 1.4 }}>
              {typeof a.desc === 'object' ? (a.desc[langCode] || a.desc.en) : a.desc}
            </div>
            {a.earned ? (
              <div style={{ fontSize: 10, color: '#22c55e', fontWeight: 700 }}>✓ {a.total}/{a.total}</div>
            ) : (
              <div>
                <div style={{ height: 4, background: 'var(--ie-line-2)', borderRadius: 2, overflow: 'hidden', marginBottom: 3 }}>
                  <div style={{ width: `${(a.progress/Math.max(1,a.total))*100}%`, height: '100%', background: 'var(--ie-coral)' }}/>
                </div>
                <div style={{ fontSize: 10, color: 'var(--ie-ink-3)', fontWeight: 600 }}>{a.progress}/{a.total}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Profile ─────────────────────────────────────
function ProfileScreen({ onEdit, onOpenSettings, onOpenAchievements, onNav, profile }) {
  const langCode = (profile && profile.langCode) || 'ko';
  const T = (k) => tt(langCode, k);
  // Prefer live profile values, fall back to USER
  const displayName = profile?.name || USER.name;
  const displayHandle = USER.handle;
  const displayGrade = gradeName(USER.grade, langCode);
  return (
    <div style={{ paddingBottom: 100 }}>
      <ScreenHeader
        title={T('profile_title')}
        subtitle={T('profile_subtitle')}
        right={
          <button onClick={onOpenSettings} style={{
            width: 36, height: 36, borderRadius: 12,
            background: 'var(--ie-line-2)', color: 'var(--ie-ink-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.settings(20)}</button>
        }
      />

      {/* Profile card */}
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{
          background: 'white', border: '1px solid var(--ie-line)',
          borderRadius: 22, padding: 20,
          display: 'flex', gap: 16, alignItems: 'center',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 76, height: 76, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--ie-coral), #7FA9FF)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, fontWeight: 800,
            }}>{(displayName || '?').charAt(0).toUpperCase()}</div>
            <button onClick={onEdit} style={{
              position: 'absolute', bottom: -2, right: -2,
              width: 26, height: 26, borderRadius: '50%',
              background: 'var(--ie-ink)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid white',
            }}>{Icon.edit(14, 'white')}</button>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>{displayName}</div>
            <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginBottom: 6 }}>{displayHandle}</div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              <span className="ie-chip coral">
                {COUNTRIES[USER.country || 'KR']?.flag} {countryName(USER.country || 'KR', langCode)}
              </span>
              <span className="ie-chip">{displayGrade}</span>
              {(() => {
                const pt = profile && profile.personalityType;
                if (!pt) return null;
                const loc = (pt.i18n && (pt.i18n[langCode] || pt.i18n.en)) || {};
                return (
                  <span className="ie-chip" style={{
                    background: 'var(--ie-ink)', color: 'white', borderColor: 'var(--ie-ink)',
                  }}>{pt.emoji} {loc.label || pt.key}</span>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* My personality + compatibility */}
      {profile && profile.personalityType && (() => {
        const pt = profile.personalityType;
        const loc = (pt.i18n && (pt.i18n[langCode] || pt.i18n.en)) || {};
        const m = (typeof PERSONALITY_MATCHES !== 'undefined' && PERSONALITY_MATCHES[pt.key]) || { good: [], tough: [] };
        const chip = (key, tone) => {
          const t = PERSONALITY_TYPES[key];
          if (!t) return null;
          const l = (t.i18n && (t.i18n[langCode] || t.i18n.en)) || {};
          const isGood = tone === 'good';
          return (
            <div key={key} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 12px', borderRadius: 12,
              background: isGood ? 'var(--ie-coral-tint)' : 'var(--ie-line-2)',
              border: '1px solid ' + (isGood ? 'var(--ie-coral-soft)' : 'var(--ie-line)'),
            }}>
              <span style={{ fontSize: 20 }}>{t.emoji}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {l.label || key}
                </div>
                {l.tagline && (
                  <div style={{
                    fontSize: 10, fontWeight: 600,
                    color: isGood ? 'var(--ie-coral-deep)' : 'var(--ie-ink-3)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    maxWidth: 150,
                  }}>{l.tagline}</div>
                )}
              </div>
            </div>
          );
        };
        return (
          <div style={{ padding: '0 16px 20px' }}>
            <div style={{
              background: 'white', border: '1px solid var(--ie-line)',
              borderRadius: 20, padding: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 14, background: 'var(--ie-coral-tint)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                }}>{pt.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    {T('profile_my_type')}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em' }}>
                    {loc.label || pt.key}
                    {loc.tagline && <span style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 600, marginLeft: 6 }}>· {loc.tagline}</span>}
                  </div>
                </div>
                <button onClick={onOpenAchievements === undefined ? undefined : undefined} style={{ display: 'none' }}/>
              </div>

              {m.good.length > 0 && (
                <>
                  <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 8 }}>
                    {T('profile_best_match')}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                    {m.good.map(k => chip(k, 'good'))}
                  </div>
                </>
              )}

              {m.tough && m.tough.length > 0 && (
                <>
                  <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 8 }}>
                    {T('profile_tough_match')}
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {m.tough.map(k => (
                      <span key={k} style={{
                        padding: '6px 10px', borderRadius: 999, background: 'var(--ie-line-2)',
                        fontSize: 11, fontWeight: 600, color: 'var(--ie-ink-3)',
                      }}>
                        {PERSONALITY_TYPES[k]?.emoji} {(PERSONALITY_TYPES[k]?.i18n?.[langCode] || PERSONALITY_TYPES[k]?.i18n?.en || {}).label || k}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })()}

      {/* Interests */}
      <div style={{ padding: '4px 20px 8px', fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em' }}>
        {T('profile_interests')}
      </div>
      <div style={{ padding: '0 20px 16px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {USER.interests_country.length > 0 ? USER.interests_country.map(c => (
          <div key={c} style={{
            padding: '8px 12px', borderRadius: 12,
            background: 'white', border: '1px solid var(--ie-line)',
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
          }}>{COUNTRIES[c].flag} {countryName(c, langCode)}</div>
        )) : (
          <button onClick={onEdit} style={{
            padding: '8px 12px', borderRadius: 12,
            background: 'transparent', border: '1px dashed var(--ie-line)',
            color: 'var(--ie-ink-3)', fontSize: 12, fontWeight: 600, cursor: 'pointer',
          }}>{T('profile_no_interests')}</button>
        )}
      </div>

      <div style={{ padding: '4px 20px 8px', fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em' }}>
        {T('profile_hobbies')}
      </div>
      <div style={{ padding: '0 20px 16px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {USER.hobbies.length > 0 ? USER.hobbies.map(h => (
          <span key={h} className="ie-chip">#{hobbyName(h, langCode)}</span>
        )) : (
          <button onClick={onEdit} style={{
            padding: '7px 12px', borderRadius: 999,
            background: 'transparent', border: '1px dashed var(--ie-line)',
            color: 'var(--ie-ink-3)', fontSize: 12, fontWeight: 600, cursor: 'pointer',
          }}>{T('profile_no_hobbies')}</button>
        )}
      </div>

      {/* Menu */}
      <div style={{ padding: '4px 16px' }}>
        <div style={{
          background: 'white', border: '1px solid var(--ie-line)',
          borderRadius: 18, overflow: 'hidden',
        }}>
          {[
            { label: T('profile_menu_ach'), icon: Icon.medal, onClick: onOpenAchievements, badge: (() => { const l = (typeof getAchievements === 'function') ? getAchievements() : ACHIEVEMENTS; return `${l.filter(a=>a.earned).length}/${l.length}`; })() },
            { label: T('profile_menu_kits'), icon: Icon.store, badge: T('profile_menu_kits_badge').replace('{n}','0'), onClick: () => onNav && onNav('store') },
            { label: T('profile_menu_stats'), icon: Icon.book, onClick: () => onNav && onNav('study') },
            { label: T('profile_menu_blocks'), icon: Icon.user, onClick: onOpenSettings },
          ].map((m, i, arr) => (
            <button key={i} onClick={m.onClick} style={{
              width: '100%', padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 12,
              borderBottom: i === arr.length-1 ? 'none' : '1px solid var(--ie-line)',
              textAlign: 'left',
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{m.icon(18)}</div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>{m.label}</div>
              {m.badge && <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontWeight: 600 }}>{m.badge}</div>}
              {Icon.right(16, 'var(--ie-ink-4)')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Profile Edit ────────────────────────────────
function ProfileEdit({ onBack, profile, onSave }) {
  const langCode = (profile && profile.langCode) || 'ko';
  const T = (k) => tt(langCode, k);
  // Initialize editable state from user profile (or USER fallback)
  const initial = {
    name: profile?.name || USER.name,
    handle: USER.handle,
    country: USER.country || 'KR',
    grade: USER.grade,
    interests_country: [...USER.interests_country],
    hobbies: [...USER.hobbies],
    favorite_food: [...USER.favorite_food],
    avatarColor: 0,
  };
  const [name, setName] = React.useState(initial.name);
  const [handle, setHandle] = React.useState(initial.handle);
  const [country, setCountry] = React.useState(initial.country);
  const [grade, setGrade] = React.useState(initial.grade);
  const [interestsCountry, setInterestsCountry] = React.useState(initial.interests_country);
  const [hobbies, setHobbies] = React.useState(initial.hobbies);
  const [avatarColor, setAvatarColor] = React.useState(initial.avatarColor);
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [showGradeDropdown, setShowGradeDropdown] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const colors = [
    'linear-gradient(135deg, #2E6BFF, #7FA9FF)',
    'linear-gradient(135deg, #22c55e, #86efac)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
    'linear-gradient(135deg, #ec4899, #f9a8d4)',
    'linear-gradient(135deg, #8b5cf6, #c4b5fd)',
    'linear-gradient(135deg, #14b8a6, #5eead4)',
  ];

  const grades = GRADE_OPTIONS;
  const allHobbies = HOBBY_OPTIONS;

  const toggleCountry = (code) => {
    setInterestsCountry(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const toggleHobby = (h) => {
    setHobbies(prev =>
      prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h]
    );
  };

  const showToast = (m) => {
    setToast(m);
    setTimeout(() => setToast(null), 2000);
  };

  const handleSave = () => {
    // Mutate USER (in-memory) so home/profile screens reflect changes
    USER.name = name.trim() || USER.name;
    USER.handle = handle.trim() || USER.handle;
    USER.country = country;
    USER.grade = grade;
    USER.interests_country = interestsCountry;
    USER.hobbies = hobbies;
    if (typeof bumpStat === 'function' && typeof USER_STATS !== 'undefined') {
      USER_STATS.profileDone = 1;  // binary flag, not cumulative
    }

    // Also call onSave callback if provided so app-level profile state updates
    if (onSave) {
      onSave({ name: USER.name, handle: USER.handle, country: USER.country, grade: USER.grade });
    }

    showToast(T('edit_toast_saved'));
    setTimeout(onBack, 800);
  };

  return (
    <div style={{ paddingBottom: 100, background: 'var(--ie-bg)', minHeight: '100%', position: 'relative' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: 60, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ie-ink)', color: 'white',
          padding: '10px 18px', borderRadius: 999,
          fontSize: 13, fontWeight: 600, zIndex: 100,
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          animation: 'ie-fadeup .3s ease',
        }}>{toast}</div>
      )}

      <ScreenHeader
        title={T('edit_title')}
        subtitle={T('edit_subtitle')}
        onBack={onBack}
        right={
          <button onClick={handleSave} style={{
            padding: '10px 18px', borderRadius: 12,
            background: 'var(--ie-coral)', color: 'white',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
          }}>{T('edit_save')}</button>
        }
      />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>

        {/* Profile photo */}
        <div style={{ padding: '0 0 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', marginBottom: 10 }}>
            <div style={{
              width: 110, height: 110, borderRadius: '50%',
              background: colors[avatarColor],
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 44, fontWeight: 800,
              transition: 'background .3s',
            }}>{(name || '?').charAt(0).toUpperCase()}</div>
            <button onClick={() => setShowColorPicker(!showColorPicker)} style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 34, height: 34, borderRadius: '50%',
              background: 'var(--ie-ink)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '3px solid var(--ie-bg)', cursor: 'pointer',
            }}>{Icon.camera(16, 'white')}</button>
          </div>
          <button onClick={() => setShowColorPicker(!showColorPicker)} style={{
            fontSize: 13, color: 'var(--ie-coral)', fontWeight: 700, cursor: 'pointer', padding: '6px 12px',
          }}>
            {showColorPicker ? T('edit_avatar_close') : T('edit_avatar_change')}
          </button>
          {showColorPicker && (
            <div style={{ marginTop: 14, display: 'flex', gap: 10, animation: 'ie-fadeup .3s ease', flexWrap: 'wrap', justifyContent: 'center' }}>
              {colors.map((c, i) => (
                <button key={i} onClick={() => setAvatarColor(i)} style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: c, cursor: 'pointer',
                  border: avatarColor === i ? '3px solid var(--ie-ink)' : '3px solid transparent',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  padding: 0,
                }}/>
              ))}
            </div>
          )}
        </div>

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Name */}
          <EditableTextField
            label={T('edit_field_name')}
            value={name}
            onChange={setName}
            placeholder={T('edit_field_name')}
            maxLength={20}
          />

          {/* Username */}
          <EditableTextField
            label={T('edit_field_username')}
            value={handle}
            onChange={setHandle}
            placeholder="yourname"
            prefix="@"
            maxLength={30}
            hint={T('edit_field_username_hint')}
          />

          {/* My country — shown on profile */}
          <div>
            <FieldLabel>{T('edit_field_country')}</FieldLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
              {Object.entries({ KR: { flag: '🇰🇷', name: '한국' }, ...COUNTRIES }).map(([code, c]) => {
                const on = code === country;
                return (
                  <button key={code} onClick={() => setCountry(code)} style={{
                    padding: '12px', borderRadius: 12,
                    background: on ? 'var(--ie-coral-tint)' : 'white',
                    border: '2px solid ' + (on ? 'var(--ie-coral)' : 'var(--ie-line)'),
                    color: on ? 'var(--ie-coral-deep)' : 'var(--ie-ink-2)',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'all .15s',
                  }}>
                    <span style={{ fontSize: 18 }}>{c.flag}</span>
                    <span style={{ flex: 1, textAlign: 'left' }}>{countryName(code, langCode)}</span>
                    {on && Icon.check(16, 'var(--ie-coral)')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade — dropdown */}
          <div style={{ position: 'relative' }}>
            <FieldLabel>{T('edit_field_grade')}</FieldLabel>
            <button
              onClick={() => setShowGradeDropdown(!showGradeDropdown)}
              style={{
                width: '100%', background: 'white',
                border: '2px solid ' + (showGradeDropdown ? 'var(--ie-coral)' : 'var(--ie-line)'),
                borderRadius: 12, padding: '14px 16px',
                fontSize: 15, fontWeight: 600, textAlign: 'left',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'border-color .15s',
              }}
            >
              <span>{grade ? gradeName(grade, langCode) : ''}</span>
              <span style={{ transition: 'transform .2s', transform: showGradeDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </button>
            {showGradeDropdown && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                background: 'white', border: '1px solid var(--ie-line)',
                borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                maxHeight: 260, overflowY: 'auto', zIndex: 20,
                padding: 6,
              }}>
                {grades.map(g => (
                  <button key={g.id} onClick={() => { setGrade(g.id); setShowGradeDropdown(false); }} style={{
                    width: '100%', padding: '10px 12px', borderRadius: 8,
                    background: g.id === grade ? 'var(--ie-coral-tint)' : 'transparent',
                    color: g.id === grade ? 'var(--ie-coral-deep)' : 'var(--ie-ink)',
                    fontSize: 14, fontWeight: g.id === grade ? 700 : 500,
                    textAlign: 'left', cursor: 'pointer',
                  }}
                  onMouseOver={e => { if (g.id !== grade) e.currentTarget.style.background = 'var(--ie-line-2)'; }}
                  onMouseOut={e => { if (g.id !== grade) e.currentTarget.style.background = 'transparent'; }}
                  >
                    {gradeName(g.id, langCode)}
                  </button>
                ))}
              </div>
            )}
            <div style={{ fontSize: 12, color: 'var(--ie-coral)', marginTop: 6, fontWeight: 500 }}>
              {T('edit_field_grade_hint')}
            </div>
          </div>

          {/* Interests country */}
          <div>
            <FieldLabel>{T('edit_field_interests')} <span style={{ color: 'var(--ie-ink-4)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>· {interestsCountry.length}{T('edit_field_selected')}</span></FieldLabel>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {Object.entries(COUNTRIES).map(([code, c]) => {
                const on = interestsCountry.includes(code);
                return (
                  <button key={code} onClick={() => toggleCountry(code)} style={{
                    padding: '10px 14px', borderRadius: 12,
                    background: on ? 'var(--ie-coral-tint)' : 'white',
                    border: '1.5px solid ' + (on ? 'var(--ie-coral)' : 'var(--ie-line)'),
                    color: on ? 'var(--ie-coral-deep)' : 'var(--ie-ink-2)',
                    fontSize: 13, fontWeight: 600, display: 'flex', gap: 6,
                    cursor: 'pointer', transition: 'all .15s',
                  }}>{c.flag} {countryName(code, langCode)}{on && ' ✓'}</button>
                );
              })}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <FieldLabel>{T('edit_field_hobbies')} <span style={{ color: 'var(--ie-ink-4)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>· {hobbies.length}{T('edit_field_selected')}</span></FieldLabel>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {allHobbies.map(h => {
                const on = hobbies.includes(h.id);
                return (
                  <button key={h.id} onClick={() => toggleHobby(h.id)} style={{
                    padding: '8px 14px', borderRadius: 999,
                    background: on ? 'var(--ie-ink)' : 'white',
                    border: '1.5px solid ' + (on ? 'var(--ie-ink)' : 'var(--ie-line)'),
                    color: on ? 'white' : 'var(--ie-ink-2)',
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', transition: 'all .15s',
                  }}>#{hobbyName(h.id, langCode)}</button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Save button at bottom too */}
        <div style={{ marginTop: 32, paddingBottom: 40 }}>
          <button onClick={handleSave} style={{
            width: '100%', padding: 16, borderRadius: 14,
            background: 'var(--ie-coral)', color: 'white',
            fontSize: 15, fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            {Icon.check(20, 'white')} {T('edit_save_bottom')}
          </button>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return <div style={{ fontSize: 11, color: 'var(--ie-ink-3)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 8, textTransform: 'uppercase' }}>{children}</div>;
}

function EditableTextField({ label, value, onChange, placeholder, prefix, maxLength, hint }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div style={{
        background: 'white',
        border: '2px solid ' + (focused ? 'var(--ie-coral)' : 'var(--ie-line)'),
        borderRadius: 12,
        display: 'flex', alignItems: 'center',
        padding: '2px 4px 2px 14px',
        transition: 'border-color .15s',
      }}>
        {prefix && <span style={{ color: 'var(--ie-ink-4)', fontSize: 15, fontWeight: 600, marginRight: 2 }}>{prefix}</span>}
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{
            flex: 1, border: 'none', outline: 'none',
            padding: '12px 4px', fontSize: 15, fontWeight: 600,
            background: 'transparent', fontFamily: 'inherit',
            color: 'var(--ie-ink)',
            minWidth: 0,
          }}
        />
        {maxLength && (
          <span style={{ fontSize: 11, color: 'var(--ie-ink-4)', padding: '0 10px', fontFamily: 'var(--font-mono)' }}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
      {hint && <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

// ─── Settings ─────────────────────────────────────
function SettingsScreen({ onBack, onLogout, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  const groups = [
    { title: '계정', items: [
      { label: '알림', right: '켜짐' },
      { label: '언어', right: '한국어' },
      { label: '개인정보 보호', right: '' },
    ]},
    { title: '매칭', items: [
      { label: '관심 국가 우선', right: '' },
      { label: '연령대 필터', right: '10-19세' },
      { label: '차단한 사용자', right: '0명' },
    ]},
    { title: '지원', items: [
      { label: '이용 가이드', right: '' },
      { label: '고객센터', right: '' },
      { label: '앱 정보', right: 'v1.0.0' },
    ]},
  ];
  return (
    <div style={{ paddingBottom: 100, background: 'var(--ie-bg)', minHeight: '100%' }}>
      <ScreenHeader title={T('settings_title')} subtitle={T('settings_subtitle')} onBack={onBack} />

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {groups.map((g, gi) => (
          <div key={gi}>
            <FieldLabel>{g.title}</FieldLabel>
            <div style={{ background: 'white', border: '1px solid var(--ie-line)', borderRadius: 16, overflow: 'hidden' }}>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
                  borderBottom: i === g.items.length - 1 ? 'none' : '1px solid var(--ie-line)',
                }}>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{it.label}</div>
                  {it.right && <div style={{ fontSize: 13, color: 'var(--ie-ink-3)' }}>{it.right}</div>}
                  {Icon.right(16, 'var(--ie-ink-4)')}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button onClick={() => {
          if (confirm(T('settings_logout_confirm'))) {
            onLogout && onLogout();
          }
        }} style={{
          padding: 14, borderRadius: 14, background: 'white',
          border: '1px solid var(--ie-line)',
          fontSize: 14, fontWeight: 600, color: '#e63946',
          marginTop: 8, cursor: 'pointer',
        }}>{T('settings_logout')}</button>
      </div>
    </div>
  );
}

Object.assign(window, { QRScanner, StoreScreen, AchievementsScreen, ProfileScreen, ProfileEdit, SettingsScreen });
