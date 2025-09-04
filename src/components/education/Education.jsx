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
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans .clip-path-custom-3"
      style={{
        background:
          "linear-gradient(38.73deg, rgba(255,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)",
      }}
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Academic Background & Credentials
        </h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-1.5"></div>
        <p className="text-gray-400 mt-4 text-base md:text-lg font-semibold">
          A summary of my educational journey and professional certifications.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-12"
      >
        {education.map((edu, index) => (
          <SwiperSlide key={edu.id} className="flex justify-center">
  <div
    className="w-full max-w-[350px] p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105 flex flex-col"
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    data-aos-delay={index * 200}
    style={{ minHeight: "400px" }}
  >
    <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
      <img
        src={edu.img}
        alt="education"
        className="w-24 h-24 object-cover border-2 border-purple-500"
      />
      <div>
        <h3 className="text-lg sm:text-2xl font-semibold text-white">
          {edu.degree}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
      </div>
    </div>
    <p className="text-gray-400 text-sm sm:text-base mt-auto">{edu.desc}</p>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
};

export default Education;
