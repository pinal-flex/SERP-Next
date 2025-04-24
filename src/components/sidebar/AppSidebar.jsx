"use client";

import * as React from "react";
import { Camera, GitCompare, ListTodo, SquareTerminal } from "lucide-react";
import { Apple, Bolt, Logo, Momondo, Ryanair, Uber } from "@/icons";
import {
  NavMain,
  NavProjects,
  NavUser,
  Progress,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  TeamSwitcher,
} from "..";

const data = {
  user: {
    name: "Olivia Janson",
    credits: "10 VPN credits left",
    progressbar: Progress,
    avatar: "https://github.com/shadcn.png",
  },
  logos: [
    {
      name: "SERP Lens",
      logo: Logo,
    },
    {
      name: "Bolt",
      logo: Bolt,
    },
  ],
  logo: [
    {
      name: "Bingo Card Creator",
      logo: Uber,
    },
  ],
  navMain: [
    {
      title: "Projects",
      url: "/projects",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Screenshots",
      url: "/screenshots",
      icon: Camera,
    },
    {
      title: "SERP compare",
      url: "#",
      icon: GitCompare,
    },
    {
      title: "Tasks (Beta)",
      url: "#",
      icon: ListTodo,
    },
  ],
  projects: [
    {
      name: "Bolt",
      url: "/projectdetail",
      icon: Bolt,
    },
    {
      name: "Apple",
      url: "#",
      icon: Apple,
    },
    {
      name: "Ryanair",
      url: "#",
      icon: Ryanair,
    },
    {
      name: "Momondo",
      url: "#",
      icon: Momondo,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} logos={data.logos} logo={data.logo} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <TeamSwitcher />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
