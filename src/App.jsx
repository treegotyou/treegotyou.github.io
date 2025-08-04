import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import image from './assets/image.png';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home')
  const [isGlitching, setIsGlitching] = useState(false)
  const [terminalText, setTerminalText] = useState('')
  const [terminalIndex, setTerminalIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)


  const terminalMessages = [
  '> npm install @eniolafred/portfolio-genius',
  '> Setting up next‑level portfolio magic...',
  '> Crafting custom design systems...',
  '> Turbo‑optimizing for instant load times...',
  '> Portfolio complete!',
  '> Your future clients are about to be impressed!'
]


  useEffect(() => {
    // Terminal typing effect
    const terminalInterval = setInterval(() => {
      if (terminalIndex < terminalMessages.length) {
        const currentMessage = terminalMessages[terminalIndex]
        if (terminalText.length < currentMessage.length) {
          setTerminalText(currentMessage.substring(0, terminalText.length + 1))
        } else {
          setTimeout(() => {
            setTerminalText('')
            setTerminalIndex(prev => (prev + 1) % terminalMessages.length)
          }, 1500)
        }
      }
    }, 50)

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(Math.random() > 0.9)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => {
      clearInterval(terminalInterval)
      clearInterval(cursorInterval)
      clearInterval(glitchInterval)
    }
  }, [terminalText, terminalIndex])


  const workProjects = [
  {
    id: 1,
    title: "Leads Map",
    description: "My latest mobile app website.",
    image: image, // Use relative or absolute URL
    link: "https://leadsmap.treegotyou.com",   // Optional: link to project or case study
    tags: ["React", "Firebase"],   // Optional: tech stack or highlights
  },
  // {
  //   id: 2,
  //   title: "Another Project Title",
  //   description: "What this project achieved or solved.",
  //   image: image,
  //   link: "https://example.com",
  //   tags: ["Next.js", "TailwindCSS"],
  // },
];


  return (
    <div className={`portfolio-container ${isGlitching ? 'glitch-effect' : ''}`}>
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>

      {/* Main content */}
      <div className="content-wrapper">
        {/* Terminal window */}
        <motion.div 
          className="terminal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">eniolafred@portfolio: ~</div>
          </div>
          <div className="terminal-body">
            <pre>
              {terminalText}
              <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
            </pre>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="main-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="title-word">PORTFOLIO</span>
          <span className="title-word">DEVELOPER</span>
          <span className="title-word">EXTRAORDINAIRE</span>
        </motion.h1>

        {/* Navigation */}
        <nav className="main-nav">
          {['home', 'work', 'process', 'contact'].map((tab) => (
            <motion.button
              key={tab}
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.toUpperCase()}
            </motion.button>
          ))}
        </nav>

        {/* Content area */}
        <div className="tab-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >

              {activeTab === 'home' && (
                <div className="home-content">
                  <h2>I CREATE PORTFOLIOS THAT STAND OUT EVERYWHERE</h2>
                  <p>
                    Your portfolio should be unforgettable—and I make sure it is.  
                    I specialize in crafting <span className="highlight">lightning‑fast</span>,  
                    <span className="highlight">visually stunning</span>, and  
                    <span className="highlight">technically flawless</span> online portfolios  
                    that position you ahead of the competition.  
                    Best part? You won’t need to buy a domain or pay annual hosting fees—  
                    it’s a <strong>one‑time investment</strong> for a professional online presence that lasts.
                  </p>
                </div>
              )}


              {/* {activeTab === 'work' && (
              <div className="work-content">
                <h2>SELECTED PROJECTS THAT TURNED HEADS</h2>
                <div className="work-grid">
                  {[1, 2].map((item) => (
                    <motion.div 
                      key={item}
                      className="work-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="work-preview"></div>
                      <h3>PROJECT {item}</h3>
                      <p>High‑impact results, crafted with precision</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )} */}

            {activeTab === 'work' && (
  <div className="work-content">
    <h2>SELECTED PROJECTS THAT TURNED HEADS</h2>
    <div className="work-grid-wrapper">
      <div className="work-grid">
        {workProjects.map((project) => (
          <motion.div 
            key={project.id}
            className="work-item"
            whileHover={{ scale: 1.05 }}
          >
            <div className="work-preview">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)}



              {activeTab === 'process' && (
                <div className="process-content">
                  <h2>MY CREATIVE DEVELOPMENT PROCESS</h2>
                  <ol className="process-steps">
                    <li>1. We discuss your vision and goals in detail</li>
                    <li>2. I dive into focused design and development</li>
                    <li>3. The magic of a unique portfolio comes together</li>
                    <li>4. You launch with a presence that impresses instantly</li>
                  </ol>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="contact-content">
                  <h2>LET’S BRING YOUR PORTFOLIO TO LIFE</h2>
                  <motion.a
                    href="https://wa.me/2348032404351"
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* START YOUR PROJECT VIA  */}
                    REACH OUT ON WHATSAPP
                  </motion.a>
                  <div className="social-link">
                    TikTok:  
                    <a href="https://tiktok.com/@eniolafred" target="_blank">@eniolafred</a>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Easter egg */}
        <motion.div 
          className="easter-egg"
          whileHover={{ rotate: 360 }}
          onClick={() => setIsGlitching(true)}
        >
          <span role="img" aria-label="alien">👽</span>
        </motion.div>
      </div>
    </div>
  )
}