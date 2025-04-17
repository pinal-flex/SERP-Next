"use client";

import * as React from "react";
import {
  Camera,
  GitCompare,
  ListTodo,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavUser } from "@/components/sidebar/nav-user";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Progress } from "../ui/progress";
import { Apple, Bolt, Logo, Momondo, Ryanair, Uber } from "@/icons";

const data = {
  user: {
    name: "Olivia Janson",
    credits: "10 VPN credits left",
    progressbar: Progress,
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "SERP Lens",
      logo: Logo,
    },
    {
      name: "Bolt",
      logo: Bolt,
    },
  ],
  teamnames: [
    {
      name: "Bingo Card Creator",
      logo: Uber,
    },
  ],
  navMain: [
    {
      title: "Projects",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Screenshots",
      url: "#",
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
      url: "#",
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
        <NavUser user={data.user} teams={data.teams} teamnames={data.teamnames} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
