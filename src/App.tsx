import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import IntroducingIko from "./components/IntroducingIko";
import Roadmap from "./components/Roadmap";
import Ecosystem from "./components/Ecosystem";
import Team from "./components/Team";
import PartnersAndEvents from "./components/PartnersAndEvents";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030315] text-slate-300 font-sans antialiased overflow-x-hidden selection:bg-brand-pink/30 selection:text-white">
      {/* Dynamic Header Navbar with scroll callback triggers */}
      <Navbar onScrollTo={handleScrollToSection} />

      {/* Main Single Page Layout flow */}
      <main>
        {/* Section 1: Hero & Real-time Countdown clock Banner */}
        <Hero />

        {/* Section 2: Choose IKO and Interactive Rate Slider Calculator */}
        <Calculator />

        {/* Section 3: About - Introducing Iko & Corporate Security Shield */}
        <IntroducingIko />

        {/* Section 4: Project Roadmap Milestone Phases with interactive arrows */}
        <Roadmap />

        {/* Section 5: Connect Ecosystem Shares buy triggers */}
        <Ecosystem />

        {/* Section 6: Active Founders & team members lists */}
        <Team />

        {/* Section 7: Strategic Partners line, Join Events pass book, Press releases */}
        <PartnersAndEvents />

        {/* Section 8: Interactive FAQ collapsible accordions */}
        <Faq />
      </main>

      {/* Footer Navigation section */}
      <Footer onScrollTo={handleScrollToSection} />
    </div>
  );
}
