import React, { useEffect, useRef } from 'react'
import Hero       from './components/hero/Hero'
import About      from './components/about/About'
import Contact    from './components/contact/Contact'
import Education  from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer     from './components/footer/Footer'
import Navbar     from './components/navbar/Navbar'
import Projects   from './components/projects/Projects'
import Skills     from './components/skills/Skills'
import './index.css'


function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 50 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.4 + 0.3,
      dx:    (Math.random() - 0.5) * 0.3,
      dy:    (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)

     
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(130,69,236,${0.1 * (1 - dist / 100)})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
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

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0, pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}


function App() {
  return (
    <div style={{ background: '#07050f', minHeight: '100vh', position: 'relative' }}>

  
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <style>{`
          @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,-30px) scale(1.08)} 66%{transform:translate(-20px,25px) scale(0.95)} }
          @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-50px,30px) scale(1.1)} 70%{transform:translate(25px,-20px) scale(0.92)} }
          @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,40px) scale(1.06)} }
        `}</style>

     
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(110px)',
          width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(130,69,236,0.22), transparent 70%)',
          top: '30%', left: '10%',
          animation: 'blob1 14s ease-in-out infinite',
        }} />
       

        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(110px)',
          width: 440, height: 440,
          background: 'radial-gradient(circle, rgba(46,8,207,0.18), transparent 70%)',
          top: '10%', right: '5%',
          animation: 'blob2 17s ease-in-out infinite',
        }} />
        

        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(110px)',
          width: 380, height: 380,
          background: 'radial-gradient(circle, rgba(209,10,138,0.12), transparent 70%)',
          bottom: '5%', left: '45%',
          animation: 'blob3 11s ease-in-out infinite',
        }} />

 
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(130,69,236,0.18) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          opacity: 0.4,
        }} />
      </div>

    
      <ParticleBackground />

   
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '180px',
      }} />

    
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App