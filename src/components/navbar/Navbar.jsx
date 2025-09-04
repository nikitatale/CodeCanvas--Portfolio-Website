import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((window.scrollY = 50));
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
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};

  const menuItems = [
    { id: "home", label: "Home"},
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  return (
   <nav
  className={`fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-[#050414]/50 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
    }
  `}
>

      <div className="text-white py-5 flex justify-between items-center">
        <div className="cursor-pointer">
           <span className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-9"/>
          <span className="font-semibold">CodeCanvas</span>
        </span>
        </div>

        {/* desktop */}

        <ul className="hidden md:flex space-x-8 text-gray-300 " >
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : "text-gray-300"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="cursor-pointer">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* social media icons */}

        <div className="hidden md:flex space-x-7">
          <a
            href="https://github.com/nikitatale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/nikita-tale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* mobile menu icons */}

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* mobile menu items */}

      {isOpen && (
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-5/7 border border-white/20 bg-[#050414]/95 bg-opacity backdrop-blur-lg rounded-lg shadow-lg
            backdrop-filter z-50"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 ">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/nikitatale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/nikita-tale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
