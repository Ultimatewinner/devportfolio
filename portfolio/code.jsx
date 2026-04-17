// Code samples: 4 stories with tabs and problem/approach/constraint structure

// Syntax-highlighting token components (MUST be capitalized, since React treats lowercase as HTML)
function Kw({ children }) { return <span style={{color:'#c58dff'}}>{children}</span>; }
function Ty({ children }) { return <span style={{color:'#7dcfff'}}>{children}</span>; }
function Fn({ children }) { return <span style={{color:'#ff6a3d'}}>{children}</span>; }
function Nm({ children }) { return <span style={{color:'#ff9e64'}}>{children}</span>; }

function CineCode() {
  const samples = [
    {
      id: 'lag',
      tab: 'LagCompensatedShooter.cs',
      title: <>Making the server<br/><span style={{color: cine.accent}}>rewind time.</span></>,
      stack: ['Unity Netcode', 'ServerRpc', 'Ring buffer', 'C#'],
      problem: 'Hit reg was broken early on. Players swore they were on target but the server kept saying miss.',
      cause: 'The server runs the raycast 80–200ms after the client fires. By the time it arrives, everyone\'s already moved.',
      fix: 'Snapshot hitbox transforms at 20Hz in a linked list per player. Rewind everyone to the client\'s timestamp, raycast, restore. Capped at 500ms, beyond that it feels unfair the other way.',
      code: [
        ['c', '// rewind every hitbox to where it was when'],
        ['c', '// the client pulled the trigger'],
        [null, <><Kw>foreach</Kw> (<Ty>var</Ty> pair <Kw>in</Kw> _history) {'{'}</>],
        [null, <>  <Ty>var</Ty> frame = <Fn>ClosestFrame</Fn>(pair.Value, clientTs);</>],
        [null, <>  <Kw>if</Kw> (frame == <Kw>null</Kw>) <Kw>continue</Kw>;</>],
        [null, <>  t.<Fn>SetPositionAndRotation</Fn>(</>],
        [null, <>    frame.Position, frame.Rotation);</>],
        [null, '}'],
        [null, ''],
        [null, <><Ty>bool</Ty> hit = <Fn>Physics.Raycast</Fn>(origin, dir,</>],
        [null, <>    <Kw>out</Kw> <Ty>RaycastHit</Ty> info, range, hitMask);</>],
        [null, ''],
        [null, <><Kw>if</Kw> (hit && info.collider.<Fn>TryGetComponent</Fn>(</>],
        [null, <>    <Kw>out</Kw> <Ty>IDamageable</Ty> dmg))</>],
        [null, <>  dmg.<Fn>TakeDamage</Fn>(<Nm>25f</Nm>, OwnerClientId);</>],
      ],
    },
    {
      id: 'burst',
      tab: 'ProjectileSimulator.cs',
      title: <>2.4ms down<br/>to <span style={{color: cine.accent}}>0.18ms.</span></>,
      stack: ['Unity Jobs', 'Burst', 'NativeArray', 'C#'],
      problem: 'Crowd shooter with 200+ simultaneous projectiles burning 2ms/frame on movement alone, most of a 16ms budget.',
      cause: 'All position/velocity/lifetime math was running on the main thread, serialized, with GC pressure per bullet.',
      fix: 'Moved the math into a Burst-compiled IJobParallelFor on NativeArrays. Physics queries stay main-thread after Complete() since Unity physics isn\'t thread-safe. Dead projectiles get swap-removed to keep the array packed.',
      code: [
        [null, <>[<Ty>BurstCompile</Ty>]</>],
        [null, <><Kw>struct</Kw> <Fn>SimulateJob</Fn> : <Ty>IJobParallelFor</Ty> {'{'}</>],
        [null, <>  <Kw>public</Kw> <Ty>NativeArray</Ty>&lt;<Ty>float3</Ty>&gt; Positions;</>],
        [null, <>  <Kw>public</Kw> <Ty>NativeArray</Ty>&lt;<Ty>float3</Ty>&gt; Velocities;</>],
        [null, ''],
        [null, <>  <Kw>public void</Kw> <Fn>Execute</Fn>(<Ty>int</Ty> i) {'{'}</>],
        [null, <>    <Kw>if</Kw> (!Alive[i]) <Kw>return</Kw>;</>],
        [null, <>    <Ty>float3</Ty> vel = Velocities[i];</>],
        [null, <>    vel.y += Gravity * DeltaTime;</>],
        [null, <>    vel = vel * (<Nm>1f</Nm> - Drag * DeltaTime);</>],
        [null, <>    Positions[i] += vel * DeltaTime;</>],
        [null, <>    Velocities[i] = vel;</>],
        [null, '  }'],
        [null, '}'],
      ],
    },
    {
      id: 'hand',
      tab: 'VRPhysicsHand.cs',
      title: <>Hands that<br/><span style={{color: cine.accent}}>feel solid.</span></>,
      stack: ['XR Toolkit', 'Rigidbody', 'Haptics', 'C#'],
      problem: 'Kinematic VR hands clip through geometry. AddForce-based hands feel floaty and lag a frame behind the controller.',
      cause: 'Both pick a bad tradeoff: one ignores physics, the other fights it.',
      fix: 'Drive the Rigidbody by setting velocity directly toward a target transform each FixedUpdate. Tight tracking with real physics collisions. An 8-frame velocity ring buffer fixes throw detection, since single-frame reads at release give garbage if the player lets go at the top of their swing.',
      code: [
        [null, <><Kw>private void</Kw> <Fn>FixedUpdate</Fn>() {'{'}</>],
        ['c', '  // drive velocity toward target each step'],
        [null, <>  <Ty>Vector3</Ty> delta = target.position - transform.position;</>],
        [null, <>  _rb.velocity = delta * posStrength;</>],
        [null, ''],
        ['c', '  // rotation → angular velocity via delta quat'],
        [null, <>  <Ty>Quaternion</Ty> dRot = target.rotation *</>],
        [null, <>    <Ty>Quaternion</Ty>.<Fn>Inverse</Fn>(transform.rotation);</>],
        [null, <>  dRot.<Fn>ToAngleAxis</Fn>(<Kw>out float</Kw> angle, <Kw>out</Kw> <Ty>Vector3</Ty> axis);</>],
        [null, <>  _rb.angularVelocity = axis * (angle * <Nm>Mathf.Deg2Rad</Nm> * rotStrength);</>],
        [null, ''],
        [null, <>  <Fn>Enqueue</Fn>(_linHistory, _rb.velocity);</>],
        [null, '}'],
      ],
    },
    {
      id: 'save',
      tab: 'SaveSystem.cs',
      title: <>No more<br/><span style={{color: cine.accent}}>save-hitch.</span></>,
      stack: ['async/await', 'SemaphoreSlim', 'Atomic I/O', 'C#'],
      problem: 'File.WriteAllText on the main thread caused 40–80ms hitches as saves grew.',
      cause: 'Synchronous I/O on the game thread. Rapid saves could also race and land out of order.',
      fix: 'Writes move to a background thread via Task.Run, guarded by a SemaphoreSlim. A CancellationTokenSource lets a newer save cancel the one in flight, so last write wins. Atomic .tmp-then-rename prevents corruption if the game crashes mid-write.',
      code: [
        [null, <><Kw>public async</Kw> <Ty>Task</Ty> <Fn>SaveAsync</Fn>&lt;T&gt;(<Ty>string</Ty> slot, T data)</>],
        [null, '{'],
        ['c', '  // last write wins, cancel prior'],
        [null, <>  _cts?.<Fn>Cancel</Fn>();</>],
        [null, <>  _cts = <Kw>new</Kw> <Ty>CancellationTokenSource</Ty>();</>],
        [null, ''],
        [null, <>  <Kw>await</Kw> _lock.<Fn>WaitAsync</Fn>(_cts.Token);</>],
        [null, '  try {'],
        [null, <>    <Ty>string</Ty> json = <Fn>JsonUtility.ToJson</Fn>(data);</>],
        [null, <>    <Kw>await</Kw> <Fn>WriteAtomicAsync</Fn>(<Fn>SlotPath</Fn>(slot), json, _cts.Token);</>],
        [null, '  }'],
        [null, <>  <Kw>finally</Kw> {'{'} _lock.<Fn>Release</Fn>(); {'}'}</>],
        [null, '}'],
      ],
    },
  ];

  const [active, setActive] = React.useState(0);
  const s = samples[active];

  return (
    <div style={{
      padding: '140px 0 140px',
      background: 'linear-gradient(180deg, #0a0a0c 0%, #050507 100%)',
      borderTop: `1px solid ${cine.line}`,
    }}>
      <CineSectionHead
        chapter="03 · Case studies"
        title={<>Code I actually<br/><span style={{color: cine.accent}}>wrote, & why.</span></>}
        meta={<>04 SYSTEMS<br/>PRODUCTION C#<br/>UNITY</>}
      />

      {/* tabs */}
      <div style={{
        padding: '0 56px', marginBottom: 48,
        display: 'flex', gap: 0, borderBottom: `1px solid ${cine.line}`,
        flexWrap: 'wrap',
      }}>
        {samples.map((x, i) => (
          <div key={x.id} onClick={() => setActive(i)} style={{
            padding: '16px 24px',
            fontFamily: cine.mono, fontSize: 11, letterSpacing: 1.5,
            textTransform: 'uppercase',
            color: i === active ? cine.ink : cine.dim,
            cursor: 'pointer',
            borderBottom: i === active ? `2px solid ${cine.accent}` : '2px solid transparent',
            marginBottom: -1, transition: 'all 0.15s',
          }}>
            <span style={{ color: cine.accent, marginRight: 10 }}>0{i + 1}</span>
            {x.tab}
          </div>
        ))}
      </div>

      {/* content */}
      <div style={{
        padding: '0 56px', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start',
      }}>
        <div>
          <h3 style={{
            fontFamily: cine.display, fontWeight: 500, fontSize: 56,
            letterSpacing: -1.5, margin: '0 0 44px', lineHeight: 0.98,
            color: cine.ink,
          }}>{s.title}</h3>

          {[['The symptom', s.problem], ['The cause', s.cause], ['The fix', s.fix]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: 32 }}>
              <div style={{
                display: 'inline-block', padding: '6px 12px',
                background: cine.accentSoft, color: cine.accent,
                fontFamily: cine.mono, fontSize: 10, letterSpacing: 1.5,
                textTransform: 'uppercase', marginBottom: 16,
              }}>{k}</div>
              <p style={{
                margin: 0, fontFamily: cine.body, fontSize: 16.5,
                lineHeight: 1.65, color: cine.ink2,
              }}>{v}</p>
            </div>
          ))}

          <div style={{
            marginTop: 32, paddingTop: 24,
            borderTop: `1px solid ${cine.line}`,
            display: 'flex', gap: 8, flexWrap: 'wrap',
          }}>
            {s.stack.map(t => (
              <span key={t} style={{
                fontFamily: cine.mono, fontSize: 10, letterSpacing: 1.5,
                padding: '6px 10px', border: `1px solid ${cine.line}`,
                color: cine.dim, textTransform: 'uppercase',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* code block */}
        <div style={{
          background: cine.bgDeep, border: `1px solid ${cine.line}`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            padding: '14px 18px',
            borderBottom: `1px solid ${cine.line}`,
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={dot('#3a3a3a')}/><span style={dot('#3a3a3a')}/>
              <span style={dot(cine.accent, 0.55)}/>
            </div>
            <div style={{
              marginLeft: 'auto', fontFamily: cine.mono, fontSize: 10,
              color: cine.dim, letterSpacing: 2,
            }}>{s.tab}</div>
          </div>
          <pre style={{
            margin: 0, padding: '24px 28px',
            fontFamily: cine.mono, fontSize: 13.2, lineHeight: 1.75,
            color: cine.ink, whiteSpace: 'pre-wrap',
          }}>
            {s.code.map(([kind, line], i) => (
              <div key={i} style={{
                color: kind === 'c' ? cine.dim : cine.ink,
                minHeight: '1.75em',
              }}>{line}</div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}

function dot(color, op = 1) {
  return { width: 10, height: 10, borderRadius: '50%', background: color, opacity: op };
}
window.CineCode = CineCode;
