import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cloud flex flex-col relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute w-[800px] h-[800px] bg-gradient-radial from-neon-lime/60 to-transparent rounded-full blur-3xl -bottom-40 right-1/4 transform translate-x-1/2" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-8 min-h-[100px]">
        <div className="flex items-center gap-2 h-[30px]">
          <div className="relative w-[23px] h-[30px]">
            <Image
              src="http://localhost:3845/assets/da22b51781b151e0c1c21904acbe18ecf5effdc2.svg"
              alt="Incredible logo mark"
              width={23}
              height={30}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-[160.215px] h-[20px]">
            <Image
              src="http://localhost:3845/assets/69c551878be36100ba06282f63630da9eac7a745.svg"
              alt="INCREDIBLE"
              width={160}
              height={20}
              className="w-full h-full"
            />
          </div>
        </div>
        <p className="font-satoshi font-medium text-carbon text-base leading-6">
          Having trouble? <span className="font-black underline cursor-pointer">Get Help</span>
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 gap-12">
        {/* Credit Cards Stack */}
        <div className="relative w-[335px] h-[174px] flex items-baseline justify-center pl-0 pr-[258px]">
          {/* Card 7 - First Direct */}
          <div className="absolute left-0 top-0 w-[268px] h-[170px] bg-black rounded-2xl border-2 border-white/20 shadow-lg z-[1]" style={{ transform: 'rotate(-12deg)' }} />

          {/* Card 6 - Nationwide */}
          <div className="absolute left-[10px] top-0 w-[268px] h-[170px] bg-[#011546] rounded-2xl border-2 border-white/20 shadow-lg z-[2]" style={{ transform: 'rotate(-8deg)' }} />

          {/* Card 5 - Aqua */}
          <div className="absolute left-[20px] top-0 w-[268px] h-[170px] bg-gradient-to-br from-[#011546] to-[#022a5e] rounded-2xl border-2 border-white/20 shadow-lg z-[3]" style={{ transform: 'rotate(-4deg)' }} />

          {/* Card 4 - American Express */}
          <div className="absolute left-[30px] top-0 w-[268px] h-[170px] bg-gradient-to-r from-[#001a61] to-[#0e8dee] rounded-2xl border-2 border-white/20 shadow-lg z-[4]" style={{ transform: 'rotate(0deg)' }} />

          {/* Card 3 - Pulse */}
          <div className="absolute left-[40px] top-0 w-[268px] h-[170px] bg-gradient-to-l from-[#ff957d] to-[#ffc500] rounded-2xl border-2 border-white/20 shadow-lg z-[5]" style={{ transform: 'rotate(4deg)' }} />

          {/* Card 2 - mbna */}
          <div className="absolute left-[50px] top-0 w-[268px] h-[170px] bg-[#002b3d] rounded-2xl border-2 border-white/20 shadow-lg z-[6]" style={{ transform: 'rotate(8deg)' }} />

          {/* Card 1 - Newpay (front) */}
          <div className="absolute left-[60px] top-0 w-[268px] h-[170px] bg-[#05e1aa] rounded-2xl border-2 border-white/20 shadow-xl z-[7] p-4 flex flex-col justify-between" style={{ transform: 'rotate(12deg)' }}>
            <div className="flex justify-end">
              <div className="text-white text-xs font-bold bg-gray-800 px-3 py-1 rounded-full">newpay</div>
            </div>
            <div className="flex justify-between items-end">
              <div className="w-10 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded" />
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-red-500 rounded-full opacity-80" />
                <div className="w-6 h-6 bg-orange-400 rounded-full opacity-80 -ml-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center max-w-[841px] mx-auto flex flex-col gap-6">
          <h1 className="font-sora font-extrabold text-[58px] leading-[66px] tracking-[-1px] text-black">
            Pay all of your credit cards with one payment
          </h1>
          <p className="font-satoshi font-medium text-[22px] leading-normal text-black">
            Save money on interest fees and pay your cards off faster - without a loan.
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/onboarding/total-balance">
          <button className="bg-neon-lime hover:bg-neon-lime/90 text-carbon font-sora font-extrabold text-base uppercase px-12 h-16 rounded-full transition-all duration-200 flex items-center justify-center">
            Get Started
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-[500px] mx-auto w-full px-0 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <p className="font-satoshi font-medium text-[10px] leading-normal text-slate-100 text-center w-full">
            Disclaimer: Incredible is an app which offers a simple way to manage your existing repayments,
            not a debt consolidation loan or debt management plan. Signing up with us will not show up on
            your credit report.
          </p>
          <div className="flex items-center justify-center gap-4 font-satoshi font-medium text-[10px] leading-normal text-slate-100">
            <Link href="#" className="underline">
              Plan Terms of Service
            </Link>
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="font-satoshi font-medium text-[10px] leading-normal text-slate-100 text-center w-full">
          © 2025 Incredible Technologies LTD
        </p>
      </footer>
    </div>
  );
}
