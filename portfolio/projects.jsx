// Projects: cinematic stacked with strong imagery
function CineProjects() {
  const projects = [
    { n: '01', img: 'assets/Porton.png', title: 'Portonazo', kind: 'Co-op Beat-em-up',
      tech: ['Unity', 'C#', 'Local multiplayer', 'Combat systems'],
      role: 'Gameplay & combat',
      desc: 'Two-player revenge through gang-warring territories. Rise through rival gangs and uncover who murdered your older brother. Animation-driven impact, coordinated pairs, layered weapon feel.',
      url: 'https://ultimatewinner.itch.io/portonazo' },
    { n: '02', img: 'assets/Donny.png', title: 'Donny & Dinna', kind: 'Cooperative Puzzle',
      tech: ['Unity', 'C#', 'Networked logic', '2-player'],
      role: 'Networked puzzle logic',
      desc: 'Two-player oxygen-recovery puzzle. Built around pairs who have to talk, where communication is the mechanic, not the UI.',
      url: 'https://ultimatewinner.itch.io/donnydinna' },
    { n: '03', img: 'assets/Desafio.png', title: 'El Desafío del Mago', kind: 'Puzzle-Platformer',
      tech: ['Unity', 'C#', 'Level design'],
      role: 'Level & puzzle systems',
      desc: 'A magician\'s escalating absurdity across increasingly difficult levels. Comedic timing meets clever platforming with quirky world elements throughout.',
      url: 'https://ultimatewinner.itch.io/eldesafodelmago' },
    { n: '04', img: 'assets/Mateo.png', title: 'Mateo: Aventura Jurásica', kind: 'Adventure Puzzle',
      tech: ['Unity', 'C#', 'State systems'],
      role: 'Time-travel state system',
      desc: 'A time-traveling child collects ancient stones across eras to return to the present. Statue-driven navigation, dinosaur allies, layered puzzle flow.',
      url: 'https://ultimatewinner.itch.io/mateo-una-aventura-jurasica' },
  ];

  return (
    <div style={{ padding: '140px 0 100px', background: cine.bg, borderTop: `1px solid ${cine.line}` }}>
      <CineSectionHead
        chapter="02 · Selected work"
        title={<>Shipped<br/><span style={{color: cine.accent}}>& played.</span></>}
        meta={<>04 PROJECTS<br/>2022, PRESENT<br/>ITCH.IO</>}
      />

      {projects.map((p, i) => (
        <div key={p.n} style={{
          display: 'grid',
          gridTemplateColumns: i % 2 === 0 ? '1fr 520px' : '520px 1fr',
          gap: 64,
          padding: '64px 56px',
          borderTop: `1px solid ${cine.line}`,
          alignItems: 'center',
        }}>
          <div style={{
            order: i % 2 === 0 ? 0 : 1,
            aspectRatio: '16/10',
            backgroundImage: `linear-gradient(180deg, rgba(10,10,12,0) 50%, rgba(10,10,12,0.45) 100%), url(${p.img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'contrast(1.08) saturate(0.92)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 16, left: 16,
              fontFamily: cine.mono, fontSize: 10, letterSpacing: 2,
              color: cine.ink, background: 'rgba(10,10,12,0.72)',
              padding: '6px 10px', letterSpacing: 2,
            }}>№ {p.n} / 04</div>
          </div>
          <div>
            <div style={{
              fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
              color: cine.accent, marginBottom: 20, textTransform: 'uppercase',
            }}>{p.kind}</div>
            <h3 style={{
              fontFamily: cine.display, fontWeight: 500, fontSize: 60,
              letterSpacing: -1.5, margin: '0 0 20px', lineHeight: 0.98,
              color: cine.ink,
            }}>{p.title}</h3>
            <div style={{
              fontFamily: cine.body, fontSize: 13, color: cine.accent,
              marginBottom: 20, letterSpacing: 0.5,
            }}>Role / {p.role}</div>
            <div style={{
              fontFamily: cine.body, fontSize: 16, lineHeight: 1.6,
              color: cine.ink2, marginBottom: 32, maxWidth: 460,
            }}>{p.desc}</div>
            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
            }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  fontFamily: cine.mono, fontSize: 10, letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  padding: '6px 10px', border: `1px solid ${cine.line}`,
                  color: cine.dim,
                }}>{t}</span>
              ))}
            </div>
            <a href={p.url} target="_blank" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: cine.mono, fontSize: 12, letterSpacing: 2,
              textTransform: 'uppercase', color: cine.ink,
              paddingBottom: 4, borderBottom: `1px solid ${cine.accent}`,
              textDecoration: 'none',
            }}>
              Play on itch.io <span style={{color: cine.accent}}>↗</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
window.CineProjects = CineProjects;
