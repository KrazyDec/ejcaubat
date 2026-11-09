import { BadgeCheck, Bot, Code2, Database, Layers, Star, Workflow, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { assessedSkills, skillGroups } from "@/data/portfolio";

const icons: LucideIcon[] = [Code2, Layers, Database, Wrench, Workflow, Bot];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Tools and practices I work with"
          description="Grouped by area. No made-up percentages — just what I use."
        />

        <Reveal className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <BadgeCheck className="h-4 w-4 text-accent" aria-hidden /> Assessed proficiency
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {assessedSkills.map((s) => (
              <li key={s.name} className="glass flex flex-col items-start justify-between gap-4 p-5 xl:flex-row xl:items-center">
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">{s.type} skill</p>
                  <p className="mt-1 text-lg font-semibold">{s.name}</p>
                </div>
                <div className="shrink-0 xl:text-right">
                  <div
                    className="flex gap-0.5 xl:justify-end"
                    role="img"
                    aria-label={`${s.level} out of ${s.maxLevel}`}
                  >
                    {Array.from({ length: s.maxLevel }, (_, i) => (
                      <Star
                        key={i}
                        aria-hidden
                        className={i < s.level ? "h-4 w-4 fill-accent text-accent" : "text-muted h-4 w-4"}
                      />
                    ))}
                  </div>
                  <p className="text-muted mt-1 text-xs">
                    {s.code} · {s.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.category} delay={i * 0.04}>
                <div className="glass h-full p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold">{group.category}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="badge">
                        {skill.name}
                        {skill.note && (
                          <span className="ml-1.5 rounded-full bg-accent/10 px-1.5 text-xs text-accent">
                            {skill.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
