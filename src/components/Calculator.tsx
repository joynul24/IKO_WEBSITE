import React, { useState, useEffect } from "react";
import { Coins, Flame, Star, ShieldAlert } from "lucide-react";
import coinsImg from "../assets/images/crypto_coins_1779822026186.png";

export default function Calculator() {
  // Calculator states
  const [amountInvested, setAmountInvested] = useState(50000); // in $
  const [expectedFoxPrice, setExpectedFoxPrice] = useState(0.36); // in $
  const [calculationTime, setCalculationTime] = useState(4); // 4 years or quarters

  // Derived calculations
  const [quantityIko, setQuantityIko] = useState(500000);
  const [expectedValue, setExpectedValue] = useState(180000);
  const [monthlyDividend, setMonthlyDividend] = useState(1296);
  const [dividendTokens, setDividendTokens] = useState(3600);
  const [masternodeBonus, setMasternodeBonus] = useState(180000);
  const [roiPercentage, setRoiPercentage] = useState(360);

  useEffect(() => {
    // Re-calculate live!
    // Let's assume baseline token price during sale is $0.10.
    // So Quantity Iko = Amount Invested / 0.10.
    const qty = amountInvested / 0.10;
    setQuantityIko(qty);

    // Expected Value = Quantity * Expected FOX Price
    const expVal = qty * expectedFoxPrice;
    setExpectedValue(expVal);

    // ROI = ((Expected Value - Amount Invested) / Amount Invested) * 100
    const roi = amountInvested > 0 ? Math.round(((expVal - amountInvested) / amountInvested) * 100) : 0;
    setRoiPercentage(roi);

    // Monthly Dividend tokens = Quantity * Code constant (say 0.0072 multiplied by time multiplier)
    const divTokens = Math.round(qty * 0.0072);
    setDividendTokens(divTokens);

    // Dividend in USD = Dividend tokens * Expected FOX Price
    const divUsd = divTokens * expectedFoxPrice;
    setMonthlyDividend(Math.round(divUsd));

    // Masternode Bonus = Expected Value * (Time multiplier * 0.25)
    setMasternodeBonus(Math.round(expVal * (calculationTime * 0.25)));
  }, [amountInvested, expectedFoxPrice, calculationTime]);

  return (
    <section id="feature" className="relative py-16 md:py-24 bg-[#06041f] overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Description & Sliders */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why You Choose IKO is worth <br />
              buying today?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed mb-10">
              Use the window for the planned investment and calculate the estimated Iko price and your monthly dividend yields at a customized fixed time. Move the sliders to test potential yields.
            </p>

            {/* Interactive Sliders Block */}
            <div className="bg-[#0b082a] border border-indigo-500/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
              
              {/* Slider 1: Amount Invested */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-semibold tracking-wide">Amount Investment ($)</span>
                  <span className="text-brand-pink font-extrabold font-mono text-lg bg-brand-pink/10 px-3.5 py-1 rounded-lg border border-brand-pink/20">
                    {amountInvested.toLocaleString()} $
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="100000"
                    step="500"
                    value={amountInvested}
                    onChange={(e) => setAmountInvested(Number(e.target.value))}
                    className="w-full h-2 bg-indigo-950 rounded-lg appearance-none cursor-pointer accent-brand-pink"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                    <span>100 $</span>
                    <span>100,000 $</span>
                  </div>
                </div>
                <div className="text-xs text-slate-400 flex justify-between">
                  <span>Quantity Iko allocated:</span>
                  <span className="text-brand-cyan md:font-bold font-mono">{quantityIko.toLocaleString()} iko</span>
                </div>
              </div>

              {/* Slider 2: Expected FOX Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-semibold tracking-wide">Expected FOX Price ($)</span>
                  <span className="text-brand-cyan font-extrabold font-mono text-lg bg-brand-cyan/10 px-3.5 py-1 rounded-lg border border-brand-cyan/25">
                    {expectedFoxPrice.toFixed(2)} $
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0.10"
                    max="2.50"
                    step="0.01"
                    value={expectedFoxPrice}
                    onChange={(e) => setExpectedFoxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-indigo-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                    <span>0.10 $</span>
                    <span>2.50 $</span>
                  </div>
                </div>
              </div>

              {/* Slider 3: Hold Duration Time / Growth Multiplier */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-semibold tracking-wide">Hold Duration / Multiplier</span>
                  <span className="text-purple-400 font-extrabold font-mono text-lg bg-purple-950/40 px-3.5 py-1 rounded-lg border border-purple-800/30">
                    {calculationTime} Years
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={calculationTime}
                    onChange={(e) => setCalculationTime(Number(e.target.value))}
                    className="w-full h-2 bg-indigo-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Output Cards & Floating Coins */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            
            {/* Output Card 1 */}
            <div className="bg-[#110e35] border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-center shadow-lg relative overflow-hidden transition-all duration-300 hover:border-brand-pink/30 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-brand-pink/15 border border-brand-pink/25 flex items-center justify-center flex-shrink-0">
                <Coins className="w-7 h-7 text-brand-pink" />
              </div>
              <div className="flex-1">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                  Expected value of investment
                </span>
                <span className="block text-2xl font-extrabold text-white font-mono tracking-tight">
                  {expectedValue.toLocaleString()} $
                </span>
                <span className="inline-flex text-xs text-emerald-400 font-bold mt-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15">
                  ROI = {roiPercentage}%
                </span>
              </div>
            </div>

            {/* Output Card 2 */}
            <div className="bg-[#110e35] border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-center shadow-lg relative overflow-hidden transition-all duration-300 hover:border-brand-purple/30 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/15 border border-brand-purple/25 flex items-center justify-center flex-shrink-0">
                <Flame className="w-7 h-7 text-brand-purple" />
              </div>
              <div className="flex-1">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                  Expected monthly dividend
                </span>
                <span className="block text-2xl font-extrabold text-white font-mono tracking-tight">
                  {monthlyDividend.toLocaleString()} $
                </span>
                <span className="block text-xs text-purple-400 font-medium mt-1">
                  {dividendTokens.toLocaleString()} FOX tokens monthly
                </span>
              </div>
            </div>

            {/* Output Card 3 */}
            <div className="bg-[#110e35] border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-center shadow-lg relative overflow-hidden transition-all duration-300 hover:border-brand-cyan/30 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center flex-shrink-0">
                <Star className="w-7 h-7 text-brand-cyan" />
              </div>
              <div className="flex-1">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                  Masternode bonus
                </span>
                <span className="block text-2xl font-extrabold text-white font-mono tracking-tight">
                  {masternodeBonus.toLocaleString()} $
                </span>
                <span className="inline-flex text-xs text-brand-cyan font-bold mt-1 bg-brand-cyan/15 px-2 py-0.5 rounded border border-brand-cyan/20">
                  Premium tier reward
                </span>
              </div>
            </div>

            {/* Visual Coins Illustration Overlay */}
            <div className="mt-4 flex justify-center items-center">
              <img
                src={coinsImg}
                alt="Crypto Coin Rendering"
                referrerPolicy="no-referrer"
                className="w-48 object-contain animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
