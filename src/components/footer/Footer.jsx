import React from "react";
import {  FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
 
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
  <div className="container mx-auto text-center">
    
    <h2 data-aos="fade-up" className="text-xl font-semibold text-purple-500">
      Nikita Tale
    </h2>

    <nav data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
      {[
        { name: "About", id: "about" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
      ].map((item, index) => (
        <button
          key={index}
          onClick={() => handleScroll(item.id)}
          className="hover:text-purple-500 text-sm sm:text-base my-1"
        >
          {item.name}
        </button>
      ))}
    </nav>

    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center space-x-4 mt-6">
      {[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/nikita-tale" },
        { icon: <FaGithub />, link: "https://github.com/nikitatale" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
        >
          {item.icon}
        </a>
      ))}
    </div>

    <p data-aos="fade-up" data-aos-delay="300" className="text-sm text-gray-400 mt-6">
      © 2025 Nikita Tale. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;