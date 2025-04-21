import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { Separator } from "..";

export function NavigationControls() {
  return (
    <div className="flex">
      <Separator orientation="vertical" className="h-auto" />

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
  );
}
