"use client";

import Image from "next/image";
import { sx } from "../lib/sx";
import Reveal from "./Reveal";

const CARDS = [
  {
    key: "today",
    dot: "#6A3FF5",
    label: "Today",
    title: "A creator",
    desc: "Content, an audience and a few brand deals, run from a phone and a dozen apps.",
    tags: ["Posts", "DMs", "Brand deals"],
    tagDot: "#B9A6FF",
    special: false,
  },
  {
    key: "next",
    dot: "#415BFF",
    label: "Next",
    title: "A business",
    desc: "Products, a team, contracts and a ledger. Revenue from several engines, in several currencies.",
    tags: ["Courses", "Community", "Team", "Escrow"],
    tagDot: "#8FB8FF",
    special: false,
  },
  {
    key: "tomorrow",
    dot: "#00D4FF",
    label: "Tomorrow",
    title: "A company",
    desc: "The same person, now the founder of something that outlasts any single platform.",
    tags: ["Media company", "School", "Agency", "Brand", "Product company"],
    tagDot: "#7FE6FF",
    special: true,
  },
];

export default function Future() {
  return (
    <section id="future" data-screen-label="The future" style={sx("position:relative;background:#080F19;color:#fff;overflow:hidden")}>
      <div
        style={sx(
          "position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 20% 0%,rgba(106,63,245,.28),transparent 55%),radial-gradient(circle at 90% 100%,rgba(0,212,255,.10),transparent 50%)"
        )}
      />
      <svg viewBox="0 0 600 600" style={sx("position:absolute;right:-240px;top:-160px;width:640px;height:640px;pointer-events:none;opacity:.45")} fill="none">
        <defs>
          <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6A3FF5" />
            <stop offset=".55" stopColor="#415BFF" />
            <stop offset="1" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="280" stroke="rgba(255,255,255,.08)" />
        <circle cx="300" cy="300" r="210" stroke="rgba(255,255,255,.08)" />
        <circle cx="300" cy="300" r="140" stroke="rgba(255,255,255,.08)" />
        <path d="M 20 300 A 280 280 0 0 1 300 20" stroke="url(#fg)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 510 300 A 210 210 0 0 1 300 510" stroke="url(#fg)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="300" r="6" fill="#6A3FF5" />
        <circle cx="300" cy="20" r="6" fill="#00D4FF" />
        <circle cx="510" cy="300" r="5" fill="#415BFF" />
        <circle cx="300" cy="510" r="5" fill="#00B2FF" />
      </svg>

      <div data-r="pad" style={sx("position:relative;max-width:1280px;margin:0 auto;padding:128px 40px 120px")}>
        <Reveal style={sx("max-width:820px;margin-bottom:56px")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#B9A6FF;margin-bottom:24px")}>
            What comes next
          </div>
          <h2 style={sx("font-size:clamp(38px,5.6vw,80px);font-weight:700;line-height:1;letter-spacing:-.04em;margin:0 0 20px;color:#fff;text-wrap:balance")}>
            Today’s creators are tomorrow’s{" "}
            <span
              style={sx(
                "background:linear-gradient(90deg,#B9A6FF 0%,#8FB8FF 50%,#7FE6FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent"
              )}
            >
              companies.
            </span>
          </h2>
          <p style={sx("margin:0;font-size:18px;line-height:1.6;color:rgba(255,255,255,.66);max-width:600px")}>
            The path from creator to company is already happening. Rhevar is the infrastructure underneath every step of it.
          </p>
        </Reveal>

        <div style={sx("position:relative")}>
          <div
            data-r="nav"
            style={sx(
              "position:absolute;left:28px;right:28px;top:34px;height:2px;background:linear-gradient(90deg,#6A3FF5,#415BFF 55%,#00D4FF);opacity:.5;pointer-events:none"
            )}
          />
          <div data-r="split" style={sx("position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px")}>
            {CARDS.map((card) => (
              <Reveal
                key={card.key}
                style={{
                  ...sx("position:relative;min-width:0;padding:28px;border-radius:20px"),
                  background: card.special
                    ? "linear-gradient(160deg,rgba(106,63,245,.22) 0%,rgba(17,26,43,1) 70%)"
                    : "#111A2B",
                  border: card.special ? "1px solid rgba(139,107,255,.45)" : "1px solid rgba(255,255,255,.10)",
                }}
              >
                <div style={sx("display:flex;align-items:center;gap:10px;margin-bottom:18px")}>
                  <span style={{ ...sx("width:12px;height:12px;border-radius:9999px"), background: card.dot, boxShadow: `0 0 0 5px ${card.dot}33` }} />
                  <span style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6)")}>
                    {card.label}
                  </span>
                </div>
                <div style={sx("font-size:26px;font-weight:700;letter-spacing:-.02em;color:#fff;margin-bottom:8px")}>{card.title}</div>
                <p style={sx("margin:0 0 20px;font-size:15px;line-height:1.55;color:rgba(255,255,255,.66)")}>{card.desc}</p>
                <div style={sx("display:flex;flex-wrap:wrap;gap:6px")}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      style={sx(
                        "display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:9999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);font-size:13px;color:rgba(255,255,255,.85)"
                      )}
                    >
                      <span style={{ ...sx("width:6px;height:6px;border-radius:9999px"), background: card.tagDot }} />
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          data-r="card"
          style={sx(
            "margin-top:96px;padding:56px 48px;border-radius:24px;background:linear-gradient(135deg,rgba(106,63,245,.22) 0%,rgba(65,91,255,.10) 55%,rgba(0,178,255,.12) 100%);border:1px solid rgba(139,107,255,.35);text-align:center"
          )}
        >
          <Image src="/assets/rhevar-mark-fullcolor.svg" alt="" width={62} height={80} style={{ height: "36px", width: "auto", marginBottom: "24px" }} />
          <p style={sx("margin:0 auto;font-size:clamp(22px,2.6vw,34px);font-weight:500;line-height:1.3;letter-spacing:-.015em;color:#fff;max-width:860px;text-wrap:balance")}>
            “Everything you create, everything you sell, everyone you work with, every dollar you make. Connected, and running through Rhevar.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
