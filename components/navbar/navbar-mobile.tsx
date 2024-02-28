"use client";

import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

export const NavbarMobile = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="-mr-4">
              <MenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col p-1">
              <NavigationMenuLink
                href="#1"
                className={buttonVariants({ variant: "link" })}
              >
                Item 1
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#2"
                className={buttonVariants({ variant: "link" })}
              >
                Item 2
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#3"
                className={buttonVariants({ variant: "link" })}
              >
                Item 3
              </NavigationMenuLink>
              <div className="flex flex-col mb-0.5">
                <NavbarUserLinks />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
