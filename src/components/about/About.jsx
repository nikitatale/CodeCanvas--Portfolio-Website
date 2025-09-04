import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center mt-5 text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
      
          <img
            src="/user-image.png"
            alt="about image"
            className="w-100 h-1/1 object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60  bg-[#8245ec] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-3xl font-bold mb-4 sm:mb-6">
              A Bit About Me:
            </h3>
            
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-400  mb-6 sm:mb-8 leading-relaxed">
            I'm a passionate full-stack developer specializing in the MERN stack
            (MongoDB, Express.js, React, and Node.js), focused on building
            scalable, user-centric web applications. I create seamless digital
            experiences by combining responsive React frontends with robust
            Node.js backends and flexible MongoDB databases. With expertise in
            modern JavaScript, RESTful APIs, and cloud deployment, I transform
            complex problems into elegant solutions that deliver real value.
          </p>

          <footer>
            <button className="inline-flex text-white py-2 px-4 sm:px-6 focus:outline-none cursor-pointer rounded-full text-sm sm:text-lg" style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: '0 0 2px #8245ec, 0 0 20px #8245ec',
            }}>
             <a href="https://github.com/nikitatale" target="_blank" rel="noopener noreferrer">My Journey</a>
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
