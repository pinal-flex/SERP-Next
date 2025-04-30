"use client";
import { MapPin, Star } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Text,
} from "..";
import { Austrelia, NewZealand, UKFlag, USFlag } from "@/icons";
import { useState } from "react";

export function LocationSelector() {
  const [open, setOpen] = useState(false);

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
              <Text>United Kingdom</Text>
              <CommandShortcut>⌘1</CommandShortcut>
              <Star className="text-yellow-500" fill="currentColor" />
            </CommandItem>
            <CommandItem className="h-8">
              <USFlag />
              <Text>United States</Text>
              <CommandShortcut>⌘2</CommandShortcut>
              <Star className="text-yellow-500" fill="currentColor" />
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Suggestions">
            <CommandItem className="h-8">
              <UKFlag />
              <Text>United Kingdom</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <Austrelia />
              <Text>Australia</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <NewZealand />
              <Text>New Zealand</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <UKFlag />
              <Text>London, UK</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <USFlag />
              <Text>New York, USA</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>

            <CommandItem className="h-8">
              <Austrelia />
              <Text>Sydney, Australia</Text>
              <Star className="text-yellow-500 ml-auto" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
