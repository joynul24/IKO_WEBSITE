import React, { useState } from "react";
import { Linkedin, Twitter, Youtube, UserCircle2, ShieldCheck, Mail } from "lucide-react";

export default function Team() {
  const [activeTab, setActiveTab] = useState<"advisory" | "management" | "marketing">("advisory");

  const founders = [
    {
      name: "Eleanor Pena",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      socials: { linkedin: "#", twitter: "#", youtube: "#" }
    },
    {
      name: "William Xeno",
      role: "Co-Founder & CTO",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      socials: { linkedin: "#", twitter: "#", youtube: "#" }
    }
  ];

  const teamData = {
    advisory: [
      { name: "Jacob Jones", role: "Blockchain Specialist", color: "border-brand-pink text-brand-pink shadow-brand-pink/20", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Albert Flores", role: "Economic Advisor", color: "border-brand-cyan text-brand-cyan shadow-brand-cyan/20", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Devon Lane", role: "Securities Expert", color: "border-emerald-400 text-emerald-400 shadow-emerald-400/20", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Theresa Webb", role: "Operations Lead", color: "border-purple-400 text-purple-400 shadow-purple-500/20", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Courtney Henry", role: "Legal Counsel", color: "border-brand-pink text-brand-pink shadow-brand-pink/20", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Bessie Cooper", role: "Audits Strategist", color: "border-brand-cyan text-brand-cyan shadow-brand-cyan/20", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300" },
    ],
    management: [
      { name: "Albert Flores", role: "Director of Operations", color: "border-brand-pink text-brand-pink shadow-brand-pink/20", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Jacob Jones", role: "Chief Security Officer", color: "border-emerald-400 text-emerald-400 shadow-emerald-400/20", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Devon Lane", role: "Strategic Architect", color: "border-brand-cyan text-brand-cyan shadow-brand-cyan/20", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300" },
    ],
    marketing: [
      { name: "Devon Lane", role: "Global PR Director", color: "border-purple-400 text-purple-400 shadow-purple-500/20", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Jacob Jones", role: "Community Lead", color: "border-brand-pink text-brand-pink shadow-brand-pink/20", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300" },
      { name: "Bessie Cooper", role: "Social Campaign Manager", color: "border-emerald-500 text-emerald-500 shadow-emerald-500/20", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300" },
    ]
  };

  return (
    <section id="team" className="relative py-16 md:py-24 bg-[#06041f] overflow-hidden border-t border-indigo-500/10">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Active Founders Subsection */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#a3a3c2] uppercase bg-[#13113a] border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              FOUNDERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Active Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <div 
                key={i}
                className="bg-[#0c0a25] border border-indigo-500/20 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-xl hover:border-brand-pink/30 hover:shadow-brand-pink/5 transition-all duration-300"
              >
                {/* Profile Image with subtle cyan-pink dual gradient ring */}
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-brand-pink to-brand-cyan flex-shrink-0 relative">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-brand-cyan text-[#0c0a25] rounded-full flex items-center justify-center border-2 border-[#0c0a25]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Info and Social link shapes */}
                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{founder.name}</h3>
                    <span className="text-xs font-semibold text-brand-pink uppercase tracking-widest">{founder.role}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Driving legal frameworks, institutional adoption campaigns, and core smart-contract engineering values.
                  </p>

                  <div className="flex justify-center sm:justify-start gap-3 pt-2">
                    <a href={founder.socials.linkedin} className="w-9 h-9 rounded-full bg-indigo-950 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-500/10">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={founder.socials.twitter} className="w-9 h-9 rounded-full bg-indigo-950 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-500/10">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={founder.socials.youtube} className="w-9 h-9 rounded-full bg-indigo-950 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-500/10">
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a href="mailto:contact@iko.io" className="w-9 h-9 rounded-full bg-indigo-950 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-indigo-500/10">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab-Based Advisory / Management / Marketing Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              Our Core Team
            </h3>
            
            {/* Tabs Trigger List */}
            <div className="inline-flex rounded-full bg-[#0d0a2d] border border-indigo-500/10 p-1">
              {[
                { id: "advisory", label: "Advisory Team" },
                { id: "management", label: "Management Team" },
                { id: "marketing", label: "Marketing Team" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-md shadow-brand-pink/10"
                      : "text-slate-400 hover:text-white hover:bg-indigo-950/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Glowing Circle Profile Border Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            {teamData[activeTab].map((member, i) => (
              <div 
                key={i}
                className="bg-[#0c0a25]/60 hover:bg-[#0c0a25] border border-indigo-500/10 hover:border-indigo-500/30 rounded-2xl p-4 text-center transition-all duration-300 shadow-md group relative overflow-visible"
              >
                {/* Image surrounded by glowing colorful ring based on member profile */}
                <div className={`w-20 h-20 rounded-full mx-auto p-0.5 border-2 ${member.color} shadow-lg flex items-center justify-center overflow-hidden mb-4 relative`}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-indigo-950 text-white rounded-full flex items-center justify-center border border-indigo-500/20 shadow">
                    <Linkedin className="w-2.5 h-2.5 text-brand-cyan" />
                  </div>
                </div>

                <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-brand-pink transition-colors truncate">
                  {member.name}
                </h4>
                <p className="text-slate-400 text-[11px] font-medium tracking-wide mt-1 truncate">
                  {member.role}
                </p>
                
                {/* Social hover badge */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-1.5 text-slate-500 text-[10px]">
                  <span className="hover:text-white cursor-pointer font-bold uppercase">view profile</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
