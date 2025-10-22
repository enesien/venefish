import { OnboardingFooter } from "@/components/onboarding/onboarding-footer";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cloud flex flex-col">
      <main className="flex-1 flex flex-col items-center overflow-y-auto px-4 py-4">
        {children}
      </main>
      <OnboardingFooter />
    </div>
  );
}
