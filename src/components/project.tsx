"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { getImagePath } from '../lib/path-utils.js'

const projects = [
  {
    id: "residentconnect",
    title: "ResidentConnect",
    description:
      "A community management platform for issue reporting, service requests, and real-time communication between residents and administrators.",
    image: "/residentconnect.png",
    technologies: ["React Native", "Express.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/seemalch/",
    live: null,
    featured: true,
  },
  {
    id: "auth",
    title: "Authentication System",
    description:
      "A secure and scalable authentication system using JWT tokens, implementing features like login, signup, password recovery, email verification, and session management.",
    image: "/authsystem.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Tokens"],
    github: "https://github.com/seemalch/Advanced-Authentication-System/tree/master",
    live: null,
    featured: true,
  },
  {
    id: "shopease",
    title: "ShopEase",
    description:
      "A responsive eCommerce website with features like product listings, user authentication, shopping cart, and checkout flow. Implemented reusable components and state management using React Hooks and Context API.",
    image: "/shopease.png",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    github: "https://github.com/seemalch/ShopEase",
    live: null,
    featured: true,
  },
  {
    id: "Bazm-e-Shayari",
    title: "Bazm-e-Shayari",
    description:
      "An AI-driven project using LSTM and NLP to generate Roman Urdu poetry with UI Interface, built with Python and Streamlit.",
    image: "/bazmeshayari.png",
    technologies: ["LSTM", "NLP", "Python", "Streamlit"],
    github: "https://github.com/seemalch/Bazm-e-Shayari",
    live: null,
    featured: true,
  },
  {
    id: "HealtRAG",
    title: "HealtRAG",
    description:
      "RAG using MIMIC-IV-Ext, HuggingFace Transformers & LangChain to answer clinical questions with (BM25) and (FAISS) retrieval strategies.",
    image: "/healtrag.png",
    technologies: ["MIMIC-IV-Ext", "Hugging Face", "LangChain", "BM25/FAISS", "Python", "Streamlit"],
    github: "https://github.com/seemalch/",
    live: null,
    featured: false,
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="bg-navy py-20">
      <div className="section-container">
        <h2 className="section-title mb-16">Projects</h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeFilter === "all" ? "bg-yellow text-navy" : "bg-navy-light text-text hover:bg-navy-light/80"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeFilter === "featured" ? "bg-yellow text-navy" : "bg-navy-light text-text hover:bg-navy-light/80"
              }`}
              onClick={() => setActiveFilter("featured")}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={getImagePath(project.image) || getImagePath("/placeholder.svg")}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-navy px-2 py-1 rounded-full text-yellow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-yellow transition-colors duration-300"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-yellow transition-colors duration-300"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/seemalch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-yellow hover:text-yellow-light transition-colors duration-300"
          >
            View More on GitHub <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}