"use client";

import { sx } from "../lib/sx";
import { TabButton } from "./primitives";
import Reveal from "./Reveal";

type Stop = {
  d: string;
  x: number;
  y: number;
  color: string;
  label: string;
  sub: string;
  lineDelay: string;
  pinDelay: string;
  anchorEnd?: boolean;
};

type Route = { center: { x: number; y: number }; labelX: number; labelY: number; labelText: string; stops: Stop[] };

const ROUTE_A: Route = {
  center: { x: 476.4, y: 254.0 },
  labelX: 396.4,
  labelY: 272.0,
  labelText: "Ade lives in Lagos",
  stops: [
    { d: "M476.4 254.0 Q520.6 160.5 463.9 74.0", x: 463.9, y: 74.0, color: "#6A3FF5", label: "London", sub: "Brand", lineDelay: "0.15s", pinDelay: "0.50s" },
    { d: "M476.4 254.0 Q544.8 236.2 595.7 285.2", x: 595.7, y: 285.2, color: "#415BFF", label: "Nairobi", sub: "Audience", lineDelay: "0.33s", pinDelay: "0.68s" },
    { d: "M476.4 254.0 Q376.5 108.2 200.0 117.2", x: 200.0, y: 117.2, color: "#2D7BFF", label: "New York", sub: "Paid from", lineDelay: "0.51s", pinDelay: "0.86s" },
    { d: "M476.4 254.0 Q557.0 294.8 564.3 384.8", x: 564.3, y: 384.8, color: "#00B2FF", label: "Johannesburg", sub: "Collaborator", lineDelay: "0.69s", pinDelay: "1.04s" },
    { d: "M476.4 254.0 Q548.2 164.7 661.8 179.2", x: 661.8, y: 179.2, color: "#00D4FF", label: "Dubai", sub: "Customers", lineDelay: "0.87s", pinDelay: "1.22s" },
  ],
};

const ROUTE_B: Route = {
  center: { x: 180.7, y: 105.2 },
  labelX: 100.7,
  labelY: 123.2,
  labelText: "Maya lives in Toronto",
  stops: [
    { d: "M180.7 105.2 Q320.9 13.0 472.7 84.4", x: 472.7, y: 84.4, color: "#6A3FF5", label: "Paris", sub: "Brand", lineDelay: "0.15s", pinDelay: "0.50s" },
    { d: "M180.7 105.2 Q314.5 206.8 297.9 374.0", x: 297.9, y: 374.0, color: "#415BFF", label: "São Paulo", sub: "Audience", lineDelay: "0.33s", pinDelay: "0.68s" },
    { d: "M180.7 105.2 Q556.1 -89.0 917.9 129.6", x: 917.9, y: 129.6, color: "#2D7BFF", label: "Seoul", sub: "Collaborator", lineDelay: "0.51s", pinDelay: "0.86s", anchorEnd: true },
    { d: "M180.7 105.2 Q410.9 209.6 661.8 179.2", x: 661.8, y: 179.2, color: "#00B2FF", label: "Dubai", sub: "Paid from", lineDelay: "0.69s", pinDelay: "1.04s" },
    { d: "M180.7 105.2 Q370.2 96.8 476.4 254.0", x: 476.4, y: 254.0, color: "#00D4FF", label: "Lagos", sub: "Customers", lineDelay: "0.87s", pinDelay: "1.22s" },
  ],
};

const DASHED_LINES_Y = [40, 140, 240, 340, 440];

const DOT_GRID_PATH = (() => {
  const parts: string[] = [];
  for (let y = 10; y <= 450; y += 20) {
    for (let x = 10; x <= 990; x += 20) {
      parts.push(`M${x} ${y}h0.01`);
    }
  }
  return parts.join("");
})();

function RouteGroup({ route, routeKey }: { route: Route; routeKey: "a" | "b" }) {
  return (
    <g data-route={routeKey}>
      {route.stops.map((s) => (
        <g key={s.label}>
          <path d={s.d} pathLength="1" stroke={s.color} strokeWidth="2" strokeLinecap="round" data-arc="" style={{ transitionDelay: s.lineDelay }} />
          <g data-pin="" style={{ transitionDelay: s.pinDelay }}>
            <circle cx={s.x} cy={s.y} r="10" fill={s.color} fillOpacity=".16" />
            <circle cx={s.x} cy={s.y} r="4.5" fill={s.color} />
            <text
              x={s.anchorEnd ? s.x - 14 : s.x + 14}
              y={s.y - 2}
              textAnchor={s.anchorEnd ? "end" : "start"}
              fontSize="20"
              fontWeight="700"
              fill="#080F19"
              style={sx("font-family:Satoshi,system-ui,sans-serif")}
            >
              {s.label}
            </text>
            <text
              x={s.anchorEnd ? s.x - 14 : s.x + 14}
              y={s.y + 19}
              textAnchor={s.anchorEnd ? "end" : "start"}
              fontSize="15"
              fill="#6B7280"
              style={sx("font-family:Satoshi,system-ui,sans-serif")}
            >
              {s.sub}
            </text>
          </g>
        </g>
      ))}
      <circle cx={route.center.x} cy={route.center.y} r="20" fill="#6A3FF5" fillOpacity=".12" />
      <circle cx={route.center.x} cy={route.center.y} r="8" fill="#080F19" stroke="#fff" strokeWidth="3" />
      <g>
        <rect x={route.labelX} y={route.labelY} width="160" height="32" rx="16" fill="#080F19" />
        <text x={route.labelX + 80} y={route.labelY + 20} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" style={sx("font-family:Satoshi,system-ui,sans-serif")}>
          {route.labelText}
        </text>
      </g>
    </g>
  );
}

function StopList({ route }: { route: Route }) {
  return (
    <>
      {route.stops.map((s) => (
        <div key={s.label} style={sx("display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid #E4DCFF")}>
          <span style={{ ...sx("flex:none;width:10px;height:10px;border-radius:9999px"), background: s.color }} />
          <span style={sx("flex:none;width:96px;font-size:12px;color:#6B7280")}>{s.sub}</span>
          <span style={sx("font-size:15px;font-weight:700;color:#080F19")}>{s.label}</span>
        </div>
      ))}
    </>
  );
}

const CURRENCIES = ["NGN", "GBP", "KES", "USD", "ZAR", "AED", "CAD", "EUR", "BRL", "KRW"];
const CURRENCY_BORDERS = ["#DCCFFF", "#C7DCFF", "#B5EEFF"];
const CURRENCY_DOTS = ["#6A3FF5", "#2D7BFF", "#00B2FF"];

export default function Global({
  who,
  pickA,
  pickB,
}: {
  who: "a" | "b";
  pickA: () => void;
  pickB: () => void;
}) {
  return (
    <section id="global" data-screen-label="Global" style={sx("background:#FFFFFF;border-top:1px solid #EAECF0")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <Reveal style={sx("max-width:820px;margin-bottom:64px")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
            Borderless
          </div>
          <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0 0 20px;color:#080F19;text-wrap:balance")}>
            The creator lives somewhere. <br />The business operates everywhere.
          </h2>
          <p style={sx("margin:0;font-size:18px;line-height:1.6;color:#6B7280;max-width:560px")}>
            Brands in one country, audiences in five, collaborators in three, payments in every currency. Rhevar treats that as normal.
          </p>
        </Reveal>

        <Reveal
          data-r="card"
          style={sx(
            "position:relative;overflow:hidden;border-radius:24px;border:1px solid #E4DCFF;background:linear-gradient(160deg,#F5F2FF 0%,#EEF6FF 55%,#EAFBFF 100%);padding:48px"
          )}
        >
          <div style={sx("position:relative;display:flex;flex-direction:column;gap:40px")}>
            <div
              data-r="split"
              data-who={who}
              style={sx("position:relative;display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:40px;align-items:center")}
            >
              <div style={sx("position:relative;min-width:0")}>
                <svg viewBox="0 0 1000 460" preserveAspectRatio="xMidYMid meet" style={sx("display:block;width:100%;height:auto;overflow:visible")} fill="none">
                  <path d={DOT_GRID_PATH} stroke="#B9A6FF" strokeOpacity=".55" strokeWidth="2.4" strokeLinecap="round" />
                  {DASHED_LINES_Y.map((y) => (
                    <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="#DCCFFF" strokeOpacity=".5" strokeDasharray="2 6" />
                  ))}
                  <line x1="0" y1="280" x2="1000" y2="280" stroke="#B9A6FF" strokeOpacity=".7" strokeDasharray="4 6" />
                  <RouteGroup route={ROUTE_A} routeKey="a" />
                  <RouteGroup route={ROUTE_B} routeKey="b" />
                </svg>
              </div>
              <div style={sx("min-width:0")}>
                <div
                  role="tablist"
                  style={sx(
                    "display:inline-flex;gap:4px;padding:4px;border-radius:9999px;background:rgba(255,255,255,.7);border:1px solid #E4DCFF;margin-bottom:20px"
                  )}
                >
                  <TabButton type="button" role="tab" aria-selected={who === "a"} onClick={pickA}>
                    Ade · Lagos
                  </TabButton>
                  <TabButton type="button" role="tab" aria-selected={who === "b"} onClick={pickB}>
                    Maya · Toronto
                  </TabButton>
                </div>
                <div data-list="a">
                  <div style={sx("font-size:13px;color:#6B7280;margin-bottom:10px")}>One creator, one week</div>
                  <StopList route={ROUTE_A} />
                </div>
                <div data-list="b">
                  <div style={sx("font-size:13px;color:#6B7280;margin-bottom:10px")}>Another creator, the same week</div>
                  <StopList route={ROUTE_B} />
                </div>
              </div>
            </div>

            <div style={sx("display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding-top:28px;border-top:1px solid #DCCFFF")}>
              <span style={sx("font-size:13px;font-weight:500;color:#6B7280")}>Paid and paying in</span>
              <div style={sx("display:flex;gap:6px;flex-wrap:wrap")}>
                {CURRENCIES.map((code, i) => (
                  <span
                    key={code}
                    style={{
                      ...sx(
                        "padding:5px 12px;border-radius:9999px;background:#fff;color:#080F19;font-size:13px;font-weight:500;font-variant-numeric:tabular-nums;display:inline-flex;align-items:center;gap:6px"
                      ),
                      border: `1px solid ${CURRENCY_BORDERS[i % 3]}`,
                    }}
                  >
                    <span style={{ ...sx("width:6px;height:6px;border-radius:9999px"), background: CURRENCY_DOTS[i % 3] }} />
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
