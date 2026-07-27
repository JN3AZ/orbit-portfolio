"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            About
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Building tools and exploring ideas
          </h3>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-400">
            <p>
              I’m a property appraiser by day and a builder by night. I enjoy
              turning real-world problems into clean, useful software — whether
              that’s valuation tools, automation scripts, or small full-stack
              experiments like this site.
            </p>
            <p>
              This portfolio is both a showcase and a playground. The guestbook
              below is a real full-stack feature using Next.js Server Actions
              and Prisma, built while learning in public.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}