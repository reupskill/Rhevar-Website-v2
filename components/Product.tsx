"use client";

import { sx } from "../lib/sx";
import Reveal from "./Reveal";

const REVENUE_ROWS = [
  { label: "Brand deals", value: "$6,000", color: "#6A3FF5" },
  { label: "Community", value: "$3,600", color: "#415BFF" },
  { label: "Course", value: "$3,200", color: "#2D7BFF" },
  { label: "Consulting", value: "$2,800", color: "#00B2FF" },
  { label: "Ebook, affiliate, other", value: "$3,600", color: "#00D4FF" },
];

const STEPS = [
  { num: "01", title: "Both sides verified", desc: "You know who you’re working with before you reply.", group: "purple" as const },
  { num: "02", title: "Contract reviewed, free", desc: "Usage, exclusivity and payment terms checked in minutes.", group: "blue" as const },
  { num: "03", title: "Fee secured in escrow", desc: "The money is held before the work begins.", group: "cyan" as const },
  { num: "04", title: "Paid across borders on delivery", desc: "In your currency, with your team paid in theirs.", group: "purple" as const },
  { num: "05", title: "Reputation earned", desc: "Every completed deal adds to a record both sides carry forward.", group: "blue" as const },
];

const STEP_COLORS = {
  purple: { bg: "#F1ECFF", border: "#DCCFFF", color: "#6A3FF5" },
  blue: { bg: "#EAF2FF", border: "#C7DCFF", color: "#2D7BFF" },
  cyan: { bg: "#E5FAFF", border: "#B5EEFF", color: "#00739E" },
};

export default function Product() {
  return (
    <section id="product" data-screen-label="Product evidence" style={sx("background:#F7F8FA;border-top:1px solid #EAECF0")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <Reveal style={sx("max-width:760px;margin-bottom:56px")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
            Inside Rhevar
          </div>
          <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0;color:#080F19;text-wrap:balance")}>
            Know what your business earns, and where every dollar came from.
          </h2>
        </Reveal>

        <div data-r="split" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;align-items:stretch")}>
          <Reveal data-r="card" style={sx("background:#fff;border:1px solid #EAECF0;border-radius:24px;box-shadow:0 12px 32px rgba(8,15,25,.08);padding:32px")}>
            <div style={sx("display:flex;justify-content:space-between;align-items:baseline;gap:12px")}>
              <span style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>
                Sarah’s business · this month
              </span>
              <span style={sx("font-size:13px;color:#6B7280")}>7 engines</span>
            </div>
            <div
              style={sx(
                "font-size:48px;font-weight:700;letter-spacing:-.035em;font-variant-numeric:tabular-nums;margin:12px 0 4px;background:linear-gradient(90deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block"
              )}
            >
              $19,200
            </div>
            <div style={sx("font-size:14px;color:#6B7280;margin-bottom:20px")}>Earned in 6 currencies, reported in one</div>
            <div style={sx("display:flex;gap:3px;height:10px;margin-bottom:20px")}>
              <span style={sx("flex:31;border-radius:3px;background:#6A3FF5")} />
              <span style={sx("flex:19;border-radius:3px;background:#415BFF")} />
              <span style={sx("flex:17;border-radius:3px;background:#2D7BFF")} />
              <span style={sx("flex:15;border-radius:3px;background:#00B2FF")} />
              <span style={sx("flex:18;border-radius:3px;background:#00D4FF")} />
            </div>
            <div style={sx("display:flex;flex-direction:column;border-top:1px solid #EAECF0")}>
              {REVENUE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    ...sx("display:flex;gap:12px;padding:10px 0;font-size:14px"),
                    borderBottom: i < REVENUE_ROWS.length - 1 ? "1px solid #EAECF0" : undefined,
                  }}
                >
                  <span style={sx("flex:1;color:#1A1F2E;display:flex;align-items:center;gap:10px")}>
                    <span style={{ ...sx("width:8px;height:8px;border-radius:2px"), background: row.color }} />
                    {row.label}
                  </span>
                  <span style={sx("font-variant-numeric:tabular-nums;color:#1A1F2E;font-weight:500")}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={sx("margin-top:20px;padding:16px;border-radius:12px;background:linear-gradient(135deg,#F5F2FF,#EAFBFF);display:flex;flex-direction:column;gap:8px;font-size:13px;color:#1A1F2E")}>
              <div style={sx("display:flex;gap:8px;flex-wrap:wrap")}>
                <span>Instagram</span>
                <span style={sx("color:#6A3FF5")}>→</span>
                <span>Ebook</span>
                <span style={sx("color:#6A3FF5")}>→</span>
                <span style={sx("font-weight:700")}>450 customers</span>
              </div>
              <div style={sx("display:flex;gap:8px;flex-wrap:wrap")}>
                <span>YouTube</span>
                <span style={sx("color:#6A3FF5")}>→</span>
                <span>Course</span>
                <span style={sx("color:#6A3FF5")}>→</span>
                <span style={sx("font-weight:700")}>120 customers</span>
              </div>
            </div>
          </Reveal>

          <Reveal
            data-r="card"
            style={sx("background:#fff;border:1px solid #EAECF0;border-radius:24px;box-shadow:0 12px 32px rgba(8,15,25,.08);padding:32px;display:flex;flex-direction:column")}
          >
            <div style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6B7280;margin-bottom:12px")}>
              Where it starts · the verified deal
            </div>
            <h3 style={sx("font-size:26px;font-weight:700;letter-spacing:-.02em;line-height:1.2;margin:0 0 24px;color:#080F19")}>
              Turn opportunities into relationships. Relationships into revenue.
            </h3>
            <div style={sx("display:flex;flex-direction:column;flex:1")}>
              {STEPS.map((step, i) => {
                const c = STEP_COLORS[step.group];
                return (
                  <div
                    key={step.num}
                    style={{
                      ...sx("display:flex;gap:16px;padding:14px 0;border-top:1px solid #EAECF0"),
                      borderBottom: i === STEPS.length - 1 ? "1px solid #EAECF0" : undefined,
                    }}
                  >
                    <span
                      style={{
                        ...sx("flex:none;width:32px;height:32px;border-radius:10px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;display:flex;align-items:center;justify-content:center"),
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.color,
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div style={sx("font-size:15px;font-weight:700;color:#080F19")}>{step.title}</div>
                      <div style={sx("font-size:14px;color:#6B7280;margin-top:2px")}>{step.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
