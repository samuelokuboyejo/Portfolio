"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
      { icon: Github, href: "https://github.com/samuelokuboyejo", label: "GitHub" },
      { icon: Linkedin, href: "http://www.linkedin.com/in/samuel-okuboyejo-9202a123a", label: "LinkedIn" },
      {
        icon: Mail,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=sammyokuboyejo@gmail.com&su=Let’s%20connect!&body=Hi%20Samuel%2C%0D%0A%0D%0A",
        label: "Email" 
      },
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
                target="_blank"  
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                <link.icon size={20} className="text-muted-foreground hover:text-accent transition-smooth" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
