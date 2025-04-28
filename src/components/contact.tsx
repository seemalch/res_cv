"use client"

import type React from "react"

import { useState } from "react"
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend or email service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="bg-navy-light py-20">
      <div className="section-container">
        <h2 className="section-title mb-16">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lets Talk</h3>
            <p className="text-text-secondary mb-6">
              Have a project in mind or just want to say hello? Feel free to reach out to me. I am always open to
              discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-yellow mb-1">Email</h4>
                <p className="text-text-secondary">seemalch5@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow mb-1">Phone</h4>
                <p className="text-text-secondary">+92 3417980425</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow mb-1">Location</h4>
                <p className="text-text-secondary">Pakistan</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/seemalch"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-text hover:text-yellow p-3 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/seemal-zia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-text hover:text-yellow p-3 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-navy rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-light border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-light border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-light border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-navy-light border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center">
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}