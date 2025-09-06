import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-2 sm:space-x-4 lg:space-x-6 overflow-x-auto",
        className
      )}
      {...props}
    >
      <Link
        href="#"
        className="text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap px-2 py-1 rounded-md hover:bg-muted/50"
      >
        Overview
      </Link>
      <Link
        href="#"
        className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap px-2 py-1 rounded-md hover:bg-muted/50"
      >
        Customers
      </Link>
      <Link
        href="#"
        className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap px-2 py-1 rounded-md hover:bg-muted/50"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap px-2 py-1 rounded-md hover:bg-muted/50"
      >
        Settings
      </Link>
    </nav>
  );
}
