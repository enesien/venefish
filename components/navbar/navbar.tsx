import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import { FishIcon, ScanTextIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <>
      <div className="animate-in fade-in w-full">
        <nav className="container px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <div className="flex items-center">
                <FishIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2 inline" />{" "}
                <span className="text-lg sm:text-xl font-semibold tracking-tighter text-slate-800">
                  <span className="hidden sm:inline">
                    Incredible Web to App
                  </span>
                  <span className="sm:hidden">Incredible</span>
                </span>
              </div>
            </Link>
            <div className="hidden md:flex justify-between grow">
              <div></div>
              <div className="flex items-center space-x-4">
                <NavbarUserLinks />
              </div>
            </div>
            <div className="md:hidden flex justify-end">
              <NavbarMobile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
