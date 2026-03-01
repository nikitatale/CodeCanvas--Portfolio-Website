import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.5);
          transition: color 0.25s ease;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #8245ec, #a855f7);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
          border-radius: 999px;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: #a855f7; }
        .nav-link.active::after { width: 100%; }

        .nav-social {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(130,69,236,0.08);
          border: 1px solid rgba(130,69,236,0.2);
          color: rgba(255,255,255,0.45);
          transition: background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .nav-social:hover {
          background: rgba(130,69,236,0.22);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(130,69,236,0.4);
        }

        .mobile-menu-item {
          background: none; border: none;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem; letter-spacing: 0.06em;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: color 0.2s;
          padding: 6px 0;
        }
        .mobile-menu-item:hover { color: #fff; }
        .mobile-menu-item.active { color: #a855f7; }

        @keyframes slideDown {
          from { opacity:0; transform:translateY(-12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mobile-dropdown {
          animation: slideDown 0.25s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          background: linear-gradient(135deg, #fff 30%, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.04em;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          padding: "0 7vw",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          background: isScrolled
            ? "rgba(5,4,20,0.6)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          boxShadow: isScrolled
            ? "0 1px 0 rgba(130,69,236,0.15), 0 4px 30px rgba(0,0,0,0.3)"
            : "none",
        }}
      >
      
        {isScrolled && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(130,69,236,0.5), transparent)",
          }} />
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0" }}>

   
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => handleMenuItemClick("home")}>
            <div style={{
              width: 34, height: 34,
              background: "linear-gradient(135deg, rgba(130,69,236,0.3), rgba(168,85,247,0.1))",
              border: "1px solid rgba(130,69,236,0.4)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <img src="/logo.svg" alt="Logo" style={{ width: 20, height: 20 }} />
            </div>
            <span className="logo-text">CodeCanvas</span>
          </div>

    
          <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

         
          <div style={{ display: "flex", gap: 10 }} className="hidden-mobile">
            <a href="https://github.com/nikitatale" target="_blank" rel="noopener noreferrer" className="nav-social">
              <FaGithub size={15} />
            </a>
            <a href="https://www.linkedin.com/in/nikita-tale" target="_blank" rel="noopener noreferrer" className="nav-social">
              <FaLinkedin size={15} />
            </a>
          </div>

          
          <div className="show-mobile" style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
            {isOpen
              ? <FiX size={22} color="#a855f7" />
              : <FiMenu size={22} color="#a855f7" />}
          </div>
        </div>

       
        {isOpen && (
          <div
            className="mobile-dropdown"
            style={{
              position: "fixed",
              top: "72px",
              left: "6vw",
              right: "6vw",
              width: "auto",
              maxWidth: 320,
              margin: "0 auto",
              background: "rgba(7,5,20,0.97)",
              border: "1px solid rgba(130,69,236,0.25)",
              borderRadius: 16,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(130,69,236,0.1)",
              padding: "20px 0 16px",
              zIndex: 9999,
            }}
          >
           
            <div style={{
              position: "absolute", top: 0, left: "20%", right: "20%", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(130,69,236,0.6), transparent)",
              borderRadius: 999,
            }} />

            <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: "0 20px" }}>
              {menuItems.map((item) => (
                <li key={item.id} style={{ width: "100%", textAlign: "center" }}>
                  <button
                    className={`mobile-menu-item ${activeSection === item.id ? "active" : ""}`}
                    onClick={() => handleMenuItemClick(item.id)}
                    style={{ width: "100%", padding: "10px 0" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ height: "1px", background: "rgba(130,69,236,0.12)", margin: "12px 20px" }} />

            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <a href="https://github.com/nikitatale" target="_blank" rel="noopener noreferrer" className="nav-social">
                <FaGithub size={15} />
              </a>
              <a href="https://www.linkedin.com/in/nikita-tale" target="_blank" rel="noopener noreferrer" className="nav-social">
                <FaLinkedin size={15} />
              </a>
            </div>
          </div>
        )}

      
        <style>{`
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: block !important; }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;