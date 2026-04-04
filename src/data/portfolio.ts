import {
  BarChart3,
  Megaphone,
  Palette,
  Users,
  Mic2,
  Sparkles,
  Target,
} from "lucide-react";

import type {
  AboutCard,
  ExperienceItem,
  FaqItem,
  FeaturedProject,
  LeadershipHighlight,
  SkillGroup,
  Testimonial,
} from "@/types";

export const site = {
  name: "Unnati Agrawal",
  title: "Marketing & Engagement Portfolio",
  location: "Chicago, IL",
  email: "unnatiagrawal429@gmail.com",
  phone: "+1 (312) 371-2508",
  linkedInUrl: "https://www.linkedin.com/",
  resumePath: "/resume.pdf",
};

export const hero = {
  badge:
    "Marketing • Content • Engagement • Analytics",
  headline: "Building student-focused marketing that drives engagement",
  subtext:
    "Marketing, communication, presentations, visual content, and analytics—turning complex programs into clear stories that students actually notice.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  trustTools: [
    "Canva",
    "Adobe Creative Suite",
    "Power BI",
    "Excel",
    "Google Workspace",
  ],
  imageSrc: "/images/hero-photo.svg",
  imageAlt: "Unnati Agrawal — marketing & engagement professional",
};

export const aboutCards: AboutCard[] = [
  {
    icon: Megaphone,
    title: "Campaign Communication",
    description:
      "Targeted newsletters, event announcements, and stakeholder updates that keep programs visible and attendance strong.",
  },
  {
    icon: Palette,
    title: "Visual Content Creation",
    description:
      "On-brand flyers, social assets, and slide decks using Canva and Adobe tools to support recruitment and engagement.",
  },
  {
    icon: Users,
    title: "Student Engagement",
    description:
      "Campus Groups coordination, orientation support, and programming that helps students feel informed from day one.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Excel models, Power BI dashboards, and presentation-ready insights that make data easy for teams to act on.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "stuart-marketing",
    title: "Stuart School of Business — Marketing & Engagement",
    summary:
      "Student Assistant Marketing & Engagement for SSB: official events, student communications, and branded promotional work.",
    bullets: [
      "Published Stuart events and coordinated engagement communications on Campus Groups with targeted email newsletters and Google Workspace workflows.",
      "Created marketing content for Stuart events using Canva, Photoshop, and InDesign to support visibility and participant recruitment.",
      "Managed student activity pages and used data-informed posting to improve participation and awareness.",
    ],
    tools: ["Canva", "Photoshop", "InDesign", "Google Workspace", "Email campaigns"],
    impact:
      "Stronger student awareness, clearer event promotion, and more consistent brand presence across campus touchpoints.",
    image: "/images/project-1.svg",
    featured: true,
  },
  {
    slug: "orientation-comms",
    title: "Orientation & Onboarding Communications",
    summary:
      "Graduate pre-term and orientation support: aligning resources in Google Slides and smoothing attendee logistics.",
    bullets: [
      "Coordinated onboarding communications and Slides-based resources so new students could follow a single, organized path.",
      "Aligned announcements with program timelines and event logistics.",
      "Helped improve attendance and reduce confusion during high-traffic orientation periods.",
    ],
    tools: ["Google Slides", "Event coordination", "Stakeholder comms"],
    impact:
      "Smoother onboarding and higher attendance at orientation events through clearer, better-timed communication.",
    image: "/images/project-2.svg",
  },
  {
    slug: "analytics-presentations",
    title: "Analytics & Presentation Projects",
    summary:
      "Course projects spanning financial analysis, forecasting, and executive-ready storytelling with slides and dashboards.",
    bullets: [
      "Kimberly-Clark analysis: profitability, liquidity, DuPont ROE, and 3-year forecasts in Excel with a custom Google Slides narrative.",
      "Strategic simulation: Excel forecasting models and Power BI dashboards with Canva visuals for market trends and scenarios.",
    ],
    tools: ["Excel", "Power BI", "Google Slides", "Canva", "Research"],
    impact:
      "Clearer decision narratives for academic and team stakeholders—numbers plus design that supports the story.",
    image: "/images/project-3.svg",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Student Assistant — Marketing & Engagement",
    organization: "Illinois Institute of Technology — Stuart School of Business",
    location: "Chicago, IL",
    dateRange: "Sep 2025 — Present",
    bullets: [
      "Publish official Stuart events; coordinate engagement communications, newsletters, and Campus Groups updates.",
      "Produce promotional content with Canva, Photoshop, and InDesign; support presentations that recruit participants.",
      "Support graduate pre-term and orientation communications and logistics with Google Slides and aligned resources.",
    ],
    tools: ["Canva", "Adobe", "Google Workspace", "Email", "Campus Groups"],
  },
  {
    role: "President",
    organization: "Project Management Excellence Club (PME)",
    location: "Chicago, IL",
    dateRange: "Mar 2026 — Present",
    bullets: [
      "Lead strategy, budgeting, and execution for 10+ initiatives with PMI Chicagoland and campus partners.",
      "Direct operations and financial planning with Excel-based tracking to improve reporting efficiency.",
    ],
    tools: ["Leadership", "Excel", "Stakeholder management", "Program coordination"],
  },
  {
    role: "Vice President, Public Relations",
    organization: "Stuart Professional Toastmasters",
    location: "Chicago, IL",
    dateRange: "Ongoing",
    bullets: [
      "Lead campus-wide communications and engagement initiatives; strengthen club brand presence and meeting participation.",
      "Develop advanced public speaking and evaluation skills through structured Toastmasters programming.",
    ],
    tools: ["Public speaking", "PR", "Community building"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Design Tools",
    items: ["Canva", "Photoshop", "InDesign", "Illustrator", "Figma"],
  },
  {
    category: "Analytics Tools",
    items: ["Power BI", "Excel", "SQL", "Data visualization", "Forecasting"],
  },
  {
    category: "Communication Tools",
    items: ["Google Workspace", "Google Slides", "Presentations", "Newsletters"],
  },
  {
    category: "Business Skills",
    items: [
      "Strategic planning",
      "Stakeholder engagement",
      "Program coordination",
      "Student support",
    ],
  },
];

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    title: "Club President — Project Management Excellence",
    org: "PMI Chicagoland partnerships • 10+ initiatives",
    description:
      "Sets direction for PME across budgeting, cross-campus collaboration, and delivery—translating strategy into repeatable club operations.",
    icon: Target,
  },
  {
    title: "VP Public Relations — Stuart Professional Toastmasters",
    org: "Campus communications & brand presence",
    description:
      "Owns outward messaging and engagement for the chapter, growing participation through clear promotion and consistent programming.",
    icon: Mic2,
  },
  {
    title: "Student Marketing Voice for Stuart",
    org: "Illinois Institute of Technology",
    description:
      "Represents SSB in official channels—balancing brand standards with timely, student-centered messaging.",
    icon: Sparkles,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder testimonial — swap in a short quote from a mentor or supervisor when ready.",
    name: "Mentor",
    role: "Career / academic mentor",
    image: "/images/testimonial-1.svg",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial — ideal for a professor who has seen your presentations or team leadership.",
    name: "Professor",
    role: "Faculty reference",
    image: "/images/testimonial-1.svg",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial — use for a supervisor who can speak to reliability and campaign execution.",
    name: "Supervisor",
    role: "Work supervisor",
    image: "/images/testimonial-1.svg",
    placeholder: true,
  },
  {
    quote:
      "Placeholder testimonial — teammate perspective on collaboration and communication under deadlines.",
    name: "Teammate",
    role: "Project collaborator",
    image: "/images/testimonial-1.svg",
    placeholder: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What roles are you targeting?",
    answer:
      "Marketing, communications, and engagement roles with student-facing or brand storytelling—especially where visual content, campaigns, and clear reporting come together.",
  },
  {
    question: "Which tools do you use most day to day?",
    answer:
      "Canva and Adobe for creative work; Google Workspace and Slides for decks and coordination; Excel and Power BI when the story needs numbers behind it.",
  },
  {
    question: "What kinds of projects do you enjoy most?",
    answer:
      "End-to-end campaigns for events and programs: messaging, creative assets, and light analytics to see what resonated—and how to improve the next push.",
  },
  {
    question: "Can you share more work samples?",
    answer:
      "Yes. Email or LinkedIn message with the type of role you are hiring for, and I will share relevant slides, flyers, or dashboard excerpts.",
  },
];
