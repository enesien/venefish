import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { ChoosePlan } from "@/components/onboarding/steps/choose-plan";

export default function OnboardingChoosePlan() {
  return (
    <>
      <OnboardingHeader currentStep={7} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <ChoosePlan />
      </div>
    </>
  );
}
