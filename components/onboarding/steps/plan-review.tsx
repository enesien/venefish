"use client";

import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

export function PlanReview() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/onboarding/choose-plan");
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          Your Plan to pay-off your cards
        </h1>
        <p className="font-satoshi font-medium text-base leading-6 text-carbon">
          Here&apos;s how we&apos;ll help you get there faster and save money.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 pb-6">
        {/* Total Balance Card */}
        <div className="bg-white border-2 border-black/[0.02] rounded-3xl p-5 flex items-center gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100">
              Total balance
            </p>
            <p className="font-sora font-bold text-xl leading-7 text-carbon">
              £5,500
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 border-2 border-white flex items-center justify-center text-sm">
                🏦
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 border-2 border-white flex items-center justify-center text-sm">
                ⭐
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-400 border-2 border-white flex items-center justify-center text-sm">
                🐴
              </div>
            </div>
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100">
              3 cards
            </p>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="bg-white border-2 border-black/[0.02] rounded-3xl p-5 flex items-center gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100">
              Plan start date
            </p>
            <p className="font-sora font-bold text-xl leading-7 text-carbon">
              July 31st
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-1 items-end">
            <p className="font-satoshi font-medium text-base leading-6 text-slate-100 text-right">
              9 payments of
            </p>
            <p className="font-sora font-bold text-xl leading-7 text-carbon text-right">
              £700
            </p>
          </div>
        </div>

        {/* Savings Card */}
        <div className="border-2 border-neon-lime bg-neon-lime/10 rounded-3xl p-5 pt-6 pb-8 flex flex-col gap-2 items-center">
          <p className="font-satoshi font-bold text-base leading-6 text-carbon text-center">
            You&apos;ll save an estimated*
          </p>
          <p className="font-sora font-extrabold text-[32px] leading-normal text-carbon text-center">
            £4,830 🎉
          </p>
          <div className="bg-neon-lime px-3 py-1 rounded-[14px]">
            <p className="font-satoshi font-bold text-base leading-6 text-carbon">
              Pay off in Sep 2026
            </p>
          </div>
        </div>

        <p className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100 text-center">
          *Estimates are based on your current information.
        </p>
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
