"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: "Trash2Cash – Sustainable Waste Management Platform",
      description:
        "A mobile and backend platform connecting waste generators with recyclers. Built RESTful APIs using Spring Boot for authentication, listings, transactions, and activity tracking with AWS deployment and Google OAuth integration.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Flutter"],
      github: "https://github.com/samuelokuboyejo/Trash2Cash", 
      demo: "https://trash2cashh.netlify.app", 
      image: "/trash2cash.png",
    },
    {
      title: "EduVault – Digital Receipt & Academic Record Management System",
      description:
        "A backend-driven web platform for managing academic receipts and records. Features JWT + Google OAuth authentication, real-time WebSocket updates, and intelligent automation for verification workflows.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "React", "Next.js"],
      github: "https://github.com/samuelokuboyejo/EduVault",
      demo: "https://eduvaultng.netlify.app",
      image: "/eduvault.png",

    },
    {
      title: "Pay Budz – Digital P2P Wallet Service",
      description:
        "A secure wallet microservice built with NestJS and TypeORM, enabling funding, transfers, and transaction tracking. Integrated Paystack API for payments and Dockerized for consistency across environments.",
      tech: ["NestJS", "TypeORM", "PostgreSQL", "Paystack API", "Docker"],
      github: "#",
      demo: "https://paybudz.netlify.app", 
      image: "/paybudz.png",
    },
    {
      title: "AgriEstimator - Cost Aggregation & Fair Pricing App",
      description:
        "A backend system helping Nigerian farmers estimate production costs and determine fair pricing using market trend analysis, cost breakdowns, and forecasting with Dockerized Spring Boot microservices.",
      tech: ["Spring Boot", "PostgreSQL", "Docker", "Microservices", "Data Visualization"],
      github: "https://github.com/samuelokuboyejo/AgriEstimator",
      demo: "https://agriestimator.netlify.app",
      image: "/agriestimator.png",
    },
    {
      title: "Ad Manager Platform",
      description:
        "An ad management system with RBAC, OAuth2, and JWT-secured endpoints for ad CRUD operations. Built using service-oriented architecture with audit logging for transparency.",
      tech: ["Spring Boot", "JWT", "OAuth2", "PostgreSQL"],
      github: "https://github.com/samuelokuboyejo/Ad-Manager",
      demo: "#",
      image: "/project-management-team.png?height=160&width=300&query=project",

    },
    {
      title: "Order Management System API",
      description:
        "Developed RESTful APIs for customer order management with role-based access control, validation, error handling, and Swagger documentation for easy testing and collaboration.",
      tech: ["Spring Boot", "Spring Security", "PostgreSQL", "Swagger", "Postman"],
      github: "https://github.com/samuelokuboyejo/Order-Management-System-API",
      demo: "#",
      image: "/project-management-team.png?height=160&width=300&query=projecttrash2cash.png",

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Featured Projects</h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group glass rounded-xl p-6 hover:shadow-xl transition-smooth"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
              />
              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 object-contain w-auto h-full mx-auto"
              />
            </div>

            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.a
                href={project.github}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:shadow-lg transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} /> GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} /> Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
