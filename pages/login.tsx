import { SignInForm } from "@/components/auth/SignInForm";
import { SignUpForm } from "@/components/auth/SignUpForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "reactfire";

export default function LoginPage() {
  const [isShowingSignUp, setIsShowingSignUp] = useState<boolean>(false);
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="mt-[20%]">
      <section className="max-w-md mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Venefish
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>{isShowingSignUp ? "Sign Up" : "Sign In"}</CardTitle>
            <CardDescription>
              Give them a reason to {isShowingSignUp ? "sign up" : "sign in"}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isShowingSignUp ? (
              <SignUpForm onShowLogin={() => setIsShowingSignUp(false)} />
            ) : (
              <SignInForm onShowSignUp={() => setIsShowingSignUp(true)} />
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
