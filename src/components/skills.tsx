"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", duration: "1+ Years", color: "bg-blue-500" },
      { name: "TypeScript", duration: "1+ Year", color: "bg-blue-500" },
      { name: "React.js", duration: "8 Mon", color: "bg-cyan-500" },
      { name: "HTML", duration: "3 Years", color: "bg-orange-500" },
      { name: "CSS", duration: "3 Years", color: "bg-orange-500" },
      { name: "Tailwind CSS", duration: "1.5 Years", color: "bg-green-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", duration: "1.5 Years", color: "bg-green-500" },
      { name: "Express.js", duration: "1 Year", color: "bg-lime-400" },
      { name: "REST API", duration: "1 Year", color: "bg-lime-500" },
      { name: "Fast API", duration: "6 Months", color: "bg-rose-500" },
      { name: "Python", duration: "1+ Year", color: "bg-blue-500" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", duration: "1 Year", color: "bg-lime-400" },
      { name: "SQL", duration: "2 Years", color: "bg-blue-200" },
      { name: "MySQL", duration: "1.5 Years", color: "bg-green-500" },
      { name: "PostgreSQL", duration: "1 Year", color: "bg-lime-400" },
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      { name: "Figma", duration: "1 Year", color: "bg-lime-400" },
      { name: "User Research", duration: "6 Months", color: "bg-rose-500" },
      { name: "Wireframing", duration: "6 Months", color: "bg-rose-500" },
      { name: "Prototyping", duration: "6 Months", color: "bg-rose-500" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const barVariants = {
  hidden: { width: 0, opacity: 0 },
  show: { width: "100%", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                {category.category}
              </h3>
              {category.items.map((skill) => (
                <div key={skill.name} className="flex items-center mb-3">
                  <div className="w-32 text-gray-400 text-sm">{skill.name}</div>
                  <motion.div
                    variants={barVariants}
                    className={`h-2 ${skill.color} rounded-full mr-4 flex-1 max-w-[200px]`}
                  />
                  <div className="text-gray-400 text-sm w-20">{skill.duration}</div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}