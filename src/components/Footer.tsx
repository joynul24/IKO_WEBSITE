import React from "react";
import { Linkedin, Twitter, Youtube, Facebook, Send, ArrowUp, ShieldCheck } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030315] pt-16 pb-8 border-t border-indigo-500/10 overflow-hidden">
      {/* Visual background line glows */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-indigo-500/10 items-center">
          
          {/* Footer Logo & Brand info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollTo("home")}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center shadow-lg shadow-brand-pink/25">
                <span className="text-white font-extrabold text-lg tracking-wider">I</span>
              </div>
              <span className="text-white font-extrabold text-2xl tracking-widest font-sans">
                IKO<span className="text-brand-pink">.</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Safeguarding community value with pre-scaffolded digital token assets and collateralized decentralized ledger utility rewards.
            </p>

            {/* Social handles circle links */}
            <div className="flex gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, url: "#" },
                { icon: <Linkedin className="w-4 h-4" />, url: "#" },
                { icon: <Facebook className="w-4 h-4" />, url: "#" },
                { icon: <Send className="w-4 h-4" />, url: "#" }, // Telegram equivalent
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-9 h-9 rounded-full bg-indigo-950/40 border border-indigo-500/10 text-slate-300 hover:text-white hover:bg-brand-pink hover:border-transparent flex items-center justify-center transition-all shadow"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Interactive Links */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-slate-300 font-sans tracking-widest leading-loose">
              <button onClick={() => onScrollTo("home")} className="hover:text-brand-pink transition-colors uppercase block">HOME</button>
              <button onClick={() => onScrollTo("feature")} className="hover:text-brand-pink transition-colors uppercase block">OUR PROJECTS</button>
              <button onClick={() => onScrollTo("team")} className="hover:text-brand-pink transition-colors uppercase block">OUR TEAM</button>
              <button onClick={() => onScrollTo("faq")} className="hover:text-brand-pink transition-colors uppercase block">NEWS FAQ</button>
              <button onClick={() => onScrollTo("partners")} className="hover:text-brand-pink transition-colors uppercase block">PARTNERS</button>
            </div>

            {/* Live nodes stat */}
            <div className="bg-[#0c0a25] border border-indigo-500/20 rounded-2xl p-4 flex items-center gap-3 w-fit max-w-xs self-start md:self-auto">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">IKO SECURE NETWORK</span>
                <span className="block text-xs font-mono text-emerald-400 font-bold">128 Nodes Online</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-400">
          <div>
            <span>Copyright © {new Date().getFullYear()} IKO. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-pink transition-colors">Job & Career</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Terms and Condition</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Help Center</a>
          </div>

          <button 
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 bg-indigo-950 hover:bg-brand-pink text-white px-4 py-2 rounded-full border border-indigo-500/25 transition-all text-xs cursor-pointer group"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
