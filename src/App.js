import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import SkillsCerts from './Components/SkillsCerts';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import './App.css'




const App = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
    
        <title>Jessica Ricks Portfolio</title>

        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.7/dist/iconify-icon.min.js"></script>
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css" />
   
      </head>
      <body>
        <header class="header">
     
          <i class='bx bx-menu' id="menu-icon"></i>

          <nav class="navbar">     
            <a href="#home" class="active">Home</a>
            <a href="#about" class="active">About</a>
            <a href="#skills" class="active">Skills and Certifications</a>
            <a href="#projects" class="active">My Projects</a>
            <a href="#contact" class="active">Contact</a>
          </nav>
 
        </header>
        <Home />
        <About />
        <SkillsCerts />
        <Projects />
        <Contact />
      </body>
  </>
  )
}



export default App;
