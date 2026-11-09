import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted text-sm">
          © {year} {profile.name}.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-accent">
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent"
            >
              <Github className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
