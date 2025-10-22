import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { TotalBalance } from "@/components/onboarding/steps/total-balance";

export default function OnboardingTotalBalance() {
  return (
    <>
      <OnboardingHeader currentStep={1} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <TotalBalance />
      </div>
    </>
  );
}
