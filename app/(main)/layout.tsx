import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar/navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen animate-in fade-in">
      <NavBar />
      <main className="flex flex-col grow h-full w-full">{children}</main>
      <Footer />
    </div>
  );
}
