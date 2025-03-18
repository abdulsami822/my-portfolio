"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Tailwind CSS",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard with interactive charts",
    tech: ["React", "D3.js", "Material-UI", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media App",
    description: "Full-stack social media application with real-time features",
    tech: ["Next.js", "Socket.io", "MongoDB", "Redux"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
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
            <h1 className="text-4xl font-bold mb-6 gradient-text">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work and personal projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Code <Github className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}