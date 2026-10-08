"use client";

import Image from "next/image";
import { sx } from "../lib/sx";
import { Button, HoverLink } from "./primitives";

export default function Header({
  pickCreator,
  pickBrand,
}: {
  pickCreator: () => void;
  pickBrand: () => void;
}) {
  return (
    <header
      style={sx(
        "position:sticky;top:0;z-index:40;background:rgba(255,255,255,.86);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid #EAECF0"
      )}
    >
      <div
        data-r="pad"
        style={sx(
          "max-width:1280px;margin:0 auto;padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:32px"
        )}
      >
        <a
          href="#"
          style={sx("display:inline-flex;align-items:center;gap:12px")}
        >
          <Image
            src="/assets/rhevar-mark-fullcolor.svg"
            alt="Rhevar"
            width={62}
            height={80}
            style={{ height: "26px", width: "auto", display: "block" }}
          />
          <span
            style={sx(
              "font-weight:700;letter-spacing:.22em;font-size:14px;color:#080F19"
            )}
          >
            RHEVAR
          </span>
        </a>
        <nav
          data-r="nav"
          style={sx("display:flex;align-items:center;gap:32px")}
        >
          <HoverLink
            href="#rhevar"
            $color="#6B7280"
            $hoverColor="#080F19"
            style={sx("font-size:14px;font-weight:500")}
          >
            Product
          </HoverLink>
          <HoverLink
            href="#creators"
            $color="#6B7280"
            $hoverColor="#080F19"
            style={sx("font-size:14px;font-weight:500")}
          >
            For Creators
          </HoverLink>
          <HoverLink
            href="#join"
            onClick={pickBrand}
            $color="#6B7280"
            $hoverColor="#080F19"
            style={sx("font-size:14px;font-weight:500")}
          >
            For Brands
          </HoverLink>
          <HoverLink
            href="#future"
            $color="#6B7280"
            $hoverColor="#080F19"
            style={sx("font-size:14px;font-weight:500")}
          >
            Company
          </HoverLink>
        </nav>
        <Button href="#join" onClick={pickCreator} $variant="dark">
          Get early access
        </Button>
      </div>
    </header>
  );
}
