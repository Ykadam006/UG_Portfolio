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

export type DesignItem = {
  title: string;
  category: string;
  src: string;
};

/** URL for files in `public/Design/` (encode spaces & special characters). */
export function publicDesignHref(filename: string): string {
  return `/Design/${encodeURIComponent(filename)}`;
}

/**
 * Creative files in `public/Design/` for the Stuart School gallery.
 * Keep this list in sync with the folder — only files that exist are listed.
 */
const stuartDesignFiles: { file: string; title: string; category: string }[] = [
  {
    file: "UNLOCK YOUR VOICE.png",
    title: "UNLOCK YOUR VOICE — campaign key visual",
    category: "Campaign",
  },
  {
    file: "ARE YOU READY TO SPEAK WITH CONFIDENCE (2).png",
    title: "Are you ready to speak with confidence — chapter promo",
    category: "Campaign",
  },
  {
    file:
      "February 13, 2026 Meeting Theme Celebrating Connection President Lyzzette Torres Rodriguez VP Education Muhit Newaz VP Membership Nithin Shankar VP Public Relations Unnati Agrawal Secretary Shaill (4).png",
    title: "Meeting theme — celebrating connection (officer slate)",
    category: "Chapter & meeting",
  },
  {
    file: "IMG_3278.png",
    title: "Stuart marketing visual — 01",
    category: "Marketing visual",
  },
  {
    file: "IMG_4546.png",
    title: "Stuart marketing visual — 02",
    category: "Marketing visual",
  },
  {
    file: "IMG_6260.png",
    title: "Stuart marketing visual — 03",
    category: "Marketing visual",
  },
  {
    file: "IMG_8938.png",
    title: "Stuart marketing visual — 04",
    category: "Marketing visual",
  },
  {
    file: "Purple and White Simple Page Border Double-Sided Poster A3 Landscape (1).png",
    title: "A3 landscape poster — bordered layout system",
    category: "Print & layout",
  },
  {
    file: "Your paragraph text (1).png",
    title: "Layout & typographic treatment",
    category: "Print & layout",
  },
  {
    file: "x.png",
    title: "Design variant",
    category: "Print & layout",
  },
  {
    file: "1.pdf",
    title: "Program flyer — PDF",
    category: "PDF",
  },
  {
    file: "FILE_3857.pdf",
    title: "Deliverable — FILE_3857",
    category: "PDF",
  },
  {
    file: "FILE_8093.pdf",
    title: "Deliverable — FILE_8093",
    category: "PDF",
  },
  {
    file: "September 2024.pdf",
    title: "September 2024 — program PDF",
    category: "PDF",
  },
];

export const stuartDesignGallery: DesignItem[] = stuartDesignFiles.map(
  ({ file, title, category }) => ({
    title,
    category,
    src: publicDesignHref(file),
  }),
);

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  monogram: string;
  bullets: string[];
  designs?: DesignItem[];
  /** One-line “what I work on” for the overview card. */
  workFocus?: string;
  /** “Where I work” context (team, campus, city). */
  workplaceDetail?: string;
  /** Short line before the in-depth bullets. */
  depthIntro?: string;
  /** Link to Campus Groups or equivalent student portal. */
  campusGroupsUrl?: string;
  campusGroupsLabel?: string;
};

export const experiences: ExperienceEntry[] = [
  {
    id: "iit-ssb",
    role: "Student Assistant — Marketing & Engagement",
    company: "Illinois Institute of Technology — Stuart School of Business",
    location: "Chicago, IL",
    dates: "Sep 2025 — Present",
    monogram: "IT",
    workFocus:
      "Student marketing and engagement—event promotion, newsletters, Campus Groups, and on-brand creative that drives attendance and awareness.",
    workplaceDetail:
      "Stuart School of Business at Illinois Tech in Chicago. I work with program leads and student organizations so official events, recruitment moments, and chapter communications stay coordinated and visible where students actually look.",
    depthIntro: "What I do day to day, in depth:",
    campusGroupsUrl: "https://iit.campusgroups.com/",
    campusGroupsLabel: "IIT Campus Groups",
    bullets: [
      "Publish official Stuart events and coordinate engagement communications on Campus Groups with targeted newsletters and Google Workspace workflows.",
      "Create marketing content for Stuart events using Canva, Photoshop, and InDesign—supporting recruitment and business development presentations.",
      "Manage student activity pages; use data-informed posting to improve participation, awareness, and stakeholder engagement.",
      "Support graduate pre-term and orientation: onboarding communications in Google Slides, aligned resources, and event logistics for smoother attendance.",
    ],
    designs: stuartDesignGallery,
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
  /** Optional hero image for the home-page project grid (`public/...` path). */
  listCoverImage?: string;
  /** Full-bleed hero background on the project case-study page (`public/...` path). */
  caseHeroImage?: string;
};

export const projects: Project[] = [
  {
    id: "seiko-brand-strategy",
    listCoverImage: "/images/project-seiko-brand-strategy.png",
    caseHeroImage: "/images/project-seiko-case-hero.png",
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
    listCoverImage: "/images/project-bike-4-us.png",
    caseHeroImage: "/images/project-bike-4-us-case-hero.png",
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
    listCoverImage: "/images/project-foxcore-retail.png",
    caseHeroImage: "/images/project-foxcore-case-hero.png",
    tag: "Retail Strategy",
    title: "Foxcore Retail — Analysis & Strategy",
    description:
      "One retail case line: written analysis, executive strategy deck, and a companion Foxcare group presentation—aligned narrative across individual and team work.",
    detail:
      "Foxcore work pairs a formal analysis report with a stakeholder-ready slide storyline. The Foxcare group deck extends the same retail theme for class delivery: one coherent thread from evidence to recommendations, whether in PDF, solo PPTX, or a team-built presentation.",
    tools: [
      "PowerPoint",
      "Written analysis",
      "Retail strategy",
      "Team collaboration",
    ],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Retail strategy for the Foxcore case—performance, customer dynamics, and operational levers—was developed alongside a related Foxcare group project. Both tracks share one retail storyline so analysis, executive messaging, and team presentation stay consistent.",
      },
      {
        heading: "Analysis & strategy deck (Foxcore)",
        body:
          "The PDF captures the full diagnosis: problem framing, evidence, options, and recommendations. The Foxcore PPTX distills that logic for meetings—clear storyline, visual hierarchy, and proof points decision-makers can scan quickly.",
      },
      {
        heading: "Group presentation (Foxcare)",
        body:
          "The Foxcare deck consolidates group research into a single class-ready narrative: situation, analysis, recommendation, and next steps—with agreed slide ownership and visuals so the team presents as one voice.",
      },
      {
        heading: "Outcomes & learnings",
        body:
          "Three artifacts serve three moments: deep read (PDF), executive walkthrough (Foxcore slides), and live group delivery (Foxcare). The takeaway is that one retail thesis can scale across formats—if the master argument is fixed early, analysts, leads, and presenters all stay aligned.",
      },
    ],
    assets: [
      {
        label: "Analysis report (PDF)",
        filename: "Group 1 Foxcore Retail Analysis Report.pdf",
      },
      {
        label: "Strategy deck — Foxcore (PPTX)",
        filename: "Foxcore Retail.pptx",
      },
      {
        label: "Group presentation — Foxcare (PPTX)",
        filename: "Group1 Foxcare Retail Ppt.pptx",
      },
    ],
  },
  {
    id: "uber-mba511",
    listCoverImage: "/images/project-uber-mba511.png",
    caseHeroImage: "/images/project-uber-case-hero.png",
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
    listCoverImage: "/images/project-honeylu-mba511.png",
    caseHeroImage: "/images/project-honeylu-case-hero.png",
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
    id: "abc-plastic-manufacturer",
    listCoverImage: "/images/project-mba513-team5.png",
    caseHeroImage: "/images/project-mba513-team5-case-hero.png",
    tag: "MBA 513",
    title: "ABC Plastic Manufacturer — Case Presentation",
    description:
      "Integrated MBA 513 team case on a plastics manufacturing setting—slide narrative plus structured written Q&A supporting the same storyline.",
    detail:
      "One case arc for ABC Plastic Manufacturer: a Team 5 presentation that synthesizes strategy, execution, and recommendations, paired with a question-and-answer document that answers prompts with direct, rubric-aligned responses. Together they show both meeting-ready storytelling and written rigor.",
    tools: [
      "PowerPoint",
      "Word",
      "Team collaboration",
      "Integrated analysis",
      "Manufacturing & strategy",
    ],
    caseStudy: [
      {
        heading: "Context",
        body:
          "The project centers on ABC Plastic Manufacturer as a manufacturing and strategy case—operations, market pressure, and choices leadership would debate in an MBA integrative course. Team 5 work had to align modules into a single narrative while coursework also required explicit Q&A responses tied to the same material.",
      },
      {
        heading: "Approach",
        body:
          "Built the deck around a shared outline: research and slide ownership split across the team, then one voice and visual system for submission. The Word Q&A matched each prompt with a clear answer first, evidence second, and clean formatting so instructors could score completeness and logic quickly.",
      },
      {
        heading: "Outcomes",
        body:
          "Delivered an authoritative team PPTX for presentation and peer review, plus a DOCX Q&A artifact that maps to rubric expectations—two formats, one consistent case story for ABC Plastic Manufacturer.",
      },
      {
        heading: "Learnings",
        body:
          "Slides and written prompts test different muscles; when they reference the same case, locking the master storyline early keeps the deck and the Q&A from drifting apart. Integration is as much editorial discipline as analysis.",
      },
    ],
    assets: [
      {
        label: "Case presentation — Team 5 (PPTX)",
        filename: "MBA 513 Team 5 ppt (1).pptx",
      },
      {
        label: "Questions & responses (DOCX)",
        filename: "Project Question Answer.docx",
      },
    ],
  },
  {
    id: "mba501-case",
    listCoverImage: "/images/project-kimberly-clark.png",
    caseHeroImage: "/images/project-kimberly-clark-case-hero.png",
    tag: "MBA 501",
    title: "Kimberly-Clark and the Consumer Products Industry",
    description:
      "Written case analysis on Kimberly-Clark within consumer products—industry structure, financial evidence, and a defendable recommendation.",
    detail:
      "MBA 501 case write-up framed around Kimberly-Clark and the consumer packaged goods landscape: clear problem definition, relevant frameworks, and argumentation tied to data and market context. Delivered as a polished Word document for academic review and as a writing sample.",
    tools: ["Word", "Case analysis", "Business writing", "Industry research"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Consumer products is shaped by scale brands, retail power, and steady margin pressure. The brief was to situate Kimberly-Clark in that industry—competitive forces, performance signals, and the strategic question the case poses—before moving to diagnosis.",
      },
      {
        heading: "Approach",
        body:
          "Structured the document from facts to frameworks to options: explicit assumptions, evidence from the case and financials where applicable, and a single line of reasoning toward a recommendation leadership could debate in class.",
      },
      {
        heading: "Outcomes",
        body:
          "A complete DOCX submission aligned to MBA 501 rubric—clear sections, disciplined citations of case material, and takeaways that read as both academic and practitioner-ready.",
      },
      {
        heading: "Learnings",
        body:
          "Large cap consumer names reward analysis that connects brand and shelf reality to the numbers: tight logic in writing mirrors the clarity stakeholders expect in strategy and finance roles.",
      },
    ],
    assets: [
      {
        label: "Kimberly-Clark case write-up (DOCX)",
        filename: "MBA501 01 Case stusy (3).docx",
      },
    ],
  },
  {
    id: "case2-takeaways",
    listCoverImage: "/images/project-case2-profiles.png",
    caseHeroImage: "/images/project-case2-hands.png",
    tag: "Case takeaways",
    title: "Case 2 — Takeaways & synthesis",
    description:
      "Structured takeaways from Case 2—insights, implications, and a presentation-ready deck for class discussion.",
    detail:
      "Course work capturing the core lessons from Case 2: how the situation connects to strategy and stakeholder decisions, what the evidence supports, and how the narrative lands in slides. Delivered as a PowerPoint deck aligned with the case brief and discussion rubric.",
    tools: ["PowerPoint", "Case synthesis", "Strategic takeaways", "Presentation"],
    caseStudy: [
      {
        heading: "Context",
        body:
          "Case 2 required moving from raw case facts to a clear set of takeaways—what matters for the business, what is uncertain, and what instructors expect students to defend in discussion.",
      },
      {
        heading: "Approach",
        body:
          "Organized the deck around a tight storyline: situation recap, key tensions, evidence-backed insights, and explicit implications. Each slide earns its place so the deck supports both presentation and Q&A.",
      },
      {
        heading: "Outcomes",
        body:
          "A complete PPTX that doubles as a takeaway artifact: readable on its own and strong when presented live—visual hierarchy, concise bullets, and a visible line from analysis to conclusions.",
      },
      {
        heading: "Learnings",
        body:
          "Takeaway decks work best when they name trade-offs and risks, not only wins—credibility in case courses comes from showing judgment, not just summary.",
      },
    ],
    assets: [
      {
        label: "Case 2 takeaways deck (PPTX)",
        filename: "Case2_Takeaways.pptx",
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
