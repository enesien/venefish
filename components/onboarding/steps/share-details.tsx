"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

export function ShareDetails() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "+44",
  });

  const handleContinue = () => {
    router.push("/onboarding/all-set");
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          Almost there!
        </h1>
        <p className="font-satoshi font-medium text-base leading-6 text-carbon">
          Enter your details to get started with your personalised debt payoff plan.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-3 pb-6">
        {/* Name Fields */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-1 h-[85px]">
            <label className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100">
              First name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="flex-1 bg-white border-2 border-slate-100/20 rounded-2xl px-4 py-3 font-satoshi font-bold text-base leading-6 text-black outline-none focus:border-carbon transition-colors"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1 h-[85px]">
            <label className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100">
              Last name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="flex-1 bg-white border-2 border-slate-100/20 rounded-2xl px-4 py-3 font-satoshi font-bold text-base leading-6 text-black outline-none focus:border-carbon transition-colors"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1 h-[85px]">
          <label className="font-satoshi font-medium text-[13px] leading-[18px] text-slate-100">
            Email address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex-1 bg-white border-2 border-slate-100/20 rounded-2xl px-4 py-3 font-satoshi font-bold text-base leading-6 text-black outline-none focus:border-carbon transition-colors"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-1 h-[85px]">
          <label className="font-satoshi font-medium text-[13px] leading-[18px] text-carbon">
            Phone number
          </label>
          <div className="flex-1 bg-white border-2 border-carbon rounded-2xl px-4 py-3 flex items-center gap-1">
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="font-satoshi font-bold text-base leading-6 text-black outline-none bg-transparent"
            />
            <div className="w-px h-6 bg-carbon" />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-carbon hover:bg-carbon/90 text-white font-sora font-extrabold text-base uppercase px-8 h-12 rounded-[48px] flex items-center justify-center gap-2 transition-colors"
      >
        CONFIRM DETAILS
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
