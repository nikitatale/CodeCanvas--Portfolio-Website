import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { experiences } from "/src/constants.js";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", offset: 80, once: true });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .exp-card {
          background: rgba(7,5,20,0.7);
          border: 1px solid rgba(130,69,236,0.2);
          border-radius: 20px;
          padding: 24px 24px;
          backdrop-filter: blur(14px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(130,69,236,0.45), transparent);
        }
        .exp-card:hover {
          transform: translateY(-6px);
          border-color: rgba(130,69,236,0.42);
          box-shadow: 0 16px 60px rgba(0,0,0,0.35), 0 0 30px rgba(130,69,236,0.12);
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 2px solid rgba(130,69,236,0.5);
          background: rgba(7,5,20,0.9);
          display: flex; align-items: center; justify-content: center;
          z-index: 3;
          box-shadow: 0 0 0 4px rgba(130,69,236,0.1), 0 0 20px rgba(130,69,236,0.25);
          transition: box-shadow 0.3s;
        }
        .timeline-dot:hover {
          box-shadow: 0 0 0 6px rgba(130,69,236,0.15), 0 0 30px rgba(130,69,236,0.4);
        }

        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(130,69,236,0.12);
          border: 1px solid rgba(130,69,236,0.28);
          color: rgba(255,255,255,0.6);
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.04em;
          transition: background 0.2s, color 0.2s;
        }
        .skill-tag:hover {
          background: rgba(130,69,236,0.22);
          color: #fff;
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
          justify-content: center;
        }
        .section-label::before, .section-label::after {
          content: '';
          width: 40px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(130,69,236,0.5));
        }
        .section-label::after {
          background: linear-gradient(90deg, rgba(130,69,236,0.5), transparent);
        }

        @keyframes lineGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }

        @media (max-width: 768px) {
          .timeline-dot { display: none !important; }
          .exp-row { justify-content: center !important; }
          .exp-row > div { width: 100% !important; max-width: 100% !important; margin: 0 !important; }
        }
      `}</style>

      <section
        id="experience"
        style={{
          padding: "120px 7vw",
          fontFamily: "'Outfit',sans-serif",
          background: "linear-gradient(38.73deg,rgba(130,69,236,0.06) 0%,rgba(201,32,184,0) 50%),linear-gradient(141.27deg,rgba(0,70,209,0) 50%,rgba(0,70,209,0.06) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)", filter:"blur(80px)", top:"5%", right:"-5%", }} />
          <div style={{ position:"absolute", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,rgba(46,8,207,0.09),transparent 70%)", filter:"blur(80px)", bottom:"5%", left:"-3%", }} />
        </div>

       
        <div style={{ textAlign:"center", marginBottom:"5rem", position:"relative", zIndex:1 }} data-aos="fade-up">
          <div className="section-label" style={{ marginBottom:16 }}>My Journey</div>
          <h2 style={{
            fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, margin:"0 0 12px",
            background:"linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            Work Experience
          </h2>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,#8245ec,#a855f7)", borderRadius:999, margin:"0 auto 16px" }} />
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"1rem", fontWeight:300, maxWidth:480, margin:"0 auto" }}>
            A collection of my work experience and the roles I've taken in various organizations
          </p>
        </div>

      
        <div style={{ position:"relative", maxWidth:1000, margin:"0 auto", zIndex:1 }}>

      
          <div
            className="hidden-mobile"
            style={{
              position:"absolute", left:"50%", top:0, bottom:0, width:1,
              background:"linear-gradient(180deg,transparent,rgba(130,69,236,0.3) 10%,rgba(130,69,236,0.3) 90%,transparent)",
              transform:"translateX(-50%)",
              transformOrigin:"top",
              animation:"lineGrow 1.5s ease-out forwards",
            }}
          />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-row"
              style={{
                display:"flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                position:"relative",
                marginBottom:"3.5rem",
                alignItems:"center",
              }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
             
              <div className="timeline-dot hidden-mobile">
                <img src={exp.img} alt={exp.company} style={{ width:28, height:28, objectFit:"cover", borderRadius:"50%" }} />
              </div>

            
              <div
                className="exp-card"
                style={{ width:"44%", [index % 2 === 0 ? "marginRight" : "marginLeft"]: "auto" }}
              >
              
                <div style={{
                  position:"absolute", bottom:-30, [index%2===0?"right":"left"]:-30,
                  width:150, height:150, borderRadius:"50%",
                  background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)",
                  filter:"blur(20px)", pointerEvents:"none",
                }} />

                <div style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:16, position:"relative" }}>
                  <div style={{
                    width:52, height:52, borderRadius:12,
                    background:"rgba(255,255,255,0.06)",
                    border:"1px solid rgba(130,69,236,0.2)",
                    overflow:"hidden", flexShrink:0,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <img src={exp.img} alt={exp.company} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:"1.05rem", fontWeight:700, color:"#fff", margin:"0 0 3px" }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", marginBottom:4 }}>
                      {exp.company}
                    </div>
                    <div style={{
                      display:"inline-flex", alignItems:"center", gap:5,
                      padding:"3px 10px", borderRadius:999,
                      background:"rgba(130,69,236,0.1)",
                      border:"1px solid rgba(130,69,236,0.2)",
                      fontSize:"0.6rem",
                      fontFamily:"'Space Mono',monospace",
                      color:"rgba(255,255,255,0.4)",
                      letterSpacing:"0.06em",
                    }}>
                      📅 {exp.date}
                    </div>
                  </div>
                </div>

                <p style={{ color:"rgba(255,255,255,0.38)", fontSize:"0.88rem", lineHeight:1.75, margin:"0 0 16px", fontWeight:300 }}>
                  {exp.desc}
                </p>

                <div>
                  <div style={{ fontSize:"0.6rem", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.25)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>
                    Skills Used
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                    {exp.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        <span style={{ width:4, height:4, borderRadius:"50%", background:"#a855f7", display:"inline-block" }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .hidden-mobile { display: block; }
          @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        `}</style>
      </section>
    </>
  );
};

export default Experience;