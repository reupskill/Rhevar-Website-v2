"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const TICKS: [string, string][] = [
  ["A YouTuber", "a media company"],
  ["A podcaster", "a network"],
  ["A newsletter writer", "a publisher"],
  ["A coach", "a school"],
  ["A musician", "a record label"],
  ["A streamer", "an entertainment studio"],
  ["A photographer", "a creative agency"],
  ["A consultant", "an advisory firm"],
];

export type EngineType = {
  label: string;
  where: string;
  business: string;
  engines: [string, number][];
  note: string;
};

export const TYPES: EngineType[] = [
  {
    label: "YouTuber",
    where: "Seoul",
    business: "A media company with a course on the side.",
    engines: [
      ["Ad revenue & sponsorships", 42],
      ["Course", 28],
      ["Membership", 18],
      ["Merch", 12],
    ],
    note: "Sponsors, students and members in one record, with revenue traced back to the video that earned it.",
  },
  {
    label: "Podcaster",
    where: "London",
    business: "A network that sells sponsorships and live shows.",
    engines: [
      ["Sponsorships", 48],
      ["Paid feed", 22],
      ["Live events", 20],
      ["Merch", 10],
    ],
    note: "Ad reads booked, delivered and paid without a single spreadsheet.",
  },
  {
    label: "Newsletter writer",
    where: "Toronto",
    business: "A publisher with paying readers and sponsors.",
    engines: [
      ["Paid subscriptions", 55],
      ["Sponsorships", 30],
      ["Consulting", 15],
    ],
    note: "Subscribers, sponsors and invoices in the same place as the writing.",
  },
  {
    label: "Coach",
    where: "Nairobi",
    business: "An education business with clients in four countries.",
    engines: [
      ["1:1 coaching", 40],
      ["Group programme", 30],
      ["Community", 20],
      ["Digital products", 10],
    ],
    note: "Bookings, payments and client history connected, in every client’s currency.",
  },
  {
    label: "Musician",
    where: "Lagos",
    business: "A label of one, with fans everywhere.",
    engines: [
      ["Brand partnerships", 36],
      ["Live shows", 30],
      ["Fan membership", 22],
      ["Merch", 12],
    ],
    note: "Shows, sync deals and fan income, settled and split with collaborators.",
  },
  {
    label: "Streamer",
    where: "São Paulo",
    business: "An entertainment studio that runs live, every day.",
    engines: [
      ["Sponsorships", 44],
      ["Memberships", 32],
      ["Brand integrations", 24],
    ],
    note: "Integrations scoped, approved and paid across time zones.",
  },
  {
    label: "Photographer",
    where: "Paris",
    business: "A creative agency with licensing income.",
    engines: [
      ["Commissions", 46],
      ["Licensing", 28],
      ["Presets & prints", 16],
      ["Workshops", 10],
    ],
    note: "Usage rights on every image, tracked to the contract that granted them.",
  },
  {
    label: "Consultant",
    where: "Dubai",
    business: "An advisory firm built on a personal brand.",
    engines: [
      ["Retainers", 50],
      ["Speaking", 25],
      ["Courses", 15],
      ["Brand deals", 10],
    ],
    note: "Proposals, retainers and invoices from the same profile clients already know.",
  },
];

export type AudInfo = {
  title: string;
  sub: string;
  points: string[];
  namePh: string;
  orgLabel: string;
  orgPh: string;
  emailLabel: string;
  emailPh: string;
  extraLabel: string;
  extraPh: string;
  cta: string;
};

export const AUD: [AudInfo, AudInfo] = [
  {
    title: "Build your creator business on Rhevar.",
    sub: "Join the creators running their business as one connected company, wherever they live and whoever they work with.",
    points: [
      "Your first brand deal reviewed, secured and paid",
      "Every engine you earn from, in one place",
      "A business identity that travels with you",
    ],
    namePh: "Sarah Mensah",
    orgLabel: "Handle or studio",
    orgPh: "@sarahmakes",
    emailLabel: "Email",
    emailPh: "sarah@studio.com",
    extraLabel: "How you earn",
    extraPh: "Brand deals, courses",
    cta: "Request creator access",
  },
  {
    title: "Work with creators like you work with any partner.",
    sub: "For brands and agencies who want verified creators, clear terms and payments that land on time, in every market.",
    points: [
      "Verified creators in any country",
      "Usage rights and approvals on one record",
      "Fees in escrow, released on delivery",
    ],
    namePh: "Daniel Okafor",
    orgLabel: "Company / brand name",
    orgPh: "Northfield",
    emailLabel: "Work email",
    emailPh: "daniel@northfield.com",
    extraLabel: "Markets you work in",
    extraPh: "UK, Brazil, Kenya",
    cta: "Request brand access",
  },
];

export function useHomeState() {
  const [tick, setTick] = useState(0);
  const [tickOp, setTickOp] = useState(1);
  const [who, setWho] = useState<"a" | "b">("a");
  const [graph, setGraph] = useState<"on" | "off">("off");
  const [type, setType] = useState(0);
  const [aud, setAud] = useState<0 | 1>(0);
  const [sent, setSent] = useState(false);

  const tickTimer = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );
  const tickTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const whoTimer = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduce) {
      tickTimer.current = setInterval(() => {
        setTickOp(0);
        tickTimeout.current = setTimeout(() => {
          setTick((t) => (t + 1) % TICKS.length);
          setTickOp(1);
        }, 320);
      }, 2600);
      whoTimer.current = setInterval(() => {
        setWho((w) => (w === "a" ? "b" : "a"));
      }, 6000);
    } else {
      queueMicrotask(() => setGraph("on"));
    }

    const showAll = () => {
      window.dispatchEvent(new Event("rh:reveal-all"));
    };
    window.addEventListener("hashchange", showAll);
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest && target.closest('a[href^="#"]')) showAll();
    };
    document.addEventListener("click", onClick);

    return () => {
      clearInterval(tickTimer.current);
      clearTimeout(tickTimeout.current);
      clearInterval(whoTimer.current);
      window.removeEventListener("hashchange", showAll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const pickA = useCallback(() => {
    clearInterval(whoTimer.current);
    setWho("a");
  }, []);
  const pickB = useCallback(() => {
    clearInterval(whoTimer.current);
    setWho("b");
  }, []);
  const graphOn = useCallback(() => setGraph("on"), []);
  const graphOff = useCallback(() => setGraph("off"), []);
  const pickCreator = useCallback(() => setAud(0), []);
  const pickBrand = useCallback(() => setAud(1), []);
  const submit = useCallback(() => setSent(true), []);

  return {
    tick,
    tickOp,
    who,
    graph,
    type,
    setType,
    aud,
    sent,
    pickA,
    pickB,
    graphOn,
    graphOff,
    pickCreator,
    pickBrand,
    submit,
  };
}

export type HomeState = ReturnType<typeof useHomeState>;
