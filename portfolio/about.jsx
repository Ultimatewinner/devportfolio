// About + Experience timeline
function CineAbout() {
  const isMobile = useIsMobile();
  const px = isMobile ? '24px' : '56px';

  const exp = [
    { date: 'Oct 2024, Present', company: 'Dataverso', role: 'Programmer',
      bullets: [
        'Architected a real-time multiplayer system over client-server networking for seamless, low-latency multi-user collaboration, directly comparable to online game netcode.',
        'Built a robust save/load system for reliable persistence of complex application state across sessions, applicable to open-world state management and streaming.',
        'Designed pattern-recognition and algorithmic simulation systems demonstrating large-scale, performance-conscious C#.',
        'Implemented cross-platform export/import for CSV, OBJ and FBX.',
      ] },
    { date: 'Apr 2023, Oct 2024', company: 'Minverso', role: 'Gameplay Programmer / Lead',
      award: 'Best Development Award · Expomin & Perumin 2023',
      bullets: [
        'Shipped FLSMIDTH, an award-winning real-time interactive 3D application with physics-driven interactions and responsive game-like environments for live audiences.',
        'Wrote 300+ modular Unity C# scripts across 4 major projects, with a focus on efficiency and reuse across a large codebase.',
        'Designed player interaction and simulation systems using Unity physics, animation controllers and VR principles.',
        'Led full development lifecycle across 6 projects on tight deadlines.',
      ] },
    { date: 'Aug, Dec 2022', company: 'Sudaka Games', role: 'Gameplay Programmer Intern',
      bullets: [
        'Designed and fixed 9 game levels, applying level design and critical thinking.',
        'Wrote 20+ C# scripts including AI and randomization, reducing bugs by 50%.',
        'Improved UI placement and design by 40%, and contributed 50%+ of new content.',
      ] },
  ];

  return (
    <div id="experience" style={{ padding: isMobile ? '80px 0 60px' : '140px 0 120px' }}>
      <CineSectionHead
        chapter="01 · Profile"
        title={<>Who I am,<br/><span style={{color: cine.accent}}>what I ship.</span></>}
        meta={<>4+ YEARS<br/>3 COMPANIES<br/>10+ SHIPPED</>}
      />

      {/* About copy */}
      <div style={{
        padding: `0 ${px}`, marginBottom: isMobile ? 60 : 120,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '280px 1fr',
        gap: isMobile ? 24 : 80,
      }}>
        <div>
          <div style={{
            fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
            color: cine.dim, textTransform: 'uppercase', marginBottom: 16,
          }}>About</div>
          <div style={{
            width: 64, height: 1, background: cine.accent, marginBottom: 24,
          }}/>
        </div>
        <div style={{
          fontFamily: cine.display,
          fontSize: isMobile ? 22 : 30,
          lineHeight: 1.35,
          color: cine.ink, letterSpacing: -0.5, maxWidth: 880, fontWeight: 400,
        }}>
          Gameplay programmer with 4+ years shipping Unity & C#, across multiplayer
          netcode, gameplay mechanics, and interactive simulations. Award-winning
          industrial VR and co-op action. I care about clean, performant code
          and pushing how gameplay can <em style={{color: cine.accent, fontStyle: 'italic'}}>feel.</em>
        </div>
      </div>

      {/* Experience timeline */}
      <div style={{ padding: `0 ${px}` }}>
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
          color: cine.accent, textTransform: 'uppercase', marginBottom: 32,
        }}>Experience log</div>

        {exp.map((e, i) => (
          <div key={e.company} style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
            gap: isMobile ? 16 : 56,
            padding: isMobile ? '32px 0' : '44px 0',
            borderTop: `1px solid ${cine.line}`,
            borderBottom: i === exp.length - 1 ? `1px solid ${cine.line}` : 'none',
          }}>
            <div>
              <div style={{
                fontFamily: cine.mono, fontSize: 11, letterSpacing: 1.5,
                color: cine.dim, textTransform: 'uppercase', marginBottom: 12,
              }}>{e.date}</div>
              <div style={{
                fontFamily: cine.display, fontSize: isMobile ? 22 : 28, fontWeight: 500,
                color: cine.ink, letterSpacing: -0.5, lineHeight: 1.1,
                marginBottom: 6,
              }}>{e.company}</div>
              <div style={{
                fontFamily: cine.body, fontSize: 14, color: cine.ink2,
              }}>{e.role}</div>
              {e.award && (
                <div style={{
                  marginTop: 16, padding: '8px 12px',
                  background: cine.accentSoft, color: cine.accent,
                  fontFamily: cine.mono, fontSize: 10, letterSpacing: 1,
                  textTransform: 'uppercase', display: 'inline-block',
                }}>★ {e.award}</div>
              )}
            </div>
            <ul style={{
              margin: 0, padding: 0, listStyle: 'none',
              fontFamily: cine.body, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.65,
              color: cine.ink2,
            }}>
              {e.bullets.map((b, k) => (
                <li key={k} style={{
                  paddingLeft: 22, position: 'relative', marginBottom: 14,
                }}>
                  <span style={{
                    position: 'absolute', left: 0, top: 10,
                    width: 8, height: 1, background: cine.accent,
                  }}/>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
window.CineAbout = CineAbout;
