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

const items = [
  {
    id: 1,
    icon: <Bolt className="size-12 rounded-md shadow-md" />,
    label: "Bolt",
  },
  {
    id: 2,
    icon: <TheNorthFace className="size-12 rounded-md shadow-md" />,
    label: "The North Face",
  },
  {
    id: 3,
    icon: <Brodie className="size-12 rounded-md shadow-md" />,
    label: "Brodie Clark",
  },
  {
    id: 4,
    icon: <Momondo className="size-12 rounded-md shadow-md" />,
    label: "Momondo",
  },
  {
    id: 5,
    icon: <Ryanair className="size-12 rounded-md shadow-md" />,
    label: "Ryanair",
  },
  {
    id: 6,
    icon: <Hertz className="size-12 rounded-md shadow-md" />,
    label: "Hertz",
  },
];

export function SearchDialog() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative max-w-[482px] w-full">
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
          <CommandGroup className="absolute top-full mt-1 shadow-md w-[618px] left-1/2 -translate-x-1/2 p-0 rounded-lg z-10 bg-white">
            <CommandList className="px-11 py-8 remove-scroll">
              <CommandEmpty>No results found.</CommandEmpty>
              <div className="grid grid-cols-6 gap-5 mb-4 last:mb-0">
                {items.map((item, id) => (
                  <CommandItem
                    key={id}
                    className="flex-col w-full text-center p-0 data-[selected=true]:bg-white"
                  >
                    {item.icon}
                    <Text variant="xs" weight="medium">
                      {item.label}
                    </Text>
                  </CommandItem>
                ))}
                {items.map((item, id) => (
                  <CommandItem
                    key={id}
                    className="flex-col w-full text-center p-0 data-[selected=true]:bg-white"
                  >
                    {item.icon}
                    <Text variant="xs" weight="medium">
                      {item.label}
                    </Text>
                  </CommandItem>
                ))}
                {items.map((item, id) => (
                  <CommandItem
                    key={id}
                    className="flex-col w-full text-center p-0 data-[selected=true]:bg-white"
                  >
                    {item.icon}
                    <Text variant="xs" weight="medium">
                      {item.label}
                    </Text>
                  </CommandItem>
                ))}
                {items.map((item, id) => (
                  <CommandItem
                    key={id}
                    className="flex-col w-full text-center p-0 data-[selected=true]:bg-white"
                  >
                    {item.icon}
                    <Text variant="xs" weight="medium">
                      {item.label}
                    </Text>
                  </CommandItem>
                ))}
              </div>
            </CommandList>
          </CommandGroup>
        )}
      </Command>
    </div>
  );
}
