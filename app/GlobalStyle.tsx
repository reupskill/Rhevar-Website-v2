"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --rh-purple: #6A3FF5;
    --rh-blue: #2D7BFF;
    --rh-cyan: #00D4FF;
    --rh-navy: #080F19;

    --rh-charcoal: #1A1F2E;
    --rh-gray: #6B7280;
    --rh-light-gray: #EAECF0;
    --rh-off-white: #F7F8FA;
    --rh-white: #FFFFFF;

    --rh-success: #00A36C;
    --rh-warning: #F59452;
    --rh-danger: #D14343;
    --rh-info: #2D7BFF;

    --rh-success-tint: #E5F6F0;
    --rh-warning-tint: #FEF1E8;
    --rh-danger-tint: #FBEAEA;
    --rh-info-tint: #EAF2FF;
    --rh-purple-tint: #F0EBFE;

    --rh-gradient: linear-gradient(135deg, #6A3FF5 0%, #415BFF 55%, #00B2FF 100%);
    --rh-gradient-x: linear-gradient(90deg, #6A3FF5 0%, #415BFF 55%, #00B2FF 100%);

    --rh-font: var(--font-satoshi), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif;

    --rh-radius-control: 12px;
    --rh-radius-card: 16px;
    --rh-radius-panel: 24px;
    --rh-radius-pill: 999px;

    --rh-hairline: 1px solid #EAECF0;
    --rh-hairline-dark: 1px solid rgba(255, 255, 255, .10);

    --rh-shadow-rest: 0 1px 2px rgba(8, 15, 25, .04);
    --rh-shadow-raised: 0 2px 8px rgba(8, 15, 25, .06);
    --rh-shadow-float: 0 12px 32px rgba(8, 15, 25, .10);
    --rh-shadow-modal: 0 24px 64px rgba(8, 15, 25, .16);
    --rh-shadow-brand: 0 8px 24px rgba(106, 63, 245, .24);
    --rh-focus-ring: 0 0 0 3px rgba(106, 63, 245, .24);

    --rh-duration-base: 150ms;
    --rh-ease: cubic-bezier(.22, .61, .36, 1);
  }

  html { scroll-behavior: smooth; }
  body { margin: 0; background: #FFFFFF; font-family: var(--rh-font); color: #1A1F2E; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  * { box-sizing: border-box; }
  a { color: #2D7BFF; text-decoration: none; }
  a:hover { color: #1F5FCC; }
  section[id] { scroll-margin-top: 64px; }

  [data-rv] { transition: opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1); }
  [data-rv="wait"] { opacity: 0; transform: translateY(10px); }

  [data-node] { transform: translate(-50%,-50%) translate(var(--dx),var(--dy)) rotate(var(--r)); transition: transform 1.1s cubic-bezier(.22,.61,.36,1), opacity .8s cubic-bezier(.22,.61,.36,1), border-color .8s, background .8s, color .8s; }
  [data-graph="on"] [data-node] { transform: translate(-50%,-50%); }
  [data-graph="off"] [data-flow] { opacity: 0; }
  [data-graph="off"] [data-node] { opacity: .62; }
  [data-graph] [data-link] { opacity: 0; transition: opacity .8s cubic-bezier(.22,.61,.36,1); }
  [data-graph="on"] [data-link] { opacity: 1; }
  [data-graph] [data-core] { transform: translate(-50%,-50%) scale(.86); opacity: .5; transition: transform .9s cubic-bezier(.22,.61,.36,1), opacity .9s; }
  [data-graph="on"] [data-core] { transform: translate(-50%,-50%) scale(1); opacity: 1; }
  [data-graph] [data-ring] { opacity: 0; transition: opacity 1.2s .6s; }
  [data-graph="on"] [data-ring] { opacity: 1; }

  [aria-pressed="true"] { background: #6A3FF5 !important; border-color: #6A3FF5 !important; color: #fff !important; box-shadow: 0 8px 24px rgba(106,63,245,.24); }
  [role="tab"][aria-selected="true"] { background: #fff !important; color: #080F19 !important; box-shadow: 0 1px 2px rgba(8,15,25,.08); }
  [data-stop="1"] [data-dot] { background: #6A3FF5 !important; box-shadow: 0 0 0 6px rgba(106,63,245,.18); }
  [data-stop="1"] [data-city] { color: #080F19 !important; }

  [data-who] [data-arc] { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 1s cubic-bezier(.22,.61,.36,1); }
  [data-who] [data-pin] { opacity: 0; transition: opacity .5s cubic-bezier(.22,.61,.36,1); }
  [data-who="a"] [data-route="a"] [data-arc], [data-who="b"] [data-route="b"] [data-arc] { stroke-dashoffset: 0; }
  [data-who="a"] [data-route="a"] [data-pin], [data-who="b"] [data-route="b"] [data-pin] { opacity: 1; }
  [data-who="a"] [data-route="b"], [data-who="b"] [data-route="a"] { opacity: 0; pointer-events: none; }
  [data-who] [data-route] { transition: opacity .4s; }
  [data-who="a"] [data-list="b"], [data-who="b"] [data-list="a"] { display: none; }

  input:focus { outline: none; border-color: #2D7BFF !important; box-shadow: 0 0 0 3px rgba(106,63,245,.24); }

  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }

  @media (max-width: 1040px) {
    [data-r~="split"] { grid-template-columns: minmax(0,1fr) !important; gap: 40px !important; }
    [data-r~="nav"] { display: none !important; }
    [data-r~="heroart"] { justify-self: center !important; max-width: 420px !important; }
    [data-r~="cost"] { grid-template-columns: minmax(0,1fr) !important; gap: 8px !important; }
  }
  @media (max-width: 1180px) {
    [data-r~="route"] { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
    [data-r~="route"] > div { flex: none !important; flex-direction: column !important; align-items: flex-start !important; }
    [data-r~="route"] [data-line] { flex: none !important; width: 2px !important; min-width: 0 !important; height: 18px !important; margin: 4px 0 4px 4px !important; }
  }
  @media (max-width: 720px) {
    [data-r~="pad"] { padding-left: 20px !important; padding-right: 20px !important; }
    [data-r~="graph"] { aspect-ratio: 4/5 !important; }
    [data-r~="graph"] [data-node] { padding: 5px 9px 5px 6px !important; gap: 6px !important; }
    [data-r~="graph"] [data-sub], [data-r~="graph"] [data-flow] { display: none !important; }
    [data-r~="ba"] { grid-template-columns: minmax(0,1fr) !important; gap: 10px !important; }
    [data-r~="c2"] { grid-template-columns: minmax(0,1fr) !important; }
    [data-r~="route"] { flex-direction: column !important; align-items: flex-start !important; }
    [data-r~="route"] [data-line] { width: 2px !important; min-width: 0 !important; height: 20px !important; margin-left: 4px; }
    [data-r~="card"] { padding: 20px !important; }
  }
`;

export default GlobalStyle;
