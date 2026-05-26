import React, { useState } from "react";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ENG");
  const [langOpen, setLangOpen] = useState(false);

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "FEATURE", id: "feature" },
    { name: "ROADMAP", id: "roadmap" },
    { name: "TEAM", id: "team" },
    { name: "PARTNERS", id: "partners" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#030315]/90 backdrop-blur-md border-b border-indigo-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollTo("home")}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center shadow-lg shadow-brand-pink/25">
              <span className="text-white font-extrabold text-lg tracking-wider">I</span>
            </div>
            <span className="text-white font-extrabold text-2xl tracking-widest font-sans">
              IKO<span className="text-brand-pink">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollTo(item.id)}
                className="text-slate-300 hover:text-brand-pink font-semibold text-sm tracking-widest transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Language and Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase border border-indigo-500/20 px-3 py-1.5 rounded-full bg-indigo-950/20 hover:bg-indigo-950/40 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{lang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-md bg-[#0c0a25] border border-indigo-500/20 shadow-xl z-50">
                  <div className="py-1">
                    {["ENG", "B&G", "ESP", "FRA"].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-brand-purple/20 hover:text-white transition-colors cursor-pointer"
                      >
                        {l === "B&G" ? "বাংলা" : l}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="relative bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-90 text-white font-bold text-xs tracking-widest px-6 py-2.5 rounded-full transition-all shadow-md shadow-brand-purple/20 hover:scale-105 active:scale-95 cursor-pointer">
              LOGIN
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-widest px-6 py-2.5 rounded-full transition-all md:block hidden border border-white/15 hover:border-white/30 cursor-pointer">
              BUY NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-slate-300 font-semibold text-xs border border-indigo-500/20 px-2.5 py-1.5 rounded-full bg-indigo-950/20"
              >
                <Globe className="w-3 h-3 text-brand-cyan" />
                <span>{lang}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-md bg-[#0c0a25] border border-indigo-500/20 shadow-xl z-50">
                  <div className="py-1">
                    {["ENG", "B&G", "ESP"].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-brand-purple/20 hover:text-white transition-colors"
                      >
                        {l === "B&G" ? "বাংলা" : l}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0a25] border-b border-indigo-500/20 px-4 pt-2 pb-6 space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onScrollTo(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left text-slate-300 hover:text-white hover:bg-brand-purple/20 px-3 py-2 rounded-md text-base font-semibold"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-indigo-500/15 flex flex-col gap-2">
            <button className="w-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold tracking-widest py-3 rounded-full text-center">
              LOGIN
            </button>
            <button className="w-full bg-white/10 text-white font-bold tracking-widest py-3 rounded-full text-center border border-white/20">
              BUY NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
