"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Orbit Portfolio",
    description:
      "This site. A space-themed personal portfolio with a real full-stack guestbook built with Next.js, Prisma, and Server Actions.",
    tags: ["Next.js", "Prisma", "Tailwind", "Motion"],
    link: "/guestbook",
    github: null,
  },
  {
    title: "AZ Property Valuation Workbench",
    description:
      "Custom CLI tool for managing comps, sales comparison adjustments, NOI, and cap rate calculations tailored to Pima County workflows.",
    tags: ["TypeScript", "CLI", "Grok Build"],
    link: null,
    github: null,
  },
  {
    title: "Family Command Center",
    description:
      "Personal productivity experiments — meal planning helpers, debt modeling, and small automation tools built for daily life.",
    tags: ["Automation", "Node", "Scripts"],
    link: null,
    github: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Projects
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I’ve been building
          </h3>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-indigo-500/40 hover:bg-slate-900/70"
            >
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.link && (
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-400 transition hover:text-indigo-300"
                  >
                    View
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}