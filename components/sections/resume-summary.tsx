"use client"

import { motion } from "framer-motion"

export function ResumeSummary() {
  return (
    <section className="px-8 py-6 print:px-6 print:py-4 border-b border-border/50 print:border-gray-300 print:break-inside-avoid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          Professional Summary
        </h3>
        <p className="text-muted-foreground print:text-black leading-relaxed print:text-sm">
          Experienced Senior Full-Stack Developer with 5+ years of expertise in modern web technologies including React,
          Node.js, and TypeScript. Proven track record of leading development teams, architecting scalable applications,
          and delivering high-quality solutions that serve 10K+ daily active users. Passionate about mentoring junior
          developers and implementing best practices in software development lifecycle.
        </p>
      </motion.div>
    </section>
  )
}
