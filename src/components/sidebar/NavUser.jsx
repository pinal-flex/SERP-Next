"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  ExternalLink,
  Laptop,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, Progress, SidebarMenu, SidebarMenuButton, SidebarMenuItem, Text, ToggleGroup, ToggleGroupItem, useSidebar } from "..";
import { useTheme } from "next-themes";
import { Logo } from "@/icons";

export function NavUser({ user, logos, logo }) {
  const { isMobile } = useSidebar();
  const { setTheme } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu className="w-[263px]">
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg items-center">
                <Logo alt="Company Logo" className="rounded-md" />
              </Avatar>
              <Text weight="semibold">SERP Lens</Text>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-72 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideoffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left">
                <Avatar className="h-10 w-10 rounded-full size-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left">
                  <Text
                    weight="medium"
                    className="truncate pb-1.5 leading-tight"
                  >
                    {user.name}
                  </Text>
                  <Text
                    variant="xs" className="truncate pb-2 text-zinc-500"
                  >
                    {user.credits}
                  </Text>
                  <Progress value={50} />
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup className="flex justify-between">
              <DropdownMenuItem>
                <User />
                Account
              </DropdownMenuItem>
              <DropdownMenu>
                <ToggleGroup
                  type="single"
                  className="bg-zinc-100 border border-zinc-200 p-0.5 gap-1"
                >
                  <ToggleGroupItem
                    className="group h-6 py-1 px-1 hover:bg-transparent"
                    onClick={() => setTheme("system")}
                  >
                    <Laptop
                      className="text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-100"
                      size={16}
                    />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="group bg-white rounded-sm h-6 py-1 px-1 hover:bg-transparent"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="text-black" size={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="group h-6 py-1 px-1 hover:bg-transparent"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon
                      className="text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-100"
                      size={16}
                    />
                  </ToggleGroupItem>
                </ToggleGroup>
              </DropdownMenu>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup
              className="w-(--radix-dropdown-menu-trigger-width) min-w-[280px] rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideoffset={4}
            >
              <DropdownMenuLabel className="text-zinc-500 text-xs">
                me@samunderwood.co.uk
              </DropdownMenuLabel>
              {logos.map((team, index) => (
                <DropdownMenuItem key={team.name} className="gap-2 p-2">
                  <div className="flex items-center justify-center rounded-xs">
                    <team.logo className="size-5 shrink-0 rounded-xs" />
                  </div>
                  {team.name}
                  <DropdownMenuShortcut className="text-xs font-normal flex gap-2">
                    <ExternalLink />⌘{index + 1}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup
              className="w-(--radix-dropdown-menu-trigger-width) min-w-[280px] rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideoffset={4}
            >
              <DropdownMenuLabel className="text-zinc-500 text-xs">
                sam@bingocardcreator.com
              </DropdownMenuLabel>
              {logo.map((teamname, index) => (
                <DropdownMenuItem key={teamname.name} className="gap-2 p-2">
                  <div className="flex items-center justify-center rounded-xs">
                    <teamname.logo className="size-5 shrink-0 rounded-xs" />
                  </div>
                  <Text>{teamname.name}</Text>
                  <DropdownMenuShortcut className="text-xs font-normal flex gap-2">
                    <ExternalLink />⌘{index + 4}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-normal text-zinc-500 text-sm">
              Add team
            </DropdownMenuItem>
            <DropdownMenuItem className="font-normal text-zinc-500 text-sm">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
