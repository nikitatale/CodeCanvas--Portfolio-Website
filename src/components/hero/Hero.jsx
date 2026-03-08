import React, { useEffect, useRef, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaArrowDown } from "react-icons/fa";



function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }))
    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(130,69,236,${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(162,89,255,${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.65 }} />
}


function SocialBtn({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">
      {icon}
    </a>
  )
}


const Hero = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])
  const m = mounted ? 'mounted' : ''

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.08)} 66%{transform:translate(-20px,25px) scale(0.95)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-50px,30px) scale(1.1)} 70%{transform:translate(25px,-20px) scale(0.92)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,40px) scale(1.06)} }

        @keyframes slideUp {
          from { opacity:0; transform:translateY(38px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity:0; transform:translateX(60px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.4)} }
        @keyframes ringPulse {
          0%,100%{box-shadow:0 0 0 0 rgba(130,69,236,0.4),0 0 40px rgba(130,69,236,0.18)}
          50%{box-shadow:0 0 0 12px rgba(130,69,236,0),0 0 60px rgba(130,69,236,0.38)}
        }
        @keyframes scrollBounce {
          0%,100%{transform:translateY(0) rotate(45deg);opacity:1}
          50%{transform:translateY(9px) rotate(45deg);opacity:0.35}
        }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }

        .enter { opacity:0; }
        .enter.mounted { animation: slideUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .enter.mounted.d1 { animation-delay:0.05s; }
        .enter.mounted.d2 { animation-delay:0.18s; }
        .enter.mounted.d3 { animation-delay:0.30s; }
        .enter.mounted.d4 { animation-delay:0.42s; }
        .enter.mounted.d5 { animation-delay:0.55s; }
        .enter.mounted.d6 { animation-delay:0.68s; }
        .enter.mounted.d7 { animation-delay:0.82s; }

        .enter-img { opacity:0; }
        .enter-img.mounted { animation: fadeInRight 0.95s cubic-bezier(0.22,1,0.36,1) 0.28s forwards; }

        .name-gradient {
          background: linear-gradient(140deg, #fff 25%, #c084fc 60%, #8245ec 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 16px; border-radius:999px;
          background:rgba(130,69,236,0.1); border:1px solid rgba(130,69,236,0.3);
          font-family:'Space Mono',monospace; font-size:0.68rem;
          color:rgba(255,255,255,0.55); letter-spacing:0.08em; backdrop-filter:blur(10px);
        }
        .badge-dot {
          width:7px; height:7px; border-radius:50%;
          background:#22c55e; box-shadow:0 0 8px #22c55e;
          animation:pulse 2s ease-in-out infinite; flex-shrink:0;
        }
        .dl-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:13px 30px; border-radius:999px;
          background:linear-gradient(135deg,#8245ec,#a855f7);
          color:#fff; font-family:'Outfit',sans-serif; font-weight:700; font-size:0.95rem;
          text-decoration:none; border:none; cursor:pointer;
          position:relative; overflow:hidden; white-space:nowrap;
          transition:transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
          box-shadow:0 4px 24px rgba(130,69,236,0.35);
        }
        .dl-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#a855f7,#8245ec);
          opacity:0; transition:opacity 0.3s;
        }
        .dl-btn:hover { transform:translateY(-3px) scale(1.05); box-shadow:0 0 28px rgba(130,69,236,0.65),0 8px 40px rgba(130,69,236,0.4); }
        .dl-btn:hover::before { opacity:1; }
        .dl-btn > * { position:relative; z-index:1; }

        .social-btn {
          display:flex; align-items:center; justify-content:center;
          width:38px; height:38px; border-radius:50%;
          background:rgba(130,69,236,0.09); border:1px solid rgba(130,69,236,0.25);
          color:rgba(255,255,255,0.5); text-decoration:none; flex-shrink:0;
          transition:background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .social-btn:hover {
          background:rgba(130,69,236,0.24); color:#fff;
          transform:translateY(-3px); box-shadow:0 4px 18px rgba(130,69,236,0.4);
        }
        .stat-card {
          background:rgba(130,69,236,0.07); border:1px solid rgba(130,69,236,0.2);
          border-radius:14px; padding:12px 20px; text-align:center;
          backdrop-filter:blur(8px); cursor:default;
          transition:background 0.2s, border-color 0.2s, transform 0.22s;
        }
        .stat-card:hover {
          background:rgba(130,69,236,0.15); border-color:rgba(130,69,236,0.45);
          transform:translateY(-5px);
        }
        .float-tag {
          position:absolute; background:rgba(10,5,25,0.7);
          border:1px solid rgba(130,69,236,0.35); backdrop-filter:blur(14px);
          border-radius:14px; padding:9px 16px;
          display:flex; align-items:center; gap:9px; white-space:nowrap;
        }
        .scroll-arrow {
          width:16px; height:16px;
          border-right:1.5px solid rgba(130,69,236,0.55);
          border-bottom:1.5px solid rgba(130,69,236,0.55);
          animation:scrollBounce 1.6s ease-in-out infinite;
        }
        .grain {
          position:fixed; inset:0; z-index:1; pointer-events:none; opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:180px;
        }

        
        .hero-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        }
        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 580px;
        }

        
        .cta-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 0.4rem;
        }
        
        .socials-row {
          display: flex;
          gap: 0.55rem;
          align-items: center;
        }
      
        .stats-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.6rem;
          flex-wrap: wrap;
        }

       
        @media (max-width: 768px) {

         
          .hero-grid {
            flex-direction: column-reverse !important;
          }

         
          .hero-left {
            align-items: center !important;
            text-align: center !important;
            max-width: 100% !important;
          }

         
          .cta-row {
            justify-content: center !important;
            width: 100%;
          }

          
          .socials-row {
            justify-content: center !important;
          }

         
          .stats-row {
            justify-content: center !important;
          }

          
          .float-tag {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ background: '#07050f', minHeight: '100vh', fontFamily: "'Outfit',sans-serif", position: 'relative' }}>

      
        <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
          {[
            { w:520, h:520, c:'rgba(130,69,236,0.26)', t:'30%', l:'15%', a:'blob1 13s ease-in-out infinite' },
            { w:440, h:440, c:'rgba(46,8,207,0.20)',   t:'8%',  r:'4%',  a:'blob2 16s ease-in-out infinite' },
            { w:360, h:360, c:'rgba(209,10,138,0.14)', b:'8%',  l:'50%', a:'blob3 11s ease-in-out infinite' },
          ].map((b, i) => (
            <div key={i} style={{
              position:'absolute', borderRadius:'50%', filter:'blur(105px)',
              width:b.w, height:b.h,
              background:`radial-gradient(circle, ${b.c}, transparent 70%)`,
              top:b.t, left:b.l, right:b.r, bottom:b.b, animation:b.a,
            }} />
          ))}
          <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        </div>

        <ParticleCanvas />
        <div className="grain" />

        <section id="home" style={{ position:'relative', zIndex:2, minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'7rem 7vw 4rem' }}>
          <div className="hero-grid">

     
            <div className="hero-left">

              <div className={`enter d1 ${m}`}>
                <span className="badge"><span className="badge-dot" />Available for Freelance Work</span>
              </div>

              <div className={`enter d2 ${m}`}>
                <p style={{ fontSize:'clamp(1rem,2vw,1.25rem)', fontWeight:300, color:'rgba(255,255,255,0.45)', letterSpacing:'0.12em', fontFamily:"'Space Mono',monospace" }}>
                  Hi, I am -
                </p>
              </div>

              <div className={`enter d3 ${m}`}>
                <h1 className="name-gradient" style={{ fontSize:'clamp(2rem, 5vw, 3.8rem)', fontWeight:900, lineHeight:1, letterSpacing:'-0.03em', margin:0 }}>
                  Nikita Tale
                </h1>
              </div>

              <div className={`enter d4 ${m}`}>
                <h2 style={{ margin:0, minHeight:'2rem', display:'flex', alignItems:'center', justifyContent:'inherit', gap:6, fontFamily:"'Space Mono',monospace", fontSize:'clamp(0.9rem,2vw,1.2rem)', fontWeight:400, color:'#a855f7' }}>
                  <span style={{ color:'rgba(255,255,255,0.25)' }}>{'>'}</span>
                  <ReactTypingEffect
                    text={['Full-Stack Developer', 'MERN Stack Engineer', 'Competitive Coder']}
                    speed={90} eraseSpeed={45} typingDelay={500} eraseDelay={2000}
                    cursorRenderer={(cursor) => <span style={{ color:'#8245ec', fontWeight:700 }}>{cursor}</span>}
                  />
                </h2>
              </div>

              <div className={`enter d5 ${m}`}>
              <p style={{ color:'rgba(255,255,255,0.36)', fontSize:'clamp(0.87rem,1.4vw,1rem)', lineHeight:1.9, maxWidth:460, fontWeight:300, margin:0 }}>
               I build things for the web - from idea to deployed. <br />
               If it runs in a browser, I probably care about it. 
               </p>
              </div>

              
              <div className={`enter d6 ${m} cta-row`}>
                <a href="#" target="_blank" rel="noopener noreferrer" className="dl-btn">
                  <span>Download Resume</span>
                  <span><FaArrowDown className="text-md text-white" /></span>
                </a>

                <div className="socials-row">
                  <SocialBtn href="https://github.com/nikitatale" label="GitHub" icon={<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>} />
                  <SocialBtn href="https://www.linkedin.com/in/nikita-tale" label="LinkedIn" icon={<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.84 20.45H3.83V9h3.01v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>} />
                  <SocialBtn href="https://leetcode.com/u/NikitaTale" label="Leetcode" icon={<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>} />
                </div>
              </div>

            
              <div className={`enter d7 ${m} stats-row`}>
                {[{n:'1+',l:'Years Exp.'},{n:'25+',l:'Projects'},{n:'20+',l:'Technologies'}].map(s => (
                  <div className="stat-card" key={s.l}>
                    <div style={{ fontSize:'1.45rem', fontWeight:800, color:'#a855f7', fontFamily:"'Outfit',sans-serif" }}>{s.n}</div>
                    <div style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.32)', letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Mono',monospace", marginTop:3 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

         
            <div className={`enter-img ${m}`} style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center' }}>
              <div style={{ position:'relative' }}>
                <div style={{ position:'absolute', inset:-35, borderRadius:'50%', background:'radial-gradient(circle, rgba(130,69,236,0.28) 0%, transparent 65%)', filter:'blur(28px)', animation:'ringPulse 3.2s ease-in-out infinite' }} />
                <div style={{ position:'absolute', inset:-16, borderRadius:'50%', border:'1.5px dashed rgba(168,85,247,0.28)', animation:'blob3 14s linear infinite', pointerEvents:'none' }}>
                  <div style={{ position:'absolute', top:0, left:'50%', transform:'translate(-50%,-50%)', width:10, height:10, borderRadius:'50%', background:'#a855f7', boxShadow:'0 0 14px 5px rgba(168,85,247,0.8)' }} />
                </div>
                <Tilt tiltMaxAngleX={18} tiltMaxAngleY={18} perspective={1100} scale={1.04} transitionSpeed={900} gyroscope={true}
                  style={{ width:'clamp(200px,22vw,310px)', height:'clamp(200px,22vw,310px)', borderRadius:'50%', border:'2.5px solid rgba(130,69,236,0.5)', overflow:'hidden', background:'rgba(130,69,236,0.07)', animation:'ringPulse 3.2s ease-in-out infinite' }}
                >
                  <img src="/profile.png" alt="Nikita Tale" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%', filter:'drop-shadow(0 0 24px rgba(130,69,236,0.5))' }} />
                </Tilt>
                <div className="float-tag" style={{ top:'6%', right:'-18%', animation:'floatA 5s ease-in-out infinite' }}>
                  <span style={{ fontSize:'1.1rem' }}>⚡</span>
                  <div><div style={{ fontSize:'0.7rem', fontWeight:700, color:'#fff' }}>MERN Stack</div><div style={{ fontSize:'0.58rem', color:'rgba(255,255,255,0.38)', fontFamily:"'Space Mono',monospace" }}>Expert</div></div>
                </div>
                <div className="float-tag" style={{ bottom:'8%', left:'-20%', animation:'floatB 6s ease-in-out infinite' }}>
                  <span style={{ fontSize:'1.1rem' }}>🚀</span>
                  <div><div style={{ fontSize:'0.7rem', fontWeight:700, color:'#fff' }}>Open to Work</div><div style={{ fontSize:'0.58rem', color:'rgba(255,255,255,0.38)', fontFamily:"'Space Mono',monospace" }}>Full-time / Freelance</div></div>
                </div>
              </div>
            </div>
          </div>

      
          <div style={{ display:'flex', justifyContent:'center', marginTop:'4rem', opacity: mounted ? 1 : 0, transition:'opacity 0.7s 1.6s' }}>
            <div onClick={() => window.scrollTo({ top: window.innerHeight, behavior:'smooth' })}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, color:'rgba(255,255,255,0.25)', fontFamily:"'Space Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.12em', cursor:'pointer' }}>
              <span>SCROLL</span>
              <div className="scroll-arrow" style={{ transform:'rotate(45deg)' }} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero