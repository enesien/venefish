"use client";

import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

export function Savings() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/onboarding/main-goal");
  };

  const benefits = [
    "Smarter payment schedule",
    "Lower average interest",
    "Automated payments",
    "Progress you can actually see",
  ];

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          Here&apos;s how much you could save!
        </h1>
      </div>

      {/* Card Content */}
      <div className="bg-white border-2 border-[#fbfbfc] rounded-3xl p-8 flex flex-col gap-6">
        <p className="font-satoshi font-medium text-base leading-6 text-carbon">
          Based on people like you, you could save:
        </p>

        {/* Savings Card */}
        <div className="flex flex-col gap-4">
          <div className="border-2 border-neon-lime bg-neon-lime/10 rounded-3xl p-5 pt-6 pb-8 flex flex-col gap-2 items-center">
            <p className="font-sora font-extrabold text-[32px] leading-normal text-carbon text-center">
              £4,830 🎉
            </p>
            <div className="flex flex-col gap-3 items-center">
              <div className="bg-neon-lime px-3 py-1 rounded-[14px]">
                <p className="font-satoshi font-bold text-base leading-6 text-carbon">
                  Pay off 18 months faster
                </p>
              </div>
              <p className="font-satoshi font-medium text-base leading-6 text-carbon text-center">
                Total interest savings*
              </p>
            </div>
          </div>

          <p className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100 text-center">
            *Estimates are based on your current information.
          </p>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col gap-3 py-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="bg-neon-lime rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-satoshi font-bold text-base leading-6 text-carbon">
                {benefit}
              </p>
            </div>
          ))}
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
