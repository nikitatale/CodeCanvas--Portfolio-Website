import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { experiences } from "/src/constants.js";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section
      id="experience"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans clip-path-custom-2"
      style={{
        background:
          "linear-gradient(38.73deg, rgba(255,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)",
      }}
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Experience
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-1.5"></div>
        <p className="text-gray-400 mt-4 text-base md:text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden md:block"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-16 w-full flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 200}
          >
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-[#8245ec] w-16 h-16 rounded-full justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            <div
              className={`w-full md:w-[45%] p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "md:ml-auto text-left"
                  : "md:mr-auto text-left"
              }`}
            >
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm sm:text-base">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-white text-sm sm:text-base">
                  Skills:
                </h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
