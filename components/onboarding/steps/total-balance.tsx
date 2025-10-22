"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

export function TotalBalance() {
  const router = useRouter();
  const [balance, setBalance] = useState(5000);
  const minBalance = 1000;
  const maxBalance = 30000;

  const handleContinue = () => {
    router.push("/onboarding/credit-cards");
  };

  const decreaseBalance = () => {
    if (balance > minBalance) {
      setBalance(Math.max(minBalance, balance - 100));
    }
  };

  const increaseBalance = () => {
    if (balance < maxBalance) {
      setBalance(Math.min(maxBalance, balance + 100));
    }
  };

  const sliderPercentage = ((balance - minBalance) / (maxBalance - minBalance)) * 100;

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          What&apos;s your total credit card balance?
        </h1>
      </div>

      {/* Card Content */}
      <div className="bg-white border-2 border-[#fbfbfc] rounded-3xl p-8 flex flex-col gap-6">
        <p className="font-satoshi font-medium text-base leading-6 text-carbon">
          Don&apos;t worry, this can be an estimate! We&apos;ll use this to work out how much you could save by paying off your cards smarter.
        </p>

        {/* Balance Adjuster */}
        <div className="border-2 border-[#e7e5e1] rounded-[40px] h-[68px] bg-white flex items-center justify-between px-4">
          <button
            onClick={decreaseBalance}
            className="bg-[rgba(212,208,201,0.5)] rounded-3xl w-10 h-10 flex items-center justify-center hover:bg-[rgba(212,208,201,0.7)] transition-colors"
            aria-label="Decrease balance"
          >
            <div className="w-5 h-0.5 bg-[#142a31] rounded-sm" />
          </button>

          <p className="font-sora font-extrabold text-[32px] leading-normal text-black">
            £{balance.toLocaleString()}
          </p>

          <button
            onClick={increaseBalance}
            className="bg-neon-lime rounded-3xl w-10 h-10 flex items-center justify-center hover:bg-neon-lime/80 transition-colors"
            aria-label="Increase balance"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V16M4 10H16" stroke="#142a31" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Slider */}
        <div className="flex flex-col gap-1 w-full">
          <div className="relative h-3 bg-[rgba(212,208,201,0.5)] rounded-[21px]">
            <div
              className="absolute h-full bg-neon-lime rounded-2xl transition-all"
              style={{ width: `${sliderPercentage}%` }}
            />
            {/* Slider knob */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[26px] h-[26px] bg-white border-2 border-black rounded-full shadow-md cursor-pointer transition-all"
              style={{ left: `calc(${sliderPercentage}% - 13px)` }}
            />
            {/* Min knob */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0.5 w-[26px] h-[26px] bg-[rgba(113,112,106,0.2)] rounded-full" />
            {/* Max knob */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0.5 w-[26px] h-[26px] bg-[rgba(113,112,106,0.2)] rounded-full" />
          </div>

          {/* Labels */}
          <div className="flex items-center justify-between font-satoshi font-bold text-base leading-6 text-slate-100">
            <span>£1k</span>
            <span>£30k+</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-carbon hover:bg-carbon/90 text-white font-sora font-extrabold text-base uppercase px-8 h-12 rounded-[48px] flex items-center justify-center gap-2 transition-colors"
      >
        Continue
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
