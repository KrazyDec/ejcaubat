"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <motion.div
          className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/25 via-blue-500/5 to-transparent blur-3xl"
          animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page">
        <motion.div {...item(0)} className="mb-6 flex flex-wrap items-center gap-2">
          <span className="badge gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            {profile.title}
          </span>
          <span className="badge gap-1.5">
            <MapPin className="h-3 w-3" aria-hidden />
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          {...item(0.08)}
          id="hero-title"
          className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Hi, I&apos;m {profile.name}.
          <span className="mt-2 block bg-gradient-to-r from-[rgb(var(--fg))] via-blue-400 to-[rgb(var(--muted))] bg-clip-text text-transparent">
            {profile.headline.split(" | ")[0]} &amp; Enterprise Application Developer
          </span>
        </motion.h1>

        <motion.p {...item(0.16)} className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
          {profile.heroIntro}
        </motion.p>

        <motion.p {...item(0.2)} className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {profile.headline}
        </motion.p>

        <motion.div {...item(0.26)} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail className="h-4 w-4" aria-hidden /> Contact Me
          </a>
          <a href={profile.resumePath} download className="btn-secondary">
            <Download className="h-4 w-4" aria-hidden /> Download Resume
          </a>
        </motion.div>

        <motion.div {...item(0.32)} className="mt-8 flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border))] transition-colors hover:text-accent"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          {profile.github ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border))] transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <span
              title="GitHub link coming soon"
              aria-label="GitHub profile (coming soon)"
              className="text-muted inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-[rgb(var(--border))] opacity-60"
            >
              <Github className="h-4 w-4" aria-hidden />
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
