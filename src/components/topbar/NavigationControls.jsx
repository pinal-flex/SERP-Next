import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Separator, SidebarTrigger } from "..";

export function NavigationControls() {
  return (
    <>
      <div className="flex items-center">
        <SidebarTrigger className="gap-0 p-2 text-zinc-500" />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-5"
        />
        <div className="p-1.5 rounded-md hover:bg-muted">
          <ChevronLeft size={20} className="text-zinc-500" />
        </div>
        <div className="p-1.5 rounded-md hover:bg-muted">
          <ChevronRight size={20} className="text-zinc-500" />
        </div>
        <div className="p-1.5 rounded-md hover:bg-muted">
          <RefreshCw size={20} className="text-zinc-500" />
        </div>
      </div>
    </>
  );
}
