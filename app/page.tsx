"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Zap,
  ExternalLink,
  TestTube,
  FileJson,
  Store,
  FileJson2Icon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects */}
      <FeaturedSection />

      {/* Connect Section */}
      <ConnectSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced background elements with animated gradients */}
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

      {/* Subtle animated lines in background */}

      {/* Enhanced floating particles with more variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-[hsl(var(--primary))]/40 animate-float-slow"></div>
        <div
          className="absolute top-3/4 right-1/3 w-0.5 h-0.5 rounded-full bg-[hsl(var(--accent))]/40 animate-float-slow"
          style={{ animationDuration: "25s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]/30 animate-float-slow"
          style={{ animationDuration: "35s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/20 animate-float-slow"
          style={{ animationDuration: "30s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Enhanced left side content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 z-10"
          >
            {/* Decorative element */}

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90 relative">
                Frontend Developer
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[hsl(var(--primary))]/50 via-[hsl(var(--accent))]/50 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                ></motion.span>
              </span>
            </motion.h1>

            {/* Enhanced description with animated highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mb-12"
            >
              <p className="text-xl text-white/80 leading-relaxed max-w-xl font-light">
                Results-driven developer with 2+ years of experience creating
                scalable high-performance web applications.
              </p>

              {/* Subtle animated accent */}
            </motion.div>

            {/* Single CTA button with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button size="lg" className="bg-accent " asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-2 inline-block transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Decorative tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {["Javascript 👑", "React.js", "Next.js", "TailwindCSS"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* 3D Abstract Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 h-[400px] relative hidden lg:block"
          >
            {/* Modern code-inspired visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Terminal window frame */}
              <motion.div
                className="w-[90%] h-[90%] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-black/40 backdrop-blur-sm"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Terminal header */}
                <div className="h-8 bg-black/50 border-b border-white/10 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="text-xs text-white/50 mx-auto">
                    developer_terminal
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-6 h-[calc(100%-2rem)] overflow-hidden">
                  {/* Animated code lines */}
                  <div className="font-mono text-sm">
                    {[
                      { text: "const AbdulSami = {", delay: 0 },
                      {
                        text: "\u00A0\u00A0role: 'Digital Architect 🏗️',",
                        delay: 0.6,
                      },
                      {
                        text: "\u00A0\u00A0crafting: ['Flow', 'Precision', 'Velocity'],",
                        delay: 1.2,
                      },
                      {
                        text: "\u00A0\u00A0fuel: ['Curiosity', 'Creativity', 'Precision'],",
                        delay: 1.8,
                      },
                      { text: "};", delay: 2.4 },
                      { text: "", delay: 3 },
                      { text: "function deployIdea(vision) {", delay: 3.6 },
                      { text: "\u00A0\u00A0return {", delay: 4.2 },
                      {
                        text: "\u00A0\u00A0\u00A0\u00A0efficiency: 'Optimized 🚀',",
                        delay: 4.8,
                      },
                      {
                        text: "\u00A0\u00A0\u00A0\u00A0aesthetics: 'Feels like magic ✨',",
                        delay: 5.4,
                      },
                      {
                        text: "\u00A0\u00A0\u00A0\u00A0experience: 'Built for humans, not just screens'",
                        delay: 6,
                      },
                      { text: "\u00A0\u00A0};", delay: 6.6 },
                      { text: "}", delay: 7.2 },
                    ].map((line, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start mb-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: line.delay }}
                      >
                        <span className="text-[hsl(var(--primary))] mr-2">
                          {">"}
                        </span>
                        <div>
                          {line.text.split("").map((char, charIndex) => (
                            <motion.span
                              key={charIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.05,
                                delay: line.delay + charIndex * 0.01,
                              }}
                              className={
                                char === "'" || char === '"'
                                  ? "text-[hsl(var(--accent))]"
                                  : /\d/.test(char)
                                  ? "text-green-400"
                                  : /[{}[\]():;,.]/.test(char)
                                  ? "text-white/60"
                                  : /\bconst\b|\bfunction\b|\breturn\b/.test(
                                      line.text.substring(
                                        Math.max(0, charIndex - 8),
                                        charIndex + 8
                                      )
                                    ) && /[a-zA-Z]/.test(char)
                                  ? "text-[hsl(var(--primary))]"
                                  : "text-white/80"
                              }
                            >
                              {char}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}

                    {/* Blinking cursor */}
                    <motion.div
                      className="flex items-center mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 7.8 }}
                    >
                      <span className="text-[hsl(var(--primary))] mr-2">
                        {">"}
                      </span>
                      <motion.div
                        className="w-3 h-5 bg-white/80"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[hsl(var(--primary))]/60"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>

                {/* Subtle glow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-[hsl(var(--primary))]/20 to-transparent blur-2xl rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  // Flattened skills data without categories
  const skills = [
    {
      name: "JavaScript",
      icon: <FileJson className="h-5 w-5 text-yellow-400" />,
    },
    {
      name: "React.js",
      icon: <div className="text-blue-400 text-xl">⚛️</div>,
    },
    {
      name: "Next.js",
      icon: <div className="text-white text-xl">𝗡</div>,
    },
    {
      name: "TailwindCSS",
      icon: <div className="text-cyan-400 text-xl">🌊</div>,
    },
    {
      name: "Redux",
      icon: <Store className="h-5 w-5 text-purple-500" />,
    },
    {
      name: "Jest / RTL",
      icon: <TestTube className="h-5 w-5 text-green-400" />,
    },
    {
      name: "TypeScript",
      icon: <FileJson2Icon className="h-5 w-5 text-indigo-400" />,
    },
    {
      name: "HTML",
      icon: <div className="text-orange-400 text-lg">{"<>"}</div>,
    },
    {
      name: "CSS",
      icon: <div className="text-blue-400 text-lg">{"#"}</div>,
    },
    {
      name: "Optimization",
      icon: <Zap className="h-5 w-5 text-orange-400" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 relative">
      {/* Subtle background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[hsl(var(--primary))]/2 blur-[180px] -z-10 opacity-20 animate-pulse"
        style={{ animationDuration: "40s" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-[hsl(var(--accent))]/2 blur-[180px] -z-10 opacity-10 animate-pulse"
        style={{ animationDuration: "50s", animationDelay: "2s" }}
      ></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="relative text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
            Technical Expertise
          </span>
          <motion.span
            className="absolute -bottom-2 left-0 right-0 mx-auto w-20 h-px bg-gradient-to-r from-[hsl(var(--primary))]/50 via-[hsl(var(--accent))]/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.span>
        </h2>

        <p className="text-white/60 text-center max-w-xl mx-auto mb-10 text-sm">
          Specialized in modern frontend technologies with a focus on
          performance and user experience
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + index * 0.05,
                duration: 0.4,
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="group flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/5 group-hover:from-[hsl(var(--primary))]/20 group-hover:to-[hsl(var(--accent))]/10 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-white/80 font-medium text-center text-sm group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60"
          >
            Always learning and exploring new technologies
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const FeaturedSection = () => {
  // Featured projects
  const featuredProjects = [
    {
      title: "Offerwall",
      description:
        "Next.js 13 application that exceeded revenue targets by 10x within the first month, serving millions of users.",
      tags: ["Next.js", "TailwindCSS", "Performance"],
    },
    {
      title: "Interactive Dashboards",
      description:
        "React dashboards that reduced user interaction time by 40% and increased engagement by 15%.",
      tags: ["React", "Redux", "Recharts"],
    },
    {
      title: "Admin Dashboard",
      description:
        "Role-based access control system with searchable tables and interactive analytics.",
      tags: ["Next.js", "Shadcn-UI", "Supabase"],
      link: "https://github.com/abdulsami822/ambits",
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 py-16 relative">
        {/* Enhanced decorative background elements */}
        <div
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[hsl(var(--accent))]/3 blur-3xl -z-10 opacity-30 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-[hsl(var(--primary))]/3 blur-3xl -z-10 opacity-20 animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="relative text-2xl md:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Featured Projects</span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl flex flex-col h-full shadow-md border border-[hsl(var(--muted))]/10"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="self-start group"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

// Add this new Connect section at the bottom of the file
const ConnectSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--accent))]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90">
                Let's Connect
              </span>
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/50 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to chat about
              technology, I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Contact form preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-white/90">
                    Get in Touch
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    Have a project in mind? Let's discuss how I can help bring
                    your ideas to life.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70 group">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[hsl(var(--primary))]"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/80">
                        Email
                      </div>
                      <a
                        href="mailto:contact@example.com"
                        className="text-sm hover:text-[hsl(var(--primary))] transition-colors"
                      >
                        samiabdul822@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Button
                    asChild
                    className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 mt-4"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      Contact Me
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Social connections */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium mb-6 text-white/90">
                Connect Online
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="https://linkedin.com/shaikabdulsami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-[#0077B5]" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-white/60">
                      Connect professionally
                    </div>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-white/40" />
                </motion.a>

                <div className="mt-8 p-5 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[hsl(var(--primary))]"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">
                        "I believe in creating web experiences that are not just
                        functional, but delightful to use. Let's work together
                        to bring your vision to life."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
