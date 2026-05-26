import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Calendar } from "lucide-react";

export default function Roadmap() {
  const [startIndex, setStartIndex] = useState(0);

  const steps = [
    {
      phase: "PHASE 01",
      title: "Alpha Test",
      date: "END OF Q4 2024",
      status: "completed",
      description: "SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations."
    },
    {
      phase: "PHASE 02",
      title: "Platform Conception",
      date: "END OF Q1 2025",
      status: "completed",
      description: "Establishing the legal foundation, technical smart contract definitions, and complete secure token sale audits."
    },
    {
      phase: "PHASE 03",
      title: "Research & Development",
      date: "END OF Q2 2025",
      status: "completed",
      description: "Designing database structures, scaling mechanisms, custom web wallet plugins, and core node verification services."
    },
    {
      phase: "PHASE 04",
      title: "Public ICO Token Launch",
      date: "END OF Q3 2025",
      status: "active",
      description: "Initiating community crowdsale rounds, listing on top tier 2 decentralized exchanges, and launching live interactive dividend calculators."
    },
    {
      phase: "PHASE 05",
      title: "Beta Mainnet Deployment",
      date: "END OF Q1 2026",
      status: "upcoming",
      description: "Launching node validator programs, deploying initial asset backed modules, and launching the staking console."
    },
    {
      phase: "PHASE 06",
      title: "Ecosystem Expansion",
      date: "END OF Q3 2026",
      status: "upcoming",
      description: "Integrating global credit card gateways, scaling mobile applications for iOS & Android, and completing global compliance protocols."
    }
  ];

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < steps.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section id="roadmap" className="relative py-16 md:py-24 bg-[#06041f] overflow-hidden border-t border-indigo-500/10">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/15 border border-brand-purple/20 px-4 py-1.5 rounded-full inline-block mb-3">
              DEVELOPMENT TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Roadmap
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Track our progress and future targets from foundational research to global ecosystem scaling.
            </p>
          </div>

          {/* Navigation Arrows (Exactly like Screenshot!) */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-3 rounded-full border ${
                startIndex === 0
                  ? "border-indigo-500/10 text-slate-600 bg-indigo-950/10 cursor-not-allowed"
                  : "border-brand-pink text-brand-pink bg-[#110e35] hover:bg-brand-pink hover:text-white transition-all cursor-pointer"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= steps.length}
              className={`p-3 rounded-full border ${
                startIndex + 3 >= steps.length
                  ? "border-indigo-500/10 text-slate-600 bg-indigo-950/10 cursor-not-allowed"
                  : "border-brand-pink text-brand-pink bg-[#110e35] hover:bg-brand-pink hover:text-white transition-all cursor-pointer"
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Roadmap Steps Horizontal Line Connection Grid */}
        <div className="relative mt-8">
          <div className="absolute top-[44px] left-0 right-0 h-1 bg-indigo-950/50 -z-10 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.slice(startIndex, startIndex + 3).map((step, i) => (
              <div 
                key={i} 
                className="relative group flex flex-col h-full bg-[#0d0a2d]/60 border border-indigo-500/20 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-brand-pink/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Ribbon border */}
                <div className={`absolute top-0 left-0 w-full h-[3px] ${
                  step.status === "completed"
                    ? "bg-emerald-500"
                    : step.status === "active"
                    ? "bg-[#f72585] animate-pulse"
                    : "bg-indigo-900"
                }`} />

                {/* Date bubble */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    {step.date}
                  </span>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                    step.status === "completed"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                      : step.status === "active"
                      ? "bg-brand-pink/15 text-brand-pink border border-brand-pink/20"
                      : "bg-indigo-950 text-indigo-400"
                  }`}>
                    {step.status}
                  </span>
                </div>

                {/* Milestone Node */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    step.status === "completed"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : step.status === "active"
                      ? "border-brand-pink/30 bg-brand-pink/10 text-brand-pink"
                      : "border-indigo-800 bg-indigo-950 text-indigo-400"
                  }`}>
                    <span className="font-mono text-xs font-extrabold">{step.phase}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                {/* Connect Line Graphic inside box */}
                <div className="mt-4 pt-4 border-t border-indigo-500/5 text-[11px] text-indigo-400/80 font-mono">
                  Target milestone secure checks
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini dot indicators below */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: steps.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all ${
                startIndex === i ? "w-6 bg-brand-pink" : "w-2 bg-indigo-900 hover:bg-indigo-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
