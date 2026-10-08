"use client";

import Image from "next/image";
import { sx } from "../lib/sx";
import Reveal from "./Reveal";

const CARD_WRAP = sx(
  "display:flex;flex-direction:column;border:1px solid #EAECF0;border-radius:24px;background:#fff;overflow:hidden;box-shadow:0 1px 2px rgba(8,15,25,.04)"
);
const GRAD_HEAD = sx(
  "padding:28px;background:linear-gradient(160deg,#F5F2FF 0%,#EEF6FF 60%,#EAFBFF 100%);border-bottom:1px solid #E4DCFF;min-height:236px;display:flex;flex-direction:column;justify-content:center"
);
const FOOT = sx("padding:24px 28px 32px");
const BEFORE_ROW = sx("display:flex;align-items:center;gap:10px;margin-bottom:14px");
const BEFORE_PILL = sx(
  "flex:none;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C86A2E;padding:3px 8px;border-radius:9999px;background:#FFF1E7"
);
const BEFORE_QUOTE = sx("font-size:14px;color:#6B7280;text-decoration:line-through;text-decoration-color:rgba(107,114,128,.4)");
const HEADLINE = sx("font-size:clamp(24px,2.4vw,30px);font-weight:700;letter-spacing:-.02em;line-height:1.15;color:#080F19;margin-bottom:10px;text-wrap:balance");
const DESC = sx("margin:0;font-size:15px;line-height:1.55;color:#6B7280;max-width:440px");

const KANBAN_COLS: { dotColor: string; label: string; items: { name: string; meta: string }[] }[] = [
  { dotColor: "#6A3FF5", label: "Inbound", items: [{ name: "Kumo Seoul", meta: "DM" }, { name: "Podcast ad", meta: "Email" }] },
  { dotColor: "#415BFF", label: "Proposal", items: [{ name: "Atelier Paris", meta: "$3,200" }] },
  { dotColor: "#2D7BFF", label: "Signed", items: [{ name: "Northfield", meta: "$4,800" }, { name: "Lumen", meta: "$1,500" }] },
  { dotColor: "#00B2FF", label: "Paid", items: [{ name: "Brightside", meta: "$2,400" }] },
];

const CHECKLIST = [
  { text: "Replied to Kumo Seoul with your rates", time: "10:02" },
  { text: "Drafted the Atelier Paris proposal", time: "11:40" },
  { text: "Followed up on the Lumen invoice", time: "14:15" },
];

export default function Possible() {
  return (
    <section id="possible" data-screen-label="What becomes possible" style={sx("background:#FFFFFF;border-top:1px solid #EAECF0")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <Reveal style={sx("max-width:760px;margin-bottom:56px")}>
          <div style={sx("font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#6A3FF5;margin-bottom:20px")}>
            What changes
          </div>
          <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0;color:#080F19;text-wrap:balance")}>
            Spend less time running your business. More time building it.
          </h2>
        </Reveal>

        <div data-r="split" style={sx("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px")}>
          {/* Card 1: opportunity kanban */}
          <Reveal style={CARD_WRAP}>
            <div style={GRAD_HEAD}>
              <div style={sx("display:flex;gap:8px")}>
                {KANBAN_COLS.map((col) => (
                  <div key={col.label} style={sx("flex:1;min-width:0;display:flex;flex-direction:column;gap:6px")}>
                    <div style={sx("display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#1A1F2E;margin-bottom:2px")}>
                      <span style={{ ...sx("width:6px;height:6px;border-radius:9999px"), background: col.dotColor }} />
                      {col.label}
                    </div>
                    {col.items.map((item) => (
                      <div key={item.name} style={sx("padding:8px 9px;border-radius:10px;background:#fff;border:1px solid #E4DCFF;box-shadow:0 1px 2px rgba(8,15,25,.04)")}>
                        <div style={sx("font-size:11px;font-weight:700;color:#080F19;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>
                          {item.name}
                        </div>
                        <div style={sx("font-size:11px;color:#6B7280;font-variant-numeric:tabular-nums")}>{item.meta}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div style={FOOT}>
              <div style={BEFORE_ROW}>
                <span style={BEFORE_PILL}>Before</span>
                <span style={BEFORE_QUOTE}>“I have opportunities everywhere but no system.”</span>
              </div>
              <div style={HEADLINE}>My business has structure.</div>
              <p style={DESC}>Every brand email, DM and referral becomes an opportunity with a next step.</p>
            </div>
          </Reveal>

          {/* Card 2: revenue this month */}
          <Reveal style={CARD_WRAP}>
            <div style={GRAD_HEAD}>
              <div style={sx("font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6A3FF5;margin-bottom:6px")}>
                This month
              </div>
              <div style={sx("font-size:44px;font-weight:700;letter-spacing:-.035em;font-variant-numeric:tabular-nums;color:#080F19;line-height:1")}>
                $19,200
              </div>
              <div style={sx("display:flex;gap:3px;height:12px;margin:18px 0 12px")}>
                <span style={sx("flex:31;border-radius:4px;background:#6A3FF5")} />
                <span style={sx("flex:19;border-radius:4px;background:#415BFF")} />
                <span style={sx("flex:17;border-radius:4px;background:#2D7BFF")} />
                <span style={sx("flex:15;border-radius:4px;background:#00B2FF")} />
                <span style={sx("flex:18;border-radius:4px;background:#00D4FF")} />
              </div>
              <div style={sx("display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:#1A1F2E")}>
                {[
                  { label: "Brand deals", color: "#6A3FF5" },
                  { label: "Community", color: "#415BFF" },
                  { label: "Course", color: "#2D7BFF" },
                  { label: "Consulting", color: "#00B2FF" },
                ].map((l) => (
                  <span key={l.label} style={sx("display:inline-flex;align-items:center;gap:6px")}>
                    <span style={{ ...sx("width:8px;height:8px;border-radius:2px"), background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            <div style={FOOT}>
              <div style={BEFORE_ROW}>
                <span style={BEFORE_PILL}>Before</span>
                <span style={BEFORE_QUOTE}>“I don’t know what’s happening across my work.”</span>
              </div>
              <div style={HEADLINE}>I can see my business.</div>
              <p style={DESC}>What you earned, where it came from and what is coming next, in one number.</p>
            </div>
          </Reveal>

          {/* Card 3: Rhevar One checklist */}
          <Reveal style={CARD_WRAP}>
            <div style={GRAD_HEAD}>
              <div style={sx("background:#fff;border:1px solid #E4DCFF;border-radius:16px;padding:14px 16px;box-shadow:0 12px 32px rgba(106,63,245,.10)")}>
                <div style={sx("display:flex;align-items:center;gap:10px;margin-bottom:6px")}>
                  <Image src="/assets/rhevar-mark-fullcolor.svg" alt="" width={62} height={80} style={{ height: "18px", width: "auto" }} />
                  <span style={sx("font-size:13px;font-weight:700;color:#080F19")}>Rhevar One</span>
                  <span style={sx("margin-left:auto;font-size:11px;font-weight:500;color:#00784F;display:inline-flex;align-items:center;gap:6px")}>
                    <span style={sx("width:6px;height:6px;border-radius:9999px;background:#00A36C")} />
                    Working while you film
                  </span>
                </div>
                {CHECKLIST.map((row) => (
                  <div key={row.text} style={sx("display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1px solid #E4DCFF;font-size:13px")}>
                    <span style={sx("flex:none;width:18px;height:18px;border-radius:9999px;background:rgba(0,163,108,.12);color:#00A36C;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center")}>
                      ✓
                    </span>
                    <span style={sx("flex:1;color:#1A1F2E")}>{row.text}</span>
                    <span style={sx("font-variant-numeric:tabular-nums;color:#6B7280;font-size:12px")}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={FOOT}>
              <div style={BEFORE_ROW}>
                <span style={BEFORE_PILL}>Before</span>
                <span style={BEFORE_QUOTE}>“I spend hours coordinating everything.”</span>
              </div>
              <div style={HEADLINE}>My business runs with me, not because of me.</div>
              <p style={DESC}>Rhevar One answers brand emails, drafts proposals and follows up while you work.</p>
            </div>
          </Reveal>

          {/* Card 4: profile */}
          <Reveal style={CARD_WRAP}>
            <div style={GRAD_HEAD}>
              <div style={sx("background:#fff;border:1px solid #E4DCFF;border-radius:16px;padding:16px;box-shadow:0 12px 32px rgba(106,63,245,.10)")}>
                <div style={sx("display:flex;align-items:center;gap:12px")}>
                  <span style={sx("flex:none;width:44px;height:44px;border-radius:9999px;background:linear-gradient(135deg,#6A3FF5 0%,#415BFF 55%,#00B2FF 100%);color:#fff;font-size:15px;font-weight:700;display:flex;align-items:center;justify-content:center")}>
                    SM
                  </span>
                  <div style={sx("flex:1;min-width:0")}>
                    <div style={sx("font-size:15px;font-weight:700;color:#080F19")}>Sarah Mensah</div>
                    <div style={sx("font-size:12px;color:#6B7280")}>Creator · Educator · Consultant</div>
                  </div>
                  <span style={sx("flex:none;padding:4px 10px;border-radius:9999px;background:#EAF2FF;color:#1F5FCC;font-size:11px;font-weight:700")}>
                    ✓ Verified
                  </span>
                </div>
                <div style={sx("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:14px")}>
                  <div style={sx("padding:8px 10px;border-radius:10px;background:#F5F2FF")}>
                    <div style={sx("font-size:16px;font-weight:700;color:#080F19;font-variant-numeric:tabular-nums")}>24</div>
                    <div style={sx("font-size:11px;color:#6B7280")}>deals delivered</div>
                  </div>
                  <div style={sx("padding:8px 10px;border-radius:10px;background:#EEF6FF")}>
                    <div style={sx("font-size:16px;font-weight:700;color:#080F19")}>On time</div>
                    <div style={sx("font-size:11px;color:#6B7280")}>every delivery</div>
                  </div>
                  <div style={sx("padding:8px 10px;border-radius:10px;background:#EAFBFF")}>
                    <div style={sx("font-size:16px;font-weight:700;color:#080F19;font-variant-numeric:tabular-nums")}>6</div>
                    <div style={sx("font-size:11px;color:#6B7280")}>countries</div>
                  </div>
                </div>
                <div style={sx("display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:12px;font-size:11px;color:#6B7280")}>
                  Shared with
                  {["Northfield", "Atelier Paris", "Kumo Seoul"].map((n) => (
                    <span key={n} style={sx("padding:3px 8px;border-radius:9999px;border:1px solid #E4DCFF;color:#1A1F2E")}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={FOOT}>
              <div style={BEFORE_ROW}>
                <span style={BEFORE_PILL}>Before</span>
                <span style={BEFORE_QUOTE}>“Every brand relationship starts from zero.”</span>
              </div>
              <div style={HEADLINE}>My business identity travels with me.</div>
              <p style={DESC}>A verified profile and track record that stays current. Never introduce yourself twice.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
