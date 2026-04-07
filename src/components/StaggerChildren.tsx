"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Staggers direct child elements in view. Each child should be a single element
 * (e.g. motion.div); clones `variants` onto motion-capable children.
 */
export function StaggerChildren({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const mapped = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const el = child as ReactElement<{ variants?: typeof item; className?: string }>;
    return cloneElement(el, {
      variants: item,
      className: cn(el.props.className),
    });
  });

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {mapped}
    </motion.div>
  );
}
