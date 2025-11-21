//Skills Section Logo's
import html from "./assets/tech_logo/html.png";
import css from "./assets/tech_logo/css.png";
import javaScript from "./assets/tech_logo/javascript.png";
import reactJs from "./assets/tech_logo/reactjs.png";
import redux from "./assets/tech_logo/redux.png";
import bootstrap from "./assets/tech_logo/bootstrap.png";
import tailwind from "./assets/tech_logo/tailwindcss.png";
import materialUi from "./assets/tech_logo/materialui.png";

import node from "./assets/tech_logo/nodejs.png";
import express from "./assets/tech_logo/express.png";
import mongoose from "./assets/tech_logo/mongoose.webp";
import mongodb from "./assets/tech_logo/mongodb.png";
import mySql from "./assets/tech_logo/mysql.png";
import postgrSql from "./assets/tech_logo/postgre.png";

import git from "./assets/tech_logo/git.png";
import github from "./assets/tech_logo/github.png";
import postman from "./assets/tech_logo/postman.png";
import compass from "./assets/tech_logo/mc.png";
import vsCode from "./assets/tech_logo/vscode.png";
import vercel from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import accenture from './assets/company_logo/Accenture-logo.png';
import techplement from './assets/company_logo/techplement-logo.png';

// Education Section Logo's
import eduImage from './assets/education_logo/sgbau.jpg';
import certificate1 from './assets/education_logo/achivement-1.png';
import certificate2 from './assets/education_logo/achivement-2.png';
import certificate3 from './assets/education_logo/achivement-3.png';
import certificate4 from './assets/education_logo/achivement-4.png';

// Project Section Logo's
import project1 from './assets/work_logo/project1.png';
import project2 from './assets/work_logo/project2.png';
import project3 from './assets/work_logo/project3.png';
import project4 from './assets/work_logo/project4.png';
import project5 from './assets/work_logo/project5.png';
import project6 from './assets/work_logo/project6.png';
import project7 from './assets/work_logo/project7.png';
import project8 from './assets/work_logo/project8.png';


 export const skills = {
    Frontend: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "JavaScript", img: javaScript },
      { name: "React JS", img: reactJs },
      { name: "Redux", img: redux },
      { name: "Bootstrap", img: bootstrap },
      { name: "Tailwind CSS", img:  tailwind},
      { name: "Material UI", img: materialUi}
    ],
    Backend: [
      { name: "Node JS", img: node },
      { name: "Express JS", img: express },
      { name: "Mongoose", img: mongoose },
      { name: "MongoDB", img: mongodb },
      { name: "MySQL", img: mySql },
      { name: "Postgre SQL", img: postgrSql },
    ],
  
    Tools: [
      { name: "Git", img: git },
      { name: "GitHub", img: github },
      { name: "Postman", img:  postman  },
      { name: "Compass", img: compass },
      { name: "VS Code", img: vsCode },
      { name: "Vercel", img: vercel },
    ]
  };


  export const experiences = [
    {
      id: 0,
      img: accenture,
      role: "Virtual Experience Program",
      company: "Accenture New York, United States",
      date: "Oct 2024 - Nov 2024",
      desc: "Analyzed user experience (UX) challenges and proposed innovative design solutions to improve usability. Designed and implemented 5+ reusable UI components, improving development efficiency and reducing time. ",
      skills: [
        "User Interface Design",
        "Critical Thinking",
        "User Requirements",
        "Web Development",
        "Product Development",
        "Project Management",
        "Software Development Life Cycle (SDLC)",
        "Databases",
      ],
    },
    {
      id: 1,
      img: techplement,
      role: "Frontend Developer Intern",
      company: "TECHPLEMENT",
      date: "Dec 2024 - Jan 2025",
      desc: "Led front-end development for a live resume builder tool, contributing to 100+ user sign-ups within the first month. Developed and maintained responsive web applications using technical skills and Implemented API integrations.",
      skills: [
        "HTML",
        "CSS",
        "SQL",
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "Team Leadership",
        "Front-End Development"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: eduImage,
      degree: "Bachelor of Computer Application (BCA)",
      date: "Aug 2021 - April 2024",
      desc: "I completed my Bachelor of Computer Applications (BCA) in 2024 from Shankarlal Khandelwal College, Akola. During my studies, I gained strong knowledge in computer applications, programming, database management, and web development.",
    },

    {
      id: 1,
      img: certificate1,
      date: "Aug 2024",
      desc: "I have completed the Responsive Web Design Developer certification from FreeCodeCamp, gaining practical skills in HTML, CSS, Flexbox, Grid, and responsive design techniques to build modern, mobile-friendly websites.",
      degree: "FreeCodeCamp - Web Development Certification",
    },

    {
      id: 2,
      img: certificate2,
      date: "July 2025",
      desc: "Gained expertise in full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built real-world projects and gained hands-on experience in developing responsive, dynamic, and data-driven web applications.",
      degree: "Delta Full Stack Development Program ",
    },

    {
      id: 3,
      img: certificate3,
      date: "Oct 2024",
      desc: "I completed a virtual internship at Accenture in October 2024, where I worked on real-world projects, gained hands-on experience in web development & project management, and strengthened my professional and technical skills in a corporate environment.",
      degree: "Internship - Accenture (Virtual Project Intern)",
    },

    {
      id: 4,
      img: certificate4,
      date: "Dec 2021",
      desc: "I completed a frontend developer internship at Techplement in December 2024, where I gained hands-on experience in HTML, CSS, JavaScript, and responsive web design, contributing to real-world web development projects.",
      degree: "Internship - Techplement (Frontend Developer Intern)",
    },

    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "QuickBlog - A blog on stories",
      description:
       "A modern, fast, and user-friendly blogging website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). QuickBlog allows users to create, edit, delete, and comment blog posts seamlessly with a sleek interface and secure user authentication.",
      image: project1,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "more.."],
      github: "https://github.com/nikitatale/QuickBlog-Website",
      webapp: "https://quick-blog-website.vercel.app/",
      isHosted: true
    }, 
    {
      id: 1,
      title: "CARVIX - Car Rental Website",
      description:
        "Carvix is a full-featured car rental platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse, book, and manage rental cars easily with a seamless, modern UI and secure backend.",
      image: project2,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "dotenv", "more.."],
      github: "https://github.com/nikitatale/CARVIX-Car-Rental-Website",
      webapp: "https://carvix-car-rental-website.vercel.app/",
      isHosted: true
    }, 
     {
      id: 2,
      title: "Meetra-Web",
      description:
      "Meetra Web is a real-time video calling and chat web app built with React, Express, and Socket.io. It allows users to join meetings as guests or through authentication, enabling seamless video communication, instant messaging, and user management powered by MongoDB and WebRTC.",
      image: project7,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "WebRTC", "Socket.IO.."],
      github: "https://github.com/nikitatale/Meetra-Web",
      webapp: "https://meetra-web-frontend.onrender.com/",
      isHosted: true
    },

    {
      id: 3,
      title: "PingPoint-Chat-App",
      description:
      "PingPoint is a full-stack real-time chat application built with modern technologies to provide seamless communication. It’s designed for speed, security, and scalability, featuring user authentication, media sharing, and real-time messaging.",
      image: project8,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Clerk", "Imagekit"],
      github: "https://github.com/nikitatale/pingpoint-chat-app",
      webapp: "https://chat-app-nine-dusky-33.vercel.app/",
      isHosted: true
    },
    {
      id: 4,
      title: "Bookease Hotel Booking Website",
      description:
       "Bookease is a modern and responsive hotel booking website built with a focus on smooth user experience. It includes core frontend features with basic backend integration for user login functionality.",
      image: project3,
      tags: ["React JS","User login system", "basic backend functionality"],
      github: "https://github.com/nikitatale/Hotel-Booking",
      webapp: "https://bookease-hotel-booking-website.vercel.app/",
      isHosted: true
    },

    {
      id: 5,
      title: "EcoNest-Ecommerce",
      description:
       "EcoNest-Ecommerce is a modern home decor and essentials platform built with HTML, CSS, JavaScript, and Bootstrap for a seamless and responsive shopping experience. It offers eco-friendly furniture, elegant decor, and kitchen essentials with secure payments and fast delivery. Explore sustainable living with style!",
      image: project4,
      tags: ["HTML", "CSS", "JavaScript", ],
      github: "https://github.com/nikitatale/EcoNest-Ecommerce",
      isHosted: false
    },

    {
      id: 6,
      title: "Savorly-Food-Website",
      description:
        "A modern and responsive food website for Savorly — built with HTML, CSS, JS and Bootstrap, showcasing rich visuals, interactive animations, and user-friendly design.",
      image: project5,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      isHosted: false
    },

   {
      id: 7,
      title: "Nike-Website-Clone",
      description:
      "A modern, responsive Nike website clone built with React and Tailwind CSS, showcasing high-quality footwear products with sleek design and smooth user experience. Perfect for learning component-based UI development and utility-first CSS styling.",
      image: project6,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nikitatale/nike-website-clone",
      isHosted: false
    },
  ];  