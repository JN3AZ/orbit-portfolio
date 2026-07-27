"use client";

import { motion } from "motion/react";
import {
  Building2,
  Code2,
  Database,
  Cpu,
  Layout,
  Wrench,
} from "lucide-react";

const skills = [
  {
    name: "Real Estate Valuation",
    description: "Commercial & residential appraisal, USPAP, income approach",
    icon: Building2,
  },
  {
    name: "Full-Stack Development",
    description: "Next.js, React, TypeScript, Server Actions",
    icon: Code2,
  },
  {
    name: "Databases & Prisma",
    description: "SQLite, PostgreSQL, schema design, migrations",
    icon: Database,
  },
  {
    name: "Automation & Tooling",
    description: "CLI tools, Grok Build, custom scripts",
    icon: Cpu,
  },
  {
    name: "UI & Interaction Design",
    description: "Tailwind CSS, Framer Motion, clean interfaces",
    icon: Layout,
  },
  {
    name: "Problem Solving",
    description: "Turning complex requirements into working systems",
    icon: Wrench,
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Skills
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What I work with
          </h3>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-indigo-500/40 hover:bg-slate-900/70"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500/20">
                <skill.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold">{skill.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}