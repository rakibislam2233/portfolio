"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import logoImage from "@/public/logo.webp";

export function ResumeHeader() {
  const contactInfo = [
    {
      icon: Mail,
      text: "rakib2020.tkg@gmail.com",
      href: "mailto:rakib2020.tkg@gmail.com",
    },
    { icon: Phone, text: "+8801319101179", href: "tel:+8801319101179" },
    { icon: MapPin, text: "Thakurgaon - Bangladesh", href: "#" },
    { icon: Globe, text: "rakibali.dev", href: "https://rakibali.dev" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rakibislam2233",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/md-rakib-ali/",
      label: "LinkedIn",
    },
  ];

  return (
    <header className="bg-muted/30 border-b border-border print:bg-white print:border-gray-300">
      <div className="px-8 py-8 print:px-6 print:py-6">
        <div className="flex flex-col md:flex-row items-center gap-8 print:gap-6">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 print:w-24 print:h-24 rounded-full">
              <img
                src={logoImage.src}
                alt="Md Rakib Ali"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="flex-grow text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl print:text-3xl font-bold text-foreground mb-2 print:mb-1"
            >
              Md Rakib Ali
            </motion.h1>
            <div className="relative h-8 md:h-10 mb-4 print:mb-3 overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="text-xl md:text-2xl print:text-lg font-semibold text-primary absolute inset-0 flex items-center"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 print:mb-3 print:gap-1"
            >
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm print:text-xs print:text-black"
                >
                  <contact.icon className="h-4 w-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </motion.div>

            {/* Social Links and Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
              <Button size="sm" className="print:hidden cursor-pointer">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
