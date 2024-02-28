import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="container border-t pt-12 animate-in fade-in">{children}</div>;
}
