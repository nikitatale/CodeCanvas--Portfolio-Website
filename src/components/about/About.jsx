import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";


function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { label: "Years Exp.", value: 1, suffix: "+" },
  { label: "Projects Built", value: 25, suffix: "+" },
  { label: "Tech Stack", value: 20, suffix: "+" },
];

const skills = [
  "MongoDB", "Express.js", "React", "Node.js",
  "JavaScript", "TypeScript", "REST APIs", "Git",
  "Tailwind CSS", "Cloud Deploy",
];

const About = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartCount(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .about-section {
          background: linear-gradient(
            38.73deg, rgba(130,69,236,0.06) 0%, rgba(201,32,184,0) 50%
          ), linear-gradient(
            141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.06) 100%
          );
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(130,69,236,0.1);
          border: 1px solid rgba(130,69,236,0.25);
          color: rgba(255,255,255,0.65);
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.04em;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(130,69,236,0.22);
          border-color: rgba(130,69,236,0.5);
          color: #fff;
          transform: translateY(-2px);
        }
        .skill-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 6px #a855f7;
          flex-shrink: 0;
        }

        .stat-block {
          text-align: center;
          padding: 16px 20px;
          background: rgba(130,69,236,0.06);
          border: 1px solid rgba(130,69,236,0.18);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: background 0.2s, border-color 0.2s, transform 0.25s;
          cursor: default;
          flex: 1;
          min-width: 90px;
        }
        .stat-block:hover {
          background: rgba(130,69,236,0.14);
          border-color: rgba(130,69,236,0.4);
          transform: translateY(-5px);
        }
        .stat-num {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, #a855f7, #8245ec);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.32);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .about-img-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes slowSpinRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes floatImg {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 30px;
          border-radius: 999px;
          background: linear-gradient(135deg, #8245ec, #a855f7);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
          box-shadow: 0 4px 24px rgba(130,69,236,0.35);
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 28px rgba(130,69,236,0.65), 0 8px 40px rgba(130,69,236,0.4);
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          color: #a855f7;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-label::before, .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(130,69,236,0.4));
        }
        .section-label::after {
          background: linear-gradient(90deg, rgba(130,69,236,0.4), transparent);
        }

        @media (max-width: 768px) {
          .about-grid { flex-direction: column !important; }
          .about-text { text-align: center !important; align-items: center !important; }
          .skills-wrap { justify-content: center !important; }
          .stats-flex { justify-content: center !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="about-section"
        style={{
          padding: "120px 7vw",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Outfit', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
      
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(130,69,236,0.12), transparent 70%)", filter:"blur(80px)", top:"10%", left:"-5%", }} />
          <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle, rgba(46,8,207,0.1), transparent 70%)", filter:"blur(80px)", bottom:"10%", right:"-5%", }} />
        </div>

        <div className="about-grid" style={{ display:"flex", gap:"5rem", alignItems:"center", width:"100%", position:"relative", zIndex:1 }}>

       
          <div className="about-img-wrapper" style={{ flex:1 }} data-aos="fade-right" data-aos-delay="100">
            <div style={{ position:"relative", width:"clamp(240px,30vw,380px)", height:"clamp(240px,30vw,380px)" }}>

            
              <div style={{
                position:"absolute", inset:-22, borderRadius:"50%",
                border:"1px dashed rgba(130,69,236,0.25)",
                animation:"slowSpin 18s linear infinite",
              }}>
                <div style={{ position:"absolute", top:0, left:"50%", transform:"translate(-50%,-50%)", width:10, height:10, borderRadius:"50%", background:"#a855f7", boxShadow:"0 0 12px 4px rgba(168,85,247,0.7)" }} />
              </div>

              
              <div style={{
                position:"absolute", inset:-8, borderRadius:"50%",
                border:"1px dashed rgba(168,85,247,0.2)",
                animation:"slowSpinRev 12s linear infinite",
              }}>
                <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translate(-50%,50%)", width:7, height:7, borderRadius:"50%", background:"#8245ec", boxShadow:"0 0 8px 3px rgba(130,69,236,0.6)" }} />
              </div>

             
              <div style={{
                position:"absolute", inset:-30, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(130,69,236,0.2) 0%, transparent 65%)",
                filter:"blur(20px)",
              }} />

            
              <div style={{
                width:"100%", height:"100%", borderRadius:"50%",
                border:"2.5px solid rgba(130,69,236,0.45)",
                overflow:"hidden",
                background:"rgba(130,69,236,0.07)",
                animation:"floatImg 5s ease-in-out infinite",
              }}>
                <img
                  src="/user.png"
                  alt="About Nikita"
                  style={{ width:"100%", height:"100%", objectFit:"cover", filter:"drop-shadow(0 0 20px rgba(130,69,236,0.4))" }}
                />
              </div>

             
              <div style={{
                position:"absolute", bottom:"5%", right:"-12%",
                background:"rgba(7,5,20,0.85)",
                border:"1px solid rgba(130,69,236,0.3)",
                backdropFilter:"blur(14px)",
                borderRadius:12, padding:"10px 16px",
                display:"flex", alignItems:"center", gap:8,
              }}>
                <span style={{ fontSize:"1.2rem" }}>💻</span>
                <div>
                  <div style={{ fontSize:"0.72rem", fontWeight:700, color:"#fff", fontFamily:"'Outfit',sans-serif" }}>Full-Stack</div>
                  <div style={{ fontSize:"0.58rem", color:"rgba(255,255,255,0.38)", fontFamily:"'Space Mono',monospace" }}>Developer</div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="about-text" style={{ flex:1.2, display:"flex", flexDirection:"column", gap:"1.2rem" }} data-aos="fade-left" data-aos-delay="200">

            <div className="section-label" style={{ maxWidth:320 }}>About Me</div>

            <div>
              <h2 style={{
                fontSize:"clamp(2rem,4vw,3rem)",
                fontWeight:900,
                lineHeight:1.1,
                margin:0,
                background:"linear-gradient(140deg, #fff 30%, #c084fc 65%, #8245ec 100%)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
              }}>
                A Bit About Me
              </h2>
            </div>

            <p style={{
              color:"rgba(255,255,255,0.38)",
              fontSize:"clamp(0.87rem,1.4vw,1rem)",
              lineHeight:1.9,
              fontWeight:300,
              maxWidth:520,
            }}>
              I'm a passionate full-stack developer specializing in the MERN stack
              (MongoDB, Express.js, React, and Node.js), focused on building scalable,
              user-centric web applications. I create seamless digital experiences by
              combining responsive React frontends with robust Node.js backends. With
              expertise in modern JavaScript, RESTful APIs, and cloud deployment, I
              transform complex problems into elegant solutions that deliver real value.
            </p>

          
            <div>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.68rem", color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>
                Tech I work with
              </p>
              <div className="skills-wrap" style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                {skills.map((s) => (
                  <span className="skill-pill" key={s}>
                    <span className="skill-dot" />
                    {s}
                  </span>
                ))}
              </div>
            </div>

           
            <div className="stats-flex" style={{ display:"flex", gap:"0.7rem", flexWrap:"wrap", marginTop:"0.4rem" }}>
              {stats.map((st) => (
                <StatBlock key={st.label} {...st} start={startCount} />
              ))}
            </div>

       
            <div style={{ marginTop:"0.4rem" }}>
              <a href="https://github.com/nikitatale" target="_blank" rel="noopener noreferrer" className="cta-btn">
               <span>My Journey</span>
               <span><FaArrowRight className="text-md text-white" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function StatBlock({ value, suffix, label, start }) {
  const count = useCounter(value, 1600, start);
  return (
    <div className="stat-block">
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default About;