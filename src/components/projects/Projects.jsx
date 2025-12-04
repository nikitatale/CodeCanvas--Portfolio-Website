import React, { useState, useEffect } from "react";
import { projects } from "/src/constants.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="pt-24 pb-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
      style={{
        background:
          "linear-gradient(38.73deg, rgba(255,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)",
      }}
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white">My Projects</h2>
        <div
          className="w-32 h-1 bg-purple-500 mx-auto mt-1.5"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <p
          className="text-gray-400 mt-4 text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A curated showcase of my projects, demonstrating my expertise and experience across diverse technologies.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Autoplay, Pagination]}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div
              onClick={() => handleOpenModel(project)}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 h-[380px] flex flex-col"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover rounded-xl"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-2 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {!project.isHosted && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Frontend Only
                  </span>
                )}

                <div className="mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          data-aos="fade-in"
        >
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-1.2xl max-h-[93vh] overflow-y-auto relative">
            <button
              onClick={handleCloseModel}
              className="absolute top-4 right-4 md:text-white text-3xl font-bold hover:text-purple-500 z-50"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div
                className="w-full flex justify-center bg-gray-900 px-4"
                data-aos="zoom-in"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[300px] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6" data-aos="fade-up">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center ${
                      selectedProject.isHosted ? "" : "mx-auto"
                    }`}
                  >
                    View Code
                  </a>

                  {selectedProject.isHosted && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Projects;
