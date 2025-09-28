"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Core programming languages I use for software development and problem-solving",
      skills: [{ name: "Python" }, { name: "Java" }, { name: "C" }, { name: "Golang" }],
    },
    {
      title: "Design Tools",
      description: "Creative tools for UI/UX design and visual content creation",
      skills: [{ name: "Canva" }, { name: "Figma" }],
    },
    {
      title: "Operating Systems",
      description: "Various operating systems I'm proficient in for development and system administration",
      skills: [{ name: "Windows" }, { name: "Kali Linux" }, { name: "Rocky Linux" }, { name: "Ubuntu" }],
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

  const cardVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and
            frameworks.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                <CardHeader className="pb-6">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </motion.div>
                </CardHeader>
                <CardContent className="pt-0 pb-8">
                  <motion.div className="space-y-6" variants={containerVariants}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center p-3 bg-muted/50 rounded-lg"
                        variants={skillVariants}
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
