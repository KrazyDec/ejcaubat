import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies and tools">
      {items.map((t) => (
        <li key={t} className="badge py-0.5">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="text-muted mt-3 space-y-2 text-sm leading-relaxed">
      {items.map((h) => (
        <li key={h} className="flex gap-2.5">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Work experience"
          description="A career spanning enterprise applications, banking technology, HR platforms, and web development."
        />

        <ol className="relative border-l border-[rgb(var(--border))] pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <li key={job.company + job.period} className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-[rgb(var(--bg))] sm:-left-[47px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <article className="glass p-6 transition-colors hover:border-accent/40">
                  <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="flex items-center gap-1.5 text-sm font-medium text-accent">
                        <Briefcase className="h-3.5 w-3.5" aria-hidden /> {job.company}
                      </p>
                    </div>
                    <div className="text-muted text-sm sm:text-right">
                      <p className="font-mono text-xs">{job.period}</p>
                      {job.location && (
                        <p className="mt-1 flex items-center gap-1 text-xs sm:justify-end">
                          <MapPin className="h-3 w-3" aria-hidden /> {job.location}
                        </p>
                      )}
                    </div>
                  </header>

                  {job.meta && (
                    <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs">
                      {job.meta.map((m) => (
                        <div key={m.label} className="flex gap-1.5">
                          <dt className="text-muted">{m.label}:</dt>
                          <dd className="font-medium">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {job.highlights && <Highlights items={job.highlights} />}
                  {job.technologies && <TechList items={job.technologies} />}

                  {job.projects && (
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {job.projects.map((p) => (
                        <div
                          key={p.name}
                          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.5)] p-4"
                        >
                          <h4 className="text-sm font-semibold">{p.name}</h4>
                          <Highlights items={p.highlights} />
                          <TechList items={p.technologies} />
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
