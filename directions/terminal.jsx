// Direction B — Dark Terminal
// Near-black, mono-forward, single saturated accent, code-as-aesthetic.

const terminalStyles = {
  bg: '#0b0d10',
  surface: '#14171c',
  line: '#1f242c',
  ink: '#e6e6e3',
  dim: '#6b7280',
  accent: '#9ece6a',     // terminal green
  warn: '#e0af68',
  mono: '"JetBrains Mono", monospace',
  body: '"Inter", system-ui, sans-serif',
};

function TerminalArtboard() {
  const s = terminalStyles;
  return (
    <div style={{
      width: 1280, background: s.bg, color: s.ink,
      fontFamily: s.mono, fontSize: 13, lineHeight: 1.6,
    }}>
      {/* ── Top nav / prompt ─────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '20px 48px', borderBottom: `1px solid ${s.line}`,
        fontSize: 12, color: s.dim,
      }}>
        <span style={{ color: s.accent }}>~/victor-rosas</span>
        <span>$</span>
        <span style={{ color: s.ink }}>cat portfolio.md</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 28 }}>
          <span>[a]bout</span><span>[w]ork</span><span>[c]ode</span><span>[k]ontact</span>
        </span>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <div style={{ padding: '80px 48px 64px', position: 'relative' }}>
        <div style={{ fontSize: 12, color: s.dim, marginBottom: 24 }}>
          <span style={{ color: s.accent }}>▸</span> booting profile . . . &nbsp;
          <span style={{ color: s.accent }}>OK</span>
        </div>
        <h1 style={{
          fontFamily: s.mono, fontWeight: 700, fontSize: 88,
          lineHeight: 1, letterSpacing: -2, margin: '0 0 20px',
        }}>
          Victor Rosas<span style={{ color: s.accent }}>_</span>
        </h1>
        <div style={{ fontSize: 20, color: s.dim, marginBottom: 48 }}>
          <span style={{ color: s.accent }}>&gt;</span> gameplay programmer
          &nbsp;·&nbsp; unity &amp; c#
          &nbsp;·&nbsp; multiplayer netcode, vr, simulation
        </div>

        {/* Status card grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          border: `1px solid ${s.line}`, marginTop: 32,
        }}>
          {[
            ['UPTIME', '4+ yrs'],
            ['PROJECTS', '10+ shipped'],
            ['AWARDS', 'Expomin · Perumin'],
            ['STATUS', 'available'],
          ].map(([k, v], i, arr) => (
            <div key={k} style={{
              padding: '24px 28px',
              borderRight: i < arr.length-1 ? `1px solid ${s.line}` : 'none',
            }}>
              <div style={{ fontSize: 11, color: s.dim, marginBottom: 10 }}>{k}</div>
              <div style={{
                fontSize: 20, color: k === 'STATUS' ? s.accent : s.ink,
                fontWeight: 500,
              }}>
                {k === 'STATUS' && <span style={{
                  display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
                  background: s.accent, marginRight: 10, verticalAlign: 'middle',
                }} />}
                {v}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48, display: 'inline-block',
          padding: '14px 24px', border: `1px solid ${s.accent}`,
          color: s.accent, fontSize: 13,
        }}>
          $ ./download-cv.sh &nbsp;—&nbsp; <span style={{ color: s.dim }}>victor_rosas.pdf</span>
        </div>
      </div>

      {/* ── Work / ls output ────────────────────────────────────── */}
      <div style={{ padding: '64px 48px', borderTop: `1px solid ${s.line}` }}>
        <div style={{ fontSize: 12, color: s.dim, marginBottom: 8 }}>
          <span style={{ color: s.accent }}>$</span> ls -la ./projects/
        </div>
        <div style={{ fontSize: 12, color: s.dim, marginBottom: 32 }}>
          total 4 &nbsp;&nbsp; drwxr-xr-x &nbsp; victor &nbsp; staff
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1,
          background: s.line, border: `1px solid ${s.line}`,
        }}>
          {[
            { img: 'assets/Porton.png', file: 'portonazo.unity', tags: ['co-op','beat-em-up'], d: 'Two-player revenge story through warring gang territories. Weapons, items, coordinated teamwork.'},
            { img: 'assets/Desafio.png', file: 'desafio-mago.unity', tags: ['puzzle','platformer'], d: 'Escalating absurdity across increasingly difficult levels. Comedic timing meets clever platforming.'},
            { img: 'assets/Donny.png', file: 'donny-dinna.unity', tags: ['co-op','puzzle'], d: 'Cooperative oxygen-recovery puzzle for two. Communication-first game design.'},
            { img: 'assets/Mateo.png', file: 'mateo-jurasico.unity', tags: ['adventure','puzzle'], d: 'Time-traveling child collects stones across eras. Statue-driven navigation and dinosaur allies.'},
          ].map(p => (
            <div key={p.file} style={{ background: s.bg, padding: 32 }}>
              <div style={{
                width: '100%', aspectRatio: '16/10',
                background: `#000 url(${p.img}) center/cover`,
                marginBottom: 20, border: `1px solid ${s.line}`,
                filter: 'saturate(0.85) contrast(1.05)',
              }} />
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: 11, color: s.dim, marginBottom: 10,
              }}>
                <span><span style={{color:s.accent}}>▸</span> {p.file}</span>
                <span>2.4 MB</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 10, padding: '3px 8px',
                    border: `1px solid ${s.line}`, color: s.dim,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ fontFamily: s.body, fontSize: 13, color: s.ink, lineHeight: 1.55 }}>
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Code sample ─────────────────────────────────────────── */}
      <div style={{ padding: '64px 48px 96px', borderTop: `1px solid ${s.line}` }}>
        <div style={{ fontSize: 12, color: s.dim, marginBottom: 32 }}>
          <span style={{ color: s.accent }}>$</span> cat ./code/LagCompensatedShooter.cs
        </div>

        <div style={{
          border: `1px solid ${s.line}`, background: s.surface,
        }}>
          {/* tabs */}
          <div style={{
            display: 'flex', borderBottom: `1px solid ${s.line}`, fontSize: 12,
          }}>
            {['lag-compensated-shooter.cs', 'projectile-sim.cs', 'vr-hand.cs', 'save-system.cs'].map((t, i) => (
              <div key={t} style={{
                padding: '12px 18px',
                borderRight: `1px solid ${s.line}`,
                background: i === 0 ? s.bg : 'transparent',
                color: i === 0 ? s.ink : s.dim,
                borderTop: i === 0 ? `1px solid ${s.accent}` : 'none',
                marginTop: i === 0 ? -1 : 0,
              }}>{t}</div>
            ))}
          </div>

          {/* body */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div style={{ padding: '32px 36px', borderRight: `1px solid ${s.line}` }}>
              <div style={{
                fontSize: 11, color: s.warn, letterSpacing: 1, marginBottom: 12,
              }}>// PROBLEM</div>
              <div style={{ fontFamily: s.body, fontSize: 14, color: s.ink, lineHeight: 1.6, marginBottom: 28 }}>
                Server runs the raycast 80–200ms after the client fires — by then everyone's moved. Hits report "miss" even when players are clearly on target.
              </div>
              <div style={{
                fontSize: 11, color: s.accent, letterSpacing: 1, marginBottom: 12,
              }}>// APPROACH</div>
              <div style={{ fontFamily: s.body, fontSize: 14, color: s.ink, lineHeight: 1.6, marginBottom: 28 }}>
                Record hitbox transforms server-side at 20Hz in a linked list per player. On fire, rewind everyone to the client's timestamp, raycast, restore.
              </div>
              <div style={{
                fontSize: 11, color: s.dim, letterSpacing: 1, marginBottom: 12,
              }}>// CONSTRAINT</div>
              <div style={{ fontFamily: s.body, fontSize: 14, color: s.ink, lineHeight: 1.6 }}>
                Capped at 500ms lookback — any longer and it feels unfair from the victim's side.
              </div>
            </div>
            <div style={{ padding: '28px 32px', fontSize: 12.5, lineHeight: 1.75 }}>
              <div><span style={{color:s.dim}}>01</span> &nbsp;<span style={{color:'#7aa2f7'}}>private</span> <span style={{color:'#7dcfff'}}>struct</span> <span style={{color:s.accent}}>HitboxFrame</span> {`{`}</div>
              <div><span style={{color:s.dim}}>02</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>Vector3</span> Position;</div>
              <div><span style={{color:s.dim}}>03</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>Quaternion</span> Rotation;</div>
              <div><span style={{color:s.dim}}>04</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>float</span> Timestamp;</div>
              <div><span style={{color:s.dim}}>05</span> &nbsp;{`}`}</div>
              <div><span style={{color:s.dim}}>06</span></div>
              <div><span style={{color:s.dim}}>07</span> &nbsp;[<span style={{color:s.warn}}>ServerRpc</span>]</div>
              <div><span style={{color:s.dim}}>08</span> &nbsp;<span style={{color:'#7aa2f7'}}>private</span> <span style={{color:'#7dcfff'}}>void</span> <span style={{color:s.accent}}>FireServerRpc</span>(</div>
              <div><span style={{color:s.dim}}>09</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>Vector3</span> origin, <span style={{color:'#7dcfff'}}>Vector3</span> dir, <span style={{color:'#7dcfff'}}>float</span> clientTs)</div>
              <div><span style={{color:s.dim}}>10</span> &nbsp;{`{`}</div>
              <div><span style={{color:s.dim}}>11</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#565f89'}}>{`// rewind to client timestamp`}</span></div>
              <div><span style={{color:s.dim}}>12</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7aa2f7'}}>foreach</span> (<span style={{color:'#7dcfff'}}>var</span> p <span style={{color:'#7aa2f7'}}>in</span> _history) {`{`}</div>
              <div><span style={{color:s.dim}}>13</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>var</span> f = <span style={{color:s.accent}}>ClosestFrame</span>(p.Value, clientTs);</div>
              <div><span style={{color:s.dim}}>14</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t.<span style={{color:s.accent}}>SetPositionAndRotation</span>(f.Position, f.Rotation);</div>
              <div><span style={{color:s.dim}}>15</span> &nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
              <div><span style={{color:s.dim}}>16</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#7dcfff'}}>bool</span> hit = <span style={{color:s.accent}}>Physics.Raycast</span>(origin, dir, …);</div>
              <div><span style={{color:s.dim}}>17</span> &nbsp;{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TerminalArtboard = TerminalArtboard;
