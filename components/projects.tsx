"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Cateringz Application Design",
      description: "An application design for a simulated catering company built with figma and public assets.",
      image: "/cateringz-design.png",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/design/ejdMhZOMZUOXeCnLjzM6nA/HCI-LAB-Marcello-Alvinskie-2702253364?node-id=0-1&t=uNJMHS84KJZbivFS-1",
      featured: true,
    },
    {
      title: "Smart Ways to Live",
      description:
        "2D game created to educate children about the appropriate actions that should be done in the case of a natural emergency.",
      image: "/smart-ways-to-live.png",
      technologies: ["Figma", "Godot"],
      liveUrl: "https://se-smart-ways-to-survive.vercel.app",
      figmaUrl: "https://www.figma.com/design/czUFQVetVzPp24wc6V8Yiv/SE?node-id=30-37&t=BtrvfoKvrOAbYS00-1",
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
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

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my recent work, demonstrating my skills in various technologies and problem-solving
            approaches.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <motion.div
                  className="relative overflow-hidden rounded-t-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-contain bg-muted group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                    >
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                    </motion.div>
                  )}
                </motion.div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.githubUrl && project.title !== "Smart Ways to Live" && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.liveUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {project.title === "Cateringz Application Design" ? "Figma Link" : "Live Demo"}
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.figmaUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Figma Link
                          </a>
                        </Button>
                      </motion.div>
                    )}
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
