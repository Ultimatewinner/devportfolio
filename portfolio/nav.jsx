// Top nav
function CineNav() {
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
        <a style={navLink}>Work</a>
        <a style={navLink}>Experience</a>
        <a style={navLink}>Code</a>
        <a style={navLink}>Résumé</a>
        <a style={navLink}>Contact</a>
      </span>
      <span>Santiago · CL</span>
    </div>
  );
}
const navLink = { color: cine.ink, opacity: 0.7, textDecoration: 'none', cursor: 'pointer' };
window.CineNav = CineNav;
