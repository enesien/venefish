import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none truncate">
            Olivia Martin
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium text-sm sm:text-base">
          +$1,999.00
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none truncate">
            Jackson Lee
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            jackson.lee@email.com
          </p>
        </div>
        <div className="ml-auto font-medium text-sm sm:text-base">+$39.00</div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none truncate">
            Isabella Nguyen
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium text-sm sm:text-base">+$299.00</div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none truncate">
            William Kim
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            will@email.com
          </p>
        </div>
        <div className="ml-auto font-medium text-sm sm:text-base">+$99.00</div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none truncate">
            Sofia Davis
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            sofia.davis@email.com
          </p>
        </div>
        <div className="ml-auto font-medium text-sm sm:text-base">+$39.00</div>
      </div>
    </div>
  );
}
