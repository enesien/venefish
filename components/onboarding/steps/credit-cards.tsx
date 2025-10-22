"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "../back-button";

interface Card {
  id: string;
  name: string;
  logo: string;
  selected: boolean;
}

export function CreditCards() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState<Card[]>([
    { id: "nationwide", name: "Nationwide", logo: "🏦", selected: true },
    { id: "capital-one", name: "Capital One", logo: "💳", selected: false },
    { id: "virgin", name: "Virgin Money", logo: "🎯", selected: false },
    { id: "rbs", name: "Royal Bank of Scotland", logo: "🏛️", selected: false },
    { id: "starling", name: "Starling", logo: "⭐", selected: true },
    { id: "lloyds", name: "Lloyds", logo: "🐴", selected: true },
    { id: "mbna", name: "MBNA", logo: "💼", selected: false },
    { id: "hsbc", name: "HSBC", logo: "🔺", selected: false },
  ]);

  const selectedCount = cards.filter((card) => card.selected).length;

  const toggleCard = (id: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, selected: !card.selected } : card)));
  };

  const handleContinue = () => {
    router.push("/onboarding/monthly-payment");
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />
        <h1 className="font-sora font-bold text-xl leading-7 text-black">
          What cards do you have a balance on?
        </h1>
      </div>

      {/* Card Content */}
      <div className="bg-white border-2 border-[#fbfbfc] rounded-3xl p-8 h-[565px] overflow-hidden relative">
        <div className="flex flex-col gap-6 h-full">
          {/* Search Input */}
          <div className="bg-white border-2 border-slate-100/20 rounded-2xl px-4 py-3 flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="#71706a" strokeWidth="2"/>
              <path d="M20 20L17 17" stroke="#71706a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search providers e.g. AMEX"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 font-satoshi font-bold text-base leading-6 text-slate-100 placeholder:text-slate-100 bg-transparent outline-none"
            />
          </div>

          {/* Cards List */}
          <div className="flex flex-col overflow-y-auto">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className="flex items-center gap-2 py-2 border-b border-slate-100/20 hover:bg-slate-100/5 transition-colors"
              >
                {card.selected && (
                  <div className="bg-neon-lime rounded-lg w-6 h-6 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7L6 11L12 3" stroke="#142a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                {!card.selected && <div className="w-6 h-6" />}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-xl">
                  {card.logo}
                </div>
                <span className="font-satoshi font-bold text-base leading-6 text-carbon">
                  {card.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-carbon hover:bg-carbon/90 text-white font-sora font-extrabold text-base uppercase px-8 h-12 rounded-[48px] flex items-center justify-center gap-2 transition-colors"
      >
        Continue with {selectedCount} cards
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
