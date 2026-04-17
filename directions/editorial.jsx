// Direction A — Editorial / Engineer
// Warm off-white, serif display headings, tight grid, confident and readable.

const editorialStyles = {
  bg: '#f6f3ec',
  ink: '#1a1814',
  dim: '#6b6459',
  line: '#d8d1c2',
  accent: '#b8411b',
  paper: '#fbf9f4',
  display: '"Fraunces", "Times New Roman", serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
};

function EditorialArtboard() {
  const s = editorialStyles;
  return (
    <div style={{
      width: 1280, background: s.bg, color: s.ink,
      fontFamily: s.body, fontSize: 15, lineHeight: 1.6,
    }}>
      {/* ── Masthead ────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: '28px 72px', borderBottom: `1px solid ${s.line}`,
        fontFamily: s.mono, fontSize: 12, letterSpacing: 0.5,
        textTransform: 'uppercase', color: s.dim,
      }}>
        <span style={{ color: s.ink, fontWeight: 600 }}>Victor Rosas</span>
        <span>Vol. IV · № 26</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <span>Work</span><span>Writing</span><span>Contact</span>
        </span>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <div style={{ padding: '96px 72px 80px', borderBottom: `1px solid ${s.line}` }}>
        <div style={{
          fontFamily: s.mono, fontSize: 11, letterSpacing: 1.5,
          textTransform: 'uppercase', color: s.accent, marginBottom: 32,
        }}>
          ◆ Portfolio — Santiago, CL
        </div>
        <h1 style={{
          fontFamily: s.display, fontWeight: 400, fontStyle: 'italic',
          fontSize: 128, lineHeight: 0.95, letterSpacing: -3,
          margin: '0 0 40px', maxWidth: 1000,
        }}>
          Gameplay<br/>
          <span style={{ fontStyle: 'normal', fontWeight: 300 }}>programmer, writing</span><br/>
          <span style={{ color: s.accent }}>networked worlds.</span>
        </h1>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          maxWidth: 900, marginTop: 48,
        }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: s.ink }}>
            Four years building Unity & C# systems for industrial VR and co-op action —
            multiplayer netcode, physics, save systems, the unglamorous backbone that makes
            game feel feel real.
          </p>
          <div style={{ fontFamily: s.mono, fontSize: 12, color: s.dim, lineHeight: 2 }}>
            <div>CURRENTLY &nbsp;—&nbsp; Dataverso</div>
            <div>PREVIOUSLY &nbsp;—&nbsp; Minverso, Sudaka Games</div>
            <div>EDUCATION &nbsp;—&nbsp; BS Game Design, UNAB</div>
            <div style={{ color: s.accent, marginTop: 12 }}>
              → Download CV &nbsp;(PDF, 240 KB)
            </div>
          </div>
        </div>
      </div>

      {/* ── Selected Work ───────────────────────────────────────── */}
      <div style={{ padding: '80px 72px 64px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 56, paddingBottom: 20, borderBottom: `1px solid ${s.line}`,
        }}>
          <h2 style={{
            fontFamily: s.display, fontWeight: 400, fontSize: 48,
            letterSpacing: -1, margin: 0,
          }}>Selected Work</h2>
          <div style={{ fontFamily: s.mono, fontSize: 11, color: s.dim, letterSpacing: 1 }}>
            2022 — PRESENT &nbsp;·&nbsp; 04 PROJECTS
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          {[
            { n: '01', img: 'assets/Porton.png', title: 'Portonazo',
              meta: 'Unity · C# · Local co-op',
              role: 'Gameplay & combat systems',
              desc: 'Two-player beat-em-up. Rise through rival gangs to find your brother\'s killer. Weapons, animation-driven impact, coordinated pairs.' },
            { n: '02', img: 'assets/Desafio.png', title: 'El Desafío del Mago',
              meta: 'Unity · C# · Puzzle-platformer',
              role: 'Level & puzzle systems',
              desc: 'A magician\'s escalating absurdity. Comedic timing wrapped around a clever puzzle-platformer across increasingly difficult levels.' },
            { n: '03', img: 'assets/Donny.png', title: 'Donny & Dinna',
              meta: 'Unity · C# · Cooperative',
              role: 'Networked puzzle logic',
              desc: 'Two-player oxygen-recovery puzzle. Communication first, mechanics second — built around pairs who have to talk to win.' },
            { n: '04', img: 'assets/Mateo.png', title: 'Mateo: Aventura Jurásica',
              meta: 'Unity · C# · Adventure',
              role: 'Time-travel state system',
              desc: 'A time-traveling child collects ancient stones across eras to return home. Statue-driven navigation, dinosaur allies, puzzle-flow.' },
          ].map(p => (
            <div key={p.n}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: s.mono, fontSize: 11, color: s.dim,
                letterSpacing: 1, marginBottom: 12,
              }}>
                <span>№ {p.n}</span>
                <span>{p.meta}</span>
              </div>
              <div style={{
                width: '100%', aspectRatio: '16/10',
                background: s.paper, border: `1px solid ${s.line}`,
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                marginBottom: 20,
              }} />
              <h3 style={{
                fontFamily: s.display, fontWeight: 400, fontSize: 32,
                letterSpacing: -0.5, margin: '0 0 8px',
              }}>{p.title}</h3>
              <div style={{
                fontFamily: s.mono, fontSize: 11, color: s.accent,
                textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12,
              }}>{p.role}</div>
              <p style={{ margin: 0, color: s.ink, maxWidth: 480 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── A Piece of Code ─────────────────────────────────────── */}
      <div style={{
        padding: '80px 72px 120px', background: s.paper,
        borderTop: `1px solid ${s.line}`,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64 }}>
          <div>
            <div style={{
              fontFamily: s.mono, fontSize: 11, color: s.accent,
              textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16,
            }}>Essay № 01 — Netcode</div>
            <h2 style={{
              fontFamily: s.display, fontStyle: 'italic', fontWeight: 400,
              fontSize: 44, lineHeight: 1.05, letterSpacing: -1,
              margin: '0 0 24px',
            }}>On lag compensation.</h2>
            <p style={{ margin: '0 0 16px', color: s.dim }}>
              Hit reg was broken early on. Players swore they were on target
              but the server kept saying miss.
            </p>
            <p style={{ margin: 0, color: s.dim }}>
              Root cause: the server runs the raycast 80–200ms after the client
              fires. Fix: record hitbox transforms at 20Hz, rewind to the
              client timestamp, raycast, restore.
            </p>
            <div style={{
              marginTop: 32, paddingTop: 24, borderTop: `1px solid ${s.line}`,
              fontFamily: s.mono, fontSize: 11, color: s.dim, letterSpacing: 0.5,
            }}>
              FILE &nbsp;—&nbsp; LagCompensatedShooter.cs<br/>
              STACK &nbsp;—&nbsp; Unity Netcode · ServerRpc<br/>
              READ TIME &nbsp;—&nbsp; 4 min
            </div>
          </div>
          <div style={{
            background: '#1a1814', color: '#f6f3ec',
            fontFamily: s.mono, fontSize: 13, lineHeight: 1.7,
            padding: '32px 36px', borderRadius: 2,
          }}>
            <div style={{ color: '#6b6459', marginBottom: 16 }}>{`// rewind every hitbox to where it was when the client pulled the trigger`}</div>
            <div><span style={{color:'#c28459'}}>foreach</span> (<span style={{color:'#a8a198'}}>var</span> pair <span style={{color:'#c28459'}}>in</span> _history) {`{`}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#a8a198'}}>var</span> frame = <span style={{color:'#e3a569'}}>ClosestFrame</span>(pair.Value, clientTs);</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#c28459'}}>if</span> (frame == <span style={{color:'#c28459'}}>null</span>) <span style={{color:'#c28459'}}>continue</span>;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;t.<span style={{color:'#e3a569'}}>SetPositionAndRotation</span>(frame.Position, frame.Rotation);</div>
            <div>{`}`}</div>
            <div style={{ marginTop: 16 }}><span style={{color:'#a8a198'}}>bool</span> hit = <span style={{color:'#e3a569'}}>Physics.Raycast</span>(origin, dir, <span style={{color:'#c28459'}}>out</span> <span style={{color:'#a8a198'}}>RaycastHit</span> info, range, hitMask);</div>
            <div><span style={{color:'#c28459'}}>if</span> (hit && info.collider.<span style={{color:'#e3a569'}}>TryGetComponent</span>(<span style={{color:'#c28459'}}>out</span> <span style={{color:'#a8a198'}}>IDamageable</span> dmg))</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;dmg.<span style={{color:'#e3a569'}}>TakeDamage</span>(<span style={{color:'#b8411b'}}>25f</span>, OwnerClientId);</div>
            <div style={{ color: '#6b6459', marginTop: 16 }}>{`// restore everyone to the present before next frame`}</div>
            <div><span style={{color:'#c28459'}}>foreach</span> (<span style={{color:'#a8a198'}}>var</span> sv <span style={{color:'#c28459'}}>in</span> saved.Values)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;sv.t.<span style={{color:'#e3a569'}}>SetPositionAndRotation</span>(sv.pos, sv.rot);</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.EditorialArtboard = EditorialArtboard;
