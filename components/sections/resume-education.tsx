"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const education = [
  {
    degree: "B. Sc. in Computer Science and Engineering",
    institution: "Canadian University of Bangladesh",
    duration: "2025 - Present",
  },
  {
    degree: "Diploma in Engineering Computer Technology",
    institution: "Thakurgaon Polytechnic Institute",
    duration: "2020 - 2024",
    gpa: "3.51/4.0",
    honors: [],
  },
];

const certifications = [
  {
    name: "Next Level Web Development Certificate",
    issuer: "Programming Hero",
    year: "2024",
  },
  {
    name: "Web Application Project Showcase Contest 2023 - Winner",
    issuer: "Programming Hero",
    year: "2023",
  },
  {
    name: "Complete Web Development Course Certification",
    issuer: "Programming Hero",
    year: "2023",
  }
];

export function ResumeEducation() {
  return (
    <section className="px-8 py-6 print:px-6 print:py-4 border-b border-border print:border-gray-300">
      <div className="grid md:grid-cols-2 gap-8 print:gap-6">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-primary/20 print:border-gray-400 pl-6 print:pl-4 relative print:break-inside-avoid"
              >
                <div className="absolute -left-2 top-0 w-3 h-3 bg-primary print:bg-black rounded-full"></div>

                <h4 className="font-semibold text-foreground print:text-black">
                  {edu.degree}
                </h4>
                <h5 className="text-primary print:text-black font-medium">
                  {edu.institution}
                </h5>
                <p className="text-sm print:text-xs text-muted-foreground print:text-black mb-2">
                  {edu.duration}
                </p>
                {edu.gpa && (
                  <p className="text-sm print:text-xs text-muted-foreground print:text-black mb-2">
                    CGPA: {edu.gpa}
                  </p>
                )}
                <div className="flex flex-wrap gap-1">
                  {edu?.honors?.map((honor) => (
                    <Badge
                      key={honor}
                      variant="outline"
                      className="text-xs bg-muted border-border print:bg-white print:border-gray-400"
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {honor}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl print:text-lg font-semibold text-foreground print:text-black mb-4 print:mb-3 flex items-center gap-2">
            <div className="w-1 h-6 print:h-5 bg-primary print:bg-black rounded-full"></div>
            Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border-l-2 border-primary/20 print:border-gray-400 pl-6 print:pl-4 relative print:break-inside-avoid"
              >
                <div className="absolute -left-2 top-0 w-3 h-3 bg-primary print:bg-black rounded-full"></div>

                <h4 className="font-semibold text-foreground print:text-black text-sm">
                  {cert.name}
                </h4>
                <p className="text-primary print:text-black font-medium text-sm">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground print:text-black">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
