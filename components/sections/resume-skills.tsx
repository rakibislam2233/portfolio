"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, Server } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Redux" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Shadcn UI" },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    category: "Database & Storage",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Prisma" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Git" },
      { name: "Vercel" },
      { name: "Digital Ocean" },
      { name: "Cloudflare" },
      { name: "Nginx" },
    ],
  },
];

export function ResumeSkills() {
  return (
    <section className="px-8 py-8 print:px-6 print:py-4 border-b border-border print:border-gray-300 bg-muted/20 print:bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          {/* Skills icon */}
          Technical Skills
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-border print:border-gray-300  print:bg-white rounded-xl overflow-hidden print:rounded-none print:border-none"
            >
              <div className="">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted text-foreground">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {category.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="inline-block"
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm px-3 py-1 bg-muted border border-border hover:bg-muted/80 transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
