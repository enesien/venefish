"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

export function ChoosePlan() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("plus");

  const handleContinue = () => {
    router.push("/onboarding/share-details");
  };

  const features = [
    "Pay all your cards with Plan",
    "Insights on all your cards",
    "Earn rewards on all your bills",
    "No additional ReFi fees",
    "Save up to £1,500 more",
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          Choose your Plan
        </h1>
      </div>

      {/* Plan Options and Features */}
      <div className="flex flex-col gap-4 pb-9">
        {/* Plan Options */}
        <div className="flex flex-col gap-4">
          {/* Plus Plan */}
          <button
            onClick={() => setSelectedPlan("plus")}
            className={`bg-white rounded-3xl p-5 flex flex-col gap-3 border-2 transition-all ${
              selectedPlan === "plus"
                ? "border-neon-lime"
                : "border-black/[0.02]"
            }`}
          >
            <div className="flex items-center gap-3 h-8">
              <div className="flex-1 flex items-center justify-between">
                <div className="bg-neon-lime px-3 py-0.5 rounded-xl flex items-center gap-1.5">
                  <div className="w-3.5 h-4.5 text-xs">💡</div>
                  <p className="font-satoshi font-bold text-base leading-6 text-black">
                    Plus
                  </p>
                </div>
                <p className="font-sora font-extrabold text-base leading-normal text-carbon uppercase">
                  £4 / mo
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                selectedPlan === "plus"
                  ? "bg-neon-lime border-[#f6f5f1]"
                  : "border-slate-100/20"
              }`}>
                {selectedPlan === "plus" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#142a31]" />
                )}
              </div>
            </div>
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100 text-left">
              Pay all your cards with one payment
            </p>
          </button>

          {/* Pro Plan */}
          <button
            onClick={() => setSelectedPlan("pro")}
            className={`bg-white rounded-3xl p-5 flex flex-col gap-3 border-2 transition-all ${
              selectedPlan === "pro"
                ? "border-neon-lime"
                : "border-black/[0.02]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center justify-between">
                <div className="bg-gradient-to-r from-slate-100/20 to-white/20 px-3 py-0.5 rounded-xl flex items-center gap-1.5">
                  <div className="w-3.5 h-4.5 text-xs">💡</div>
                  <p className="font-satoshi font-bold text-base leading-6 text-black">
                    Pro
                  </p>
                </div>
                <p className="font-sora font-extrabold text-base leading-normal text-carbon uppercase">
                  £7 / mo
                </p>
              </div>
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                selectedPlan === "pro"
                  ? "bg-neon-lime border-[#f6f5f1]"
                  : "border-slate-100/20"
              }`}>
                {selectedPlan === "pro" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#142a31]" />
                )}
              </div>
            </div>
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100 text-left">
              Fee-free ReFi, additional savings and more
            </p>
          </button>
        </div>

        {/* Features Comparison */}
        <div className="flex gap-3">
          <div className="flex-1 flex flex-col gap-3 py-3 font-satoshi text-base leading-6">
            <p className="font-medium text-slate-100">What&apos;s included?</p>
            {features.map((feature, index) => (
              <p key={index} className="font-bold text-carbon">
                {feature}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center justify-center p-3">
            <p className="font-satoshi font-bold text-base leading-6 text-carbon">Plus</p>
            <div className="bg-neon-lime rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-neon-lime rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-neon-lime rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-slate-100" />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-slate-100" />
            </div>
          </div>
          <div className="bg-slate-100/5 rounded-2xl flex flex-col gap-3 items-center justify-center p-3">
            <p className="font-satoshi font-bold text-base leading-6 text-carbon">Pro</p>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="bg-neon-lime rounded-full w-6 h-6 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="text-center space-y-0">
          <p className="font-satoshi font-bold text-base leading-6 text-slate-100">
            Cancel anytime.
          </p>
          <p className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100">
            90 day money back guarantee.
          </p>
          <p className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100">
            Nothing to pay today - fee is collected with your deposit.
          </p>
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
