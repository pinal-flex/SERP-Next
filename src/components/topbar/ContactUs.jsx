import { BookOpen, CircleHelp, Mail } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "..";

export function ContactUs() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1.5 hover:bg-muted rounded-md data-[state=open]:bg-muted">
        <CircleHelp className="text-zinc-500" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[240px]" align="end">
        <DropdownMenuItem>
          <Mail />
          Contact us
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BookOpen />
          Documentation
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
