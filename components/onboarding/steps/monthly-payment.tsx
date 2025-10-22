"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

interface PaymentOption {
  id: string;
  amount: number;
  duration: number;
  recommended?: boolean;
}

export function MonthlyPayment() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("850");

  const options: PaymentOption[] = [
    { id: "650", amount: 650, duration: 36 },
    { id: "850", amount: 850, duration: 24, recommended: true },
    { id: "1200", amount: 1200, duration: 18 },
  ];

  const handleContinue = () => {
    router.push("/onboarding/savings");
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          How much can pay each month?
        </h1>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`bg-white rounded-3xl p-5 flex flex-col gap-0 border-2 transition-all ${
              selectedOption === option.id
                ? "border-neon-lime"
                : "border-black/[0.02]"
            } hover:border-neon-lime/50 relative`}
          >
            {/* Recommended Badge */}
            {option.recommended && selectedOption === option.id && (
              <div className="absolute top-3 right-3 bg-neon-lime px-3 py-0.5 rounded-xl">
                <p className="font-satoshi font-bold text-base leading-6 text-black">
                  Recommended
                </p>
              </div>
            )}

            <div className="flex items-center gap-3 h-8">
              {/* Radio Button */}
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                selectedOption === option.id
                  ? "bg-neon-lime border-[#f6f5f1]"
                  : "border-slate-100/20"
              }`}>
                {selectedOption === option.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#142a31]" />
                )}
              </div>

              {/* Amount */}
              <p className="flex-1 font-sora font-extrabold text-base leading-normal text-carbon uppercase">
                £{option.amount.toLocaleString()} / mo
              </p>
            </div>

            {/* Duration */}
            <div className="pl-9">
              <p className="font-satoshi font-medium text-base leading-6 text-slate-100">
                Pay off in {option.duration} months
              </p>
            </div>
          </button>
        ))}
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
