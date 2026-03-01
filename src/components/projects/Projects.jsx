import React, { useState, useEffect, useRef } from "react";
import { projects } from "/src/constants.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";


function useLockBody(active) {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);
}


function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        background: "rgba(7,5,20,0.75)",
        border: `1px solid ${hovered ? "rgba(130,69,236,0.5)" : "rgba(130,69,236,0.18)"}`,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        height: 400,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backdropFilter: "blur(14px)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.45), 0 0 30px rgba(130,69,236,0.18)"
          : "0 8px 30px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s",
      }}
    >
      
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(130,69,236,0.55), transparent)",
      }} />

      <div style={{ position: "relative", overflow: "hidden", height: 180, flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        />
    
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(7,5,20,0.9) 100%)",
        }} />

      
        {!project.isHosted && (
          <div style={{
            position: "absolute", top: 10, right: 10,
            padding: "4px 10px", borderRadius: 999,
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.35)",
            fontSize: "0.58rem", fontFamily: "'Space Mono',monospace",
            color: "#22c55e", letterSpacing: "0.06em",
          }}>
            Frontend Only
          </div>
        )}

      
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(130,69,236,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          <div style={{
            padding: "8px 20px", borderRadius: 999,
            background: "rgba(130,69,236,0.3)",
            border: "1px solid rgba(168,85,247,0.5)",
            backdropFilter: "blur(8px)",
            fontSize: "0.75rem", fontFamily: "'Space Mono',monospace",
            color: "#fff", letterSpacing: "0.06em",
          }}>
            View Details →
          </div>
        </div>
      </div>

    
      <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
        <h3 style={{
          fontFamily: "'Outfit',sans-serif", fontSize: "1.05rem", fontWeight: 700,
          color: "#fff", margin: 0, lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        <p style={{
          color: "rgba(255,255,255,0.36)", fontSize: "0.82rem", lineHeight: 1.7,
          fontWeight: 300, margin: 0,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {project.description}
        </p>

      
        <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.slice(0, 4).map((tag, i) => (
            <span key={i} style={{
              padding: "3px 10px", borderRadius: 999,
              background: "rgba(130,69,236,0.1)",
              border: "1px solid rgba(130,69,236,0.22)",
              fontSize: "0.6rem", fontFamily: "'Space Mono',monospace",
              color: "#a855f7", letterSpacing: "0.04em",
            }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span style={{
              padding: "3px 8px", borderRadius: 999,
              background: "rgba(130,69,236,0.06)",
              border: "1px solid rgba(130,69,236,0.15)",
              fontSize: "0.6rem", fontFamily: "'Space Mono',monospace",
              color: "rgba(255,255,255,0.3)",
            }}>
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}


function ProjectModal({ project, onClose }) {
  useLockBody(!!project);
  const overlayRef = useRef(null);

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        animation: "modalFadeIn 0.25s ease forwards",
      }}
    >
      <div style={{
        background: "rgba(7,5,20,0.97)",
        border: "1px solid rgba(130,69,236,0.3)",
        borderRadius: 24,
        width: "100%", maxWidth: 680,
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(130,69,236,0.15)",
        animation: "modalSlideUp 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
      }}>
       
        <div style={{
          position: "absolute", top: 0, left: "15%", right: "15%", height: 1,
          background: "linear-gradient(90deg,transparent,rgba(130,69,236,0.7),transparent)",
          borderRadius: 999,
        }} />

     
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(130,69,236,0.12)",
            border: "1px solid rgba(130,69,236,0.3)",
            color: "rgba(255,255,255,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(130,69,236,0.25)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(130,69,236,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
        >
          <FaTimes size={12} />
        </button>

    
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "24px 24px 0 0", height: 280 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(7,5,20,0.97) 100%)",
          }} />

        
          <div style={{ position: "absolute", bottom: 20, left: 28 }}>
            {!project.isHosted && (
              <div style={{
                display: "inline-flex", marginBottom: 8,
                padding: "3px 10px", borderRadius: 999,
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.35)",
                fontSize: "0.6rem", fontFamily: "'Space Mono',monospace",
                color: "#22c55e", letterSpacing: "0.06em",
              }}>
                Frontend Only
              </div>
            )}
          </div>
        </div>

       
        <div style={{ padding: "24px 28px 32px" }}>
          <h3 style={{
            fontFamily: "'Outfit',sans-serif", fontSize: "clamp(1.3rem,3vw,1.8rem)", fontWeight: 800,
            background: "linear-gradient(140deg,#fff 30%,#c084fc 70%,#8245ec)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            margin: "0 0 12px",
          }}>
            {project.title}
          </h3>

          <p style={{
            color: "rgba(255,255,255,0.42)", fontSize: "0.92rem", lineHeight: 1.85,
            fontWeight: 300, margin: "0 0 20px",
          }}>
            {project.description}
          </p>

          
          <div style={{ marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 7 }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{
                padding: "5px 12px", borderRadius: 999,
                background: "rgba(130,69,236,0.1)",
                border: "1px solid rgba(130,69,236,0.25)",
                fontSize: "0.65rem", fontFamily: "'Space Mono',monospace",
                color: "#a855f7", letterSpacing: "0.04em",
              }}>
                {tag}
              </span>
            ))}
          </div>

          
          <div style={{ height: 1, background: "rgba(130,69,236,0.12)", marginBottom: 24 }} />

       
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 12,
                background: "rgba(130,69,236,0.1)",
                border: "1px solid rgba(130,69,236,0.3)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.9rem",
                textDecoration: "none", flex: 1, justifyContent: "center",
                transition: "background 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(130,69,236,0.22)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(130,69,236,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <FaGithub size={16} /> View Code
            </a>

            {project.isHosted && (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "12px 24px", borderRadius: 12,
                  background: "linear-gradient(135deg,#8245ec,#a855f7)",
                  border: "none",
                  color: "#fff",
                  fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "0.9rem",
                  textDecoration: "none", flex: 1, justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(130,69,236,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(130,69,236,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(130,69,236,0.4)"; }}
              >
                <FaExternalLinkAlt size={13} /> View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        @keyframes modalFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes modalSlideUp {
          from { opacity:0; transform:translateY(30px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        .swiper-pagination-bullet {
          background: rgba(130,69,236,0.4) !important;
          width: 8px !important; height: 8px !important;
          transition: background 0.2s, width 0.25s !important;
        }
        .swiper-pagination-bullet-active {
          background: #a855f7 !important;
          width: 22px !important;
          border-radius: 999px !important;
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
      `}</style>

      <section
        id="projects"
        style={{
          padding: "120px 7vw",
          fontFamily: "'Outfit',sans-serif",
          background: "linear-gradient(38.73deg,rgba(130,69,236,0.06) 0%,rgba(201,32,184,0) 50%),linear-gradient(141.27deg,rgba(0,70,209,0) 50%,rgba(0,70,209,0.06) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
      
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)", filter:"blur(90px)", top:"-5%", right:"5%", }} />
          <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle,rgba(209,10,138,0.08),transparent 70%)", filter:"blur(80px)", bottom:"5%", left:"5%", }} />
        </div>

    
        <div style={{ textAlign:"center", marginBottom:"4rem", position:"relative", zIndex:1 }} data-aos="fade-up">
          <div className="section-label" style={{ marginBottom:16 }}>Portfolio</div>
          <h2 style={{
            fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, margin:"0 0 12px",
            background:"linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            My Projects
          </h2>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,#8245ec,#a855f7)", borderRadius:999, margin:"0 auto 16px" }} />
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"1rem", fontWeight:300, maxWidth:520, margin:"0 auto" }}>
            A curated showcase of my projects, demonstrating expertise across diverse technologies
          </p>
        </div>

   
        <div style={{ position:"relative", zIndex:1 }}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            style={{ paddingBottom: "3.5rem" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} index={index} onClick={setSelectedProject} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

    
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>
    </>
  );
};

export default Projects;