"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Coffee, Heart } from "lucide-react"

export function EasterEgg() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [konamiCode, setKonamiCode] = useState<string[]>([])

  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...konamiCode, e.code].slice(-10)
      setKonamiCode(newSequence)

      if (newSequence.join(",") === konamiSequence.join(",")) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
        setKonamiCode([])
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [konamiCode])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl shadow-2xl text-white text-center"
        >
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 2 }}>
            <Code className="h-12 w-12 mx-auto mb-4" />
          </motion.div>

          <h3 className="text-xl font-bold mb-2">You found the secret!</h3>
          <p className="mb-4">Fellow developer detected! 🎉</p>

          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-300" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-yellow-300" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
