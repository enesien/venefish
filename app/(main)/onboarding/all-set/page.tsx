import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { AllSet } from "@/components/onboarding/steps/all-set";

export default function OnboardingAllSet() {
  return (
    <>
      <OnboardingHeader currentStep={9} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <AllSet />
      </div>
    </>
  );
}
