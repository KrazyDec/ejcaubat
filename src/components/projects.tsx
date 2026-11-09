"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Rocket } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const reduce = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Featured projects & contributions"
          description="A personal product in progress, plus the kinds of work I deliver professionally. Client details are kept non-confidential."
        />

        {featured && (
          <Reveal className="mb-6">
            <article className="glass grid overflow-hidden lg:grid-cols-2">
              <div className="min-w-0 p-5 sm:p-8">
                <span className="badge mb-4 border-accent/40 text-accent">{featured.type}</span>
                <h3 className="text-2xl font-semibold">{featured.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{featured.description}</p>
                {featured.modules && (
                  <>
                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider">Planned modules</h4>
                    <ul className="text-muted mt-2 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
                      {featured.modules.map((m) => (
                        <li key={m} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden /> {m}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {featured.technologies.map((t) => (
                    <li key={t} className="badge py-0.5">{t}</li>
                  ))}
                </ul>
                {featured.link && (
                  <a href={featured.link} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6">
                    Visit project <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </div>
              <div className="relative aspect-video border-t border-[rgb(var(--border))] bg-gradient-to-br from-blue-500/15 via-transparent to-transparent lg:aspect-auto lg:min-h-[240px] lg:border-l lg:border-t-0">
                {featured.image && !imageFailed ? (
                  <Image
                    src={featured.image}
                    alt={`${featured.title} referral opportunities dashboard`}
                    fill
                    sizes="(min-width: 1152px) 544px, (min-width: 1024px) calc((100vw - 64px) / 2), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                    className="object-contain object-center lg:object-cover lg:object-left-top"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                    <Rocket className="h-10 w-10 text-accent" aria-hidden />
                    <p className="text-muted text-sm">Screenshot coming soon</p>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
                className={cn("glass flex h-full flex-col p-6 transition-colors hover:border-accent/40")}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.type}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {p.technologies.map((t) => (
                    <li key={t} className="badge py-0.5">{t}</li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
