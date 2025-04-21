import {
  Camera,
  Laptop,
  Maximize,
  ScanEye,
  SquareArrowDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "..";

export function CaptureOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1.5 hover:bg-muted rounded-md data-[state=open]:bg-muted">
        <Camera className="text-zinc-500" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[240px]" align="end">
        <DropdownMenuItem>
          <Laptop />
          Capture fullScreen
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SquareArrowDown />
          Scrolling capture
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Maximize />
          Capture area
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ScanEye />
          Capture viewport
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
