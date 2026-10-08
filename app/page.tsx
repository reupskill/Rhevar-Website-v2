"use client";

import { useHomeState, TICKS } from "../lib/useHomeState";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Cost from "../components/Cost";
import RhevarSection from "../components/RhevarSection";
import Possible from "../components/Possible";
import Creators from "../components/Creators";
import Global from "../components/Global";
import Product from "../components/Product";
import Future from "../components/Future";
import Join from "../components/Join";
import Footer from "../components/Footer";

export default function Home() {
  const state = useHomeState();

  return (
    <div style={{ fontFamily: "var(--rh-font)", background: "#FFFFFF", color: "#1A1F2E", overflowX: "hidden" }}>
      <Header pickCreator={state.pickCreator} pickBrand={state.pickBrand} />
      <Hero pickCreator={state.pickCreator} tick={TICKS[state.tick]} tickOp={state.tickOp} />
      <Problem />
      <Cost />
      <RhevarSection graph={state.graph} graphOn={state.graphOn} graphOff={state.graphOff} />
      <Possible />
      <Creators type={state.type} setType={state.setType} />
      <Global who={state.who} pickA={state.pickA} pickB={state.pickB} />
      <Product />
      <Future />
      <Join aud={state.aud} sent={state.sent} pickCreator={state.pickCreator} pickBrand={state.pickBrand} submit={state.submit} />
      <Footer pickBrand={state.pickBrand} />
    </div>
  );
}
