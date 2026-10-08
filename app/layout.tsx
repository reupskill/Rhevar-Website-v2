import type { Metadata } from "next";
import { satoshi } from "./fonts";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "./GlobalStyle";

export const metadata: Metadata = {
  title: "Rhevar — Infrastructure for the creator business",
  description:
    "Rhevar is the connected business beneath everything a creator makes, sells and earns, wherever in the world they do it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
