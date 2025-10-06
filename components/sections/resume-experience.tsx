"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Sparktech Agency",
    position: "Full-Stack Developer",
    location: "Remote",
    duration: "July 2024 - October 2025",
    achievements: [
      "Developed and deployed 5+ full-stack applications and mobile backends on AWS and DigitalOcean",
      "Managed complete deployment lifecycle including server setup, database configuration, and monitoring",
      "Mentored junior developers and maintained strong client relationships with consistent positive feedback",
      "Built scalable APIs and optimized application performance for production environments",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "DigitalOcean",
      "Socket.io",
      "Stripe",
      "Nginx"
    ],
  },
  {
    company: "Universe IT Institute (UITI)",
    position: "Frontend Developer",
    location: "Remote",
    duration: "October 2023 - May 2024",
    achievements: [
      "Delivered 10+ client projects using React.js, TypeScript, and modern frontend technologies",
      "Created responsive, pixel-perfect interfaces and integrated RESTful APIs",
      "Collaborated with teams following agile methodologies and version control best practices",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
];

export function ResumeExperience() {
  return (
    <section className="px-8 py-6 print:px-6 print:py-4 border-b border-border/50 print:border-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          Professional Experience
        </h3>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary/20 print:border-gray-400 pl-6 print:pl-4 relative print:break-inside-avoid print:mb-4"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 bg-primary print:bg-black rounded-full"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 print:mb-1">
                <div>
                  <h4 className="text-lg print:text-base font-semibold text-foreground print:text-black">
                    {exp.position}
                  </h4>
                  <h5 className="text-primary print:text-black font-medium print:text-sm">
                    {exp.company}
                  </h5>
                </div>
                <div className="flex items-center gap-4 text-sm print:text-xs text-muted-foreground print:text-black mt-1 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-1 mb-3 print:mb-2 text-sm print:text-xs text-muted-foreground print:text-black">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary print:text-black mt-1.5">
                      •
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
