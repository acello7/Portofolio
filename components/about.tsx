"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Users, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "Eagerness to Learn",
      description: "Every experience is carefully reflected upon and analyzed for the sake of continuous improvement.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong analytical skills with a passion for solving complex algorithmic challenges.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective communicator who thrives in collaborative environments and agile workflows.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that meet user needs and business objectives.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance" variants={itemVariants}>
            I'm a dedicated Computer Science student with a passion for creating innovative solutions and learning
            cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing my Bachelor's degree in Computer Science, I've developed a strong foundation in
                programming, algorithms, and software engineering principles. My academic journey has been complemented
                by hands-on projects and internships that have shaped my practical skills.
              </p>
              <p>
                I'm particularly interested in web development, machine learning, and mobile applications. I enjoy
                tackling challenging problems and am always eager to learn new technologies and frameworks that can help
                me build better solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, participating in hackathons,
                or exploring the latest trends in technology.
              </p>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={containerVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <highlight.icon className="h-8 w-8 text-primary mb-4" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
