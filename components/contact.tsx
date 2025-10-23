"use client"

import type React from "react"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleEmailClick = () => {
    const email = "sammyokuboyejo@gmail.com"
    const subject = encodeURIComponent("Let’s connect!")
    const body = encodeURIComponent("Hi Samuel,\n\n")

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`

      setTimeout(() => {
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      }, 1000)
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        "_blank"
      )
    }
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_zzowu87", 
        "template_s02vy0n", 
        formData,
        "XLwy7H8x-jS12WZnh" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setSubmitted(true)
          setFormData({ name: "", email: "", message: "" })
          setTimeout(() => setSubmitted(false), 3000)

        },
        (error) => {
          console.error("FAILED...", error)
        }
      )
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/samuelokuboyejo", label: "GitHub" },
    { icon: Linkedin, href: "http://www.linkedin.com/in/samuel-okuboyejo-9202a123a", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email", onClick: handleEmailClick },

  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">Let's Connect</h2>
        <p className="text-center text-muted-foreground text-lg mb-12">Let's collaborate or just say hi </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
              whileFocus={{ scale: 1.02 }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
              whileFocus={{ scale: 1.02 }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
              whileFocus={{ scale: 1.02 }}
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-smooth"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                    target={link.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-smooth"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <link.icon size={24} className="text-accent" />
                  </motion.a>
                ))}

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
