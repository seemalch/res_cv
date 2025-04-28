import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "../components/navbar"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Seemal Zia | MERN Stack Developer",
  description: "MERN Stack Developer with expertise in UI/UX Design and AI/ML",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}