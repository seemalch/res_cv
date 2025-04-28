"use client"

import { useState } from "react"
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: "fiverr",
    title: "MERN Stack Developer",
    company: "Fiverr",
    location: "Remote",
    period: "Jun 2023 – Aug 2024",
    description: [
      "Delivered MERN stack projects, including e-commerce platforms, task management apps, and real-time chat applications.",
      "Developed REST APIs and responsive UIs using React, Node.js, Express, and MongoDB.",
      "Collaborated with clients to meet project requirements, ensuring timely delivery and high-quality code.",
    ],
  },
  {
    id: "innovizzle",
    title: "UI/UX Design Intern",
    company: "Innovizzle",
    location: "Remote",
    period: "Sep 2024 – March 2025",
    description: [
      "Gained expertise in key UI/UX design tools, including Figma, with proficiency in Auto Layouts, Variants, Component Libraries, Prototyping, Design Systems, and interactive components.",
      "Mastered collaboration tools in Figma, enabling effective teamwork and version control in design iterations.",
      "Applied design principles for creating visually appealing, user-friendly interfaces and optimized workflows.",
    ],
  },
  {
    id: "teaching",
    title: "Teaching Assistant",
    company: "FAST NUCES",
    location: "On-Campus",
    period: "Sep 2023 – Jan 2025",
    description: [
      "Assisted 300+ students in understanding software design, operating systems, and communication skills.",
      "Arranged quizzes, assignments, and provided exam preparation support.",
      "Earned positive feedback from professors for dedication and teaching approach.",
      "Subjects: Operating Systems, Software Design and Analysis, Communication and Presentation skills.",
    ],
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState("fiverr")

  return (
    <section id="experience" className="bg-navy-light py-20">
      <div className="section-container">
        <h2 className="section-title mb-16">Experience</h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal border-b-2 md:border-l-2 md:border-b-0 transition-all duration-300 ${
                  activeTab === exp.id
                    ? "border-yellow text-yellow font-medium"
                    : "border-transparent text-text-secondary hover:text-text hover:border-text-secondary"
                }`}
                onClick={() => setActiveTab(exp.id)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-navy rounded-lg p-6">
            {experiences.map((exp) => (
              <div key={exp.id} className={activeTab === exp.id ? "block" : "hidden"}>
                <h3 className="text-xl font-bold mb-1">
                  {exp.title} <span className="text-yellow">@ {exp.company}</span>
                </h3>

                <div className="flex flex-wrap gap-4 text-text-secondary mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-yellow mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}