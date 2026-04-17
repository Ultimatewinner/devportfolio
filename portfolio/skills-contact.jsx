// Skills + Education + Contact + Footer
function CineSkills() {
  const cats = [
    { icon: '◆', title: 'Languages', items: ['C#', 'C++', 'Python'] },
    { icon: '▶', title: 'Engines', items: ['Unity', 'Unreal Engine', 'Blueprints (UE)', 'Panda3D'] },
    { icon: '◎', title: 'Specialties', items: ['Multiplayer / Netcode', 'VR Development', 'Gameplay Systems', 'Level Design', 'AI Programming', 'Game Balancing'] },
    { icon: '◇', title: 'Tools', items: ['Blender', 'Git', 'Photoshop', 'Illustrator'] },
    { icon: '△', title: 'Soft skills', items: ['Leadership', 'Adaptability', 'Teamwork', 'Quick Learner'] },
  ];
  return (
    <div style={{ padding: '140px 0 120px', borderTop: `1px solid ${cine.line}` }}>
      <CineSectionHead
        chapter="04 · Stack"
        title={<>Skills,<br/><span style={{color: cine.accent}}>in detail.</span></>}
      />
      <div style={{
        padding: '0 56px', display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)', gap: 0,
        borderTop: `1px solid ${cine.line}`,
      }}>
        {cats.map((c, i, arr) => (
          <div key={c.title} style={{
            padding: '36px 28px',
            borderRight: i < arr.length - 1 ? `1px solid ${cine.line}` : 'none',
            borderBottom: `1px solid ${cine.line}`,
          }}>
            <div style={{
              fontSize: 22, color: cine.accent, marginBottom: 14,
            }}>{c.icon}</div>
            <div style={{
              fontFamily: cine.mono, fontSize: 10, letterSpacing: 2,
              textTransform: 'uppercase', color: cine.dim, marginBottom: 18,
            }}>{c.title}</div>
            <ul style={{
              margin: 0, padding: 0, listStyle: 'none',
              fontFamily: cine.body, fontSize: 15, lineHeight: 2,
              color: cine.ink,
            }}>
              {c.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CineEducation() {
  return (
    <div style={{ padding: '100px 56px 40px', borderTop: `1px solid ${cine.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div style={{
            fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
            color: cine.accent, textTransform: 'uppercase',
          }}>Education</div>
        </div>
        <div>
          <div style={{
            fontFamily: cine.display, fontWeight: 500, fontSize: 32,
            letterSpacing: -0.5, color: cine.ink, marginBottom: 8,
          }}>Universidad Andrés Bello</div>
          <div style={{ fontFamily: cine.mono, fontSize: 11, letterSpacing: 1.5, color: cine.dim, marginBottom: 8 }}>MAR 2019, MAR 2023</div>
          <div style={{ fontFamily: cine.body, fontSize: 15, color: cine.ink2 }}>B.S. Game Design</div>
        </div>
        <div style={{ fontFamily: cine.body, fontSize: 15.5, lineHeight: 1.65, color: cine.ink2 }}>
          Hands-on work across individual and team projects using state-of-the-art equipment and industry-experienced faculty. Built a portfolio spanning game programming, level design, and systems architecture.
        </div>
      </div>
    </div>
  );
}

function CineContact() {
  return (
    <div style={{
      padding: '160px 56px 160px', borderTop: `1px solid ${cine.line}`,
      background: 'radial-gradient(ellipse at 28% 50%, #170e0b 0%, #050507 60%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', right: -180, transform: 'translateY(-50%)',
        width: 700, height: 700, opacity: 0.35,
      }}>
        <svg viewBox="0 0 700 700" width="100%" height="100%" style={{ animation: 'cineSpin 180s linear infinite' }}>
          <circle cx="350" cy="350" r="330" fill="none" stroke={cine.accent} strokeOpacity="0.2"/>
          <circle cx="350" cy="350" r="240" fill="none" stroke={cine.accent} strokeOpacity="0.35" strokeDasharray="2 8"/>
          <circle cx="350" cy="350" r="140" fill="none" stroke={cine.accent} strokeOpacity="0.55"/>
          <circle cx="350" cy="350" r="60" fill={cine.accent} fillOpacity="0.18"/>
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
          color: cine.accent, textTransform: 'uppercase', marginBottom: 24,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: cine.accent,
            boxShadow: `0 0 10px ${cine.accent}`,
          }}/>
          05 · Contact &nbsp;·&nbsp; Currently open to roles
        </div>
        <h2 style={{
          fontFamily: cine.display, fontWeight: 500, fontSize: 104,
          letterSpacing: -3, lineHeight: 0.92, margin: '0 0 48px',
          color: cine.ink,
        }}>
          Let's build<br/>something <span style={{ color: cine.accent }}>that reacts.</span>
        </h2>

        <form style={{ maxWidth: 560 }}>
          <input type="email" placeholder="your@email" style={inputStyle}/>
          <textarea placeholder="What are you building?" rows={5} style={{...inputStyle, resize: 'vertical', minHeight: 120}}/>
          <button type="button" style={{
            padding: '16px 28px', background: cine.accent, color: '#0a0a0c',
            fontFamily: cine.body, fontWeight: 600, fontSize: 14,
            letterSpacing: 0.3, border: 'none', cursor: 'pointer',
          }}>▸ Send message</button>
        </form>

        <div style={{
          marginTop: 56, display: 'flex', gap: 32,
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
          textTransform: 'uppercase', color: cine.dim,
        }}>
          <a href="https://github.com/Ultimatewinner" target="_blank" style={contactLink}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/skyreeder/" target="_blank" style={contactLink}>LinkedIn ↗</a>
          <a href="https://ultimatewinner.itch.io/" target="_blank" style={contactLink}>itch.io ↗</a>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'block', width: '100%',
  background: 'transparent', border: 'none',
  borderBottom: `1px solid ${cine.lineStrong}`,
  padding: '18px 0', marginBottom: 12,
  fontFamily: cine.body, fontSize: 17, color: cine.ink,
  outline: 'none',
};
const contactLink = {
  color: cine.ink, textDecoration: 'none',
  borderBottom: `1px solid ${cine.line}`, paddingBottom: 4,
};

function CineFooter() {
  return (
    <div style={{
      padding: '28px 56px', borderTop: `1px solid ${cine.line}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: cine.mono, fontSize: 10, letterSpacing: 2,
      textTransform: 'uppercase', color: cine.dim,
      background: cine.bgDeep,
    }}>
      <span>© 2026 Victor Rosas</span>
      <span>Designed & coded from Santiago, CL</span>
      <span>↑ Back to top</span>
    </div>
  );
}

window.CineSkills = CineSkills;
window.CineEducation = CineEducation;
window.CineContact = CineContact;
window.CineFooter = CineFooter;
