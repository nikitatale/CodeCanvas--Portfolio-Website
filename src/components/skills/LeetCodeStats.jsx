import React, { useState, useEffect, useRef } from "react";

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

const LeetCodeStats = () => {
  const [sectionRef, sectionVisible] = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .lc-section-label {
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
        .lc-section-label::before, .lc-section-label::after {
          content: '';
          width: 40px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(130,69,236,0.5));
        }
        .lc-section-label::after {
          background: linear-gradient(90deg, rgba(130,69,236,0.5), transparent);
        }

        .lc-card-link {
          display: block;
          padding: 6px;
          border-radius: 20px;
          background: rgba(130,69,236,0.08);
          border: 1px solid rgba(130,69,236,0.3);
          backdropFilter: blur(14px);
          box-shadow: 0 8px 32px rgba(130,69,236,0.2), inset 0 1px 0 rgba(255,255,255,0.06);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s;
          text-decoration: none;
        }
        .lc-card-link:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 56px rgba(130,69,236,0.38), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(130,69,236,0.55);
        }

        .lc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(130,69,236,0.13);
          border: 1px solid rgba(130,69,236,0.3);
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          color: rgba(168,85,247,0.9);
          margin-bottom: 2rem;
          transition: background 0.3s, border-color 0.3s;
        }
        .lc-badge:hover {
          background: rgba(130,69,236,0.22);
          border-color: rgba(130,69,236,0.5);
        }
      `}</style>

      <div
        ref={sectionRef}
        style={{
          marginTop: "5rem",
          position: "relative",
          zIndex: 1,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
      
        <div style={{
          width: "100%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(130,69,236,0.25), transparent)",
          marginBottom: "3.5rem",
          opacity: sectionVisible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }} />

        <div style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div className="lc-section-label" style={{ marginBottom: 16 }}>

            Problem Solving
          </div>

          <h3 style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 900,
            margin: "0 0 12px",
            background: "linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>


            DSA & LeetCode
          </h3>

          <div style={{
            width: 60, height: 2,
            background: "linear-gradient(90deg,#8245ec,#a855f7)",
            borderRadius: 999,
            margin: "0 auto 16px",
          }} />

          <p style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "1rem",
            fontWeight: 300,
            maxWidth: 420,
            margin: "0 auto",
          }}>

            
            Sharpening problem-solving skills, one challenge at a time
          </p>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.2rem",
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease",
        }}>

          <div style={{
            position: "relative",
            display: "inline-block",
          }}>
            <div style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: 32,
              background: "radial-gradient(ellipse at center, rgba(130,69,236,0.18), transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
              opacity: hovered ? 1 : 0.5,
              transition: "opacity 0.4s",
            }} />

            <a
              href="https://leetcode.com/u/NikitaTale"
              target="_blank"
              rel="noreferrer"
              className="lc-card-link"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src="https://leetcard.jacoblin.cool/NikitaTale?theme=dark&font=Karma&ext=heatmap&border=0&radius=16"
                alt="Nikita Tale LeetCode Stats"
                style={{
                  display: "block",
                  borderRadius: 16,
                  maxWidth: "min(500px, 88vw)",
                  width: "100%",
                }}
              />
            </a>
          </div>

          <a
            href="https://leetcode.com/u/NikitaTale"
            target="_blank"
            rel="noreferrer"
            className="lc-badge"
            style={{ textDecoration: "none" }}
          >
            <span style={{ fontSize: "0.75rem" }}>⚡</span>
            VIEW LEETCODE PROFILE
            <span style={{ fontSize: "0.65rem", opacity: 0.6 }}>↗</span>
          </a>
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "2rem",
          opacity: sectionVisible ? 1 : 0,
          transition: "opacity 0.7s 0.6s ease",
        }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.1em",
          }}>
            stats update automatically · powered by leetcard
          </p>
        </div>
      </div>
    </>
  );
};

export default LeetCodeStats;