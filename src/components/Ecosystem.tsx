import React, { useState } from "react";
import { DollarSign, Landmark, CreditCard, ArrowRight, X, ShieldCheck, Check } from "lucide-react";

export default function Ecosystem() {
  const [selectedShare, setSelectedShare] = useState<string | null>(null);
  const [buyAmount, setBuyAmount] = useState<number>(1000);
  const [purchaseStep, setPurchaseStep] = useState<"input" | "success">("input");

  const options = [
    {
      id: "btc",
      name: "Enclose BTC",
      symbol: "BTC",
      logo: "₿",
      color: "from-amber-500 to-amber-600 shadow-amber-500/20 text-amber-500 bg-amber-500/10 border-amber-500/20",
      btnText: "Enclose BTC",
      rate: 0.000015, // BTC per USD
    },
    {
      id: "eth",
      name: "Enclose ETH",
      symbol: "ETH",
      logo: "Ξ",
      color: "from-cyan-400 to-blue-500 shadow-cyan-400/20 text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      btnText: "Enclose ETH",
      rate: 0.00028, // ETH per USD
    },
    {
      id: "bank",
      name: "Bank Transfer",
      symbol: "USD",
      logo: "🏛",
      color: "from-blue-500 to-indigo-600 shadow-blue-500/20 text-blue-400 bg-blue-500/10 border-blue-500/20",
      btnText: "Bank Transfer",
      rate: 1.0, // USD per USD
    },
    {
      id: "uxc",
      name: "Enclose UXC",
      symbol: "UXC",
      logo: "U",
      color: "from-fuchsia-500 to-purple-600 shadow-fuchsia-500/20 text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
      btnText: "Enclose UXC",
      rate: 4.15, // UXC tokens per USD
    }
  ];

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchaseStep("success");
  };

  const activeOptionDetails = options.find((o) => o.id === selectedShare);

  return (
    <section className="relative py-16 md:py-24 bg-[#030315] overflow-hidden">
      {/* Glow lines */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-pink uppercase bg-brand-pink/15 px-4 py-1.5 rounded-full inline-block mb-3">
            INVESTMENT CHANNELS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Invest in Our ecosystem shares today
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Acquire official IKO shares directly through decentralized tokens, primary smart contracts, or straightforward offline electronic bank channels.
          </p>
        </div>

        {/* Currency list grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option) => (
            <div 
              key={option.id}
              className="bg-[#0c0a25] border border-indigo-500/20 hover:border-brand-pink/30 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity ml-4 mt-4" />
              
              {/* Glowing circular coin placeholder symbol */}
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl font-extrabold shadow-lg mb-6 border ${option.color}`}>
                {option.logo}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{option.name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Fast secure automated gateway swap protocol with instant ledger validation.
              </p>

              <button 
                onClick={() => {
                  setSelectedShare(option.id);
                  setPurchaseStep("input");
                }}
                className="w-full bg-[#13113a] hover:bg-gradient-to-r hover:from-brand-pink hover:to-brand-purple text-slate-300 hover:text-white font-bold text-xs tracking-widest py-3 rounded-full transition-all border border-indigo-500/20 hover:border-transparent cursor-pointer"
              >
                {option.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic transaction popup Modal */}
        {selectedShare && activeOptionDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030315]/80 backdrop-blur-md">
            <div className="bg-[#0c0a25] border border-indigo-500/30 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl block overflow-hidden glow-pink">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-pink to-brand-purple" />
              
              <button 
                onClick={() => setSelectedShare(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {purchaseStep === "input" ? (
                <form onSubmit={handlePurchaseSubmit} className="space-y-6">
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full border border-indigo-500/20 bg-indigo-950/40 flex items-center justify-center text-xl font-bold">
                      {activeOptionDetails.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-normal">
                        Submit investment via {activeOptionDetails.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        1 USD = {activeOptionDetails.rate} {activeOptionDetails.symbol}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Investment Amount (USD)
                    </label>
                    <div className="relative rounded-xl border border-indigo-500/30 bg-[#110e35] px-4 py-3 flex items-center">
                      <DollarSign className="w-4 h-4 text-brand-pink mr-1.5" />
                      <input 
                        type="number"
                        min="50"
                        max="250000"
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(Number(e.target.value))}
                        className="bg-transparent text-white font-mono font-bold text-lg w-full focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-[#110e35] rounded-xl p-4 border border-indigo-500/10 space-y-2 text-xs font-mono text-slate-400">
                    <div className="flex justify-between">
                      <span>IKO tokens allocated:</span>
                      <span className="text-brand-cyan font-bold">{(buyAmount * 10).toLocaleString()} IKO</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gateway Exchange Fee:</span>
                      <span>{(buyAmount * 0.015).toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between border-t border-indigo-500/10 pt-2 text-white font-semibold">
                      <span>Estimated {activeOptionDetails.symbol} payout:</span>
                      <span className="text-brand-pink">
                        {(buyAmount * activeOptionDetails.rate).toLocaleString(undefined, { maximumFractionDigits: 5 })} {activeOptionDetails.symbol}
                      </span>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-95 text-white font-bold tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-brand-pink/10 cursor-pointer text-sm uppercase flex items-center justify-center gap-1.5"
                  >
                    Proceed with swap
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-3xl">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Investment pre-approved!</h3>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto mt-2 leading-relaxed">
                      Your request has been securely mapped to current contract parameters. Please process the transaction in your external Web3 wallet of choice to finalize the smart contract block.
                    </p>
                  </div>
                  
                  <div className="bg-[#110e35] rounded-xl p-4 border border-indigo-500/10 text-xs font-mono text-left space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Ref ID:</span>
                      <span className="text-slate-300">#IKO-{(Math.floor(Math.random() * 900000) + 100000)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Allocated IKO:</span>
                      <span className="text-brand-cyan font-bold">{(buyAmount * 10).toLocaleString()} IKO</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedShare(null)}
                    className="w-full bg-[#13113a] hover:bg-[#1b1958] text-white font-bold tracking-widest py-3 rounded-full transition-colors text-xs uppercase"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
