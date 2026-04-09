"use client";

import {
  SiCanva,
  SiFigma,
  SiGooglesheets,
  SiMysql,
  SiNotion,
} from "react-icons/si";


/* ── Inline brand SVGs for tools react-icons doesn't cover ─────────────── */

function PhotoshopIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#31A8FF" />
      <text x="4" y="17" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#fff">Ps</text>
    </svg>
  );
}

function IllustratorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#FF9A00" />
      <text x="4" y="17" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#fff">Ai</text>
    </svg>
  );
}

function InDesignIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#FF3366" />
      <text x="4" y="17" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#fff">Id</text>
    </svg>
  );
}

function ExcelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#217346" />
      <text x="3" y="17" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#fff">XLS</text>
    </svg>
  );
}

function PowerBIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#F2C811" />
      <rect x="5" y="14" width="3" height="6" rx="1" fill="#000" opacity="0.7" />
      <rect x="10" y="10" width="3" height="10" rx="1" fill="#000" opacity="0.7" />
      <rect x="15" y="6" width="3" height="14" rx="1" fill="#000" opacity="0.7" />
    </svg>
  );
}

function GoogleWorkspaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4" />
    </svg>
  );
}

/* ── Skill list ──────────────────────────────────────────────────────────── */
type SkillItem = {
  label: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color?: string;
};

const skills: SkillItem[] = [
  { label: "Figma",            Icon: SiFigma,              color: "#F24E1E" },
  { label: "Canva",            Icon: SiCanva,              color: "#00C4CC" },
  { label: "Photoshop",        Icon: PhotoshopIcon },
  { label: "Illustrator",      Icon: IllustratorIcon },
  { label: "InDesign",         Icon: InDesignIcon },
  { label: "Excel",            Icon: ExcelIcon },
  { label: "Power BI",         Icon: PowerBIIcon },
  { label: "Google Workspace", Icon: GoogleWorkspaceIcon },
  { label: "SQL",              Icon: SiMysql,              color: "#4479A1" },
  { label: "Google Sheets",    Icon: SiGooglesheets,       color: "#34A853" },
  { label: "Notion",           Icon: SiNotion,             color: "#ffffff" },
];

export function SkillTicker() {
  const items = [...skills, ...skills];

  return (
    <div className="section-glow-line relative bg-[#060606] py-6">
      <p className="mb-5 text-center text-[0.6rem] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        Skills &amp; Tools
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {items.map((skill, i) => (
            <span
              key={`${skill.label}-${i}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap transition-opacity duration-300 hover:opacity-100 group-hover:opacity-60 hover:!opacity-100"
            >
              <skill.Icon
                className="size-[18px] shrink-0"
                style={skill.color ? ({ color: skill.color } as React.CSSProperties) : undefined}
              />
              <span className="text-sm font-semibold text-foreground/75">
                {skill.label}
              </span>
              <span className="ml-3 text-foreground/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
