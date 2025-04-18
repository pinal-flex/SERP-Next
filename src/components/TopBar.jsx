"use client";
import {
  Calculator,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Laptop,
  Maximize,
  RefreshCw,
  ScanEye,
  Settings,
  Smile,
  SquareArrowDown,
  User,
} from "lucide-react";
import { Separator } from "./ui";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React from "react";

export function TopBar() {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <div className="flex">
      <div className="flex">
        <Separator orientation="vertical" className="h-auto" />

        <div className="p-2 hover:bg-zinc-200 rounded-md">
          <ChevronLeft size={20} className="text-zinc-500 hover:text-black" />
        </div>
        <div className="p-2 hover:bg-zinc-200 rounded-md">
          <ChevronRight size={20} className="text-zinc-500 hover:text-black" />
        </div>
        <div className="p-2 hover:bg-zinc-200 rounded-md">
          <RefreshCw size={20} className="text-zinc-500 hover:text-black" />
        </div>
      </div>
      <div className="pl-40">
        <Command className="rounded-lg border shadow-md md:min-w-[482px]">
          <CommandInput
            placeholder="Type a command or search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)} 
          />

          {isFocused && (
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </div>
      <div className="flex pl-32">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Camera />
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
      </div>
    </div>
  );
}
