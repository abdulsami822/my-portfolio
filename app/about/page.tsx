"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Cpu, Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-8"
          >
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Me</h1>
            <p className="text-lg text-muted-foreground mb-8">
              A passionate frontend developer with a keen eye for design and a love for creating seamless user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Frontend Expertise</h2>
              </div>
              <p className="text-muted-foreground">
                Specialized in React, Next.js, and modern frontend technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Clean Code</h2>
              </div>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and performant code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Problem Solver</h2>
              </div>
              <p className="text-muted-foreground">
                Turning complex challenges into elegant solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Always Learning</h2>
              </div>
              <p className="text-muted-foreground">
                Continuously exploring new technologies and best practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}