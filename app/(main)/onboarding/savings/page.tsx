import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { Savings } from "@/components/onboarding/steps/savings";

export default function OnboardingSavings() {
  return (
    <>
      <OnboardingHeader currentStep={4} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <Savings />
      </div>
    </>
  );
}
