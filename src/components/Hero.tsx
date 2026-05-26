import React, { useState, useEffect } from "react";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import rocketImg from "../assets/images/rocket_hero_1779822007970.png";

export default function Hero() {
  // Live Countdown logic
  // Let's set a target countdown date 93 Days, 23 Hours from now initially or standard ticking target
  const [timeLeft, setTimeLeft] = useState({
    days: 93,
    hours: 23,
    minutes: 3,
    seconds: 20,
  });

  useEffect(() => {
    // Standard timer ticking down seconds
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-[#030315] via-[#05041a] to-[#0a0624]">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-brand-pink/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/5 text-brand-pink text-xs font-bold tracking-widest uppercase mb-6 w-fit animate-pulse">
              <span className="w-2 h-2 rounded-full bg-brand-pink" />
              LIVE TOKEN ROUND IS ACTIVE
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-sans tracking-tight leading-tight mb-6">
              Putting Your Money <br />
              in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-purple-400 to-brand-cyan">Product Backed</span> <br />
              Projects
            </h1>
            
            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              IKO is a revolutionary pre-scaffolded decentralized cryptocurrency ecosystem that allows contributors 
              to back real-world secure, verified assets. Benefit from guaranteed high ROI protocols and monthly 
              stable dividends.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-pink to-brand-purple hover:scale-105 active:scale-95 text-white font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-all shadow-lg shadow-brand-pink/25 cursor-pointer">
                Purchase a Token
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#13113c] border border-indigo-500/30 hover:bg-[#1b1958] text-white font-bold text-sm tracking-widest px-8 py-4 rounded-full transition-all cursor-pointer">
                <FileText className="w-4 h-4 text-brand-cyan" />
                Read Documents
                <ArrowRight className="w-4 h-4 ml-1 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute w-[350px] h-[350px] bg-brand-pink/15 rounded-full blur-[80px] -z-10 animate-pulse" />
            <img
              src={rocketImg}
              alt="IKO Rocket Spacecraft"
              referrerPolicy="no-referrer"
              className="w-full max-w-md object-contain animate-float drop-shadow-[0_20px_50px_rgba(114,9,183,0.3)]"
            />
          </div>
        </div>

        {/* ICO start in Widget (Exactly like Screenshot!) */}
        <div className="mt-16 bg-[#0c0a25]/80 border border-indigo-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative block overflow-hidden glow-pink">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Timeline Progress Left/Middle */}
            <div className="lg:col-span-7 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-6">
                ICO will start in <span className="text-brand-pink">..</span>
              </h3>
              
              {/* Timeline Milestones names */}
              <div className="grid grid-cols-3 text-xs sm:text-sm font-semibold mb-3">
                <div className="text-left">
                  <span className="text-slate-400 block mb-1">Value</span>
                  <span className="text-white text-xs">of technology invested</span>
                </div>
                <div className="text-center">
                  <span className="text-slate-400 block mb-1">Private</span>
                  <span className="text-white text-xs">sale</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block mb-1">ICO</span>
                  <span className="text-brand-cyan text-xs">Active Sale</span>
                </div>
              </div>

              {/* Gradient Progress Bar */}
              <div className="relative h-4 bg-indigo-950/60 rounded-full border border-indigo-500/20 mb-3 overflow-visible">
                <div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan rounded-full shadow-[0_0_12px_rgba(76,201,240,0.5)]" />
                
                {/* Milestone dot indicators */}
                <div className="absolute -top-1 left-0 w-6 h-6 rounded-full bg-[#0c0a25] border-2 border-brand-pink flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-brand-pink rounded-full" />
                </div>
                <div className="absolute -top-1 left-[33%] w-6 h-6 rounded-full bg-[#0c0a25] border-2 border-brand-purple flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-brand-purple rounded-full" />
                </div>
                <div className="absolute -top-1 left-[70%] w-6 h-6 rounded-full bg-brand-cyan border-2 border-white flex items-center justify-center animate-ping" />
                <div className="absolute -top-1 left-[70%] w-6 h-6 rounded-full bg-[#0c0a25] border-2 border-brand-cyan flex items-center justify-center shadow-lg shadow-brand-cyan/50">
                  <div className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
                </div>
              </div>

              {/* Progress Value Descriptions */}
              <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                <span>7.75 Min</span>
                <span>1.5 Min</span>
                <span className="bg-[#1e1450] text-[#4cc9f0] border border-[#302179] px-2.5 py-1 rounded-full text-[11px] font-bold">
                  140,000 $ chosen
                </span>
                <span>100 Min $</span>
              </div>
            </div>

            {/* Countdown Grid Right Side */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <span className="text-xs tracking-widest text-[#a3a3c2] uppercase mb-4 font-bold">COUNTDOWN CLOCK</span>
              <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-sm">
                
                {/* Days */}
                <div className="flex flex-col items-center bg-[#13113a]/80 border border-indigo-500/20 px-3 py-3 sm:px-4 sm:py-4 rounded-2xl w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest font-mono">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-bold uppercase mt-1">Days</span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center bg-[#13113a]/80 border border-indigo-500/20 px-3 py-3 sm:px-4 sm:py-4 rounded-2xl w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-pink tracking-widest font-mono">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-bold uppercase mt-1">Hours</span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center bg-[#13113a]/80 border border-indigo-500/20 px-3 py-3 sm:px-4 sm:py-4 rounded-2xl w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest font-mono">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-bold uppercase mt-1">Min</span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center bg-[#13113a]/80 border border-indigo-500/20 px-3 py-3 sm:px-4 sm:py-4 rounded-2xl w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-cyan tracking-widest font-mono">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-bold uppercase mt-1">Sec</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Partners Line */}
        <div id="partners" className="mt-20 pt-10 border-t border-indigo-500/10">
          <p className="text-center text-xs tracking-widest text-[#a3a3c2] uppercase mb-8 font-bold flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
            OUR TOP PARTNER
            <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            <div className="flex items-center gap-1.5 text-white font-extrabold tracking-widest text-lg md:text-xl">
              <span className="w-3.5 h-3.5 rounded-full bg-indigo-500" />
              Catalog
            </div>
            <div className="flex items-center gap-1.5 text-white font-extrabold tracking-widest text-lg md:text-xl">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-400" />
              Calendly
            </div>
            <div className="flex items-center gap-1.5 text-white font-extrabold tracking-widest text-lg md:text-xl">
              <span className="w-3.5 h-3.5 rounded-full bg-brand-pink" />
              monday<span className="text-brand-pink font-light text-xs">.com</span>
            </div>
            <div className="flex items-center gap-1.5 text-white font-extrabold tracking-widest text-lg md:text-xl">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-500" />
              GitHub
            </div>
            <div className="flex items-center gap-1.5 text-white font-extrabold tracking-widest text-lg md:text-xl">
              <span className="w-3.5 h-3.5 rounded-full bg-[#f72585]" />
              Quotient
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
