import type { LucideIcon } from "lucide-react";

export type AboutCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  tools: string[];
  impact: string;
  image: string;
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  dateRange: string;
  bullets: string[];
  tools: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type LeadershipHighlight = {
  title: string;
  org: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
  placeholder?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
