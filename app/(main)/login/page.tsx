import { AuthCard } from "@/components/auth-card";
import { ProviderLoginButtons } from "@/components/auth/provider-login-buttons";
import { OrSeparator } from "@/components/ui/or-separator";

export default function LoginPage() {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <section className="w-[32rem] space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Login Example
        </h1>
        <AuthCard />
        <OrSeparator />
        <ProviderLoginButtons />
      </section>
    </div>
  );
}
