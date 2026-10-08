"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { sx } from "../lib/sx";
import { TabButton } from "./primitives";
import Reveal from "./Reveal";

type Group = "purple" | "blue" | "cyan";

const GROUP_COLORS: Record<Group, { border: string; iconBg: string; dot: string; subColor: string; lineColor: string }> = {
  purple: { border: "#DCCFFF", iconBg: "#F1ECFF", dot: "#6A3FF5", subColor: "#4F2FD0", lineColor: "#6A3FF5" },
  blue: { border: "#C7DCFF", iconBg: "#EAF2FF", dot: "#2D7BFF", subColor: "#1F5FCC", lineColor: "#2D7BFF" },
  cyan: { border: "#B5EEFF", iconBg: "#E5FAFF", dot: "#00B2FF", subColor: "#00739E", lineColor: "#00B2FF" },
};

const NODES = [
  { label: "Identity", sub: "✓ Verified creator", dx: -60, dy: 40, r: -8, left: "50%", top: "10%", x2: 500, y2: 60, group: "purple" as Group },
  { label: "Audience", sub: "300k across 3 channels", dx: 50, dy: -30, r: 6, left: "72.3%", top: "17.6%", x2: 723, y2: 105.6, group: "purple" as Group },
  { label: "Content", sub: "48 posts this month", dx: -30, dy: 60, r: -4, left: "86.1%", top: "37.6%", x2: 861, y2: 225.6, group: "purple" as Group },
  { label: "Brands", sub: "12 active relationships", dx: 70, dy: 20, r: 9, left: "86.1%", top: "62.4%", x2: 861, y2: 374.4, group: "blue" as Group },
  { label: "Opportunities", sub: "3 new this week", dx: -40, dy: -50, r: 5, left: "72.3%", top: "82.4%", x2: 723, y2: 494.4, group: "blue" as Group },
  { label: "Relationships", sub: "Northfield · repeat client", dx: 30, dy: -60, r: -7, left: "50%", top: "90%", x2: 500, y2: 540, group: "blue" as Group },
  { label: "Collaborators", sub: "Kemi · Lucas · Ana", dx: 60, dy: 40, r: 4, left: "27.7%", top: "82.4%", x2: 277, y2: 494.4, group: "blue" as Group },
  { label: "Money", sub: "$4,800 in escrow", dx: -70, dy: -20, r: -6, left: "13.9%", top: "62.4%", x2: 139, y2: 374.4, group: "cyan" as Group },
  { label: "Operations", sub: "2 deliverables due", dx: 40, dy: 50, r: 8, left: "13.9%", top: "37.6%", x2: 139, y2: 225.6, group: "cyan" as Group },
  { label: "Data", sub: "Revenue by engine", dx: -50, dy: 30, r: -5, left: "27.7%", top: "17.6%", x2: 277, y2: 105.6, group: "cyan" as Group },
];

export default function RhevarSection({
  graph,
  graphOn,
  graphOff,
}: {
  graph: "on" | "off";
  graphOn: () => void;
  graphOff: () => void;
}) {
  const graphRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = graphRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            setTimeout(() => graphOn(), 500);
            io.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="rhevar"
      data-screen-label="Introducing Rhevar"
      style={sx("position:relative;overflow:hidden;background:#F7F8FA;border-top:1px solid #EAECF0")}
    >
      <div
        style={sx(
          "position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 50% 45% at 50% 58%,rgba(106,63,245,.10),transparent 70%),radial-gradient(ellipse 35% 35% at 80% 80%,rgba(0,212,255,.10),transparent 70%)"
        )}
      />
      <div data-r="pad" style={sx("position:relative;max-width:1280px;margin:0 auto;padding:120px 40px 104px")}>
        <Reveal style={sx("max-width:820px;margin:0 auto 56px;text-align:center")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
            Rhevar
          </div>
          <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0 0 20px;color:#080F19;text-wrap:balance")}>
            The creator business, connected.
          </h2>
          <p style={sx("margin:0 auto;font-size:18px;line-height:1.6;color:#6B7280;max-width:620px")}>
            Rhevar doesn’t add another tool to the pile. It connects identity, work, money and data into one business, with a record that grows every time you get paid.
          </p>
        </Reveal>

        <div style={sx("display:flex;justify-content:center;margin-bottom:28px")}>
          <div role="tablist" style={sx("display:inline-flex;gap:4px;padding:4px;border-radius:9999px;background:#EAECF0")}>
            <TabButton type="button" role="tab" aria-selected={graph === "off"} onClick={graphOff}>
              Fragmented
            </TabButton>
            <TabButton type="button" role="tab" aria-selected={graph === "on"} onClick={graphOn}>
              Connected
            </TabButton>
          </div>
        </div>

        <div style={sx("display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:12px")}>
          <span style={sx("display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:9999px;background:#F1ECFF;color:#4F2FD0;font-size:13px;font-weight:500")}>
            <span style={sx("width:8px;height:8px;border-radius:9999px;background:#6A3FF5")} />
            Who you are
          </span>
          <span style={sx("display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:9999px;background:#EAF2FF;color:#1F5FCC;font-size:13px;font-weight:500")}>
            <span style={sx("width:8px;height:8px;border-radius:9999px;background:#2D7BFF")} />
            Who you work with
          </span>
          <span style={sx("display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:9999px;background:#E5FAFF;color:#00739E;font-size:13px;font-weight:500")}>
            <span style={sx("width:8px;height:8px;border-radius:9999px;background:#00B2FF")} />
            How it runs
          </span>
        </div>

        <div
          ref={graphRef}
          data-graph={graph}
          data-r="graph"
          style={sx("position:relative;width:100%;max-width:1040px;margin:0 auto;aspect-ratio:10/6")}
        >
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={sx("position:absolute;inset:0;width:100%;height:100%;overflow:visible")}
            fill="none"
          >
            <ellipse cx="500" cy="300" rx="190" ry="120" fill="#F1ECFF" fillOpacity=".5" />
            <ellipse data-ring="" cx="500" cy="300" rx="280" ry="177" stroke="#DCCFFF" strokeWidth="1" strokeDasharray="2 6" vectorEffect="non-scaling-stroke" />
            <path data-ring="" d="M434 63.6 A380 240 0 0 1 876.3 266.6" stroke="#6A3FF5" strokeOpacity=".16" strokeWidth="22" strokeLinecap="round" />
            <path data-ring="" d="M876.3 333.4 A380 240 0 0 1 226.7 466.7" stroke="#2D7BFF" strokeOpacity=".14" strokeWidth="22" strokeLinecap="round" />
            <path data-ring="" d="M164.5 412.7 A380 240 0 0 1 333.4 84.3" stroke="#00B2FF" strokeOpacity=".16" strokeWidth="22" strokeLinecap="round" />

            {NODES.map((n, i) => (
              <line
                key={`line-${n.label}`}
                data-link=""
                x1="500"
                y1="300"
                x2={n.x2}
                y2={n.y2}
                stroke={GROUP_COLORS[n.group].lineColor}
                strokeOpacity=".55"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                style={{ transitionDelay: `${(0.2 + i * 0.06).toFixed(2)}s` }}
              />
            ))}

            {NODES.map((n, i) => (
              <circle key={`flow-${n.label}`} data-flow="" r="4" fill={GROUP_COLORS[n.group].lineColor}>
                <animateMotion
                  dur="2.6s"
                  begin={`${(i * 0.26).toFixed(2)}s`}
                  repeatCount="indefinite"
                  path={`M${n.x2} ${n.y2} L500 300`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="2.6s"
                  begin={`${(i * 0.26).toFixed(2)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>

          <div
            data-core=""
            style={sx(
              "position:absolute;left:50%;top:50%;width:156px;height:156px;border-radius:9999px;background:#080F19;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;box-shadow:0 0 0 10px rgba(106,63,245,.12),0 0 0 22px rgba(0,212,255,.08),0 24px 64px rgba(106,63,245,.28)"
            )}
          >
            <Image src="/assets/rhevar-mark-fullcolor.svg" alt="" width={62} height={80} style={{ height: "34px", width: "auto" }} />
            <span style={sx("font-size:14px;font-weight:700;color:#fff")}>Your business</span>
            <span style={sx("font-size:11px;color:rgba(255,255,255,.6);max-width:110px;line-height:1.35")}>One record, every engine</span>
          </div>

          {NODES.map((n, i) => {
            const c = GROUP_COLORS[n.group];
            return (
              <div
                key={n.label}
                data-node=""
                style={{
                  ...sx(
                    "position:absolute;display:flex;align-items:center;gap:10px;padding:8px 14px 8px 10px;border-radius:14px;background:#fff;white-space:nowrap;box-shadow:0 8px 24px rgba(8,15,25,.08)"
                  ),
                  left: n.left,
                  top: n.top,
                  border: `1px solid ${c.border}`,
                  transitionDelay: `${(0.05 + i * 0.05).toFixed(2)}s`,
                  "--dx": `${n.dx}px`,
                  "--dy": `${n.dy}px`,
                  "--r": `${n.r}deg`,
                } as React.CSSProperties}
              >
                <span style={{ ...sx("flex:none;width:28px;height:28px;border-radius:9px;display:flex;align-items:center;justify-content:center"), background: c.iconBg }}>
                  <span style={{ ...sx("width:9px;height:9px;border-radius:9999px"), background: c.dot }} />
                </span>
                <div>
                  <div style={sx("font-size:14px;font-weight:700;color:#080F19;line-height:1.2")}>{n.label}</div>
                  <div data-sub="" style={{ ...sx("font-size:11px;line-height:1.3;margin-top:1px"), color: c.subColor }}>
                    {n.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          data-r="c2"
          style={sx("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;max-width:1000px;margin:56px auto 0;border-top:1px solid #D5D9E0")}
        >
          <Reveal style={sx("padding:24px 24px 0 0")}>
            <div style={sx("width:32px;height:4px;border-radius:2px;background:#6A3FF5;margin-bottom:14px")} />
            <div style={sx("font-size:15px;font-weight:700;color:#080F19;margin-bottom:6px")}>Build</div>
            <p style={sx("margin:0;font-size:15px;line-height:1.55;color:#6B7280")}>
              Storefronts, products, courses, memberships, newsletters, coaching and events.
            </p>
          </Reveal>
          <Reveal style={sx("padding:24px 24px 0")}>
            <div style={sx("width:32px;height:4px;border-radius:2px;background:#2D7BFF;margin-bottom:14px")} />
            <div style={sx("font-size:15px;font-weight:700;color:#080F19;margin-bottom:6px")}>Operate &amp; sell</div>
            <p style={sx("margin:0;font-size:15px;line-height:1.55;color:#6B7280")}>
              Brand relationships, campaigns, contracts, escrow, payments, bookings and your team.
            </p>
          </Reveal>
          <Reveal style={sx("padding:24px 0 0 24px")}>
            <div style={sx("width:32px;height:4px;border-radius:2px;background:#00B2FF;margin-bottom:14px")} />
            <div style={sx("font-size:15px;font-weight:700;color:#080F19;margin-bottom:6px")}>Optimize</div>
            <p style={sx("margin:0;font-size:15px;line-height:1.55;color:#6B7280")}>
              Revenue by engine, product and channel. What makes money, and what to launch next.
            </p>
          </Reveal>
        </div>

        <Reveal
          style={sx(
            "max-width:1000px;margin:32px auto 0;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:16px 20px;border-radius:16px;background:#fff;border:1px solid #EAECF0"
          )}
        >
          <span style={sx("font-size:14px;color:#1A1F2E")}>Connects to where your audience lives. Never asks you to leave it.</span>
          <div style={sx("display:flex;gap:6px;flex-wrap:wrap")}>
            {[
              { label: "YouTube", bg: "#F1ECFF", color: "#4F2FD0" },
              { label: "Instagram", bg: "#EAF2FF", color: "#1F5FCC" },
              { label: "TikTok", bg: "#E5FAFF", color: "#00739E" },
              { label: "X", bg: "#F1ECFF", color: "#4F2FD0" },
              { label: "Twitch", bg: "#EAF2FF", color: "#1F5FCC" },
            ].map((p) => (
              <span key={p.label} style={{ ...sx("padding:4px 11px;border-radius:9999px;font-size:13px;font-weight:500"), background: p.bg, color: p.color }}>
                {p.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
