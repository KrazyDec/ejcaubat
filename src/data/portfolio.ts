import type {
  AssessedSkill,
  Certification,
  Education,
  Experience,
  ImpactItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
} from "@/types/portfolio";
import { siteUrl } from "@/lib/site";

export const profile: Profile = {
  name: "Ej Caubat",
  title: "Software Engineer",
  headline: "Software Engineer | Enterprise Application Developer | AI Enthusiast",
  tagline:
    "Building enterprise applications, automations, and AI-powered solutions that create measurable business impact.",
  heroIntro:
    "I build enterprise applications, improve business workflows, and explore AI-powered solutions that help teams work more effectively.",
  location: "Central Luzon, Philippines",
  email: "ej.caubat@yahoo.com",
  linkedin: "https://www.linkedin.com/in/ejcaubat",
  // TODO: Replace with your GitHub profile URL, e.g. "https://github.com/your-username".
  github: null,
  // TODO: Add your resume PDF at public/resume/ej-caubat-resume.pdf.
  resumePath: "/resume/ej-caubat-resume.pdf",
  // TODO: Add a professional photo at public/images/ and set the path here.
  photo: null,
  siteUrl,
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a software professional with hands-on experience across enterprise application development, banking solutions, HR systems, ERP and POS support, API development, database management, testing, DevOps, and technical support.",
    "My career began as a web development intern building e-commerce sites, then grew through client-facing software engineering on ERP and POS systems, full-stack programming on an HRIS and employee self-service platform, and banking technology work on core banking and straight-through processing systems. Today, as a Packaged App Development Analyst, I design backend features and API logic in C# and .NET, support CI/CD deployments through Azure DevOps, and contribute to impact analysis, regression testing, and knowledge transfer.",
    "Beyond delivery work, I'm focused on Generative AI, AI agents, workflow integration, and AI-assisted development with tools like GitHub Copilot, and on building scalable digital products of my own.",
  ],
  focusAreas: [
    "Enterprise application development",
    "Backend and API development",
    "Banking technology",
    "HRIS and employee self-service",
    "ERP and POS support",
    "Database development",
    "Testing and release support",
    "DevOps and CI/CD",
    "AI-assisted development",
    "Knowledge sharing and documentation",
  ],
  journey: [
    { year: "2018", label: "Web Developer Intern" },
    { year: "2019", label: "Software Engineer" },
    { year: "2020", label: "Programmer" },
    { year: "2022", label: "Programmer, Banking" },
    { year: "2024", label: "Packaged App Development Analyst" },
  ],
};

export const experience: Experience[] = [
  {
    company: "Accenture",
    title: "Software Engineer",
    period: "October 2024 – Present",
    location: "Metro Manila, Philippines",
    highlights: [
      "Design and implement backend features and API logic using C# and .NET for enterprise applications.",
      "Perform API testing using Postman.",
      "Support CI/CD deployments across DEV, UAT, and PROD through Azure DevOps.",
      "Handle version-specific request processing and conditional workflow execution.",
      "Refactor code to improve reusability, maintainability, and alignment with coding standards.",
      "Collaborate with QA and cross-functional teams during code reviews, technical walkthroughs, and issue resolution.",
      "Provide technical support for an employee portal through coding solutions and ServiceNow issue handling.",
      "Track development work, testing progress, and operational support using Azure DevOps Boards.",
      "Contribute to impact analysis, regression testing, knowledge transfer, documentation, and AI enablement activities.",
    ],
    technologies: ["C#", ".NET", "Azure DevOps", "Postman", "SQL Server", "Visual Studio", "ServiceNow"],
  },
  {
    company: "Vertere Global Solutions, Inc.",
    title: "Programmer",
    period: "September 2022 – September 2024",
    location: "Makati, Metro Manila, Philippines",
    meta: [{ label: "Client Assignment", value: "China Bank Corporation" }],
    projects: [
      {
        name: "FCBS — Finacle Core Banking Solution",
        highlights: [
          "Refined tellering transactions used in nationwide banking operations.",
          "Managed stored procedures.",
          "Developed and implemented software improvements for existing banking systems.",
        ],
        technologies: ["Python", "JavaScript", "Oracle SQL", "PuTTY", "WinSCP", "Jira"],
      },
      {
        name: "STP — Straight Through Processing",
        highlights: [
          "Supported corporate account processes, particularly payroll accounts.",
          "Worked on applications using Microsoft ASP.NET.",
          "Managed database-related work using Microsoft SQL Server and SSMS.",
        ],
        technologies: ["ASP.NET", "Microsoft SQL Server", "SSMS", "Visual Studio", "Tortoise", "Jira"],
      },
    ],
  },
  {
    company: "FurtherEdge",
    title: "Programmer",
    period: "January 2020 – August 2022",
    location: "Pasig, Metro Manila, Philippines",
    meta: [{ label: "Project", value: "Upgraded HRIS and Employee Self-Service System" }],
    highlights: [
      "Helped develop a new version of the company's flagship HRIS and ESS platform.",
      "Provided dedicated application support to clients.",
      "Resolved reported system issues.",
      "Implemented client-specific customization requests.",
      "Managed stored procedures.",
      "Developed frontend functionality using AngularJS and TypeScript.",
      "Developed backend functionality using C# and MVC.",
      "Performed API testing with Postman.",
    ],
    technologies: [
      "C#", "MVC", "AngularJS", "TypeScript", "HTML", "CSS",
      "Microsoft SQL Server", "SSMS", "Postman", "Azure", "VS Code",
    ],
  },
  {
    company: "Hilsoft Inc.",
    title: "Software Engineer",
    period: "May 2019 – December 2019",
    location: "Mandaluyong, Metro Manila, Philippines",
    meta: [{ label: "Functional Role", value: "Client Support" }],
    highlights: [
      "Provided customer support for Hilsoft software products.",
      "Supported clients using ERP and POS systems.",
      "Conducted on-site consultancy visits to address client requirements and technical challenges.",
      "Managed stored procedures.",
      "Supported a Java-based ERP system and worked with EAR files using Eclipse.",
      "Supported C# desktop POS applications.",
      "Used Postman when working with APIs.",
    ],
    technologies: ["Java", "Java Web", "C#", "SQL", "Eclipse", "Postman", "ERP systems", "POS systems"],
  },
  {
    company: "K. Grace Consulting Group Inc.",
    title: "Web Developer Intern",
    period: "December 2018 – March 2019",
    location: "Makati, Metro Manila, Philippines",
    meta: [{ label: "Duration", value: "500 hours" }],
    highlights: [
      "Learned software development fundamentals in a professional setting.",
      "Built e-commerce websites using Magento and Wix.",
      "Gained introductory experience with APIs and the MVC pattern.",
      "Improved understanding of clean coding and backend development practices.",
      "Developed a stronger foundation for continuous learning in software engineering.",
    ],
    technologies: ["Magento", "Wix", "APIs", "MVC concepts", "Web development"],
  },
];

export const education: Education[] = [
  {
    school: "Polytechnic University of the Philippines",
    degree: "Bachelor's Degree in Information Technology",
    period: "June 2015 – April 2019",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["C#", "Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"].map((name) => ({ name })),
  },
  {
    category: "Frameworks & App Development",
    items: [
      { name: ".NET" },
      { name: "ASP.NET" },
      { name: "MVC" },
      { name: "AngularJS" },
      { name: "Next.js", note: "Personal projects" },
      { name: "React", note: "Continuing learning" },
    ],
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server", "SQL Server Management Studio", "Oracle SQL", "Stored procedures"].map(
      (name) => ({ name }),
    ),
  },
  {
    category: "Development & Delivery Tools",
    items: [
      "Azure DevOps", "Azure DevOps Boards", "Git", "GitHub Copilot", "Visual Studio", "VS Code",
      "Postman", "Jira", "ServiceNow", "PuTTY", "WinSCP", "Eclipse",
    ].map((name) => ({ name })),
  },
  {
    category: "Engineering Practices",
    items: [
      "Backend development", "API development and testing", "CI/CD support", "Impact analysis",
      "Regression testing", "Code review", "Technical documentation",
      "Production and application support", "Workflow optimization", "Knowledge transfer",
    ].map((name) => ({ name })),
  },
  {
    category: "AI & Automation",
    items: [
      "Artificial Intelligence", "Generative AI", "AI agents and workflow integration",
      "AI-assisted development", "Prompt engineering", "Process automation", "VBA automation",
    ].map((name) => ({ name })),
  },
];

// Proficiency levels from Accenture's internal competency assessment.
export const assessedSkills: AssessedSkill[] = [
  { name: "ASP.NET MVC", type: "Primary", level: 3, maxLevel: 5, code: "P3", label: "Advanced" },
  { name: "Generative AI", type: "Secondary", level: 2, maxLevel: 5, code: "P2", label: "Intermediate" },
];

// Add issuer, date, credentialId, or url to any entry as details become available.
export const certifications: Certification[] = [
  { name: "GitHub Foundations" },
  { name: "Responsible Use of AI" },
  { name: "CCSP 2019: Application Development & Security" },
  { name: "Agile Project Planning" },
  { name: "CCSP 2022: Cloud Security Concepts & Design Principles" },
];

export const projects: Project[] = [
  {
    title: "ReferralHub PH",
    type: "Personal Product Initiative",
    description:
      "A referral-first career platform designed to help job seekers discover referral opportunities, improve their resumes, track applications, and prepare for interviews.",
    modules: [
      "Referral opportunity marketplace",
      "Resume Center",
      "Job Tracker",
      "Interview preparation",
      "User profiles",
      "Application management",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "HTML", "CSS", "JavaScript"],
    featured: true,
    // Screenshot lives at public/images/rh_ss.png.
    image: "/images/rh_ss.png",
    link: null,
  },
  {
    title: "Enterprise Application Development",
    type: "Professional Experience",
    description:
      "Developing backend features and API logic, handling version-specific requests and conditional workflows, refactoring for maintainability, and supporting testing and deployment coordination for enterprise applications.",
    technologies: ["C#", ".NET", "Azure DevOps", "Postman", "SQL Server"],
  },
  {
    title: "Banking Technology Projects",
    type: "Client Assignment — China Bank Corporation",
    description:
      "Contributed to tellering workflows on the Finacle Core Banking Solution and to Straight Through Processing for corporate and payroll accounts, including software improvements and stored procedure management.",
    technologies: ["Python", "JavaScript", "Oracle SQL", "ASP.NET", "SQL Server"],
  },
  {
    title: "HRIS & Employee Self-Service Platform",
    type: "Professional Experience",
    description:
      "Helped develop and support a new version of a flagship HRIS and ESS platform, building frontend and backend features, implementing client customizations, and resolving reported issues.",
    technologies: ["C#", "MVC", "AngularJS", "TypeScript", "SQL Server", "Postman"],
  },
  {
    title: "Knowledge Transfer & Technical Documentation",
    type: "Team Contribution",
    description:
      "Technical walkthroughs, automation knowledge-transfer sessions, regression documentation, impact analysis, testing artifacts, and reusable operational notes that help teams onboard and ship with confidence.",
    technologies: ["Documentation", "Impact analysis", "Regression testing"],
  },
  {
    title: "AI Enablement & GitHub Copilot",
    type: "Ongoing Initiative",
    description:
      "Ongoing adoption of GitHub Copilot, Generative AI, prompt engineering, and AI-assisted development to improve development productivity and accelerate technical learning.",
    technologies: ["GitHub Copilot", "Generative AI", "Prompt engineering"],
  },
];

export const impact: ImpactItem[] = [
  {
    title: "Enterprise application enhancements",
    description: "Delivering features and refinements that keep enterprise applications reliable and maintainable.",
    icon: "layers",
  },
  {
    title: "Backend & API development",
    description: "Building API logic and backend workflows in C# and .NET, validated through Postman testing.",
    icon: "server",
  },
  {
    title: "Regression & release validation",
    description: "Preparing regression test assets and supporting release validation alongside QA teams.",
    icon: "check",
  },
  {
    title: "Impact analysis documentation",
    description: "Documenting change impact so teams can plan, test, and release with clarity.",
    icon: "file",
  },
  {
    title: "CI/CD & Azure DevOps support",
    description: "Supporting deployments across DEV, UAT, and PROD and tracking work through Azure DevOps Boards.",
    icon: "git",
  },
  {
    title: "Knowledge transfer",
    description: "Running walkthroughs and writing technical documentation that teams can reuse.",
    icon: "book",
  },
  {
    title: "AI enablement",
    description: "Promoting GitHub Copilot and AI-assisted development practices within the team.",
    icon: "sparkles",
  },
  {
    title: "Personal product development",
    description: "Designing and building ReferralHub PH, a referral-first career platform.",
    icon: "rocket",
  },
];
