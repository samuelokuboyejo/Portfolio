"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const technologies = [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "Golang",

    "Spring Boot",
    "Spring Security",
    "NestJS",
    "FastAPI",
    "TypeORM",
    "JPA/Hibernate",

    "REST APIs",
    "Microservices",
    "WebSockets",

    "JWT",
    "OAuth2",

    "PostgreSQL",
    "MySQL",

    "Docker",
    "Postman",
    "Git",
    "GitHub",
    "CI/CD",

    "IntelliJ IDEA"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-sm md:max-w-md rounded-2xl bg-gradient-to-br from-accent to-primary/50 overflow-hidden shadow-2xl">
            <img src="/sam.png" alt="Samuel Okuboyejo" className="w-full h-full object-cover" />
          </div>

        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p className="text-lg text-muted-foreground mb-6 leading-relaxed" variants={itemVariants}>
            I'm a passionate backend engineer with expertise in building scalable, secure, and efficient systems. With a
            strong foundation in Java and Spring Boot, I specialize in designing microservices architectures and
            implementing robust REST APIs.
          </motion.p>

          <motion.p className="text-lg text-muted-foreground mb-8 leading-relaxed" variants={itemVariants}>
            My journey in tech has been driven by a desire to solve complex problems and create systems that make a real
            impact. I'm particularly interested in distributed systems, database optimization, and security best
            practices.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Technologies & Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-lg text-center font-medium text-sm hover:bg-accent/20 transition-smooth cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
