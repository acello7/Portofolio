"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Download } from "lucide-react"
import jsPDF from "jspdf"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const downloadCV = () => {
    const doc = new jsPDF()

    // Header
    doc.setFontSize(20)
    doc.text("Marcello Alvinskie  Computer Science Undergraduate", 20, 30)

    doc.setFontSize(12)
    doc.text("alvinskiemarcello@gmail.com", 20, 45)
    doc.text("0852 1176 6633", 20, 55)
    doc.text("Jakarta, Indonesia", 20, 65)
    doc.text("linkedin.com/in/marcello-alvinskie-a76b86373", 20, 75)

    // Education section
    doc.setFontSize(16)
    doc.text("Education", 20, 95)
    doc.setFontSize(12)
    doc.text("Computer Science, Bina Nusantara University", 20, 110)
    doc.text("GPA: 3.55 / 4.00", 20, 120)
    doc.text("Tangerang, Indonesia", 20, 130)

    // Projects
    doc.text("•Smart Ways to Live", 20, 145)
    doc.text("Created a 2D platformer game regarding natural disasters to assist children in their", 25, 155)
    doc.text("ability to make optimal decisions", 25, 165)

    doc.text("•Cateringz Design Concept", 20, 180)
    doc.text("Created the design concept of a simulation company operating in the F&B industry as a", 25, 190)
    doc.text("university project using Figma.", 25, 200)

    doc.text("Elementary / Middle School / High School, Kairos Gracia Christian School", 20, 215)
    doc.text("Achieved A and A+ grades on all 5/5 IGCSE tests", 20, 225)
    doc.text("Jakarta, Indonesia", 20, 235)

    // Hard Skills
    doc.setFontSize(16)
    doc.text("Hard Skills", 20, 255)
    doc.setFontSize(12)
    doc.text("Programming Languages", 20, 270)
    doc.text("C (Competent) | Java (Amateur) | Python (Amateur)", 20, 280)

    doc.text("Operating Systems", 20, 295)
    doc.text("Windows (Competent) | Kali Linux (Amateur) | Rocky Linux (Amateur) | Ubuntu (Basic)", 20, 305)

    doc.text("Designing Tools", 20, 320)
    doc.text("Figma (Amateur) | Canva (Competent)", 20, 330)

    doc.text("Languages", 20, 345)
    doc.text("Bahasa Indonesia — Native/Bilingual", 20, 360)
    doc.text("English — Native/Bilingual", 20, 370)
    doc.text("Mandarin — Basic", 20, 380)

    // Add new page for Soft Skills
    doc.addPage()
    doc.setFontSize(16)
    doc.text("Soft Skills", 20, 30)
    doc.setFontSize(12)
    doc.text("•Eager to Learn - Every experience is reflected on for the sake of improving", 20, 45)
    doc.text("•Adaptability - Adapts fast to the standards and expectations of the workforce", 20, 60)
    doc.text("•Time Management - Ensures every task given will be finished on time", 20, 75)
    doc.text("•Problem Solver - Every problem will be thoroughly analyzed and solved", 20, 90)
    doc.text("•Team Collaboration - Keeping work-related relationships with colleagues at a", 20, 105)
    doc.text("satisfactory state to ensure the ability of delivering satisfactory results", 25, 115)

    // Save the PDF
    doc.save("Marcello_Alvinskie_CV.pdf")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-animation opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          {/* Profile Image */}
          <motion.div className="mb-8" variants={imageVariants}>
            <img
              src="/marcello-profile.jpg"
              alt="Marcello Alvinskie"
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary/20 shadow-2xl object-cover"
            />
          </motion.div>

          <motion.h1 className="text-4xl sm:text-6xl font-bold text-balance mb-6" variants={itemVariants}>
            Hi, I'm <span className="text-primary">Marcello Alvinskie</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Computer Science undergraduate passionate about building innovative software solutions and exploring the
            frontiers of technology
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=62085211766633&text=Hello%21%20Nice%20to%20meet%20you.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" onClick={downloadCV}>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center space-x-6" variants={itemVariants}>
            {[
              { href: "https://www.linkedin.com/in/marcello-alvinskie-a76b86373/", icon: Linkedin, label: "LinkedIn" },
              {
                href: "https://api.whatsapp.com/send/?phone=62085211766633&text=Hello%21%20Nice%20to%20meet%20you.&type=phone_number&app_absent=0",
                icon: MessageCircle,
                label: "WhatsApp",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-8 w-8" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
