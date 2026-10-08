"use client";

import { sx } from "../lib/sx";
import { Button } from "./primitives";

const FLOATING_CARDS = [
  { left: "14%", top: "18%", dot: "#6A3FF5", title: "Brand deal signed", sub: "Paris · 09:21" },
  { left: "86%", top: "30%", dot: "#2D7BFF", title: "$4,800 in escrow", sub: "Released on delivery" },
  { left: "84%", top: "74%", dot: "#00B2FF", title: "Paid in 4 currencies", sub: "NGN · GBP · CAD · BRL" },
  { left: "20%", top: "82%", dot: "#00D4FF", title: "Course · 120 sold", sub: "From YouTube" },
];

export default function Hero({
  pickCreator,
  tick,
  tickOp,
}: {
  pickCreator: () => void;
  tick: [string, string];
  tickOp: number;
}) {
  return (
    <section data-screen-label="Hero" style={sx("position:relative;overflow:hidden")}>
      <div
        style={sx(
          "position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 50% 60% at 85% 20%,rgba(106,63,245,.12),transparent 70%),radial-gradient(ellipse 40% 50% at 70% 70%,rgba(0,212,255,.10),transparent 70%)"
        )}
      />
      <div
        style={sx(
          "position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(rgba(8,15,25,.09) 1px,transparent 1px);background-size:24px 24px;mask-image:radial-gradient(ellipse 70% 80% at 80% 10%,#000,transparent 70%);-webkit-mask-image:radial-gradient(ellipse 70% 80% at 80% 10%,#000,transparent 70%)"
        )}
      />
      <div data-r="pad" style={sx("position:relative;max-width:1280px;margin:0 auto;padding:96px 40px 0")}>
        <div
          style={sx(
            "font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:28px;display:inline-flex;align-items:center;gap:10px"
          )}
        >
          <span style={sx("width:8px;height:8px;border-radius:9999px;background:linear-gradient(135deg,#6A3FF5,#00B2FF)")} />
          Infrastructure for the creator business
        </div>
        <div
          data-r="split"
          style={sx("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:40px;align-items:center")}
        >
          <div>
            <h1
              style={sx(
                "font-size:clamp(44px,6.2vw,92px);font-weight:700;line-height:.98;letter-spacing:-.045em;margin:0;color:#080F19;max-width:680px;text-wrap:balance"
              )}
            >
              Creators are becoming companies.
            </h1>
            <p
              style={sx(
                "font-size:clamp(24px,2.7vw,36px);font-weight:500;line-height:1.2;letter-spacing:-.025em;margin:24px 0 0;color:#9AA1AD;max-width:640px"
              )}
            >
              The infrastructure never caught up.
              <span
                style={sx(
                  "display:block;margin-top:4px;background:linear-gradient(90deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;width:fit-content"
                )}
              >
                We’re building it.
              </span>
            </p>
            <div style={sx("display:flex;flex-direction:column;gap:28px;margin-top:32px")}>
              <p style={sx("margin:0;font-size:18px;line-height:1.6;color:#6B7280;max-width:500px;text-wrap:pretty")}>
                Rhevar is the connected business beneath everything a creator makes, sells and earns, wherever in the world they do it.
              </p>
              <div style={sx("display:flex;gap:12px;flex-wrap:wrap")}>
                <Button href="#join" onClick={pickCreator} $variant="gradient">
                  Build your creator business <span>→</span>
                </Button>
                <Button href="#problem" $variant="outline">
                  See how it works
                </Button>
              </div>
            </div>
          </div>
          <div
            data-r="heroart"
            style={sx("position:relative;width:100%;max-width:500px;aspect-ratio:1/1;justify-self:end")}
          >
            <svg
              viewBox="0 0 400 400"
              style={sx("position:absolute;inset:0;width:100%;height:100%;overflow:visible")}
              fill="none"
            >
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#6A3FF5" />
                  <stop offset=".55" stopColor="#415BFF" />
                  <stop offset="1" stopColor="#00B2FF" />
                </linearGradient>
                <radialGradient id="hf" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#F1ECFF" />
                  <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="196" fill="url(#hf)" />
              <circle cx="200" cy="200" r="170" stroke="#DCCFFF" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" stroke="#C7DCFF" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="200" cy="200" r="70" stroke="#B5EEFF" strokeWidth="1" />
              <path d="M 59 105 A 170 170 0 0 1 330 90" stroke="url(#hg)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 320 200 A 120 120 0 0 1 140 304" stroke="url(#hg)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="59" cy="105" r="7" fill="#6A3FF5" />
              <circle cx="330" cy="90" r="7" fill="#00B2FF" />
              <circle cx="320" cy="200" r="6" fill="#2D7BFF" />
              <circle cx="140" cy="304" r="6" fill="#00D4FF" />
              <circle cx="370" cy="200" r="4" fill="#DCCFFF" />
              <circle cx="30" cy="200" r="4" fill="#C7DCFF" />
              <circle cx="200" cy="370" r="4" fill="#B5EEFF" />
              <circle cx="200" cy="200" r="46" fill="#080F19" />
            </svg>
            {/* eslint-disable-next-line @next/next/no-img-element -- percentage-sized overlay icon, not a fixed-dimension asset next/image can handle */}
            <img
              src="/assets/rhevar-mark-fullcolor.svg"
              alt=""
              style={sx("position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:11%")}
            />
            {FLOATING_CARDS.map((c) => (
              <div
                key={c.title}
                style={{
                  ...sx(
                    "position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #EAECF0;border-radius:14px;background:#fff;box-shadow:0 12px 32px rgba(8,15,25,.10);white-space:nowrap"
                  ),
                  left: c.left,
                  top: c.top,
                }}
              >
                <span style={{ ...sx("flex:none;width:10px;height:10px;border-radius:9999px"), background: c.dot }} />
                <div>
                  <div style={sx("font-size:13px;font-weight:700;color:#080F19")}>{c.title}</div>
                  <div style={sx("font-size:11px;color:#6B7280;margin-top:1px")}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-r="pad" style={sx("position:relative;max-width:1280px;margin:80px auto 0;padding:0 40px")}>
        <div style={sx("border-top:1px solid #EAECF0;padding:28px 0 40px;display:flex;align-items:baseline;gap:24px;flex-wrap:wrap")}>
          <span style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>
            Look closer
          </span>
          <p
            style={{
              ...sx(
                "margin:0;font-size:clamp(22px,2.6vw,34px);font-weight:500;letter-spacing:-.02em;line-height:1.2;color:#9AA1AD"
              ),
              opacity: tickOp,
              transition: "opacity .3s cubic-bezier(.22,.61,.36,1)",
            }}
          >
            {tick[0]} is{" "}
            <span
              style={sx(
                "background:linear-gradient(90deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:700;white-space:nowrap"
              )}
            >
              {tick[1]}.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
