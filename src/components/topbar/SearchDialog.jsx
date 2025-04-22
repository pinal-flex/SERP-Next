"use client";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Text,
} from "..";
import { Bolt, Brodie, Hertz, Momondo, Ryanair, TheNorthFace } from "@/icons";

export function SearchDialog() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-[482px]">
      <Command className="rounded-lg">
        <div className="bg-zinc-200 border [&_svg]:text-zinc-400">
          <CommandInput
            className="py-1"
            placeholder="Type a command or search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          />
        </div>

        {isFocused && (
          <CommandGroup className="absolute top-full mt-1 shadow-md w-[618px] left-1/2 -translate-x-1/2">
            <CommandList className="px-11 py-8">
              <CommandEmpty>No results found.</CommandEmpty>
              <div className="grid grid-cols-6 gap-3">
                <CommandItem className="flex-col w-full text-center gap-1.5 bg-transparent hover:bg-transparent px-3">
                  <Bolt className="size-12" />
                  <Text variant="xs" weight="medium">
                    Bolt
                  </Text>
                </CommandItem>
                <CommandItem className="flex-col w-full text-center">
                  <TheNorthFace className="size-12" />
                  <Text variant="xs" weight="medium">
                    The North Face
                  </Text>
                </CommandItem>
                <CommandItem className="flex-col w-full text-center">
                  <Brodie className="size-12" />
                  <Text variant="xs" weight="medium">
                    Brodie Clark
                  </Text>
                </CommandItem>
                <CommandItem className="flex-col w-full text-center">
                  <Momondo className="size-12" />
                  <Text variant="xs" weight="medium">
                    Momondo
                  </Text>
                </CommandItem>
                <CommandItem className="flex-col w-full text-center">
                  <Ryanair className="size-12" />
                  <Text variant="xs" weight="medium">
                    Ryanair
                  </Text>
                </CommandItem>
                <CommandItem className="flex-col w-full text-center">
                  <Hertz className="size-12" />
                  <Text variant="xs" weight="medium">
                    Ryanair
                  </Text>
                </CommandItem>
              </div>
            </CommandList>
          </CommandGroup>
        )}
      </Command>
    </div>
  );
}
