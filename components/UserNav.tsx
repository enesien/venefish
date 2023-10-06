import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAuth, useUser } from "reactfire";

export const UserNav: FC = () => {
  const user = useUser();
  const auth = useAuth();
  const router = useRouter();

  const doLogout = async () => {
    await auth.signOut();
    toast({
      title: "Success!",
      description: "You have been logged out.",
    });
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border">
            <AvatarImage
              src={user?.data?.photoURL || undefined}
              alt={user?.data?.email || undefined}
            />
            <AvatarFallback>
              {user.data?.email?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.data?.email?.slice(0, user?.data?.email?.indexOf("@"))}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.data?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={doLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
