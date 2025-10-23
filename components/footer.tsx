"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const socialLinks = [
      { icon: Github, href: "https://github.com/samuelokuboyejo", label: "GitHub" },
      { icon: Linkedin, href: "http://www.linkedin.com/in/samuel-okuboyejo-9202a123a", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email", onClick: handleEmailClick },

    ]

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="text-muted-foreground">
              © {currentYear} Samuel Okuboyejo.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
