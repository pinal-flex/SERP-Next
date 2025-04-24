import { Briefcase, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, Text } from "..";
import { Brodie, Google, TheNorthFace } from "@/icons";

export function BrowserTabs() {
  return (
    <Tabs defaultValue="briefcase">
      <TabsList className="w-full rounded-none p-0 h-8">
        <TabsTrigger
          value="briefcase"
          className="rounded-none w-8 border border-zinc-200 data-[state=active]:shadow-none data-[state=active]:border-t-0 h-8"
        >
          <Briefcase size={16} />
        </TabsTrigger>
        <div className="grid grid-cols-3 w-full h-8">
          <TabsTrigger
            value="Melbourne SEO Consultant & SEO Expert // Brodie Clark Consulting"
            className="rounded-none px-2 md:px-12 py-2 border-y border-zinc-200 data-[state=active]:shadow-none data-[state=active]:border-t-0"
          >
            <Brodie />
            <Text variant="xs" weight="medium" className="truncate">
              Melbourne SEO Consultant & SEO Expert // Brodie Clark Consulting
            </Text>
          </TabsTrigger>
          <TabsTrigger
            value="best things to do london - Google Search"
            className="rounded-none px-2 md:px-12 py-2 border border-zinc-200 data-[state=active]:shadow-none data-[state=active]:border-t-0"
          >
            <Google />
            <Text variant="xs" weight="medium" className="truncate">
              best things to do london - Google Search
            </Text>
          </TabsTrigger>
          <TabsTrigger
            value="Project - The North Face"
            className="rounded-none px-2 md:px-12 py-2 border-y border-zinc-200 data-[state=active]:shadow-none data-[state=active]:border-t-0"
          >
            <TheNorthFace />
            <Text variant="xs" weight="medium" className="truncate">
              Project - The North Face
            </Text>
          </TabsTrigger>
        </div>
        <TabsTrigger
          value="plus"
          className="rounded-none w-8 border border-zinc-200 data-[state=active]:shadow-none data-[state=active]:border-t-0 h-8"
        >
          <Plus size={16} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
