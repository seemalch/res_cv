"use client"

import { useEffect, useState } from "react"
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="section-container text-center">
        {loaded ? (
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-text">Hi, I am </span>
              <span className="text-yellow">Seemal Zia</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-text-secondary">
              <TypeAnimation
                sequence={["MERN Stack Developer", 2000, "UI/UX Designer", 2000, "AI/ML Enthusiast", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-text-secondary">
              Building scalable web applications and creating intuitive user experiences.
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              <a
                href="https://github.com/seemalch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-yellow transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/seemal-zia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-yellow transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:seemalch5@gmail.com"
                className="text-text hover:text-yellow transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-yellow mb-4">Seemal Zia</h1>
            <p className="text-xl text-text">Loading Portfolio...</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-text hover:text-yellow transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}