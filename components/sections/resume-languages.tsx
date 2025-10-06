"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  {
    name: "English",
    level: "Professional working proficiency",
    description: "Fluent in technical communication and documentation",
  },
  {
    name: "Bangla",
    level: "Native speaker",
    description: "Excellent verbal and written communication skills",
  },
];

export function ResumeLanguages() {
  return (
    <section className="px-8 py-6 print:px-6 print:py-4 print:break-inside-avoid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="ttext-xl print:text-lg font-semibold text-foreground print:text-black flex items-center gap-2 mb-6 print:mb-4">
          <Globe className="w-5 h-5 print:w-4 print:h-4 text-primary print:text-black" />
          Languages
        </h3>

        <div className="grid md:grid-cols-2 gap-4 print:gap-2">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 print:p-3 print:bg-white border border-border print:border-gray-300 rounded-xl"
            >
              <div className="mb-2">
                <h4 className="font-medium text-foreground print:text-black">
                  {language.name}
                </h4>
                <p className="text-sm text-primary print:text-black font-medium">
                  {language.level}
                </p>
              </div>
              <p className="text-xs text-muted-foreground print:text-black">
                {language.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
