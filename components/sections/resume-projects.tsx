"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Monitor, Server } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Iterbene - Travel Social Media Platform",
    description:
      "A feature-rich travel social media platform where users can share posts, create travel journals, organize events, and connect with travelers. Includes real-time messaging and interactive map visualization.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Redux Toolkit Query",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google Maps",
      "AWS (EC2, S3)",
      "Nginx",
    ],
    liveUrl: "https://iterbene.com",
    clientRepo:
      "https://github.com/rakibislam2233/iterbene-website-client-shannon.git",
    serverRepo:
      "https://github.com/rakibislam2233/iterbene-website-backend-shannon.git",
    keyFeatures: [
      "Real-time messaging and notifications using Socket.io",
      "Interactive travel history map with Google Maps integration",
      "AWS S3 for scalable media storage",
    ],
  },
  {
    title: "Shikkhapro - AI-Powered Quiz Generator",
    description:
      "An AI-based quiz generation platform covering all academic levels, enabling users to create customized quizzes in multiple languages with various question types. Features real-time progress tracking and performance analytics.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://shikkhapro.netlify.app/",
    clientRepo: "https://github.com/rakibislam2233/ShikkhaPro-Client.git",
    serverRepo: "https://github.com/rakibislam2233/Shikkha-Pro-Backend.git",
    keyFeatures: [
      "AI-powered quiz generation using Gemini and OpenAI APIs",
      "Multi-language support with dynamic question type selection",
      "User progress tracking with detailed analytics dashboard",
      "Responsive design with smooth animations and transitions",
    ],
  },
  {
    title: "Green Canopy - Tree E-Commerce Platform",
    description:
      "A tree marketplace with three user roles (Customer, Businessman, Admin) enabling users to purchase trees while allowing businesses to promote products. Features dynamic pricing and real-time inventory management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit Query",
      "Ant Design",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Google Maps",
      "DigitalOcean",
      "Nginx",
    ],
    liveUrl: "https://greencanopy.vercel.app/",
    clientRepo: "https://github.com/rakibislam2233/Green-Canopy-Client.git",
    serverRepo: "https://github.com/rakibislam2233/Green-Canopy-Backend.git",
    keyFeatures: [
      "Role-based access control with separate dashboards for users, businesses, and admins",
      "Dynamic product variants with size, color, and price management",
      "Secure payment processing with Stripe integration",
    ],
  },
];

export function ResumeProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="px-8 py-6 print:px-6 print:py-4 border-b border-border print:border-gray-300 print:break-inside-avoid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          Projects
        </h3>

        <div className="space-y-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary/20 print:border-gray-400 pl-6 print:pl-4 relative print:break-inside-avoid print:mb-4"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-2 lg:mt-0 print:hidden">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                  {project.clientRepo && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                      title="Client Repository"
                    >
                      <Monitor className="h-4 w-4" />
                      <span className="hidden sm:inline">Client</span>
                    </a>
                  )}
                  {project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                      title="Server Repository"
                    >
                      <Server className="h-4 w-4" />
                      <span className="hidden sm:inline">Server</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <h5 className="text-sm font-medium text-foreground mb-2">
                  Key Features:
                </h5>
                <div className="flex flex-wrap gap-1">
                  {project.keyFeatures.map((feature) => (
                    <Badge
                      key={feature}
                      variant="outline"
                      className="text-xs px-2 py-0.5 bg-accent/10"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
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

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center print:hidden"
          >
            <div
              onClick={() => setShowAll(!showAll)}
              className="w-60 mx-auto px-4 py-1 gap-2 rounded-md border flex justify-center items-center transition-all duration-300 bg-white dark:bg-secondary border-border dark:text-white cursor-pointer"
            >
              {showAll ? "Show Less Projects" : "Load More Projects"}
              <ChevronDown
                className={`h-4 w-4 mr-2 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
