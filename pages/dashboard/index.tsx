import { DemoDashboard } from "@/components/demo-dashboard/demo-dashboard";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "reactfire";

export default function DashboardPage() {
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      toast({
        title: "Oops!",
        description: "You are not logged in.",
      });
      router.push("/login");
    }
  }, [user]);

  return (
    <>
      <DemoDashboard />
    </>
  );
}
