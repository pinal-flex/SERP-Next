"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SearchInput,
  Separator,
  Text,
} from "@/components";
import { Bolt, Momondo, Ryanair, TheNorthFace, Uber } from "@/icons";
import { cn } from "@/lib/utils";
import { Calendar, Check, Ellipsis, ListFilter, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const frameworks = [
  { value: "uber", label: "Uber", icon: Uber },
  { value: "bolt", label: "Bolt", icon: Bolt },
  { value: "ryanair", label: "Ryanair", icon: Ryanair },
  { value: "momondo", label: "Momondo", icon: Momondo },
];

const screenshots = [
  {
    logo: TheNorthFace,
    name: "The North Face",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Apple",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Momondo",
    visitDate: "07 Sept",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Ryanair",
    visitDate: "01 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Uber",
    visitDate: "02 June",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    projectName: "North face product",
    url: "/assets/image.png",
  },
];

export function ScreenshotsGrid({
  showHeading = true,
  showProjectFilter = true,
  className=""
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <div className="mb-5 flex flex-row justify-between remove-scroll items-center">
        <div>
          {showHeading && (
            <Text type="h1" variant="2xl" weight="bold">
              Screenshots
            </Text>
          )}
        </div>
        <div className="flex items-center gap-0 md:gap-4">
          <SearchInput />
          {showProjectFilter && (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[103px]"
                >
                  {value ? (
                    frameworks.find((framework) => framework.value === value)
                      ?.label
                  ) : (
                    <>
                      <ListFilter size={16} className="mr-1" />
                      Projects
                    </>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0" align="end">
                <Command>
                  <CommandInput placeholder="Search projects" className="h-9" />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework, id) => (
                        <CommandItem
                          key={id}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <framework.icon />
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-red-500 hover:bg-none">
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your data and remove it from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit" className="bg-red-500 text-white">
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Separator className="mb-9" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {screenshots.map((screenshot, index) => (
          <Card
            key={index}
            className="w-full rounded-md border border-zinc-200 gap-0 py-0"
          >
            <CardHeader className="flex justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <screenshot.logo className="size-8 border border-zinc-200 rounded-md" />
                <Text>{screenshot.name}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox size={18} className="border-zinc-200" />
                <Ellipsis color="#71717a" size={18} />
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="px-0">
              <Image
                alt="Screenshot preview"
                src={screenshot.url}
                width={349}
                height={168}
              />
            </CardContent>
            <Separator />
            <CardFooter className="text-sm text-muted-foreground px-3 flex items-center justify-between py-2">
              <div className="flex truncate gap-1 items-center">
                <Search size={16} color="#71717A" />
                <Text>{screenshot.projectName}</Text>
              </div>
              <div className="flex items-center gap-1">
                <Calendar color="#71717a" size={18} />
                <Text>{screenshot.visitDate}</Text>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
