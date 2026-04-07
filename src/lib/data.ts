import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Cloud,
  Database,
  Image as ImageIcon,
  Layers2,
  LineChart,
  Palette,
  PenTool,
  Sparkles,
  Table2,
} from "lucide-react";

export type SkillTickerItem = {
  label: string;
  icon: LucideIcon;
};

export const site = {
  name: "Unnati Agrawal",
  title: "Marketing & Strategy",
  description:
    "Marketing and engagement professional at Illinois Tech—connecting campaigns, creative, and data-backed storytelling.",
  location: "Chicago, IL",
  email: "unnatiagrawal429@gmail.com",
  phone: "+1 (312) 371-2508",
  linkedInUrl: "https://www.linkedin.com/in/unnati-agrawal0229/",
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

export const skillTickerItems: SkillTickerItem[] = [
  { label: "Power BI", icon: BarChart3 },
  { label: "Excel", icon: Table2 },
  { label: "Canva", icon: Sparkles },
  { label: "SQL", icon: Database },
  { label: "Figma", icon: Layers2 },
  { label: "Photoshop", icon: ImageIcon },
  { label: "InDesign", icon: BookOpen },
  { label: "Google Workspace", icon: Cloud },
  { label: "Illustrator", icon: PenTool },
];

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

/** Public URL under `/projects/` — filename must match `public/projects/`. */
export function projectAssetHref(filename: string) {
  return `/projects/${encodeURIComponent(filename)}`;
}

export type ProjectAsset = {
  label: string;
  filename: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  detail: string;
  tools: string[];
  caseStudy: CaseStudySection[];
  assets: ProjectAsset[];
};

export const projects: Project[] = [
  {
    id: "seiko-brand-strategy",
    tag: "Brand Strategy",
    title: "SEIKO Luxury Watches — Brand Strategy",
    description:
      "Positioning, narrative, and go-to-market thinking for a luxury watch brand rooted in craft and credibility.",
    detail:
      "A full brand-strategy narrative for SEIKO in the luxury watch space—framing audience segments, competitive context, and the story the brand should own in-market.",
    tools: ["PowerPoint", "Brand positioning", "Market narrative"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Luxury watches sit at the intersection of heritage, precision, and lifestyle signaling. The brief was to clarify how SEIKO can strengthen its prestige perception while staying true to engineering credibility and global recognition.",
      },
      {
        heading: "Approach",
        body:
          "Mapped the competitive set and buyer motivations, then defined a concise value proposition, messaging pillars, and channel implications. The deck translates strategy into slides leadership can actually present—clear storyline, visual hierarchy, and proof points.",
      },
      {
        heading: "Outcomes",
        body:
          "Delivered a cohesive brand-strategy presentation that connects audience insight to positioning choices and recommended narrative emphasis for high-consideration purchases.",
      },
      {
        heading: "Learnings",
        body:
          "Practice distilling a large brand into a tight story: one hero message, a few supporting pillars, and explicit links from insight to execution.",
      },
    ],
    assets: [
      {
        label: "Brand strategy deck (PPTX)",
        filename: "Luxury Watches SEIKO Brand Strategy.pptx",
      },
    ],
  },
  {
    id: "bike-4-us-simulation",
    tag: "Strategy Simulation",
    title: "Bike-4-Us — Strategic Management Simulation",
    description:
      "Simulation-based decisions spanning operations, finance, and competitive positioning with team reporting.",
    detail:
      "Strategic management simulation work packaged as a formal presentation—translating rounds of decisions into narrative, metrics, and takeaways for a course audience.",
    tools: ["PowerPoint", "Strategic planning", "Simulation analysis"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Bike-4-Us is a capstone-style simulation where teams compete across periods, balancing capacity, demand, and financial performance under uncertainty.",
      },
      {
        heading: "Approach",
        body:
          "Structured decisions around trade-offs (investment vs. margin, growth vs. stability) and documented rationale in-slide so reviewers can follow both the numbers and the judgment calls.",
      },
      {
        heading: "Outcomes",
        body:
          "A presentation-ready record of the simulation journey: key moves, results versus plan, and what would change with another pass.",
      },
      {
        heading: "Learnings",
        body:
          "Simulations reward disciplined communication—when stakes are shared, alignment on assumptions matters as much as the spreadsheet.",
      },
    ],
    assets: [
      {
        label: "Simulation presentation (PPTX)",
        filename: "Bike-4-Us-Strategic-Management-Simulation.pptx",
      },
    ],
  },
  {
    id: "foxcore-retail",
    tag: "Retail Strategy",
    title: "Foxcore Retail — Analysis & Strategy",
    description:
      "Retail case analysis with a written report and executive-style deck for stakeholders.",
    detail:
      "Paired quantitative and narrative analysis for a retail scenario—supporting recommendations with a formal report plus a slide narrative for discussion.",
    tools: ["PowerPoint", "Written analysis", "Retail strategy"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Retail strategy work for Foxcore—framing performance, customer dynamics, and operational levers relevant to growth or turnaround conversations.",
      },
      {
        heading: "Approach",
        body:
          "Built the long-form analysis in the PDF and summarized the storyline for presentation: problem, evidence, options, and recommendation with clear logic.",
      },
      {
        heading: "Outcomes",
        body:
          "Two deliverables that serve different audiences—the deep dive (PDF) and the meeting-ready walkthrough (PPTX).",
      },
      {
        heading: "Learnings",
        body:
          "One insight, two formats: analysts want depth; decision-makers often need the same rigor in fewer, sharper slides.",
      },
    ],
    assets: [
      {
        label: "Analysis report (PDF)",
        filename: "Group 1 Foxcore Retail Analysis Report.pdf",
      },
      { label: "Strategy deck (PPTX)", filename: "Foxcore Retail.pptx" },
    ],
  },
  {
    id: "foxcare-retail",
    tag: "Retail & Branding",
    title: "Foxcare Retail — Group Presentation",
    description:
      "Team retail project distilled into a structured slide narrative for class delivery.",
    detail:
      "Group presentation covering the Foxcare retail storyline—positioning, recommendations, and supporting rationale in slide form.",
    tools: ["PowerPoint", "Team collaboration", "Retail"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Coursework that required aligning a group on a single retail narrative and presenting with consistent messaging and visuals.",
      },
      {
        heading: "Approach",
        body:
          "Consolidated research and decisions into one deck with a clear flow: situation, analysis, recommendation, and next steps.",
      },
      {
        heading: "Outcomes",
        body:
          "Delivered a cohesive group PPTX suitable for live presentation and peer review.",
      },
      {
        heading: "Learnings",
        body:
          "Group decks succeed when roles, slide ownership, and the master storyline are agreed early—then design stays consistent.",
      },
    ],
    assets: [
      {
        label: "Group presentation (PPTX)",
        filename: "Group1 Foxcare Retail Ppt.pptx",
      },
    ],
  },
  {
    id: "uber-mba511",
    tag: "MBA 511",
    title: "Uber — Strategy Presentation",
    description:
      "Platform strategy, competition, and growth levers framed for an MBA strategy course.",
    detail:
      "Uber-focused strategy presentation connecting market dynamics, moats, and managerial choices in a platform business.",
    tools: ["PowerPoint", "Platform strategy", "Case analysis"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Uber operates as a two-sided marketplace with strong network effects but persistent regulatory, labor, and competitive pressure—classic material for strategy coursework.",
      },
      {
        heading: "Approach",
        body:
          "Structured the case around external forces, internal capabilities, and strategic options, using slides to make trade-offs explicit.",
      },
      {
        heading: "Outcomes",
        body:
          "A presentation that supports classroom discussion with a clear through-line from industry structure to recommended emphasis.",
      },
      {
        heading: "Learnings",
        body:
          "Platform businesses need narratives that balance growth, unit economics, and trust—stakeholders weigh all three simultaneously.",
      },
    ],
    assets: [
      {
        label: "Uber presentation (PPTX)",
        filename: "MBA 511 Uber Presentation.pptx",
      },
    ],
  },
  {
    id: "honeylu-mba511",
    tag: "MBA 511",
    title: "HoneyLu's — Case Presentation",
    description:
      "Course case distilled into recommendations, risks, and implementation notes.",
    detail:
      "HoneyLu's MBA 511 presentation—translating case facts into a defendable plan and stakeholder-ready storyline.",
    tools: ["PowerPoint", "Case method", "Recommendations"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Case-based assignment requiring diagnosis of the business situation and a concrete set of recommendations with supporting logic.",
      },
      {
        heading: "Approach",
        body:
          "Separated facts from assumptions, prioritized issues, and built the deck so each recommendation ties back to evidence in the case.",
      },
      {
        heading: "Outcomes",
        body:
          "Delivered a complete PPTX walkthrough suitable for discussion, Q&A, and instructor feedback.",
      },
      {
        heading: "Learnings",
        body:
          "Strong case presentations spend time on the ‘why now’ and ‘what could go wrong’—credibility comes from acknowledging risks.",
      },
    ],
    assets: [
      { label: "HoneyLu's deck (PPTX)", filename: "MBA 511 HoneyLu's.pptx" },
    ],
  },
  {
    id: "mba513-team5",
    tag: "MBA 513",
    title: "MBA 513 — Team 5 Integrated Project",
    description:
      "Team-integrated project synthesizing course themes into one capstone-style presentation.",
    detail:
      "Team 5 deliverable for MBA 513—integrated analysis and recommendations presented as a single authoritative deck.",
    tools: ["PowerPoint", "Integrated analysis", "Team delivery"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "MBA 513 often culminates in a team project that must integrate multiple modules—strategy, execution, and communication in one artifact.",
      },
      {
        heading: "Approach",
        body:
          "Aligned the team on a shared outline, divided research and slide builds, then unified voice and visuals before submission.",
      },
      {
        heading: "Outcomes",
        body:
          "Final team PPTX representing consolidated thinking and presentation-ready polish.",
      },
      {
        heading: "Learnings",
        body:
          "Integration is a design problem: the last mile is making disparate sections read as one argument, not separate appendices.",
      },
    ],
    assets: [
      {
        label: "Team 5 presentation (PPTX)",
        filename: "MBA 513 Team 5 ppt (1).pptx",
      },
    ],
  },
  {
    id: "mba501-case",
    tag: "MBA 501",
    title: "MBA 501 — Case Study Write-Up",
    description:
      "Structured written case analysis: situation, frameworks, and evidence-backed conclusions.",
    detail:
      "Long-form case study document demonstrating analytical structure, clarity, and academic rigor in written form.",
    tools: ["Word", "Case analysis", "Business writing"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "MBA 501 emphasizes foundational case analysis—clear problem definition, relevant frameworks, and disciplined argumentation.",
      },
      {
        heading: "Approach",
        body:
          "Organized the write-up to move from facts to diagnosis to options, with explicit assumptions and a reasoned recommendation.",
      },
      {
        heading: "Outcomes",
        body:
          "A complete DOCX submission suitable for grading feedback and as a writing sample for analytical roles.",
      },
      {
        heading: "Learnings",
        body:
          "Written cases reward tight logic: every paragraph should earn its place by advancing the decision the reader needs to make.",
      },
    ],
    assets: [
      {
        label: "Case study document (DOCX)",
        filename: "MBA501 01 Case stusy (3).docx",
      },
    ],
  },
  {
    id: "final-capstone",
    tag: "Capstone",
    title: "Final Project — Summary Document",
    description:
      "Capstone deliverable capturing scope, analysis, and conclusions in a single PDF.",
    detail:
      "Final project PDF—consolidated outcomes from an extended assignment or capstone module.",
    tools: ["PDF", "Synthesis", "Academic delivery"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Capstone work typically requires bundling weeks of analysis into one authoritative document reviewers can evaluate end-to-end.",
      },
      {
        heading: "Approach",
        body:
          "Structured the PDF for scanability: executive framing up front, supporting sections behind it, and consistent formatting throughout.",
      },
      {
        heading: "Outcomes",
        body:
          "A standalone final submission that documents the full arc of the project.",
      },
      {
        heading: "Learnings",
        body:
          "Finals are communication tests: the best analysis still needs signposting so busy readers find the answer quickly.",
      },
    ],
    assets: [{ label: "Final project (PDF)", filename: "Final Project.pdf" }],
  },
  {
    id: "project-qna",
    tag: "Coursework",
    title: "Project — Questions & Responses",
    description:
      "Written responses to project prompts—clarity, structure, and direct answers.",
    detail:
      "Question-and-answer style coursework captured in a Word document for submission and feedback.",
    tools: ["Word", "Structured responses", "Academic writing"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Some modules assess understanding through explicit Q&A prompts rather than a single essay—precision and completeness matter.",
      },
      {
        heading: "Approach",
        body:
          "Matched each prompt with a direct answer, supporting detail where required, and clean formatting for instructor review.",
      },
      {
        heading: "Outcomes",
        body:
          "A DOCX artifact that maps cleanly to rubric expectations and demonstrates command of the material.",
      },
      {
        heading: "Learnings",
        body:
          "Prompt-style assignments reward discipline: answer the question first, then add depth—never the reverse.",
      },
    ],
    assets: [
      {
        label: "Q&A document (DOCX)",
        filename: "Project Question Answer.docx",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.id === slug);
}

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
