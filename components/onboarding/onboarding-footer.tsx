import Link from "next/link";

export function OnboardingFooter() {
  return (
    <footer className="max-w-[500px] mx-auto w-full px-0 py-8 space-y-8">
      <div className="space-y-1">
        <p className="font-satoshi font-medium text-[10px] leading-normal text-slate-100 text-center">
          Disclaimer: Incredible is an app which offers a simple way to manage your existing repayments,
          not a debt consolidation loan or debt management plan. Signing up with us will not show up on
          your credit report.
        </p>
        <div className="flex items-center justify-center gap-4 font-satoshi font-medium text-[10px] leading-normal text-slate-100">
          <Link href="#" className="underline">
            Plan Terms of Service
          </Link>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
      <p className="font-satoshi font-medium text-[10px] leading-normal text-slate-100 text-center">
        © 2025 Incredible Technologies LTD
      </p>
    </footer>
  );
}
