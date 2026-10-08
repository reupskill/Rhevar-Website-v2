import type { CSSProperties } from "react";

/**
 * Parses a plain CSS declaration string (as used in the Claude Design
 * prototype's inline `style="..."` attributes) into a React style object.
 * Lets prototype styles be ported near-verbatim instead of hand-converted.
 */
export function sx(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(";")) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) continue;
    if (prop.startsWith("--")) {
      out[prop] = value;
      continue;
    }
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[camel] = value;
  }
  return out as CSSProperties;
}
