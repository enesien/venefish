import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { ShareDetails } from "@/components/onboarding/steps/share-details";

export default function OnboardingShareDetails() {
  return (
    <>
      <OnboardingHeader currentStep={8} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <ShareDetails />
      </div>
    </>
  );
}
