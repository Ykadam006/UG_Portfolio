import type { LucideIcon } from "lucide-react";
import { LineChart, Palette, Sparkles } from "lucide-react";

export const site = {
  name: "Unnati Agrawal",
  title: "Marketing & Strategy",
  description:
    "Marketing and engagement professional at Illinois Tech—connecting campaigns, creative, and data-backed storytelling.",
  location: "Chicago, IL",
  email: "unnatiagrawal429@gmail.com",
  phone: "+1 (312) 371-2508",
  linkedInUrl: "https://www.linkedin.com/",
  resumePath: "/resume.pdf",
  ogImage: "/og-image.svg",
};

export const hero = {
  headline: "Marketing & Strategy, Backed by Data.",
  subtext:
    "Student Assistant — Marketing & Engagement at Illinois Institute of Technology (Stuart School of Business). Open to marketing, communications, and strategy roles where clear storytelling and analytics work together.",
  resumeLabel: "Download Resume",
  resumeHref: "/resume.pdf",
  projectsLabel: "View Projects",
  projectsHref: "#projects",
};

export const skillTickerItems = [
  "Power BI",
  "Excel",
  "Canva",
  "SQL",
  "Figma",
  "Photoshop",
  "InDesign",
  "Google Workspace",
  "Illustrator",
] as const;

export const about = {
  bio:
    "I organize and grow engagement for university programs—coordinating event communications, building promotional content, and supporting onboarding with clear, on-brand messaging. I’m comfortable in Google Workspace, design tools, and analysis workflows that turn activity into insight.",
  cards: [
    {
      icon: LineChart as LucideIcon,
      title: "Data & Analytics",
      description:
        "Power BI dashboards, Excel forecasting, DuPont and liquidity analysis, stakeholder-ready visual summaries.",
    },
    {
      icon: Palette as LucideIcon,
      title: "Design & Storytelling",
      description:
        "Canva and Adobe Creative Suite for campaigns that stay consistent with the brand and land with students.",
    },
    {
      icon: Sparkles as LucideIcon,
      title: "Strategy & Leadership",
      description:
        "PME Club President and Stuart Professional Toastmasters VP — strategy, PR, and PMI Chicagoland collaboration.",
    },
  ] as const,
};

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  monogram: string;
  bullets: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "iit-ssb",
    role: "Student Assistant — Marketing & Engagement",
    company: "Illinois Institute of Technology — Stuart School of Business",
    location: "Chicago, IL",
    dates: "Sep 2025 — Present",
    monogram: "IT",
    bullets: [
      "Publish official Stuart events and coordinate engagement communications on Campus Groups with targeted newsletters and Google Workspace workflows.",
      "Create marketing content for Stuart events using Canva, Photoshop, and InDesign—supporting recruitment and business development presentations.",
      "Manage student activity pages; use data-informed posting to improve participation, awareness, and stakeholder engagement.",
      "Support graduate pre-term and orientation: onboarding communications in Google Slides, aligned resources, and event logistics for smoother attendance.",
    ],
  },
];

export type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  detail: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    id: "kc-analysis",
    tag: "Financial Analysis",
    title: "Kimberly-Clark — GAAP Statements & Forecasting",
    description:
      "Deep dive on profitability, liquidity, and DuPont ROE with multi-year forecasts presented in a polished Slides narrative.",
    detail:
      "Evaluated Kimberly-Clark using GAAP financials (e.g., net margin near 9.6%, DuPont ROE near 26.9%) and built 3-year income-statement and free-cash-flow forecasts in Excel. Insights were distilled into a custom Google Slides deck for clarity and stakeholder engagement.",
    tools: ["Excel", "Google Slides", "GAAP", "Forecasting"],
  },
  {
    id: "strategic-sim",
    tag: "Strategy Simulation",
    title: "Strategic Management Simulation — Team Outcomes",
    description:
      "Cross-functional decisions on product, pricing, and operations paired with Excel models and Power BI dashboards.",
    detail:
      "Collaborated on a four-person team applying financial analysis to strategic decisions, achieving roughly 18% ROI and a ~12% increase in shareholder value in the simulation. Built advanced Excel forecasting, Power BI dashboards, and Canva visuals for market share and scenario planning.",
    tools: ["Excel", "Power BI", "Canva", "Team strategy"],
  },
  {
    id: "stuart-comms",
    tag: "Marketing & Comms",
    title: "Stuart School — Events & Student Engagement",
    description:
      "Campus-facing campaigns, newsletter-driven awareness, and creative assets for Stuart programming.",
    detail:
      "Supports Stuart through Campus Groups publishing, targeted email, and coordinated announcements. Produces Canva/Adobe assets for events and presentations that recruit participants and reinforce brand visibility.",
    tools: ["Canva", "Photoshop", "InDesign", "Google Workspace"],
  },
  {
    id: "orientation",
    tag: "Program Operations",
    title: "Orientation & Onboarding Communications",
    description:
      "Slides-based resource alignment and logistics support for pre-term and orientation experiences.",
    detail:
      "Coordinates onboarding communications and Google Slides resources so students have a single clarified path; aligns timing with program milestones and event logistics to lift attendance and reduce friction.",
    tools: ["Google Slides", "Event logistics", "Stakeholder comms"],
  },
];

export const achievements = {
  cards: [
    {
      title: "Vice President of Public Relations",
      subtitle: "Stuart Professional Toastmasters · Toastmasters International",
      body:
        "Leads campus-wide communications and engagement for the chapter—strengthening brand presence, meeting participation, and structured speaking practice.",
    },
    {
      title: "President",
      subtitle: "Project Management Excellence Club · PMI Chicagoland",
      body:
        "Directs strategy, budgeting, and execution for 10+ initiatives with PMI Chicagoland and campus partners; improves reporting with structured Excel-based tracking.",
    },
  ] as const,
  highlight: {
    headline: "18% ROI",
    subhead: "Strategic simulation outcome",
    body: "~12% shareholder value lift with disciplined forecasting, pricing, and ops decisions—supported by Excel models, Power BI views, and clear presentation design.",
  },
};

export const contact = {
  headline: "Open to opportunities — let’s connect.",
  subtext:
    "Targeting marketing, communications, and engagement roles. Based in Chicago, IL; happy to collaborate remotely where needed.",
};
