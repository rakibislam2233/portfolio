"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp, Download, Mail } from "lucide-react"

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowOptions(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <div className="relative">
            {/* Action Options */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 right-0 space-y-2"
                >
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    CV
                  </Button>
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-white shadow-lg"
                    onClick={scrollToContact}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
                onClick={() => {
                  if (showOptions) {
                    scrollToTop()
                  }
                  setShowOptions(!showOptions)
                }}
              >
                <motion.div animate={{ rotate: showOptions ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronUp className="h-6 w-6" />
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
