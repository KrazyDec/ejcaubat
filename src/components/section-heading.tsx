import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-muted mt-4 text-base leading-relaxed">{description}</p>}
    </Reveal>
  );
}
