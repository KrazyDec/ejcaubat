export interface SocialLink {
  label: string;
  href: string | null;
  icon: "linkedin" | "github" | "mail";
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  heroIntro: string;
  location: string;
  email: string;
  /** Kept private; not rendered in the UI. */
  phone?: string;
  linkedin: string;
  /** Set to a real URL to enable GitHub links across the site. */
  github: string | null;
  resumePath: string;
  /** Path under /public, e.g. "/images/ej-caubat.jpg". Null shows initials. */
  photo: string | null;
  siteUrl: string;
}

export interface ExperienceProject {
  name: string;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  location?: string;
  meta?: { label: string; value: string }[];
  highlights?: string[];
  technologies?: string[];
  projects?: ExperienceProject[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  items: { name: string; note?: string }[];
}

export interface AssessedSkill {
  name: string;
  type: "Primary" | "Secondary";
  level: number;
  maxLevel: number;
  code: string;
  label: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  modules?: string[];
  technologies: string[];
  featured?: boolean;
  /** Path under /public for a screenshot. Null shows a placeholder visual. */
  image?: string | null;
  link?: string | null;
}

export interface ImpactItem {
  title: string;
  description: string;
  icon:
    | "layers"
    | "server"
    | "check"
    | "file"
    | "git"
    | "book"
    | "sparkles"
    | "rocket";
}

export interface NavItem {
  id: string;
  label: string;
}
