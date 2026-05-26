import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item expanded by default as in screenshot!

  const faqs = [
    {
      q: "How to buy FOX tokens?",
      a: "It's very simple! Register here. In your personal secure control panel, declare a dynamic wallet where you can safely store your allocated FOX tokens. Then simply route any crypto value target to the displayed address in your smart account office."
    },
    {
      q: "What is the value of FOX tokens?",
      a: "FOX/IKO tokens represent instant platform utility shares backed by real infrastructure assets. Value grows dynamically governed by corporate buybacks, staking locks, and transaction routing demand."
    },
    {
      q: "Is there a lock-up period during this ICO round?",
      a: "To protect community holdings from speculative high-velocity volatility, initial purchase amounts are subject to a soft 3-month vesting release plan, followed by immediate standard liquid stakings."
    },
    {
      q: "How are coins distributed globally?",
      a: "60% is designated directly back to community public tokens purchasers, 15% is reserved for ecosystem advisor/strategic management buffers, 15% goes to foundational technology nodes, and 10% is allocated to general promotional tasks."
    },
    {
      q: "What security auditing standard do you maintain?",
      a: "All core blockchain smart contracts are regularly checked and completely audited by certified third-party groups (such as CertiK) to protect accounts from secondary risks or unauthorized manipulations."
    },
    {
      q: "When can we start securing monthly dividends?",
      a: "Calculated monthly dividends are distributed to active token holders immediately after the start of active mainnet validation, targeted for End of Q1 2026."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-[#06041f] overflow-hidden border-t border-indigo-500/10">
      {/* Decorative gradient glowing orb */}
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-brand-pink/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6 w-fit mx-auto lg:mx-0">
              <HelpCircle className="w-3.5 h-3.5" />
              SUPPORT PORTAL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Frequently <br className="hidden lg:block" />
              Asked Questions
            </h2>
            
            <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed mx-auto lg:mx-0">
              Do you have any kind of questions regarding our tokenomics or security guidelines? We are here to assist!
            </p>

            <div className="bg-[#0c0a25] border border-indigo-500/20 rounded-2xl p-6 shadow-xl hidden lg:block">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-brand-pink/15 border border-brand-pink/25 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Need immediate help?</h4>
                  <p className="text-slate-400 text-xs mt-1">Chat directly with our global dev desk 24/7.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-[#0d0a2d] border-brand-pink/30 shadow-lg shadow-brand-pink/5" 
                      : "bg-[#0c0a25]/60 border-indigo-500/10 hover:border-indigo-500/25"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-bold text-sm sm:text-base tracking-wide focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-brand-pink">0{index + 1}</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <div className="p-1 rounded bg-brand-pink/10 border border-brand-pink/20">
                          <Minus className="w-4 h-4 text-brand-pink" />
                        </div>
                      ) : (
                        <div className="p-1 rounded bg-indigo-950/60 border border-indigo-500/10">
                          <Plus className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                    </span>
                  </button>

                  {/* Smooth expand area */}
                  <div 
                    className={`transition-all duration-300 ease-in-out px-6 ${
                      isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-indigo-500/10 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
