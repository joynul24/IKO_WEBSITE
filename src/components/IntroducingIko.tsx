import React from "react";
import { CheckCircle2, Shield, HeartHandshake, Eye } from "lucide-react";
import shieldImg from "../assets/images/crypto_shield_1779822044609.png";

export default function IntroducingIko() {
  const introPoints = [
    {
      title: "Who We Are",
      icon: <Shield className="w-5 h-5 text-brand-pink" />,
      description: "IKO is a 100% audited pre-allocated cryptocurrency utility platform. There are exactly 1 Billion standard tokens created, and 60% of them are open to purchase during this live ICO round to secure ecosystem utility.",
      color: "border-brand-pink"
    },
    {
      title: "Wealth & Staking Benefits",
      icon: <HeartHandshake className="w-5 h-5 text-brand-purple" />,
      description: "Holding IKO tokens grants you deeply reduced platform service fees, direct ownership weight in collaborative corporate decision processes, and priority access to state-backed digital currency packages.",
      color: "border-brand-purple"
    },
    {
      title: "Sustainable Longterm Value",
      icon: <Eye className="w-5 h-5 text-brand-cyan" />,
      description: "Our core framework matches immediate demand with deflationary burns, increasing IKO buybacks over time. The company is on track to integrate third-party payment routing, accelerating network throughput.",
      color: "border-brand-cyan"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#030315] overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-pink uppercase bg-brand-pink/10 border border-brand-pink/15 px-4 py-1.5 rounded-full">
            ABOUT THE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight mt-4">
            Introducing Iko Crypto
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-medium tracking-wide">
            True digital wealth and reliable utility in the modern world of virtual currencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Bullet Points List */}
          <div className="lg:col-span-6 space-y-8">
            {introPoints.map((point, index) => (
              <div 
                key={index} 
                className={`bg-[#0d0a2d]/40 border border-indigo-500/10 hover:border-indigo-500/30 p-6 rounded-2xl transition-all duration-300 shadow-md flex gap-4 ${point.color}`}
              >
                <div className="w-10 h-10 rounded-full bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Shield Image & Mission Block */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Pristine metallic checkmark shield rendered */}
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />
              <img 
                src={shieldImg} 
                alt="ICO Secure Shield Token Icon"
                referrerPolicy="no-referrer"
                className="w-56 h-auto object-contain animate-float drop-shadow-[0_20px_40px_rgba(76,201,240,0.2)]"
              />
            </div>

            {/* Our Mission & Vision Block */}
            <div className="w-full bg-[#0c0a25] border border-indigo-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide flex items-center gap-2 border-b border-indigo-500/10 pb-4">
                <span className="w-2.5 h-2.5 bg-brand-pink rounded-full" />
                Our Mission & Vision
              </h3>
              
              <div className="space-y-4">
                <blockquote className="border-l-2 border-brand-pink pl-4 italic text-sm text-slate-300 leading-relaxed">
                  "Empower micro-collaborators globally to back industrial products securely, generating long-term recurring dividends without intermediary frictions."
                </blockquote>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  Iko is a 100% audited crypto platform. There are exactly 1 Billion Minutes, and 60% of them can be yours (60% - ICO). Utility & security token guidelines apply to all peer transactions and give a premium monthly yield.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#13113a] border border-indigo-500/10 rounded-xl p-3">
                    <span className="block text-2xl font-extrabold text-brand-pink font-mono">60%</span>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider font-bold">ICO Allotment</span>
                  </div>
                  <div className="bg-[#13113a] border border-indigo-500/10 rounded-xl p-3">
                    <span className="block text-2xl font-extrabold text-brand-cyan font-mono">1B</span>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider font-bold">Limit Cap</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
