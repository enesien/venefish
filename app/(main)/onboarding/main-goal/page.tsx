import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { MainGoal } from "@/components/onboarding/steps/main-goal";

export default function OnboardingMainGoal() {
  return (
    <>
      <OnboardingHeader currentStep={5} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <MainGoal />
      </div>
    </>
  );
}
