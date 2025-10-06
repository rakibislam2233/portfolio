"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, Server } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
      { name: "Ant Design" },
      { name: "Framer Motion" },
      { name: "Redux Toolkit Query" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "JWT Authentication" },
      { name: "Socket.io" },
      { name: "Stripe Payment Integration" },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Mongoose" },
      { name: "Prisma" },
      { name: "TypeORM" },
    ],
  },
  {
    category: "Testing & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "Jest" },
      { name: "Supertest" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "AWS (S3, EC2)" },
      { name: "DigitalOcean" },
      { name: "Nginx" },
      { name: "Cloudflare" },
      { name: "Postman" },
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
