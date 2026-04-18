// Section header helper
function CineSectionHead({ chapter, title, meta }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      padding: isMobile ? '0 24px' : '0 56px',
      marginBottom: isMobile ? 40 : 72,
    }}>
      <div>
        <div style={{
          fontFamily: cine.mono, fontSize: 11, letterSpacing: 3,
          color: cine.accent, textTransform: 'uppercase', marginBottom: 18,
        }}>{chapter}</div>
        <h2 style={{
          fontFamily: cine.display, fontWeight: 500,
          fontSize: isMobile ? 44 : 84,
          letterSpacing: isMobile ? -1 : -2.5,
          margin: 0, lineHeight: 0.95,
          color: cine.ink,
        }}>{title}</h2>
      </div>
      {meta && !isMobile && (
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
