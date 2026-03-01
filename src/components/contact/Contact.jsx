import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMailBulk className="text-2xl text-gray-400" /> ,
    label: "Email",
    value: "talenikita3@gmail.com ",
    href: "mailto:talenikita3@gmail.com ",
  },
  {
    icon: <FaLinkedin className="text-2xl text-gray-400" />,
    label: "LinkedIn",
    value: "nikita-tale",
    href: "https://www.linkedin.com/in/nikita-tale",
  },
  {
    icon: <FaGithub className="text-2xl text-gray-400" /> ,
    label: "GitHub",
    value: "nikitatale",
    href: "https://github.com/nikitatale",
  },
];

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_7dli7ld",
        "template_dsbvabc",
        form.current,
        "q8DN_Po6sQ8hI6KXJ"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent! I'll get back to you soon 🚀", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
            style: {
              background: "rgba(7,5,20,0.95)",
              border: "1px solid rgba(130,69,236,0.4)",
              borderRadius: 12,
              fontFamily: "'Outfit',sans-serif",
            },
          });
        },
        () => {
          setIsSending(false);
          toast.error("Failed to send. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    background: "rgba(7,5,20,0.7)",
    border: `1px solid ${focused === name ? "rgba(130,69,236,0.6)" : "rgba(130,69,236,0.15)"}`,
    color: "#fff",
    fontFamily: "'Outfit',sans-serif",
    fontSize: "0.92rem",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
    boxSizing: "border-box",
    boxShadow: focused === name ? "0 0 0 3px rgba(130,69,236,0.12)" : "none",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(130,69,236,0.07);
          border: 1px solid rgba(130,69,236,0.18);
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.22s;
        }
        .contact-info-card:hover {
          background: rgba(130,69,236,0.14);
          border-color: rgba(130,69,236,0.38);
          transform: translateX(5px);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #8245ec, #a855f7);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
          box-shadow: 0 4px 20px rgba(130,69,236,0.35);
          letter-spacing: 0.03em;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 24px rgba(130,69,236,0.6), 0 8px 30px rgba(130,69,236,0.35);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
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

        textarea::placeholder, input::placeholder { color: rgba(255,255,255,0.22); }
        textarea, input { color-scheme: dark; }
      `}</style>

      <section
        id="contact"
        style={{
          padding: "120px 7vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "'Outfit',sans-serif",
          background: "linear-gradient(38.73deg,rgba(130,69,236,0.06) 0%,rgba(201,32,184,0) 50%),linear-gradient(141.27deg,rgba(0,70,209,0) 50%,rgba(0,70,209,0.06) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ToastContainer />

        
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:0 }}>
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(130,69,236,0.1),transparent 70%)", filter:"blur(80px)", top:"-5%", right:"10%", }} />
          <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(209,10,138,0.08),transparent 70%)", filter:"blur(80px)", bottom:"10%", left:"5%", }} />
        </div>

    
        <div style={{ textAlign:"center", marginBottom:"4rem", position:"relative", zIndex:1 }}>
          <div className="section-label" style={{ marginBottom:16 }}>Get in Touch</div>
          <h2 style={{
            fontSize:"clamp(2rem,4vw,3rem)",
            fontWeight:900,
            margin:"0 0 12px",
            background:"linear-gradient(140deg, #fff 30%, #c084fc 65%, #8245ec 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            Contact Me
          </h2>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,#8245ec,#a855f7)", borderRadius:999, margin:"0 auto 16px" }} />
          <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"1rem", fontWeight:300, fontFamily:"'Outfit',sans-serif" }}>
            Open for opportunities and collaborations!
          </p>
        </div>

    
        <div style={{
          display:"flex", gap:"3rem", width:"100%", maxWidth:900,
          alignItems:"flex-start", position:"relative", zIndex:1,
          flexWrap:"wrap", justifyContent:"center",
        }}>

        
          <div style={{ flex:1, minWidth:240, display:"flex", flexDirection:"column", gap:"1rem" }}>
            <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"1.1rem", color:"rgba(255,255,255,0.7)", margin:"0 0 8px" }}>
              Let's connect
            </h3>
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div style={{
                  width:42, height:42, borderRadius:10,
                  background:"rgba(130,69,236,0.12)",
                  border:"1px solid rgba(130,69,236,0.25)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"1.1rem", flexShrink:0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize:"0.62rem", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:3 }}>
                    {info.label}
                  </div>
                  <div style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.7)", fontWeight:500 }}>
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

           
            <div style={{
              marginTop:8, padding:"16px 18px",
              background:"rgba(130,69,236,0.07)",
              border:"1px solid rgba(130,69,236,0.18)",
              borderRadius:14,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"pulse 2s ease-in-out infinite" }} />
                <span style={{ fontSize:"0.72rem", fontFamily:"'Space Mono',monospace", color:"#22c55e", letterSpacing:"0.06em" }}>
                  Available
                </span>
              </div>
              <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.35)", fontWeight:300, margin:0, lineHeight:1.7 }}>
                Currently open to full-time roles and freelance projects.
              </p>
            </div>
          </div>

         
          <div style={{
            flex:1.4, minWidth:300,
            background:"rgba(7,5,20,0.6)",
            border:"1px solid rgba(130,69,236,0.18)",
            borderRadius:20,
            padding:"28px 28px",
            backdropFilter:"blur(14px)",
            boxShadow:"0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
            position:"relative", overflow:"hidden",
          }}>
           
            <div style={{ position:"absolute", top:0, left:"20%", right:"20%", height:"1px", background:"linear-gradient(90deg,transparent,rgba(130,69,236,0.5),transparent)" }} />

            <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:"1.05rem", color:"rgba(255,255,255,0.75)", marginBottom:24 }}>
              Connect With Me 🚀
            </h3>

            <form ref={form} onSubmit={sendEmail} style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              <input
                type="email" name="email" placeholder="Your Email" required
                style={inputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
              />
              <input
                type="text" name="name" placeholder="Your Name" required
                style={inputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
              />
              <input
                type="text" name="subject" placeholder="Subject" required
                style={inputStyle("subject")}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused("")}
              />
              <textarea
                name="message" placeholder="Your message..." rows={4} required
                style={{ ...inputStyle("message"), resize:"vertical", minHeight:110 }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
              />

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending
                  ? <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                      <span className="spinner" /> Sending...
                    </span>
                  : "Send Message"
                }
              </button>
            </form>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%,100% { opacity:1; transform:scale(1); }
            50%      { opacity:0.6; transform:scale(1.35); }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;