import React, { useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <section
      className='py-9 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans md:mt-24 lg:mt-18'
      id='home'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        
        <div
          className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'
          data-aos="fade-right"
        >
          <p className='text-3xl sm:text-5xl md:text-3xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </p>
          <h2
            className='text-6xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Nikita Tale
          </h2>
          <h3
            className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className='text-white'></span>
            <ReactTypingEffect
              text={[
                'Full-Stack Developer',
                'MERN-Stack Expert',
                'Node JS Developer'
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            />
          </h3>

          <p
            className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-5 leading-tight'
            data-aos="fade-up"
            data-aos-delay="600"
          >
            MERN Stack Developer passionate about building seamless, responsive, and user-friendly web applications. Turning ideas into fast, scalable, and interactive apps.
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1jgxRVr82ZS2xwz_oXOTSSl2jT6B42Ksv"
            target='_blank'
            rel="noopener noreferrer"
            className='inline-block text-white py-3 rounded-full mt-2 px-8 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: '0 0 2px #8245ec, 0 0 20px #8245ec',
            }}
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Download Resume
          </a>
        </div>

       
        <div
          className='md:w-1/2 flex justify-center md:justify-end'
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <Tilt
            className='w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-2 border-[#8245ec] rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="./src/assets/profile-img.png"
              alt="profile image"
              className='w-3xl h-1/1 object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default Hero
