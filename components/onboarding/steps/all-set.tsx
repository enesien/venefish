"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export function AllSet() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/app");
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-[600px] w-full text-center">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="font-sora font-extrabold text-4xl leading-tight text-black">
          You&apos;re all set!
        </h1>
        <p className="font-satoshi font-medium text-lg leading-7 text-carbon">
          Download Incredible to complete your Plan.
        </p>
      </div>

      {/* QR Code Section */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-satoshi font-bold text-base text-carbon">
          Scan to download:
        </p>

        {/* QR Code - Using placeholder, replace with actual QR code */}
        <div className="relative w-[160px] h-[160px] bg-white border-2 border-[#e5e5e5] rounded-2xl p-4 flex items-center justify-center">
          {/* QR Code placeholder - you can replace this with an actual QR code generator */}
          <div className="w-full h-full bg-black/10 rounded flex items-center justify-center relative">
            {/* QR pattern simulation - replace with real QR code */}
            <div className="grid grid-cols-8 grid-rows-8 gap-[2px] w-full h-full p-2">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'} rounded-sm`}
                />
              ))}
            </div>
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-neon-lime rounded-lg flex items-center justify-center">
                <Image
                  src="http://localhost:3845/assets/da22b51781b151e0c1c21904acbe18ecf5effdc2.svg"
                  alt="Incredible"
                  width={24}
                  height={30}
                  className="w-6 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleGetStarted}
        className="bg-neon-lime hover:bg-neon-lime/90 text-carbon font-sora font-extrabold text-sm md:text-base uppercase px-8 md:px-12 h-12 md:h-14 rounded-full flex items-center justify-center transition-colors w-full max-w-[300px]"
      >
        Download Incredible
      </button>

      {/* Available on iOS/Android */}
      <div className="flex items-center gap-2 text-carbon">
        <span className="font-satoshi font-medium text-sm">Available on</span>
        <div className="flex items-center gap-1">
          {/* Apple Logo */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 15.625C15.9375 16.3438 15.5625 17 15.125 17.5938C14.5 18.4375 13.9688 19.0312 13.5312 19.375C12.875 20 12.1562 20.3125 11.375 20.3438C10.8125 20.3438 10.125 20.1875 9.3125 19.875C8.5 19.5625 7.75 19.4062 7.0625 19.4062C6.34375 19.4062 5.5625 19.5625 4.71875 19.875C3.875 20.1875 3.21875 20.3438 2.75 20.375C1.96875 20.4062 1.25 20.0938 0.5625 19.4375C0.09375 19.0625 0.53125 18.4688 0.875 17.625C1.4375 16.4062 1.71875 15.25 1.71875 14.1562C1.71875 12.9062 1.40625 11.8125 0.78125 10.875C0.28125 10.0938 0.15625 9.4375 0.40625 8.90625C0.65625 8.375 0.9375 7.9375 1.25 7.59375C1.875 7.03125 2.59375 6.71875 3.40625 6.65625C3.96875 6.65625 4.71875 6.84375 5.65625 7.21875C6.59375 7.59375 7.1875 7.78125 7.4375 7.78125C7.71875 7.78125 8.375 7.5625 9.40625 7.125C10.4062 6.71875 11.25 6.53125 11.9375 6.5625C13.5938 6.65625 14.875 7.3125 15.75 8.53125C14.3125 9.46875 13.5938 10.7812 13.5938 12.4688C13.5938 13.8438 14.0938 15 15.0938 15.9375C15.5312 16.375 16.0312 16.7188 16.5938 16.9688C16.5 17.2188 16.375 17.4375 16.25 17.625V15.625ZM12.0625 0.71875C12.0625 1.75 11.6875 2.71875 10.9375 3.625C9.96875 4.71875 8.78125 5.375 7.5 5.28125C7.46875 5.15625 7.4375 5 7.4375 4.875C7.4375 3.875 7.875 2.8125 8.625 1.9375C9 1.5 9.46875 1.125 10.0312 0.8125C10.5938 0.5 11.125 0.34375 11.625 0.3125C11.6562 0.4375 11.6875 0.5625 11.6875 0.71875H12.0625Z" fill="currentColor"/>
          </svg>
          {/* Google Play Logo */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5L11.5 11.5L1.5 21.5V1.5Z" fill="#00D856" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M11.5 11.5L21.5 1.5L15 5L11.5 11.5Z" fill="#FFCB00" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M11.5 11.5L15 18L21.5 21.5L11.5 11.5Z" fill="#FF3E00" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
