import React, { useState } from "react";
import { Link, Calendar, MapPin, ExternalLink, ArrowUpRight, ArrowRight, Sparkles, Check, CheckCircle } from "lucide-react";

export default function PartnersAndEvents() {
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [successEvent, setSuccessEvent] = useState<string | null>(null);

  const partners = [
    {
      name: "Quotient",
      desc: "Stable decentralized utility voucher provider and native strategic transaction processor inside the IKO network ecosystem.",
      accent: "border-brand-pink",
      tag: "FINANCE"
    },
    {
      name: "monday.com",
      desc: "Comprehensive team task synchronization partner for tracking software releases and visual milestone updates globally.",
      accent: "border-brand-purple",
      tag: "OPERATIONS"
    },
    {
      name: "Catalog Services",
      desc: "A premium company providing foundational DevOps structures and secure API endpoints to feed external price charts.",
      accent: "border-brand-cyan",
      tag: "INFRASTRUCTURE"
    }
  ];

  const events = [
    { id: "e1", title: "BlockVienna", location: "Vienna, Austria", date: "August 17, 2026", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e2", title: "Summit Summits", location: "New York, USA", date: "June 12, 2026", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e3", title: "Blockchain Summit", location: "Chicago, USA", date: "July 05, 2026", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e4", title: "Economy ICO 2026", location: "San Jose, Costa Rica", date: "September 09, 2026", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e5", title: "Blockchain Summit BR", location: "Sao Paulo, Brazil", date: "September 14, 2026", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e6", title: "Blockchain & Bitcoin", location: "Buenos Aires, Argentina", date: "August 14, 2026", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e7", title: "Money Conference", location: "Paris, France", date: "May 24, 2026", image: "https://images.unsplash.com/photo-1522158673320-aa310f0c0dac?auto=format&fit=crop&q=80&w=300&h=180" },
    { id: "e8", title: "Crypto Economy", location: "Riyadh, Saudi Arabia", date: "May 24, 2026", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=300&h=180" },
  ];

  const pressHubs = [
    {
      source: "huffpost.com",
      desc: "IKO seeks to incorporate utility crypto vouchers directly into everyday industrial product acquisitions, offering unprecedented ease-of-use guidelines.",
      url: "https://huffpost.com",
    },
    {
      source: "msnbc.com",
      desc: "In excellence from standard coin exchanges, IKO has proven that automated smart contract pools completely remove credit risk protocols.",
      url: "https://msnbc.com",
    }
  ];

  const handleRegisterEvent = (title: string) => {
    setSuccessEvent(title);
    setTimeout(() => {
      setSuccessEvent(null);
    }, 3000);
  };

  return (
    <section className="relative py-16 bg-[#030315] overflow-hidden border-t border-indigo-500/10">
      
      {/* 1. Our Partners Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#a3a3c2] uppercase bg-[#0c0a25] border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
            COLLABORATORS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Our Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className={`bg-[#0c0a25] border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-brand-pink/30 hover:-translate-y-1 relative group overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-3 bg-indigo-950/40 text-[10px] font-mono text-brand-cyan rounded-bl-xl font-bold tracking-widest border-l border-b border-indigo-500/10">
                {partner.tag}
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-pink group-hover:animate-ping" />
                  <h3 className="text-xl font-extrabold text-white tracking-wide">{partner.name}</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {partner.desc}
                </p>
              </div>

              <button className="flex items-center justify-center gap-1.5 w-full bg-[#13113a] hover:bg-brand-pink text-slate-300 hover:text-white font-bold text-xs tracking-widest py-2.5 rounded-xl border border-indigo-500/20 hover:border-transparent transition-all uppercase cursor-pointer">
                <span>Explore partner</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Join Events for meet us Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#a3a3c2] uppercase bg-[#0c0a25] border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
            CONFERENCES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Join Events for meet us
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl mx-auto">
            Secure admission passes to our global developer roundtables, regulatory briefings, and local developer meetups.
          </p>
        </div>

        {/* Global Floating Register Alert */}
        {successEvent && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0c0a25] border-2 border-emerald-500 rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-white font-bold text-sm">Pass Secured!</p>
              <p className="text-slate-400 text-[11px]">You've registered for {successEvent}</p>
            </div>
          </div>
        )}

        {/* Dynamic 4x2 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((ev) => (
            <div 
              key={ev.id}
              className="bg-[#0c0a25] border border-indigo-500/10 hover:border-brand-cyan/20 rounded-2xl p-4 flex flex-col justify-between shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="rounded-xl overflow-hidden aspect-video relative mb-4">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute top-2 left-2 bg-[#0c0a25]/90 border border-indigo-500/15 text-[10px] text-brand-cyan font-semibold rounded px-2 py-0.5">
                    EXPO
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-pink transition-colors">
                    {ev.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                    <span className="truncate">{ev.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-brand-pink flex-shrink-0" />
                    <span>{ev.date}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleRegisterEvent(ev.title)}
                className="w-full bg-[#13113a] hover:bg-[#1f1a5a] text-white font-mono text-xs tracking-wider py-2.5 rounded-xl border border-indigo-500/25 transition-all cursor-pointer"
              >
                JOIN US
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Press us block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 border-b border-indigo-500/10">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#a3a3c2] uppercase bg-[#0c0a25] border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
            MEDIA COVERAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Press us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pressHubs.map((press, pIdx) => (
            <div 
              key={pIdx}
              className="bg-[#0c0a25] border border-indigo-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-cyan/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-[#fff] font-extrabold font-sans text-xl md:text-2xl tracking-tight uppercase border-b border-indigo-500/10 pb-4">
                  <Sparkles className="w-5 h-5 text-brand-pink" />
                  {press.source}
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {press.desc}
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href={press.url} 
                  target="_blank" 
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-pink hover:text-white transition-colors cursor-pointer"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
