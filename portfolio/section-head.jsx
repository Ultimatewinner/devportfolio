// Section header helper
function CineSectionHead({ chapter, title, meta }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      padding: '0 56px', marginBottom: 72,
    }}>
      <div>
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
          color: cine.accent, textTransform: 'uppercase', marginBottom: 18,
        }}>{chapter}</div>
        <h2 style={{
          fontFamily: cine.display, fontWeight: 500, fontSize: 84,
          letterSpacing: -2.5, margin: 0, lineHeight: 0.95,
          color: cine.ink,
        }}>{title}</h2>
      </div>
      {meta && (
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 2,
          color: cine.dim, textTransform: 'uppercase', textAlign: 'right',
          lineHeight: 1.8,
        }}>{meta}</div>
      )}
    </div>
  );
}
window.CineSectionHead = CineSectionHead;
