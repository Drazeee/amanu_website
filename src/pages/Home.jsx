import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Community from "../components/Community";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Community />
      <Roadmap />
      <Team />
      <CallToAction />
      <Footer />
    </>
  );
}
