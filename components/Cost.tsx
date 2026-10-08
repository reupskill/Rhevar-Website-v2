"use client";

import { sx } from "../lib/sx";
import Reveal from "./Reveal";

const DAYS = [
  { label: "Mon", chase: 70, work: 34 },
  { label: "Tue", chase: 82, work: 28 },
  { label: "Wed", chase: 64, work: 40 },
  { label: "Thu", chase: 90, work: 22 },
  { label: "Fri", chase: 76, work: 30 },
  { label: "Sat", chase: 40, work: 46 },
  { label: "Sun", chase: 30, work: 20 },
];

const CARD_HEAD = sx(
  "padding:28px;background:#FFF8F3;border-bottom:1px solid #F7E4D6;min-height:236px;display:flex;flex-direction:column;justify-content:center"
);
const CARD_WRAP = sx(
  "display:flex;flex-direction:column;border:1px solid #EAECF0;border-radius:24px;background:#fff;overflow:hidden;box-shadow:0 1px 2px rgba(8,15,25,.04)"
);
const CARD_FOOT = sx("padding:28px 28px 32px");
const NUM_LABEL = sx("display:flex;align-items:baseline;gap:14px;margin-bottom:10px");
const NUM_SPAN = sx("font-size:13px;font-weight:700;color:#C86A2E;font-variant-numeric:tabular-nums");
const TITLE_SPAN = sx("font-size:clamp(30px,3.2vw,42px);font-weight:700;letter-spacing:-.03em;line-height:1;color:#080F19");
const BODY_P = sx("margin:0;font-size:16px;line-height:1.55;color:#6B7280;max-width:440px");

export default function Cost() {
  return (
    <section id="cost" data-screen-label="The cost" style={sx("background:#FFFFFF;border-top:1px solid #EAECF0")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <Reveal style={sx("max-width:760px;margin-bottom:56px")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
            The cost
          </div>
          <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0;color:#080F19;text-wrap:balance")}>
            Fragmentation has a price. Creators pay it every week.
          </h2>
        </Reveal>

        <div data-r="split" style={sx("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px")}>
          {/* 01 Time */}
          <Reveal style={CARD_WRAP}>
            <div style={CARD_HEAD}>
              <div style={sx("display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px")}>
                <span style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#A9561F")}>
                  A week, hour by hour
                </span>
              </div>
              <div style={sx("display:flex;gap:10px;align-items:flex-end;height:132px")}>
                {DAYS.map((d) => (
                  <div key={d.label} style={sx("flex:1;display:flex;flex-direction:column;align-items:stretch;gap:3px")}>
                    <span
                      style={{
                        ...sx("border-radius:6px;background:repeating-linear-gradient(135deg,#F59452 0 6px,#F7A86F 6px 12px)"),
                        height: d.chase,
                      }}
                    />
                    <span style={{ ...sx("border-radius:6px;background:#6A3FF5"), height: d.work }} />
                    <span style={sx("font-size:11px;color:#9A7B66;text-align:center;margin-top:4px")}>{d.label}</span>
                  </div>
                ))}
              </div>
              <div style={sx("display:flex;gap:18px;flex-wrap:wrap;margin-top:14px;font-size:12px;color:#5C4A3D")}>
                <span style={sx("display:inline-flex;align-items:center;gap:6px")}>
                  <span style={sx("width:10px;height:10px;border-radius:3px;background:#F59452")} />
                  Chasing, re-typing, reconciling
                </span>
                <span style={sx("display:inline-flex;align-items:center;gap:6px")}>
                  <span style={sx("width:10px;height:10px;border-radius:3px;background:#6A3FF5")} />
                  The work
                </span>
              </div>
            </div>
            <div style={CARD_FOOT}>
              <div style={NUM_LABEL}>
                <span style={NUM_SPAN}>01</span>
                <span style={TITLE_SPAN}>Time</span>
              </div>
              <p style={BODY_P}>The best hours go to chasing, re-typing and reconciling, not to the work.</p>
            </div>
          </Reveal>

          {/* 02 Opportunities */}
          <Reveal style={CARD_WRAP}>
            <div style={CARD_HEAD}>
              <div style={sx("background:#fff;border:1px solid #F1DCCB;border-radius:14px;padding:14px 16px;box-shadow:0 2px 8px rgba(8,15,25,.06)")}>
                <div style={sx("display:flex;align-items:center;gap:10px")}>
                  <span style={sx("flex:none;width:30px;height:30px;border-radius:9999px;background:#EAECF0;font-size:11px;font-weight:700;color:#1A1F2E;display:flex;align-items:center;justify-content:center")}>
                    NF
                  </span>
                  <div style={sx("flex:1;min-width:0")}>
                    <div style={sx("font-size:13px;font-weight:700;color:#080F19")}>Northfield · Spring campaign</div>
                    <div style={sx("font-size:12px;color:#6B7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>
                      We&apos;d love to work with you on our launch…
                    </div>
                  </div>
                  <span style={sx("flex:none;padding:3px 9px;border-radius:9999px;background:#FFF1E7;color:#A9561F;font-size:11px;font-weight:700")}>
                    Unread · 72h
                  </span>
                </div>
              </div>
              <div style={sx("display:flex;align-items:center;gap:10px;margin:14px 0 0 14px")}>
                <span style={sx("width:2px;height:22px;background:repeating-linear-gradient(180deg,#F59452 0 4px,transparent 4px 8px)")} />
                <span style={sx("font-size:12px;color:#9A7B66")}>Mon 09:12 → Thu 16:40</span>
              </div>
              <div style={sx("display:flex;align-items:center;gap:10px;margin-top:10px;padding:12px 16px;border-radius:14px;background:#FDECEC;border:1px solid #F6CFCF")}>
                <span style={sx("flex:none;width:20px;height:20px;border-radius:9999px;background:#D14343;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center")}>
                  ×
                </span>
                <span style={sx("flex:1;font-size:13px;color:#7A2424")}>Brief went to another creator</span>
                <span style={sx("font-size:13px;font-weight:700;color:#A33232;text-decoration:line-through;font-variant-numeric:tabular-nums")}>
                  $4,800
                </span>
              </div>
            </div>
            <div style={CARD_FOOT}>
              <div style={NUM_LABEL}>
                <span style={NUM_SPAN}>02</span>
                <span style={TITLE_SPAN}>Opportunities</span>
              </div>
              <p style={BODY_P}>An inbound brand email answered three days late is a deal someone else closed.</p>
            </div>
          </Reveal>

          {/* 03 Revenue */}
          <Reveal style={CARD_WRAP}>
            <div style={CARD_HEAD}>
              <div style={sx("display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px")}>
                <span style={sx("font-size:12px;color:#9A7B66")}>Invoiced</span>
                <span style={sx("font-size:15px;font-weight:700;color:#080F19;font-variant-numeric:tabular-nums")}>$4,800</span>
              </div>
              <div style={sx("display:flex;gap:3px;height:16px;margin-bottom:6px")}>
                <span style={sx("flex:3650;border-radius:4px;background:#1A1F2E")} />
                <span style={sx("flex:210;border-radius:4px;background:#F7A86F")} />
                <span style={sx("flex:340;border-radius:4px;background:#F59452")} />
                <span style={sx("flex:600;border-radius:4px;background:#D14343")} />
              </div>
              <div style={sx("display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px")}>
                <span style={sx("font-size:12px;color:#9A7B66")}>Actually received</span>
                <span style={sx("font-size:15px;font-weight:700;color:#080F19;font-variant-numeric:tabular-nums")}>$3,650</span>
              </div>
              <div style={sx("border-top:1px dashed #F1DCCB;padding-top:8px")}>
                {[
                  { label: "Currency conversion", color: "#F7A86F", value: "−$210" },
                  { label: "Fees across three apps", color: "#F59452", value: "−$340" },
                  { label: "Kill fee never claimed", color: "#D14343", value: "−$600" },
                ].map((row) => (
                  <div key={row.label} style={sx("display:flex;justify-content:space-between;gap:12px;font-size:12px;padding:5px 0")}>
                    <span style={sx("display:inline-flex;align-items:center;gap:8px;color:#5C4A3D")}>
                      <span style={{ ...sx("width:8px;height:8px;border-radius:2px"), background: row.color }} />
                      {row.label}
                    </span>
                    <span style={sx("font-weight:700;color:#A33232;font-variant-numeric:tabular-nums")}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={CARD_FOOT}>
              <div style={NUM_LABEL}>
                <span style={NUM_SPAN}>03</span>
                <span style={TITLE_SPAN}>Revenue</span>
              </div>
              <p style={BODY_P}>Late invoices, lost fees, weak terms and conversion costs, all invisible until year end.</p>
            </div>
          </Reveal>

          {/* 04 Leverage */}
          <Reveal style={CARD_WRAP}>
            <div style={CARD_HEAD}>
              <div style={sx("display:flex;flex-direction:column;gap:10px")}>
                <div style={sx("align-self:flex-start;max-width:85%;padding:10px 14px;border-radius:14px 14px 14px 4px;background:#fff;border:1px solid #F1DCCB;font-size:13px;line-height:1.45;color:#1A1F2E;box-shadow:0 2px 8px rgba(8,15,25,.06)")}>
                  <span style={sx("display:block;font-size:11px;font-weight:700;color:#6B7280;margin-bottom:2px")}>Brand</span>
                  Can you share results from past campaigns? Our budget is $2,000.
                </div>
                <div style={sx("align-self:flex-end;max-width:85%;padding:10px 14px;border-radius:14px 14px 4px 14px;background:#FFF1E7;border:1px solid #F7D2B8;font-size:13px;line-height:1.45;color:#5C4A3D")}>
                  <span style={sx("display:block;font-size:11px;font-weight:700;color:#A9561F;margin-bottom:2px")}>You</span>
                  Let me dig them out of my DMs
                  <span style={sx("display:inline-flex;gap:3px;margin-left:6px;vertical-align:middle")}>
                    <span style={sx("width:4px;height:4px;border-radius:9999px;background:#F59452")} />
                    <span style={sx("width:4px;height:4px;border-radius:9999px;background:#F59452;opacity:.6")} />
                    <span style={sx("width:4px;height:4px;border-radius:9999px;background:#F59452;opacity:.3")} />
                  </span>
                </div>
                <div style={sx("display:flex;justify-content:space-between;gap:10px;padding:10px 14px;border-radius:12px;border:1px dashed #E3B999;font-size:12px;color:#9A7B66")}>
                  <span>Track record on file</span>
                  <span style={sx("font-weight:700;color:#A33232")}>None</span>
                </div>
              </div>
            </div>
            <div style={CARD_FOOT}>
              <div style={NUM_LABEL}>
                <span style={NUM_SPAN}>04</span>
                <span style={TITLE_SPAN}>Leverage</span>
              </div>
              <p style={BODY_P}>Without a record of the business, every negotiation starts from zero.</p>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="p"
          style={sx(
            "margin:48px 0 0;font-size:clamp(22px,2.4vw,30px);font-weight:500;letter-spacing:-.02em;line-height:1.3;color:#080F19;max-width:820px;text-wrap:balance"
          )}
        >
          Creators shouldn’t have to become{" "}
          <span
            style={sx(
              "background:linear-gradient(90deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent"
            )}
          >
            their own infrastructure.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
