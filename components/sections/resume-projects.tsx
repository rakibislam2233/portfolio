"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Monitor, Server } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    clientRepo: "https://github.com/rakibali/ecommerce-frontend",
    serverRepo: "https://github.com/rakibali/ecommerce-backend",
    keyFeatures: [
      "Payment Integration",
      "Admin Dashboard",
      "Real-time Inventory",
      "User Authentication",
    ],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates and drag-and-drop functionality",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    clientRepo: "https://github.com/rakibali/taskmanager-frontend",
    serverRepo: "https://github.com/rakibali/taskmanager-backend",
    keyFeatures: [
      "Real-time Collaboration",
      "Drag & Drop",
      "Team Management",
      "Progress Tracking",
    ],
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices API gateway with authentication, rate limiting, and request routing",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    liveUrl: "https://api-gateway-demo.herokuapp.com",
    clientRepo: null,
    serverRepo: "https://github.com/rakibali/api-gateway",
    keyFeatures: [
      "Rate Limiting",
      "Load Balancing",
      "Authentication",
      "Request Routing",
    ],
  },
  {
    title: "Social Media Analytics Dashboard",
    description:
      "Real-time analytics platform for social media metrics with data visualization and reporting",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "https://social-analytics-demo.vercel.app",
    clientRepo: "https://github.com/rakibali/social-analytics-frontend",
    serverRepo: "https://github.com/rakibali/social-analytics-backend",
    keyFeatures: [
      "Real-time Analytics",
      "Data Visualization",
      "Custom Reports",
      "API Integration",
    ],
  },
  {
    title: "Weather Dashboard App",
    description:
      "Modern weather application with location-based forecasts and interactive maps",
    technologies: ["Vue.js", "JavaScript", "OpenWeather API", "Mapbox"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    clientRepo: "https://github.com/rakibali/weather-dashboard",
    serverRepo: null,
    keyFeatures: [
      "Location Detection",
      "7-Day Forecast",
      "Interactive Maps",
      "Weather Alerts",
    ],
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile banking interface with transaction history and account management",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    liveUrl: null,
    clientRepo: "https://github.com/rakibali/mobile-banking-app",
    serverRepo: "https://github.com/rakibali/banking-backend",
    keyFeatures: [
      "Secure Authentication",
      "Transaction History",
      "Account Management",
      "Push Notifications",
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
              className="w-60 mx-auto px-4 py-1.5 gap-2 rounded-md border flex justify-center items-center transition-all duration-300 bg-white dark:bg-black border-border dark:text-white cursor-pointer"
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
