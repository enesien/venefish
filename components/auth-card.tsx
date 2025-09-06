"use client";
import { SignUpForm } from "@/components/auth/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "reactfire";

export const AuthCard = () => {
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [user]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your Incredible account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm onShowLogin={() => {}} />
        </CardContent>
      </Card>
    </>
  );
};
