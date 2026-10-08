"use client";

import Image from "next/image";
import { sx } from "../lib/sx";
import { HoverLink } from "./primitives";

const FOOTER_LINK_PROPS = { $color: "rgba(255,255,255,.72)", $hoverColor: "#fff" };

export default function Footer({ pickBrand }: { pickBrand: () => void }) {
  return (
    <footer style={sx("background:#080F19;color:rgba(255,255,255,.66)")}>
      <div data-r="pad" style={sx("max-width:1280px;margin:0 auto;padding:64px 40px 40px")}>
        <div style={sx("display:flex;justify-content:space-between;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.10)")}>
          <div style={sx("max-width:380px")}>
            <div style={sx("display:flex;align-items:center;gap:12px;margin-bottom:16px")}>
              <Image src="/assets/rhevar-mark-white.svg" alt="Rhevar" width={62} height={80} style={{ height: "26px", width: "auto" }} />
              <span style={sx("font-weight:700;letter-spacing:.22em;font-size:14px;color:#fff")}>RHEVAR</span>
            </div>
            <p style={sx("margin:0;font-size:15px;line-height:1.6")}>
              Infrastructure for the creator business. <br />
              <br />
              For the Ambitious.
            </p>
          </div>
          <div style={sx("display:flex;gap:64px;flex-wrap:wrap;font-size:14px")}>
            <div style={sx("display:flex;flex-direction:column;gap:10px")}>
              <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>Product</span>
              <HoverLink href="#rhevar" {...FOOTER_LINK_PROPS}>The connected business</HoverLink>
              <HoverLink href="#product" {...FOOTER_LINK_PROPS}>Inside Rhevar</HoverLink>
            </div>
            <div style={sx("display:flex;flex-direction:column;gap:10px")}>
              <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>For</span>
              <HoverLink href="#creators" {...FOOTER_LINK_PROPS}>Creators</HoverLink>
              <HoverLink href="#join" onClick={pickBrand} {...FOOTER_LINK_PROPS}>Brands</HoverLink>
            </div>
            <div style={sx("display:flex;flex-direction:column;gap:10px")}>
              <span style={sx("font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.45)")}>Company</span>
              <HoverLink href="#future" {...FOOTER_LINK_PROPS}>Vision</HoverLink>
              <HoverLink href="mailto:hello@rhevar.com" {...FOOTER_LINK_PROPS}>Contact us</HoverLink>
              <HoverLink href="#" {...FOOTER_LINK_PROPS}>Privacy</HoverLink>
              <HoverLink href="#" {...FOOTER_LINK_PROPS}>Terms</HoverLink>
            </div>
          </div>
        </div>
        <div style={sx("display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:24px;font-size:13px;color:rgba(255,255,255,.45)")}>
          <span>© 2026 Rhevar</span>
          <HoverLink href="mailto:hello@rhevar.com" {...FOOTER_LINK_PROPS}>hello@rhevar.com</HoverLink>
        </div>
      </div>
    </footer>
  );
}
