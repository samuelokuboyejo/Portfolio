"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      title: "Backend Intern",
      company: "Spay",
      period: "2024 - 2025",
      description:
        "Worked on microservices architecture and payment reconciliation services. Implemented REST APIs and optimized database queries.",
      highlights: ["Microservices", "Payment Systems", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "Final Year Project",
      company: "University",
      period: "2024",
      description:
        "Built a cost aggregation and fair pricing web application for farmers. Designed scalable backend with real-time data processing.",
      highlights: ["Full Stack", "Real-time Processing", "Database Design", "API Development"],
    },
    {
      title: "Software Engineer",
      company: "Spotflow (Financial Services)",
      period: "2025 - Present",
      description:
        "Developed scalable backend systems for financial services. Focused on RESTful APIs, microservices, and secure transaction handling.",
      highlights: ["REST APIs",
        "Microservices Architecture",
        "Database Optimization",
        "Security & Compliance"],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Experience</h2>
      </motion.div>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass rounded-xl p-8 border-l-4 border-accent"
            variants={itemVariants}
            whileHover={{ x: 8 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-accent font-semibold">{exp.company}</p>
              </div>
              <span className="text-muted-foreground font-medium mt-2 md:mt-0">{exp.period}</span>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((highlight) => (
                <span key={highlight} className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
