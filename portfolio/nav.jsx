// Top nav
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function CineNav() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  if (isMobile) {
    return (
      <>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 24px',
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
          textTransform: 'uppercase', color: cine.dim,
        }}>
          <span style={{ color: cine.ink }}>
            <span style={{ color: cine.accent }}>●</span>&nbsp;&nbsp;V. ROSAS
          </span>
          <button onClick={() => setOpen(true)} style={{
            background: 'none', border: `1px solid ${cine.lineStrong}`,
            color: cine.ink, padding: '8px 14px', cursor: 'pointer',
            fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
          }}>≡ MENU</button>
        </div>

        {open && (
          <div style={{
            position: 'fixed', inset: 0, background: cine.bgDeep,
            zIndex: 100, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', gap: 40,
          }}>
            <button onClick={() => setOpen(false)} style={{
              position: 'absolute', top: 24, right: 24,
              background: 'none', border: 'none', color: cine.dim,
              cursor: 'pointer', fontFamily: cine.mono, fontSize: 11,
              letterSpacing: 2, textTransform: 'uppercase',
            }}>✕ CLOSE</button>
            {[['Work', 'work'], ['Experience', 'experience'], ['Code', 'code'], ['Contact', 'contact']].map(([label, id]) => (
              <a key={id} onClick={() => { scrollTo(id); setOpen(false); }} style={{
                color: cine.ink, textDecoration: 'none', cursor: 'pointer',
                fontFamily: cine.display, fontSize: 42, fontWeight: 500, letterSpacing: -1,
              }}>{label}</a>
            ))}
            <a href="Resume/CurriculumVictor.pdf" download onClick={() => setOpen(false)} style={{
              color: cine.accent, textDecoration: 'none',
              fontFamily: cine.display, fontSize: 42, fontWeight: 500, letterSpacing: -1,
            }}>Résumé ↓</a>
          </div>
        )}
      </>
    );
  }

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '28px 56px',
      fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
      textTransform: 'uppercase', color: cine.dim,
    }}>
      <span style={{ color: cine.ink }}>
        <span style={{ color: cine.accent }}>●</span>&nbsp;&nbsp;V. ROSAS
      </span>
      <span style={{ display: 'flex', gap: 32 }}>
        <a style={navLink} onClick={() => scrollTo('work')}>Work</a>
        <a style={navLink} onClick={() => scrollTo('experience')}>Experience</a>
        <a style={navLink} onClick={() => scrollTo('code')}>Code</a>
        <a href="Resume/CurriculumVictor.pdf" download style={navLink}>Résumé</a>
        <a style={navLink} onClick={() => scrollTo('contact')}>Contact</a>
      </span>
      <span>Santiago · CL</span>
    </div>
  );
}
const navLink = { color: cine.ink, opacity: 0.7, textDecoration: 'none', cursor: 'pointer' };
window.CineNav = CineNav;
