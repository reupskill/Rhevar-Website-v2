"use client";

import { sx } from "../lib/sx";
import Reveal from "./Reveal";

const CONNECTIONS = [
  { d: "M50 9 Q72 44 84 60", stroke: "#F59452", opacity: ".45" },
  { d: "M78 14 Q42 48 22 82", stroke: "#D14343", opacity: ".3" },
  { d: "M90 36 Q48 74 10 60", stroke: "#F59452", opacity: ".4" },
  { d: "M12 34 Q62 26 72 84", stroke: "#9AA1AD", opacity: ".45" },
  { d: "M24 14 Q28 64 46 92", stroke: "#D14343", opacity: ".28" },
  { d: "M66 30 Q90 80 34 68", stroke: "#F59452", opacity: ".35" },
];

const TAGS = [
  { left: "50%", top: "9%", rotate: "-4deg", dot: "#F59452", text: "Instagram" },
  { left: "78%", top: "14%", rotate: "5deg", dot: "#D14343", text: "WhatsApp" },
  { left: "90%", top: "36%", rotate: "-7deg", dot: "#9AA1AD", text: "Invoice_v3.pdf" },
  { left: "84%", top: "60%", rotate: "3deg", dot: "#F59452", text: "Bank account (2)" },
  { left: "72%", top: "84%", rotate: "-3deg", dot: "#D14343", text: "Spreadsheet" },
  { left: "46%", top: "92%", rotate: "6deg", dot: "#9AA1AD", text: "Email" },
  { left: "22%", top: "82%", rotate: "-6deg", dot: "#F59452", text: "Calendar" },
  { left: "10%", top: "60%", rotate: "4deg", dot: "#D14343", text: "YouTube" },
  { left: "12%", top: "34%", rotate: "-5deg", dot: "#9AA1AD", text: "TikTok" },
  { left: "24%", top: "14%", rotate: "7deg", dot: "#F59452", text: "Media kit (2024)" },
];

const SMALL_TAGS = [
  { left: "66%", top: "30%", rotate: "-9deg", text: "Drive" },
  { left: "34%", top: "68%", rotate: "8deg", text: "Payment app" },
  { left: "30%", top: "30%", rotate: "-3deg", text: "DMs" },
  { left: "68%", top: "70%", rotate: "5deg", text: "Notion" },
];

export default function Problem() {
  return (
    <section
      id="problem"
      data-screen-label="The problem"
      style={sx("background:#F7F8FA;border-top:1px solid #EAECF0")}
    >
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px 104px")}>
        <div
          data-r="split"
          style={sx("display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:72px;align-items:center")}
        >
          <Reveal>
            <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
              The shift
            </div>
            <h2
              style={sx(
                "font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0 0 24px;color:#080F19;text-wrap:balance"
              )}
            >
              Everything exists. <br />Nothing is connected.
            </h2>
            <p style={sx("margin:0 0 20px;font-size:18px;line-height:1.6;color:#6B7280;max-width:460px")}>
              Content lives in one place, the audience in another. Brand deals sit in email and WhatsApp, invoices in documents,
              money across accounts and currencies. The relationships live in someone’s head.
            </p>
            <p style={sx("margin:0;font-size:18px;line-height:1.6;color:#080F19;font-weight:500;max-width:460px")}>
              The creator has become the operating system.
            </p>
            <div style={sx("display:flex;gap:10px;flex-wrap:wrap;margin-top:28px")}>
              <span
                style={sx(
                  "display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:9999px;background:#FFF1E7;color:#A9561F;font-size:14px;font-weight:500"
                )}
              >
                <span style={sx("width:7px;height:7px;border-radius:9999px;background:#F59452")} />
                14 places to check
              </span>
              <span
                style={sx(
                  "display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:9999px;background:#FDECEC;color:#A33232;font-size:14px;font-weight:500"
                )}
              >
                <span style={sx("width:7px;height:7px;border-radius:9999px;background:#D14343")} />
                0 connections
              </span>
            </div>
          </Reveal>
          <Reveal data-r="graph" style={sx("position:relative;width:100%;aspect-ratio:10/8")}>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={sx("position:absolute;inset:0;width:100%;height:100%")}
              fill="none"
            >
              {CONNECTIONS.map((c, i) => (
                <path
                  key={i}
                  d={c.d}
                  stroke={c.stroke}
                  strokeOpacity={c.opacity}
                  strokeWidth="1.2"
                  strokeDasharray="3 5"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            <div
              style={sx(
                "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:150px;height:150px;border-radius:9999px;border:2px dashed #F59452;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#FFF6EF;box-shadow:0 0 0 10px rgba(245,148,82,.08)"
              )}
            >
              <span style={sx("font-size:20px;font-weight:700;color:#080F19")}>You</span>
              <span style={sx("font-size:12px;line-height:1.35;color:#6B7280;margin-top:4px;max-width:110px")}>
                holding it all together
              </span>
            </div>
            {TAGS.map((t) => (
              <span
                key={t.text}
                style={{
                  ...sx(
                    "position:absolute;padding:8px 14px;border:1px solid #EAECF0;border-radius:10px;background:#fff;font-size:14px;font-weight:500;color:#1A1F2E;white-space:nowrap;box-shadow:0 2px 8px rgba(8,15,25,.06);display:inline-flex;align-items:center;gap:8px"
                  ),
                  left: t.left,
                  top: t.top,
                  transform: `translate(-50%,-50%) rotate(${t.rotate})`,
                }}
              >
                <span style={{ ...sx("width:7px;height:7px;border-radius:9999px"), background: t.dot }} />
                {t.text}
              </span>
            ))}
            {SMALL_TAGS.map((t) => (
              <span
                key={t.text}
                style={{
                  ...sx(
                    "position:absolute;padding:6px 11px;border:1px solid #EAECF0;border-radius:10px;background:#F7F8FA;font-size:12px;color:#6B7280;white-space:nowrap"
                  ),
                  left: t.left,
                  top: t.top,
                  transform: `translate(-50%,-50%) rotate(${t.rotate})`,
                }}
              >
                {t.text}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
