"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-smooth ${isScrolled ? "glass" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
          SO
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-muted transition-smooth"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  )
}
