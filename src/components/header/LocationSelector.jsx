import { MapPin, Star } from "lucide-react";
import * as React from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "..";
import { Austrelia, NewZealand, UKFlag, USFlag } from "@/icons";

export function LocationSelector() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-1.5 rounded-md hover:bg-muted data-[state=open]:bg-muted"
      >
        <MapPin size={20} className="text-zinc-500" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search your chosen location" />
        <CommandList className="max-h-none">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Starred">
            <CommandItem className="h-8">
              <UKFlag />
              <span>United Kingdom</span>
              <CommandShortcut>⌘1</CommandShortcut>
              <Star className="text-yellow-500" fill="currentColor" />
            </CommandItem>
            <CommandItem className="h-8">
              <USFlag />
              <span>United States</span>
              <CommandShortcut>⌘2</CommandShortcut>
              <Star className="text-yellow-500" fill="currentColor" />
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Suggestions">
            <CommandItem className="h-8">
              <UKFlag />
              <span>United Kingdom</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <Austrelia />
              <span>Australia</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <NewZealand />
              <span>New Zealand</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <UKFlag />
              <span>London, UK</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <USFlag />
              <span>New York, USA</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <Austrelia />
              <span>Sydney, Australia</span>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
