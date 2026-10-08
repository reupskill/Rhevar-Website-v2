"use client";

import { sx } from "../lib/sx";
import { PillToggle } from "./primitives";
import Reveal from "./Reveal";
import { TYPES } from "../lib/useHomeState";

const ENGINE_COLORS = ["#6A3FF5", "#2D7BFF", "#00B2FF", "#00D4FF"];

export default function Creators({
  type,
  setType,
}: {
  type: number;
  setType: (i: number) => void;
}) {
  const t = TYPES[type];

  return (
    <section id="creators" data-screen-label="Every kind of creator" style={sx("background:#F7F8FA;border-top:1px solid #EAECF0")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <div data-r="split" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:start")}>
          <Reveal>
            <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
              Every kind of creator
            </div>
            <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0 0 20px;color:#080F19;text-wrap:balance")}>
              One platform. It takes the shape of your business.
            </h2>
            <p style={sx("margin:0 0 32px;font-size:18px;line-height:1.6;color:#6B7280;max-width:480px")}>
              There is no Rhevar for influencers or Rhevar for coaches. You switch on the engines you earn from, and the workspace configures around them.
            </p>
            <div style={sx("display:flex;flex-wrap:wrap;gap:8px")}>
              {TYPES.map((opt, i) => (
                <PillToggle key={opt.label} type="button" aria-pressed={type === i} onClick={() => setType(i)}>
                  {opt.label}
                </PillToggle>
              ))}
            </div>
          </Reveal>

          <Reveal
            data-r="card"
            style={sx(
              "position:relative;overflow:hidden;background:#fff;border:1px solid #EAECF0;border-radius:24px;box-shadow:0 12px 32px rgba(8,15,25,.08);padding:32px"
            )}
          >
            <div style={sx("position:absolute;left:0;right:0;top:0;height:5px;background:linear-gradient(90deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%)")} />
            <div style={sx("position:absolute;right:-60px;top:-60px;width:200px;height:200px;border-radius:9999px;border:1px solid #DCCFFF;box-shadow:inset 0 0 0 30px rgba(241,236,255,.6)")} />
            <div style={sx("position:relative;display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:4px")}>
              <span style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6A3FF5")}>{t.label}</span>
              <span style={sx("font-size:13px;color:#6B7280")}>{t.where}</span>
            </div>
            <h3 style={sx("position:relative;font-size:28px;font-weight:700;letter-spacing:-.02em;line-height:1.15;margin:8px 0 24px;color:#080F19")}>
              {t.business}
            </h3>
            <div style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#6B7280;margin-bottom:12px")}>
              Engines running on Rhevar
            </div>
            <div style={sx("display:flex;flex-direction:column;border-top:1px solid #EAECF0")}>
              {t.engines.map(([name, pct], i) => {
                const color = ENGINE_COLORS[i % 4];
                return (
                  <div key={name} style={sx("display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid #EAECF0")}>
                    <span style={{ ...sx("flex:none;width:8px;height:8px;border-radius:9999px"), background: color }} />
                    <span style={sx("flex:1;font-size:15px;color:#1A1F2E")}>{name}</span>
                    <span style={sx("flex:none;width:96px;height:6px;border-radius:9999px;background:#EAECF0;overflow:hidden")}>
                      <span
                        style={{
                          ...sx("display:block;height:100%;border-radius:9999px;transition:width .5s cubic-bezier(.22,.61,.36,1)"),
                          width: `${pct}%`,
                          background: color,
                        }}
                      />
                    </span>
                    <span style={sx("flex:none;width:40px;text-align:right;font-size:13px;font-weight:500;font-variant-numeric:tabular-nums;color:#6B7280")}>
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
            <p style={sx("margin:20px 0 0;font-size:14px;line-height:1.6;color:#6B7280")}>{t.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
