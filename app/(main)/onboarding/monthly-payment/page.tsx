import { OnboardingHeader } from "@/components/onboarding/onboarding-header";
import { MonthlyPayment } from "@/components/onboarding/steps/monthly-payment";

export default function OnboardingMonthlyPayment() {
  return (
    <>
      <OnboardingHeader currentStep={3} totalSteps={9} />
      <div className="flex-1 flex items-center justify-center w-full">
        <MonthlyPayment />
      </div>
    </>
  );
}
