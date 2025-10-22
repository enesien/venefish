import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { CreditCards } from "@/components/onboarding/steps/credit-cards";

export default function OnboardingCreditCards() {
  return (
    <>
      <OnboardingHeader currentStep={2} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <CreditCards />
      </div>
    </>
  );
}
