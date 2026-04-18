// Hero: cinematic, spatial, with motion
function CineHero() {
  const isMobile = useIsMobile();

  return (
    <div style={{
      position: 'relative', minHeight: isMobile ? 'auto' : 900, overflow: 'hidden',
      background: 'radial-gradient(ellipse at 72% 42%, #1d1410 0%, #0a0a0c 58%)',
    }}>
      <CineNav />

      {/* concentric VR rings — hidden on mobile */}
      {!isMobile && (
        <svg viewBox="0 0 900 900" style={{
          position: 'absolute', top: '50%', right: -220,
          transform: 'translateY(-50%)', width: 1100, height: 1100,
          animation: 'cineSpin 120s linear infinite',
        }}>
          <defs>
            <radialGradient id="cg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={cine.accent} stopOpacity="0.85"/>
              <stop offset="100%" stopColor={cine.accent} stopOpacity="0"/>
            </radialGradient>
          </defs>
          <g>
            <circle cx="450" cy="450" r="430" fill="none" stroke={cine.accent} strokeOpacity="0.08"/>
            <circle cx="450" cy="450" r="360" fill="none" stroke={cine.accent} strokeOpacity="0.13" strokeDasharray="2 10"/>
            <circle cx="450" cy="450" r="290" fill="none" stroke={cine.accent} strokeOpacity="0.22"/>
            <circle cx="450" cy="450" r="220" fill="none" stroke={cine.accent} strokeOpacity="0.34"/>
            <circle cx="450" cy="450" r="150" fill="none" stroke={cine.accent} strokeOpacity="0.55" strokeWidth="1.3"/>
            <circle cx="450" cy="450" r="85" fill="url(#cg)"/>
            <circle cx="450" cy="450" r="10" fill={cine.accent}/>
            <line x1="450" y1="15" x2="450" y2="45" stroke={cine.accent} strokeOpacity="0.5"/>
            <line x1="450" y1="855" x2="450" y2="885" stroke={cine.accent} strokeOpacity="0.5"/>
            <line x1="15" y1="450" x2="45" y2="450" stroke={cine.accent} strokeOpacity="0.5"/>
            <line x1="855" y1="450" x2="885" y2="450" stroke={cine.accent} strokeOpacity="0.5"/>
          </g>
        </svg>
      )}

      {/* scan lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
      }}/>

      {/* vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,7,0.6) 100%)',
      }}/>

      {/* content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: isMobile ? '120px 24px 60px' : '180px 56px 120px',
        maxWidth: 1100,
      }}>
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
          color: cine.accent, marginBottom: 40, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: cine.accent,
            boxShadow: `0 0 12px ${cine.accent}`,
            animation: 'cinePulse 2s ease-in-out infinite',
          }}/>
          Now playing &nbsp;·&nbsp; Gameplay programmer
        </div>
        <h1 style={{
          fontFamily: cine.display, fontWeight: 500,
          fontSize: isMobile ? 56 : 148,
          lineHeight: 0.9,
          letterSpacing: isMobile ? -2 : -5,
          margin: '0 0 32px',
        }}>
          Build<br/>worlds that<br/>
          <span style={{ color: cine.accent }}>react.</span>
        </h1>
        <div style={{
          fontFamily: cine.body,
          fontSize: isMobile ? 16 : 19,
          lineHeight: 1.55,
          color: cine.ink2, maxWidth: 620,
          marginBottom: isMobile ? 40 : 56,
        }}>
          I'm Victor, a gameplay programmer building Unity &amp; C# systems for VR
          and multiplayer. Award-winning industrial simulations, cooperative action,
          netcode, and physics: the unglamorous backbone that makes game feel real.
        </div>
        <div style={{
          display: 'flex', gap: 16, alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}>
          <a href="Resume/CurriculumVictor.pdf" download style={{
            padding: '16px 28px', background: cine.accent, color: '#0a0a0c',
            fontFamily: cine.body, fontWeight: 600, fontSize: 14,
            letterSpacing: 0.3, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>▸ Download CV</a>
          <a onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} style={{
            padding: '16px 28px', border: `1px solid ${cine.lineStrong}`,
            color: cine.ink, fontFamily: cine.body, fontSize: 14,
            textDecoration: 'none', letterSpacing: 0.3, cursor: 'pointer',
          }}>See selected work</a>
        </div>
      </div>

      {/* bottom HUD strip */}
      <div style={{
        position: isMobile ? 'relative' : 'absolute',
        bottom: 0, left: 0, right: 0, zIndex: 2,
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        borderTop: `1px solid ${cine.line}`,
        marginTop: isMobile ? 40 : 0,
      }}>
        {[
          ['Years', '4+'],
          ['Projects shipped', '10+'],
          ['Industry award', 'Expomin · Perumin'],
          ['Currently', 'Dataverso'],
        ].map(([k, v], i, arr) => (
          <div key={k} style={{
            padding: isMobile ? '18px 20px' : '22px 28px',
            borderRight: isMobile
              ? (i % 2 === 0 ? `1px solid ${cine.line}` : 'none')
              : (i < arr.length - 1 ? `1px solid ${cine.line}` : 'none'),
            borderBottom: isMobile && i < 2 ? `1px solid ${cine.line}` : 'none',
            background: 'rgba(5,5,7,0.55)',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              fontFamily: cine.mono, fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', color: cine.dim, marginBottom: 6,
            }}>{k}</div>
            <div style={{ fontFamily: cine.display, fontSize: isMobile ? 18 : 22, color: cine.ink, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes cineSpin { to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes cinePulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}
window.CineHero = CineHero;
