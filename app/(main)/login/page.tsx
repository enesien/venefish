import { AuthCard } from "@/components/auth-card";
import { ProviderLoginButtons } from "@/components/auth/provider-login-buttons";
import { OrSeparator } from "@/components/ui/or-separator";

export default function LoginPage() {
  return (
    <div className="grow flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-md sm:max-w-lg space-y-4 sm:space-y-6">
        <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 text-center">
          Create your Incredible account
        </h1>
        <AuthCard />
        <OrSeparator />
        <ProviderLoginButtons />
      </section>
    </div>
  );
}
