"use client"

import { motion, easeOut } from "framer-motion"
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
  ease: easeOut,
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
  ease: easeOut,
      },
    },
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
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
                <a href="/MarcelloAlvinskie-CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
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
