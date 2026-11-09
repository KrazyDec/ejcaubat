import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="certifications-title"
          eyebrow="Certifications"
          title="Certifications & continuous learning"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <li key={cert.name}>
              <Reveal delay={i * 0.04} className="glass flex h-full items-start gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{cert.name}</h3>
                  {(cert.issuer || cert.date) && (
                    <p className="text-muted mt-1 text-xs">
                      {[cert.issuer, cert.date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p className="text-muted mt-1 font-mono text-[11px]">ID: {cert.credentialId}</p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      View credential <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
