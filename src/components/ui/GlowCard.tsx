import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function GlowCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-black/5 bg-card p-6 text-card-foreground shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_-32px_rgba(17,17,17,0.18)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
