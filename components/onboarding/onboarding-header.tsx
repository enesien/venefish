import Image from "next/image";
import Link from "next/link";

interface OnboardingHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export function OnboardingHeader({ currentStep, totalSteps }: OnboardingHeaderProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <header className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-8 gap-4 md:gap-0 min-h-[100px]">
      {/* Top row on mobile: Logo + Help Link */}
      <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 h-[30px]">
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
        </Link>

        {/* Help Link - visible on mobile */}
        <p className="font-satoshi font-medium text-sm md:text-base leading-6 text-carbon whitespace-nowrap md:hidden">
          Having trouble? <span className="font-black underline cursor-pointer">Get Help</span>
        </p>
      </div>

      {/* Progress Bar - moves to bottom on mobile */}
      <div className="flex-1 max-w-full md:max-w-[600px] md:mx-8 flex flex-col gap-0.5 order-last md:order-none">
        <p className="font-satoshi font-bold text-base leading-6 text-carbon">
          {currentStep} / {totalSteps}
        </p>
        <div className="bg-[#142a31] h-2.5 rounded-lg p-0.5">
          <div
            className="bg-neon-lime h-full rounded-md transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Help Link - visible on desktop */}
      <p className="hidden md:block font-satoshi font-medium text-base leading-6 text-carbon whitespace-nowrap">
        Having trouble? <span className="font-black underline cursor-pointer">Get Help</span>
      </p>
    </header>
  );
}
