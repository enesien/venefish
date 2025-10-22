import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { PlanReview } from "@/components/onboarding/steps/plan-review";

export default function OnboardingPlanReview() {
  return (
    <>
      <OnboardingHeader currentStep={6} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <PlanReview />
      </div>
    </>
  );
}
