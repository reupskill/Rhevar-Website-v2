"use client";

import { sx } from "../lib/sx";
import { Button, HoverLink, TabButton } from "./primitives";
import Reveal from "./Reveal";
import { AUD } from "../lib/useHomeState";

export default function Join({
  aud,
  sent,
  pickCreator,
  pickBrand,
  submit,
}: {
  aud: 0 | 1;
  sent: boolean;
  pickCreator: () => void;
  pickBrand: () => void;
  submit: () => void;
}) {
  const info = AUD[aud];

  return (
    <section id="join" data-screen-label="Join" style={sx("position:relative;overflow:hidden;background:#FFFFFF")}>
      <div
        style={sx(
          "position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 45% 55% at 90% 20%,rgba(106,63,245,.10),transparent 70%),radial-gradient(ellipse 40% 50% at 5% 95%,rgba(0,212,255,.10),transparent 70%)"
        )}
      />
      <div data-r="pad" style={sx("position:relative;max-width:1280px;margin:0 auto;padding:120px 40px")}>
        <div data-r="split" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:start")}>
          <Reveal>
            <div role="tablist" style={sx("display:inline-flex;gap:4px;padding:4px;border-radius:9999px;background:#EAECF0;margin-bottom:32px")}>
              <TabButton type="button" role="tab" aria-selected={aud === 0} onClick={pickCreator}>
                I’m a creator
              </TabButton>
              <TabButton type="button" role="tab" aria-selected={aud === 1} onClick={pickBrand}>
                I work with creators
              </TabButton>
            </div>
            <h2 style={sx("font-size:clamp(34px,4.4vw,60px);font-weight:700;line-height:1.02;letter-spacing:-.035em;margin:0 0 20px;color:#080F19;text-wrap:balance")}>
              {info.title}
            </h2>
            <p style={sx("margin:0 0 32px;font-size:18px;line-height:1.6;color:#6B7280;max-width:480px")}>{info.sub}</p>
            <div style={sx("display:flex;flex-direction:column;max-width:480px;border-top:1px solid #EAECF0")}>
              {info.points.map((pt) => (
                <div key={pt} style={sx("display:flex;gap:12px;padding:13px 0;border-bottom:1px solid #EAECF0;font-size:15px;color:#1A1F2E")}>
                  <span style={sx("flex:none;width:22px;height:22px;border-radius:9999px;background:#F1ECFF;color:#6A3FF5;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center")}>
                    ✓
                  </span>
                  {pt}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal data-r="card" style={sx("background:#fff;border:1px solid #EAECF0;border-radius:24px;box-shadow:0 24px 64px rgba(8,15,25,.10);padding:36px")}>
            {!sent ? (
              <>
                <div style={sx("font-size:15px;font-weight:700;color:#080F19;margin-bottom:24px")}>Request early access</div>
                <div data-r="c2" style={sx("display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px")}>
                  <label style={sx("display:flex;flex-direction:column;gap:6px")}>
                    <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>Full name</span>
                    <input type="text" placeholder={info.namePh} style={sx("height:46px;padding:0 14px;border:1px solid #EAECF0;border-radius:12px;font-family:inherit;font-size:15px;color:#1A1F2E;background:#fff")} />
                  </label>
                  <label style={sx("display:flex;flex-direction:column;gap:6px")}>
                    <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>{info.orgLabel}</span>
                    <input type="text" placeholder={info.orgPh} style={sx("height:46px;padding:0 14px;border:1px solid #EAECF0;border-radius:12px;font-family:inherit;font-size:15px;color:#1A1F2E;background:#fff")} />
                  </label>
                </div>
                <div data-r="c2" style={sx("display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px")}>
                  <label style={sx("display:flex;flex-direction:column;gap:6px")}>
                    <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>{info.emailLabel}</span>
                    <input type="email" placeholder={info.emailPh} style={sx("height:46px;padding:0 14px;border:1px solid #EAECF0;border-radius:12px;font-family:inherit;font-size:15px;color:#1A1F2E;background:#fff")} />
                  </label>
                  <label style={sx("display:flex;flex-direction:column;gap:6px")}>
                    <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#6B7280")}>{info.extraLabel}</span>
                    <input type="text" placeholder={info.extraPh} style={sx("height:46px;padding:0 14px;border:1px solid #EAECF0;border-radius:12px;font-family:inherit;font-size:15px;color:#1A1F2E;background:#fff")} />
                  </label>
                </div>
                <Button as="button" type="button" onClick={submit} $variant="gradient" $full>
                  {info.cta}
                </Button>
                <p style={sx("margin:14px 0 0;font-size:13px;color:#6B7280;text-align:center")}>
                  Early access opens in waves. We reply to every request. Questions?{" "}
                  <HoverLink href="mailto:hello@rhevar.com" $color="#6A3FF5" $hoverColor="#4F2FD0" $fontWeight={500}>
                    hello@rhevar.com
                  </HoverLink>
                </p>
              </>
            ) : (
              <div style={sx("padding:32px 0;text-align:center")}>
                <div style={sx("width:48px;height:48px;margin:0 auto 16px;border-radius:9999px;background:rgba(0,163,108,.12);color:#00A36C;font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center")}>
                  ✓
                </div>
                <h3 style={sx("font-size:24px;font-weight:700;margin:0 0 8px;color:#080F19")}>You’re on the list.</h3>
                <p style={sx("margin:0;font-size:15px;color:#6B7280")}>We’ll be in touch as your wave opens.</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
