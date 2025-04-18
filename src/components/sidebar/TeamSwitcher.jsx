"use client";

import * as React from "react";
import { Send, UserPlus, X } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <Collapsible asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <Dialog className="gap-6">
              <DialogTrigger asChild>
                <SidebarMenuButton
                  tooltip="Invite members"
                  className="justify-center gap-0"
                >
                  <UserPlus size={16} />
                  <span className="pl-1">
                    Invite members
                  </span>
                </SidebarMenuButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] gap-6">
                <DialogHeader>
                  <DialogTitle>Add members</DialogTitle>
                  <DialogDescription>
                    Please type or paste member emails below, separated by
                    commas.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-left">
                      Email addresses
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="name"
                        className="resize-none w-full sm:w-[377px] h-full sm:h-[172px]"
                      />
                      {/* <Badge variant="secondary" className="absolute top-1 left-1">
                  test@example.com
                  <X />
                </Badge> */}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select defaultValue="member">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="member">Member</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <DialogFooter>
                  56
                  <Button className="gap-2">
                    <Send className="w-4 h-4" />
                    Send invites
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}