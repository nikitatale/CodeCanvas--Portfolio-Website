import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { education } from "/src/constants.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", offset: 80, once: true });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .edu-card {
          background: rgba(7,5,20,0.75);
          border: 1px solid rgba(130,69,236,0.2);
          border-radius: 20px;
          padding: 28px 24px;
          backdrop-filter: blur(14px);
          min-height: 380px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, box-shadow 0.3s;
        }
        .edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,transparent,rgba(130,69,236,0.5),transparent);
        }
        .edu-card:hover {
          transform: translateY(-8px);
          border-color: rgba(130,69,236,0.42);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(130,69,236,0.15);
        }

        .edu-card-glow {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 160px; height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(130,69,236,0.12), transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }

        .edu-img-wrapper {
          width: 70px; height: 70px;
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid rgba(130,69,236,0.3);
          background: rgba(255,255,255,0.04);
          flex-shrink: 0;
          position: relative;
        }

        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(130,69,236,0.1);
          border: 1px solid rgba(130,69,236,0.22);
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.06em;
          margin-top: 6px;
        }

        .swiper-pagination-bullet {
          background: rgba(130,69,236,0.4) !important;
          width: 8px !important;
          height: 8px !important;
          transition: background 0.2s, width 0.2s !important;
        }
        .swiper-pagination-bullet-active {
          background: #a855f7 !important;
          width: 20px !important;
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
          background: linear-gradient(90deg, transparent, rgba(130,69,236,0.5));
        }
        .section-label::after {
          background: linear-gradient(90deg, rgba(130,69,236,0.5), transparent);
        }

        .highlight-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #8245ec, #a855f7);
          border-radius: 999px;
        }
      `}</style>

      <section
        id="education"
        style={{
          padding: "120px 7vw",
          fontFamily: "'Outfit',sans-serif",
          background: "linear-gradient(38.73deg,rgba(130,69,236,0.06) 0%,rgba(201,32,184,0) 50%),linear-gradient(141.27deg,rgba(0,70,209,0) 50%,rgba(0,70,209,0.06) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)", filter:"blur(80px)", top:"-5%", left:"5%", }} />
          <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(209,10,138,0.08),transparent 70%)", filter:"blur(80px)", bottom:"10%", right:"5%", }} />
        </div>

     
        <div style={{ textAlign:"center", marginBottom:"4rem", position:"relative", zIndex:1 }} data-aos="fade-up">
          <div className="section-label" style={{ marginBottom:16 }}>Learning Path</div>
          <h2 style={{
            fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, margin:"0 0 12px",
            background:"linear-gradient(140deg,#fff 30%,#c084fc 65%,#8245ec 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            Academic Background
          </h2>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,#8245ec,#a855f7)", borderRadius:999, margin:"0 auto 16px" }} />
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"1rem", fontWeight:300, maxWidth:500, margin:"0 auto" }}>
            A summary of my educational journey and professional certifications
          </p>
        </div>

     
        <div style={{ position:"relative", zIndex:1 }} data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            style={{ paddingBottom: "3rem" }}
          >
            {education.map((edu, index) => (
              <SwiperSlide key={edu.id} style={{ display:"flex", justifyContent:"center" }}>
                <div
                  className="edu-card"
                  style={{ maxWidth:400, margin:"0 auto" }}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className="edu-card-glow" />

                  <div style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:20, position:"relative" }}>
                   
                    <div className="highlight-bar" />

                    <div className="edu-img-wrapper" style={{ marginLeft:12 }}>
                      <img src={edu.img} alt="education" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    </div>

                    <div style={{ flex:1 }}>
                      <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"1rem", color:"#fff", margin:"0 0 4px", lineHeight:1.3 }}>
                        {edu.degree}
                      </h3>
                      {edu.institution && (
                        <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.4)", marginBottom:4 }}>
                          {edu.institution}
                        </div>
                      )}
                      <span className="date-badge">
                        📅 {edu.date}
                      </span>
                    </div>
                  </div>

                 
                  <div style={{ height:1, background:"rgba(130,69,236,0.12)", margin:"0 0 16px" }} />

                  <p style={{ color:"rgba(255,255,255,0.36)", fontSize:"0.87rem", lineHeight:1.8, margin:0, fontWeight:300, flex:1 }}>
                    {edu.desc}
                  </p>

                  
                  {edu.grade && (
                    <div style={{
                      marginTop:16, padding:"8px 14px",
                      background:"rgba(130,69,236,0.1)",
                      border:"1px solid rgba(130,69,236,0.22)",
                      borderRadius:10,
                      display:"flex", alignItems:"center", gap:8,
                    }}>
                      <span style={{ fontSize:"0.8rem" }}>🏆</span>
                      <span style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.55)", fontFamily:"'Space Mono',monospace" }}>
                        {edu.grade}
                      </span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Education;