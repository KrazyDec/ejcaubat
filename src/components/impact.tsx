import {
  BookOpen,
  CheckCircle2,
  FileText,
  GitBranch,
  Layers,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { impact } from "@/data/portfolio";
import type { ImpactItem } from "@/types/portfolio";

const iconMap: Record<ImpactItem["icon"], LucideIcon> = {
  layers: Layers,
  server: Server,
  check: CheckCircle2,
  file: FileText,
  git: GitBranch,
  book: BookOpen,
  sparkles: Sparkles,
  rocket: Rocket,
};

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className="section pt-0 sm:pt-0">
      <div className="container-page">
        <SectionHeading id="impact-title" eyebrow="Impact" title="Where I contribute" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.03}>
                <div className="glass h-full p-5">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="text-muted mt-1.5 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
