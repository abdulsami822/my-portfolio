"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Linkedin, Mail, User } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/80">
      <section className="w-full py-16 relative overflow-hidden">
        {/* Background elements */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[hsl(var(--primary))]/2 blur-[180px] -z-10 opacity-30 animate-pulse"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-[hsl(var(--accent))]/2 blur-[180px] -z-10 opacity-20 animate-pulse"
          style={{ animationDuration: "50s", animationDelay: "2s" }}
        ></div>

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                About Me
              </span>
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h1>

            <div className="space-y-12">
              {/* Profile Section */}
              <Profile />

              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                    Professional Summary
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[hsl(var(--primary))]/50 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </h2>

                <p className="text-white/70 leading-relaxed">
                  Results-driven Frontend Developer with 2+ years of experience
                  at GreedyGame and various freelance projects. Specialized in
                  React.js and Next.js, with a strong focus on creating
                  responsive, accessible, and visually appealing user
                  interfaces. Experienced in building business websites, admin
                  dashboards, and end-to-end applications that deliver
                  exceptional user experiences and meet business objectives.
                </p>
              </motion.div>

              <Experience />

              <Skills />

              <CTA />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/40 to-[hsl(var(--accent))]/30 flex items-center justify-center p-1 border border-white/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <div className="rounded-lg overflow-hidden w-full h-full bg-black/40 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
              <User className="h-24 w-24 text-[hsl(var(--primary))]/60 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]">
              Abdul Sami
            </h2>
            <p className="text-[hsl(var(--primary))] font-medium mt-1 tracking-wide">
              Frontend Developer
            </p>
          </div>

          <p className="text-white/80 leading-relaxed">
            Passionate frontend developer with 2+ years of professional
            experience at GreedyGame and freelance projects. Specialized in
            React.js and Next.js, creating performant, accessible, and visually
            appealing web applications.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <a
              href="mailto:samiabdul822@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-white/5 text-white/90 border border-white/20 hover:bg-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-lg"
            >
              <Mail className="h-4 w-4 text-[hsl(var(--primary))]" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/shaikabdulsami"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-white/5 text-white/90 border border-white/20 hover:bg-[hsl(var(--accent))]/20 hover:border-[hsl(var(--accent))]/30 transition-all duration-300 shadow-lg"
            >
              <Linkedin className="h-4 w-4 text-[hsl(var(--accent))]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
          Work Experience
        </span>
        <motion.div
          className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[hsl(var(--primary))]/50 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </h2>

      <div className="space-y-8">
        {/* Job 1 - GreedyGame */}
        <div className="relative pl-6 border-l border-white/10">
          <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full bg-[hsl(var(--primary))]"></div>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <span className="text-sm text-white/50">2022 - 2024</span>
            </div>
            <p className="text-white/60 text-sm">GreedyGame</p>
            <ul className="space-y-2 mt-3">
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--primary))]">•</span>
                <span>
                  Developed and maintained React.js applications for ad-tech
                  platforms, improving user engagement by 35%.
                </span>
              </li>
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--primary))]">•</span>
                <span>
                  Implemented responsive designs with TailwindCSS, ensuring
                  optimal user experience across all devices.
                </span>
              </li>
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--primary))]">•</span>
                <span>
                  Optimized application performance, reducing load times by 40%
                  and improving Core Web Vitals scores.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Freelance Experience */}
        <div className="relative pl-6 border-l border-white/10">
          <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full bg-[hsl(var(--accent))]"></div>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 className="text-xl font-semibold">Freelance Developer</h3>
              <span className="text-sm text-white/50">2021 - Present</span>
            </div>
            <p className="text-white/60 text-sm">Various Clients</p>
            <ul className="space-y-2 mt-3">
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--accent))]">•</span>
                <span>
                  Built custom business websites that increased client
                  conversion rates by an average of 25%.
                </span>
              </li>
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--accent))]">•</span>
                <span>
                  Developed comprehensive admin dashboards with data
                  visualization that improved business decision-making
                  processes.
                </span>
              </li>
              <li className="text-white/70 text-sm flex gap-2">
                <span className="text-[hsl(var(--accent))]">•</span>
                <span>
                  Created end-to-end applications for businesses, including
                  inventory management and customer relationship systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
          Skills & Expertise
        </span>
        <motion.div
          className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[hsl(var(--primary))]/50 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </h2>

      <div className="flex flex-wrap gap-2">
        {[
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Redux",
          "TailwindCSS",
          "HTML5",
          "CSS3",
          "Responsive Design",
          "Performance Optimization",
          "Git",
          "Jest/RTL",
          "UI/UX",
          "RESTful APIs",
        ].map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
            className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-white/70 border border-white/10"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="mt-20"
    >
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-[hsl(var(--primary))]/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[hsl(var(--accent))]/20 rounded-full blur-xl"></div>

        {/* Card */}
        <div className="relative z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/5 via-transparent to-[hsl(var(--accent))]/5 opacity-70"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Ready to Build Something Amazing?
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                Whether you need a stunning website, a powerful web application,
                or technical consultation, I'm here to help turn your vision
                into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-black hover:bg-white/90 transition-all duration-300 px-6 py-2 h-auto text-base font-medium"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Get in Touch</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 hover:border-white/40 transition-all duration-300 px-6 py-2 h-auto text-base group"
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>View Resume</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Visual element: Animated Workflow Steps */}
            <CTAVisual />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CTAVisual() {
  return (
    <div className="relative h-full min-h-[280px] bg-gradient-to-r from-[hsl(var(--primary))]/10 to-black hidden md:block overflow-hidden">
      {/* Terminal-like grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Subtle code-like dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Abstract animated elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glowing central element - enhanced */}
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-[hsl(var(--primary))]/70 to-[hsl(var(--accent))]/70 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 60px 15px rgba(255,255,255,0.25), 0 0 30px 5px hsla(var(--primary), 0.5), 0 0 20px 10px hsla(var(--accent), 0.3)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Terminal-like code ring */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-transparent"
          style={{
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
            backgroundClip: "padding-box",
            boxShadow: "0 0 15px rgba(255,255,255,0.15)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderImage:
              "linear-gradient(to right, hsl(var(--primary))/60%, hsl(var(--accent))/60%) 1",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[90%] h-[90%] max-w-[380px] max-h-[380px] rounded-full border-[1.5px] border-transparent"
          style={{
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
            backgroundClip: "padding-box",
            boxShadow: "0 0 15px rgba(255,255,255,0.1)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderImage:
              "linear-gradient(to right, hsl(var(--accent))/40%, hsl(var(--primary))/40%) 1",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              background:
                i % 2 === 0
                  ? `radial-gradient(circle, hsl(var(--primary)) 0%, rgba(255,255,255,0) 70%)`
                  : `radial-gradient(circle, hsl(var(--accent)) 0%, rgba(255,255,255,0) 70%)`,
              boxShadow:
                i % 2 === 0
                  ? "0 0 12px 4px hsla(var(--primary), 0.8)"
                  : "0 0 12px 4px hsla(var(--accent), 0.8)",
            }}
            initial={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 250 - 125,
              scale: Math.random() * 0.8 + 0.6,
              opacity: 0.6,
            }}
            animate={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 250 - 125,
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>
    </div>
  );
}
