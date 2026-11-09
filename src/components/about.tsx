import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, education, profile } from "@/data/portfolio";
import { getInitials } from "@/lib/utils";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="About" title="From web intern to enterprise engineer" />

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-muted text-base leading-relaxed sm:text-lg">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5" aria-label="Career progression">
                {about.journey.map((step) => (
                  <li key={step.year + step.label} className="glass p-3">
                    <p className="font-mono text-xs text-accent">{step.year}</p>
                    <p className="mt-1 text-xs font-medium leading-snug">{step.label}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="space-y-4">
            <div className="glass flex items-center gap-4 p-5">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-xl object-cover"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-900 text-xl font-semibold text-white"
                >
                  {getInitials(profile.name)}
                </div>
              )}
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="text-muted text-sm">{profile.title}</p>
              </div>
            </div>

            <div className="glass p-5">
              <h3 className="mb-3 text-sm font-semibold">Focus areas</h3>
              <ul className="flex flex-wrap gap-2">
                {about.focusAreas.map((area) => (
                  <li key={area} className="badge">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {education.map((edu) => (
              <div key={edu.school} className="glass p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <GraduationCap className="h-4 w-4 text-accent" aria-hidden /> Education
                </div>
                <p className="text-sm font-medium">{edu.degree}</p>
                <p className="text-muted text-sm">{edu.school}</p>
                <p className="text-muted mt-1 font-mono text-xs">{edu.period}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
