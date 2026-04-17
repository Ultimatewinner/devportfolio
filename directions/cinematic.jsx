// Direction C — VR / Cinematic
// Dark, spatial, big imagery, minimal chrome, one subtle motion element.

const cinematicStyles = {
  bg: '#0a0a0c',
  surface: '#111114',
  ink: '#f2f0ea',
  dim: '#6c6a66',
  line: 'rgba(255,255,255,0.08)',
  accent: '#ff6a3d',  // VR warm accent
  display: '"Space Grotesk", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
};

function CinematicArtboard() {
  const s = cinematicStyles;
  return (
    <div style={{
      width: 1280, background: s.bg, color: s.ink,
      fontFamily: s.body, fontSize: 15, lineHeight: 1.6, overflow: 'hidden',
    }}>
      {/* ── Hero ── full bleed, huge type, one spatial element ──── */}
      <div style={{
        position: 'relative', height: 820, overflow: 'hidden',
        background: 'radial-gradient(circle at 72% 38%, #1d1410 0%, #0a0a0c 60%)',
      }}>
        {/* concentric VR rings */}
        <svg viewBox="0 0 800 800" style={{
          position: 'absolute', top: '50%', right: -180,
          transform: 'translateY(-50%)', width: 900, height: 900,
          opacity: 0.55,
        }}>
          <defs>
            <radialGradient id="rg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={s.accent} stopOpacity="0.9"/>
              <stop offset="100%" stopColor={s.accent} stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="380" fill="none" stroke={s.accent} strokeOpacity="0.15" strokeWidth="1"/>
          <circle cx="400" cy="400" r="320" fill="none" stroke={s.accent} strokeOpacity="0.22" strokeWidth="1"/>
          <circle cx="400" cy="400" r="260" fill="none" stroke={s.accent} strokeOpacity="0.32" strokeWidth="1"/>
          <circle cx="400" cy="400" r="200" fill="none" stroke={s.accent} strokeOpacity="0.45" strokeWidth="1"/>
          <circle cx="400" cy="400" r="140" fill="none" stroke={s.accent} strokeOpacity="0.65" strokeWidth="1.5"/>
          <circle cx="400" cy="400" r="80" fill="url(#rg)"/>
          <circle cx="400" cy="400" r="8" fill={s.accent}/>
        </svg>

        {/* scan lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
        }}/>

        {/* top bar */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '28px 56px',
          fontFamily: s.mono, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          color: s.dim,
        }}>
          <span style={{ color: s.ink }}>
            <span style={{ color: s.accent }}>●</span>&nbsp; VR · MP · GAMEPLAY
          </span>
          <span>Victor Rosas &nbsp;/&nbsp; 2026</span>
          <span style={{ display: 'flex', gap: 28 }}>
            <span>Work</span><span>Code</span><span>Résumé</span>
          </span>
        </div>

        {/* hero content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '120px 56px 0', maxWidth: 900 }}>
          <div style={{
            fontFamily: s.mono, fontSize: 11, letterSpacing: 3,
            color: s.accent, marginBottom: 40, textTransform: 'uppercase',
          }}>
            ── Now playing &nbsp;·&nbsp; real-time industrial VR
          </div>
          <h1 style={{
            fontFamily: s.display, fontWeight: 500, fontSize: 132,
            lineHeight: 0.92, letterSpacing: -4, margin: '0 0 40px',
          }}>
            Build<br/>worlds that<br/>
            <span style={{ color: s.accent }}>react.</span>
          </h1>
          <div style={{
            fontSize: 18, lineHeight: 1.55, color: s.ink, opacity: 0.78,
            maxWidth: 560, marginBottom: 48,
          }}>
            I'm Victor — a gameplay programmer building Unity & C# systems for VR and
            multiplayer. Physics, netcode, simulation, the feel of motion.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{
              padding: '16px 28px', background: s.accent, color: '#0a0a0c',
              fontWeight: 600, fontSize: 14, letterSpacing: 0.5,
            }}>▸ &nbsp;Download CV</div>
            <div style={{
              padding: '16px 28px', border: `1px solid ${s.line}`,
              color: s.ink, fontSize: 14, letterSpacing: 0.5,
            }}>See selected work</div>
          </div>
        </div>
      </div>

      {/* ── Selected work — cinematic stacked ──────────────────── */}
      <div style={{ padding: '120px 56px 80px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontFamily: s.mono, fontSize: 11, letterSpacing: 2,
              color: s.accent, textTransform: 'uppercase', marginBottom: 16,
            }}>Chapter 01</div>
            <h2 style={{
              fontFamily: s.display, fontWeight: 500, fontSize: 72,
              letterSpacing: -2, margin: 0,
            }}>Selected work.</h2>
          </div>
          <div style={{
            fontFamily: s.mono, fontSize: 11, letterSpacing: 2,
            color: s.dim, textTransform: 'uppercase', textAlign: 'right',
          }}>
            04 shipped<br/>2022 — present
          </div>
        </div>

        {[
          { n: '01', img: 'assets/Porton.png', title: 'Portonazo', kind: 'Co-op Beat-em-up',
            tech: 'Unity · C# · Local multiplayer',
            desc: 'Two-player revenge through gang-warring territories. Animation-driven impact, coordinated pairs, layered weapon feel.' },
          { n: '02', img: 'assets/Donny.png', title: 'Donny & Dinna', kind: 'Cooperative Puzzle',
            tech: 'Unity · C# · Networked logic',
            desc: 'Two-player oxygen-recovery. Built around pairs who have to talk — communication is the mechanic.' },
          { n: '03', img: 'assets/Desafio.png', title: 'El Desafío del Mago', kind: 'Puzzle-Platformer',
            tech: 'Unity · C# · Single-player',
            desc: 'Escalating magician-driven absurdity across tight, difficult levels. Comedic timing meets clever platforming.' },
        ].map((p, i) => (
          <div key={p.n} style={{
            display: 'grid', gridTemplateColumns: '1fr 520px', gap: 56,
            padding: '56px 0', borderTop: `1px solid ${s.line}`,
            alignItems: 'center',
          }}>
            <div style={{
              aspectRatio: '16/10',
              backgroundImage: `linear-gradient(180deg, rgba(10,10,12,0) 60%, rgba(10,10,12,0.35) 100%), url(${p.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'contrast(1.05) saturate(0.9)',
            }}/>
            <div>
              <div style={{
                fontFamily: s.mono, fontSize: 11, letterSpacing: 3,
                color: s.accent, marginBottom: 20,
              }}>№ {p.n} &nbsp;·&nbsp; {p.kind.toUpperCase()}</div>
              <h3 style={{
                fontFamily: s.display, fontWeight: 500, fontSize: 56,
                letterSpacing: -1.5, margin: '0 0 20px', lineHeight: 1,
              }}>{p.title}</h3>
              <div style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.78, marginBottom: 28, maxWidth: 440 }}>
                {p.desc}
              </div>
              <div style={{
                fontFamily: s.mono, fontSize: 11, color: s.dim, letterSpacing: 1,
                paddingTop: 20, borderTop: `1px solid ${s.line}`,
              }}>
                {p.tech.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Code — cinematic, story-first ──────────────────────── */}
      <div style={{
        padding: '100px 56px 120px',
        background: 'linear-gradient(180deg, transparent 0%, #050507 100%)',
        borderTop: `1px solid ${s.line}`,
      }}>
        <div style={{
          fontFamily: s.mono, fontSize: 11, letterSpacing: 2,
          color: s.accent, textTransform: 'uppercase', marginBottom: 16,
        }}>Chapter 02 &nbsp;·&nbsp; Case Study</div>
        <h2 style={{
          fontFamily: s.display, fontWeight: 500, fontSize: 72,
          letterSpacing: -2, margin: '0 0 56px', maxWidth: 900,
        }}>
          Making the server<br/>
          <span style={{ color: s.accent }}>rewind time.</span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
          alignItems: 'start',
        }}>
          <div>
            <div style={{
              display: 'inline-block', padding: '6px 12px',
              background: 'rgba(255,106,61,0.1)', color: s.accent,
              fontFamily: s.mono, fontSize: 11, letterSpacing: 1,
              marginBottom: 24,
            }}>THE SYMPTOM</div>
            <p style={{ margin: '0 0 32px', fontSize: 16.5, lineHeight: 1.65, opacity: 0.85 }}>
              Hit reg was broken early on. Players swore they were on target
              but the server kept saying miss.
            </p>

            <div style={{
              display: 'inline-block', padding: '6px 12px',
              background: 'rgba(255,106,61,0.1)', color: s.accent,
              fontFamily: s.mono, fontSize: 11, letterSpacing: 1,
              marginBottom: 24,
            }}>THE CAUSE</div>
            <p style={{ margin: '0 0 32px', fontSize: 16.5, lineHeight: 1.65, opacity: 0.85 }}>
              The server runs the raycast 80–200ms after the client fires.
              By the time it arrives, everyone's already moved.
            </p>

            <div style={{
              display: 'inline-block', padding: '6px 12px',
              background: 'rgba(255,106,61,0.1)', color: s.accent,
              fontFamily: s.mono, fontSize: 11, letterSpacing: 1,
              marginBottom: 24,
            }}>THE FIX</div>
            <p style={{ margin: '0 0 32px', fontSize: 16.5, lineHeight: 1.65, opacity: 0.85 }}>
              Snapshot hitbox transforms at 20Hz in a ring buffer per player.
              Rewind everyone to the client's timestamp, raycast, restore.
              Capped at 500ms — beyond that it feels unfair the other way.
            </p>

            <div style={{
              marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap',
            }}>
              {['Unity Netcode', 'ServerRpc', 'Ring buffer', 'C#'].map(t => (
                <span key={t} style={{
                  fontFamily: s.mono, fontSize: 11, letterSpacing: 1,
                  padding: '6px 12px', border: `1px solid ${s.line}`,
                  color: s.dim,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{
            background: '#050507', border: `1px solid ${s.line}`,
            padding: '28px 32px', fontFamily: s.mono, fontSize: 13,
            lineHeight: 1.8, position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 16, right: 20, fontSize: 10,
              color: s.dim, letterSpacing: 2,
            }}>LagCompensatedShooter.cs</div>
            <div style={{ marginBottom: 24, marginTop: 8, display: 'flex', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3a3a' }}/>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3a3a3a' }}/>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: s.accent, opacity: 0.6 }}/>
            </div>
            <div style={{ color: s.dim }}>{`// rewind every hitbox to where it was`}</div>
            <div style={{ color: s.dim, marginBottom: 10 }}>{`// when the client pulled the trigger`}</div>
            <div><span style={{ color: '#c58dff' }}>foreach</span> (<span style={{ color: '#7dcfff' }}>var</span> pair <span style={{ color: '#c58dff' }}>in</span> _history) {`{`}</div>
            <div>&nbsp;&nbsp;<span style={{ color: '#7dcfff' }}>var</span> frame = <span style={{ color: s.accent }}>ClosestFrame</span>(pair.Value, clientTs);</div>
            <div>&nbsp;&nbsp;<span style={{ color: '#c58dff' }}>if</span> (frame == <span style={{ color: '#c58dff' }}>null</span>) <span style={{ color: '#c58dff' }}>continue</span>;</div>
            <div>&nbsp;&nbsp;t.<span style={{ color: s.accent }}>SetPositionAndRotation</span>(</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;frame.Position, frame.Rotation);</div>
            <div>{`}`}</div>
            <div style={{ marginTop: 14 }}><span style={{ color: '#7dcfff' }}>bool</span> hit = <span style={{ color: s.accent }}>Physics.Raycast</span>(</div>
            <div>&nbsp;&nbsp;origin, dir, <span style={{ color: '#c58dff' }}>out</span> <span style={{ color: '#7dcfff' }}>RaycastHit</span> info, range, hitMask);</div>
            <div style={{ marginTop: 14 }}><span style={{ color: '#c58dff' }}>if</span> (hit && info.collider.<span style={{ color: s.accent }}>TryGetComponent</span>(</div>
            <div>&nbsp;&nbsp;<span style={{ color: '#c58dff' }}>out</span> <span style={{ color: '#7dcfff' }}>IDamageable</span> dmg))</div>
            <div>&nbsp;&nbsp;dmg.<span style={{ color: s.accent }}>TakeDamage</span>(<span style={{ color: '#ff9e64' }}>25f</span>, OwnerClientId);</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CinematicArtboard = CinematicArtboard;
