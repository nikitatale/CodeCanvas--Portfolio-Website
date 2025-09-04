import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { skills } from "../../constants";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

 
  return (
    <section
      className="py-16 px-[7vw] lg:px-[20vw] text-center clip-path-custom"
      style={{
        background:
          "linear-gradient(38.73deg, rgba(255,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)"
      }}
    >
      <h2 className="text-3xl  font-bold text-white " data-aos="fade-up">
        My Skills
      </h2>
   <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-1.5 mb-8"></div>

     
      <div className="flex justify-center gap-6 mb-10 relative">
        {Object.keys(skills).map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-2 py-1 font-semibold text-lg transition-all duration-300 relative ${
              activeTab === tab
                ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#8245ec] after:rounded-full after:transition-all after:duration-300 scale-105"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills[activeTab].map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={500}
            gyroscope={true}
          >
            <div
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-[0_12px_40px_#8245ec] cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <p className="text-white font-semibold">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
