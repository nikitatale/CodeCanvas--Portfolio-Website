import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const navLinks = [
  { name: "Home",       id: "home" },
  { name: "About",      id: "about" },
  { name: "Projects",   id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education",  id: "education" },
  { name: "Contact",    id: "contact" },
];

const socials = [
  { icon: <FaGithub size={16} />,   label: "GitHub",   href: "https://github.com/nikitatale" },
  { icon: <FaLinkedin size={16} />, label: "LinkedIn",  href: "https://www.linkedin.com/in/nikita-tale" },
  { icon: <SiLeetcode size={16} />,  label: "Twitter",   href: "https://leetcode.com/u/NikitaTale" },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .footer-link {
          background: none;
          border: none;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.38);
          cursor: pointer;
          padding: 4px 0;
          position: relative;
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg,#8245ec,#a855f7);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
          border-radius: 999px;
        }
        .footer-link:hover { color: rgba(255,255,255,0.85); }
        .footer-link:hover::after { width: 100%; }

        .social-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(130,69,236,0.08);
          border: 1px solid rgba(130,69,236,0.22);
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .social-btn:hover {
          background: rgba(130,69,236,0.22);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(130,69,236,0.4);
        }

        .scroll-top-btn {
          display: flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(130,69,236,0.2), rgba(168,85,247,0.15));
          border: 1px solid rgba(130,69,236,0.35);
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
        }
        .scroll-top-btn:hover {
          background: linear-gradient(135deg,#8245ec,#a855f7);
          color: #fff;
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 24px rgba(130,69,236,0.5);
        }

        @keyframes footerLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .name-gradient {
          background: linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <footer
        style={{
          position: "relative",
          fontFamily: "'Outfit',sans-serif",
          overflow: "hidden",
          background: "rgba(4,3,14,0.95)",
          borderTop: "1px solid rgba(130,69,236,0.12)",
        }}
      >
   
        <div style={{
          position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
          background: "linear-gradient(90deg,transparent,rgba(130,69,236,0.5),transparent)",
          transformOrigin: "left",
          animation: "footerLineGrow 1.2s ease-out forwards",
        }} />

        
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.08),transparent 70%)", filter:"blur(80px)", bottom:"-15%", left:"5%", }} />
          <div style={{ position:"absolute", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(46,8,207,0.07),transparent 70%)", filter:"blur(70px)", bottom:"-10%", right:"5%", }} />
        </div>

        <div style={{ position:"relative", zIndex:1, padding:"64px 7vw 36px" }}>

          
          <div style={{
            display:"flex", justifyContent:"space-between", alignItems:"flex-start",
            gap:"3rem", flexWrap:"wrap", marginBottom:"3rem",
          }}>

            
            <div style={{ flex:1, minWidth:220 }}>
           
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                <div style={{
                  width:36, height:36, borderRadius:9,
                  background:"linear-gradient(135deg,rgba(130,69,236,0.3),rgba(168,85,247,0.1))",
                  border:"1px solid rgba(130,69,236,0.4)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <img src="/logo.svg" alt="Logo" style={{ width:20, height:20 }} />
                </div>
                <span style={{
                  fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"1.05rem",
                  background:"linear-gradient(135deg,#fff 30%,#a855f7)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                  letterSpacing:"0.04em",
                }}>
                  CodeCanvas
                </span>
              </div>

              <h3 className="name-gradient" style={{ fontSize:"1.5rem", fontWeight:800, margin:"0 0 10px" }}>
                Nikita Tale
              </h3>

              <p style={{
                color:"rgba(255,255,255,0.32)", fontSize:"0.83rem", lineHeight:1.8,
                fontWeight:300, maxWidth:280, margin:"0 0 20px",
              }}>
                 Full-stack by skill, detail-obsessed by nature.
              </p>

            
              <div style={{ display:"flex", gap:"10px" }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-btn">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

           
            <div style={{ flex:1, minWidth:160 }}>
              <div style={{
                fontFamily:"'Space Mono',monospace",
                fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase",
                color:"rgba(255,255,255,0.25)", marginBottom:18,
              }}>
                Navigation
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px 24px" }}>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className="footer-link"
                    style={{ textAlign:"left" }}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

           
            <div style={{ flex:1, minWidth:200 }}>
              <div style={{
                fontFamily:"'Space Mono',monospace",
                fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase",
                color:"rgba(255,255,255,0.25)", marginBottom:18,
              }}>
                Status
              </div>

            
              <div style={{
                padding:"16px 18px",
                background:"rgba(130,69,236,0.07)",
                border:"1px solid rgba(130,69,236,0.18)",
                borderRadius:14,
                marginBottom:16,
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                  <div style={{
                    width:8, height:8, borderRadius:"50%",
                    background:"#22c55e", boxShadow:"0 0 8px #22c55e",
                    animation:"pulse 2s ease-in-out infinite",
                    flexShrink:0,
                  }} />
                  <span style={{ fontSize:"0.7rem", fontFamily:"'Space Mono',monospace", color:"#22c55e", letterSpacing:"0.06em" }}>
                    Open to Work
                  </span>
                </div>
                <p style={{ fontSize:"0.78rem", color:"rgba(255,255,255,0.32)", fontWeight:300, margin:"0 0 14px", lineHeight:1.6 }}>
                  Available for full-time roles and freelance projects
                </p>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}
                  style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    padding:"8px 18px", borderRadius:999,
                    background:"linear-gradient(135deg,#8245ec,#a855f7)",
                    color:"#fff", fontFamily:"'Outfit',sans-serif",
                    fontWeight:600, fontSize:"0.78rem",
                    textDecoration:"none",
                    boxShadow:"0 4px 16px rgba(130,69,236,0.35)",
                    transition:"transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 6px 22px rgba(130,69,236,0.55)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(130,69,236,0.35)"; }}
                >
                 
                  <span> Let's Talk </span>
                  <span><FaArrowRight/></span>
                </a>
              </div>
            </div>
          </div>

         
          <div style={{ height:1, background:"linear-gradient(90deg,transparent,rgba(130,69,236,0.2),transparent)", margin:"0 0 24px" }} />

        
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
            <p style={{
              fontFamily:"'Space Mono',monospace",
              fontSize:"0.62rem", color:"rgba(255,255,255,0.22)",
              letterSpacing:"0.06em", margin:0,
            }}>
              © 2025 <span style={{ color:"rgba(168,85,247,0.6)" }}>Nikita Tale</span>. All rights reserved.
            </p>

            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                <HiArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%,100% { opacity:1; transform:scale(1); }
            50%      { opacity:0.55; transform:scale(1.35); }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;