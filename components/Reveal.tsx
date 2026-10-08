"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode, ElementType } from "react";

export default function Reveal({
  as: Tag = "div",
  children,
  style,
  className,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  [key: string]: unknown;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [state, setState] = useState<"" | "wait" | "in">("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showAll = () => setState("in");
    window.addEventListener("rh:reveal-all", showAll);
    window.addEventListener("hashchange", showAll);

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      // Default "" already renders fully visible (only "wait" hides it), so
      // there is nothing to synchronize here.
      return () => {
        window.removeEventListener("rh:reveal-all", showAll);
        window.removeEventListener("hashchange", showAll);
      };
    }

    const vh = window.innerHeight;
    let io: IntersectionObserver | undefined;
    if (el.getBoundingClientRect().top > vh) {
      queueMicrotask(() => setState("wait"));
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setState("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);
    }

    return () => {
      window.removeEventListener("rh:reveal-all", showAll);
      window.removeEventListener("hashchange", showAll);
      io?.disconnect();
    };
  }, []);

  return (
    <Tag ref={ref} data-rv={state} style={style} className={className} {...rest}>
      {children}
    </Tag>
  );
}
