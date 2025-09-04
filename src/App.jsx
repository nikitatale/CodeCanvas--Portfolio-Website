import Hero from './components/hero/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import './index.css'
import BlurBlob from './BlurBlob'


function App() {
  return (
   <div className='bg-[#050414]'>
    
   <BlurBlob position={{top: "35%", left: "20%"}} size={{width: "30%", height: "40%"}}></BlurBlob>

     <div className='absolute inset-0 bg-[linear-gradient(to_right, #4f4f4f2e_1px, transparent_1px), linear-gradient(to_bottom, #4f4f4f2e_1px, transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]'></div>
     <div className='relative pt-20'>
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Experience/>
       <Projects/>
       <Education/>
       <Contact/>
       <Footer/>
     </div>
   </div>
  )
}

  

export default App
