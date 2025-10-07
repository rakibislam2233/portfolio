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
        <h3 className="text-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          Professional Summary
        </h3>
        <p className="text-muted-foreground print:text-black leading-relaxed print:text-sm">
          Full-Stack Developer with 2 years of experience building scalable web applications using React.js, Next.js,
          TypeScript, Node.js, and Express.js. Successfully developed and deployed 15+ full-stack applications and client
          projects on AWS and DigitalOcean with expertise in MongoDB, PostgreSQL, and Redis databases. Proficient in
          RESTful API development, real-time applications with Socket.io, payment integration with Stripe, and DevOps
          practices including Docker and Nginx. Experienced in managing complete deployment
          lifecycles while delivering high-quality solutions.
        </p>
      </motion.div>
    </section>
  )
}
