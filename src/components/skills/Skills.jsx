import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { skills } from "../../constants";
import LeetCodeStats from "./LeetCodeStats";


function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}


function SkillCard({ skill, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.95)",
        transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms,
                     transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms`,
      }}
    >
      <Tilt
        tiltMaxAngleX={14}
        tiltMaxAngleY={14}
        perspective={1000}
        scale={1.06}
        transitionSpeed={600}
        gyroscope={true}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: "24px 16px",
            borderRadius: 18,
            background: hovered
              ? "rgba(130,69,236,0.13)"
              : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? "rgba(130,69,236,0.45)" : "rgba(255,255,255,0.08)"}`,
            backdropFilter: "blur(14px)",
            boxShadow: hovered
              ? "0 12px 40px rgba(130,69,236,0.25), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            cursor: "default",
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.3s",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
            background: "linear-gradient(90deg,transparent,rgba(130,69,236,0.5),transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }} />

          <div style={{
            position: "absolute",
            width: 60, height: 60,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(130,69,236,0.2),transparent 70%)",
            filter: "blur(12px)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
            top: "18px",
          }} />

          <img
            src={skill.img}
            alt={skill.name}
            style={{
              width: 52, height: 52,
              objectFit: "contain",
              position: "relative",
              transform: hovered ? "translateY(-3px) scale(1.1)" : "translateY(0) scale(1)",
              transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              filter: hovered
                ? "drop-shadow(0 4px 12px rgba(130,69,236,0.6))"
                : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          />

          <p style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 600,
            fontSize: "0.82rem",
            color: hovered ? "#fff" : "rgba(255,255,255,0.6)",
            margin: 0,
            letterSpacing: "0.02em",
            transition: "color 0.3s",
            position: "relative",
          }}>
            {skill.name}
          </p>
        </div>
      </Tilt>
    </div>
  );
}


const Skills = () => {
  const tabs = Object.keys(skills);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [prevTab, setPrevTab] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [sectionRef, sectionVisible] = useReveal();

  const handleTabChange = (tab) => {
    if (tab === activeTab || animating) return;
    setAnimating(true);
    setPrevTab(activeTab);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 220);
  };

  const tabIcons = {
    Frontend: "",
    Backend: "",
    Database: "",
    Tools: "",
    Languages: "",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .skills-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: transparent;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.38);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .skills-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,rgba(130,69,236,0.15),rgba(168,85,247,0.08));
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 999px;
        }
        .skills-tab:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(130,69,236,0.25);
        }
        .skills-tab:hover::before { opacity: 1; }

        .skills-tab.active {
          color: #fff;
          border-color: rgba(130,69,236,0.5);
          background: linear-gradient(135deg,rgba(130,69,236,0.2),rgba(168,85,247,0.12));
          box-shadow: 0 0 20px rgba(130,69,236,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .skills-tab.active::before { opacity: 0; }

        .skills-tab-icon {
          font-size: 0.85rem;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .skills-tab.active .skills-tab-icon { transform: scale(1.2); }

        @keyframes gridFadeIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .skills-grid {
          animation: gridFadeIn 0.3s ease forwards;
        }
        .skills-grid.exit {
          animation: none;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.2s, transform 0.2s;
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
          background: linear-gradient(90deg,transparent,rgba(130,69,236,0.5));
        }
        .section-label::after {
          background: linear-gradient(90deg,rgba(130,69,236,0.5),transparent);
        }

        .skill-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px; height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          background: rgba(130,69,236,0.2);
          border: 1px solid rgba(130,69,236,0.3);
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(168,85,247,0.9);
          line-height: 1;
        }

        
        .tabs-scroll {
          overflow-x: auto;
          padding-bottom: 6px;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .tabs-scroll::-webkit-scrollbar {
          display: none;
        }

       
        .tabs-inner {
          display: inline-flex;
          gap: 8px;
          padding: 6px;
          background: rgba(7,5,20,0.6);
          border: 1px solid rgba(130,69,236,0.15);
          border-radius: 999px;
          backdrop-filter: blur(12px);
          flex-wrap: nowrap;
          flex-shrink: 0;
          min-width: max-content;
        }
      `}</style>

      <section
        id="skills"
        style={{
          padding: "120px 7vw",
          fontFamily: "'Outfit',sans-serif",
          background: "linear-gradient(38.73deg,rgba(130,69,236,0.06) 0%,rgba(201,32,184,0) 50%),linear-gradient(141.27deg,rgba(0,70,209,0) 50%,rgba(0,70,209,0.06) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)", filter:"blur(90px)", top:"-5%", right:"-3%", }} />
          <div style={{ position:"absolute", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,rgba(46,8,207,0.09),transparent 70%)", filter:"blur(80px)", bottom:"5%", left:"-3%", }} />
        </div>

        <div
          ref={sectionRef}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            position: "relative", zIndex: 1,
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="section-label" style={{ marginBottom: 16 }}>Tech Stack</div>
          <h2 style={{
            fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, margin: "0 0 12px",
            background: "linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            My Skills
          </h2>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,#8245ec,#a855f7)", borderRadius:999, margin:"0 auto 16px" }} />
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"1rem", fontWeight:300, maxWidth:460, margin:"0 auto" }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

     
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
            position: "relative",
            zIndex: 1,
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s 0.15s ease, transform 0.7s 0.15s ease",
          }}
        >
        
          <div className="tabs-scroll" style={{ maxWidth: "100%" }}>
          
            <div className="tabs-inner">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`skills-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabChange(tab)}
                >
                  <span className="skills-tab-icon">{tabIcons[tab] || "✦"}</span>
                  {tab}
                  <span className="skill-count">{skills[tab]?.length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`skills-grid ${animating ? "exit" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            gap: "16px",
            position: "relative", zIndex: 1,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {skills[activeTab]?.map((skill, index) => (
            <SkillCard
              key={`${activeTab}-${skill.name}`}
              skill={skill}
              index={index}
              visible={sectionVisible && !animating}
            />
          ))}
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "3rem",
          position: "relative", zIndex: 1,
          opacity: sectionVisible ? 1 : 0,
          transition: "opacity 0.7s 0.6s ease",
        }}>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.62rem", color:"rgba(255,255,255,0.2)", letterSpacing:"0.1em" }}>
            {Object.values(skills).flat().length}+ technologies across {tabs.length} categories
          </p>
        </div>
       
      <div style={{ position: "relative", zIndex: 1 }}>
        <LeetCodeStats/>
         </div>
      </section>
    </>
  );
};

export default Skills;