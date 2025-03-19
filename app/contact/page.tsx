"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-background to-background/80">
      <section className="w-full py-16 relative overflow-hidden">
        {/* Background elements */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-[hsl(var(--primary))]/2 blur-[180px] -z-10 opacity-30 animate-pulse"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-[hsl(var(--accent))]/2 blur-[180px] -z-10 opacity-20 animate-pulse"
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
                Get In Touch
              </span>
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center text-white/70 max-w-2xl mx-auto mb-12"
            >
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl group hover:border-[hsl(var(--primary))]/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary))]/20 transition-colors duration-300">
                    <Mail className="h-8 w-8 text-[hsl(var(--primary))]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Email Me</h3>

                  <p className="text-white/60 mb-6 flex-grow">
                    Send me an email and I'll get back to you as soon as
                    possible.
                  </p>

                  <a
                    href="mailto:samiabdul822@gmail.com"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-white/5 text-white/90 border border-white/20 hover:bg-[hsl(var(--primary))]/20 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-lg group"
                  >
                    <span>samiabdul822@gmail.com</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl group hover:border-[hsl(var(--accent))]/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--accent))]/20 transition-colors duration-300">
                    <Linkedin className="h-8 w-8 text-[hsl(var(--accent))]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    Connect on LinkedIn
                  </h3>

                  <p className="text-white/60 mb-6 flex-grow">
                    Let's connect professionally and discuss opportunities.
                  </p>

                  <a
                    href="https://linkedin.com/in/shaikabdulsami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-white/5 text-white/90 border border-white/20 hover:bg-[hsl(var(--accent))]/20 hover:border-[hsl(var(--accent))]/30 transition-all duration-300 shadow-lg group"
                  >
                    <span>linkedin.com/in/shaikabdulsami</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/5 to-[hsl(var(--accent))]/5 rounded-xl"></div>
              <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Quick Response</h3>
                    <p className="text-white/60 text-sm">
                      I typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/">
                    <span className="px-5 py-2.5 text-sm rounded-full bg-white/5 text-white/90 border border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg inline-block">
                      Back to Home
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
