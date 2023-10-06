import { UserNav } from "@/components/UserNav";
import { Button } from "@/components/ui/button";
import { FishIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { useUser } from "reactfire";

export const NavBar: FC = () => {
  const { data: user } = useUser();
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link className="hidden items-center space-x-2 md:flex" href="/">
            <FishIcon />
            <span className="hidden font-bold sm:inline-block">Venefish</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/#how-it-works"
            >
              How it Works
            </Link>
            <Link
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/#features"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60"
              href="/#pricing"
            >
              Pricing
            </Link>
          </nav>
          <button className="flex items-center space-x-2 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-command"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            <span className="font-bold">Menu</span>
          </button>
        </div>
        <nav className="flex items-center gap-2">
          {!user ? (
            <Link href="/login">
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/dashboard">
                <Button variant="link" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserNav />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
