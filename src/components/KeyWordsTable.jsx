"use client";
import {
  Activity,
  ArrowUpDown,
  ChevronDown,
  Download,
  Ellipsis,
  File,
  FileUp,
  Funnel,
  History,
  ListFilter,
  MessageSquare,
  Plus,
  Search,
  Tags,
  Video,
  WandSparkles,
} from "lucide-react";
import {
  Badge,
  Button,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  DeleteButton,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  SearchInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  Toggle,
} from "@/components";
import { UKFlag, USFlag } from "@/icons";
import { Line, LineChart } from "recharts";
import { useState } from "react";

const invoices = [
  {
    Keyword: "gifts",
    Country: <USFlag />,
    Location: "United States",
    deviceLabel: "Mobile",
    TagsLabel: "Gifting",
    Trend: "graph",
    LastupdatedTime: "Jul 31, 2024 6:12 am",
  },
  {
    Keyword: "gifts for him",
    Country: <USFlag />,
    Location: "Italy",
    deviceLabel: "Mobile",
    TagsLabel: "For him",
    Trend: "graph",
    LastupdatedTime: "Jul 31, 2024 6:12 am",
  },
  {
    Keyword: "gifts for her",
    Country: <USFlag />,
    Location: "United Kingdom",
    deviceLabel: "Desktop",
    TagsLabel: "For her",
    Trend: "graph",
    LastupdatedTime: "Jul 31, 2024 6:12 am",
  },
];
const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 45 },
  { month: "February", desktop: 305, mobile: 200, other: 100 },
  { month: "March", desktop: 237, mobile: 120, other: 150 },
  { month: "April", desktop: 73, mobile: 190, other: 50 },
  { month: "May", desktop: 209, mobile: 130, other: 100 },
  { month: "June", desktop: 214, mobile: 140, other: 160 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-3))",
  },
};

export function KeyWordsTable() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between mt-9 flex-wrap lg:flex-nowrap gap-2">
        <Text variant="xl" weight="bold">
          Keywords
        </Text>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap sm:flex-nowrap">
          <SearchInput className="mr-4" />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="flex items-center gap-1 md:gap-2"
              >
                <Button variant="outline">
                  <ListFilter size={16} />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-1.5 gap-1.5 px-2" align="end">
                <DropdownMenuItem className="flex justify-between border border-zinc-200 rounded-md my-2">
                  Device: All
                  <ChevronDown />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between border border-zinc-200 rounded-md my-2">
                  Location: All
                  <ChevronDown />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between border border-zinc-200 rounded-md my-2">
                  SERP features: All <ChevronDown />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Button className="my-2 w-full">
                  <Funnel />
                  Apply
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="gap-1 md:gap-2">
              <File size={16} />
              Export
            </Button>
            <Dialog>
              <DialogTrigger asChild className="gap-1 md:gap-2">
                <Button
                  variant="outline"
                  className="gap-1 md:gap-2 truncate max-w-[90px] sm:max-w-none overflow-hidden text-ellipsis whitespace-nowrap px-2 sm:px-4"
                >
                  <Plus size={16} />
                  <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap">
                    Add keywords
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="gap-0 p-5 w-[437px]">
                <DialogHeader className="p-0 mb-4">
                  <DialogTitle className="text-xl font-bold text-zinc-900">
                    Add keywords
                  </DialogTitle>
                  <DialogDescription className="text-sm font-normal text-zinc-500">
                    Enter keywords to track. Data will also be updated each time
                    you view the search results.
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="Basic" className="gap-0">
                  <TabsList className="grid w-full grid-cols-2 mb-5">
                    <TabsTrigger value="Basic">Basic</TabsTrigger>
                    <TabsTrigger value="Import CSV">Import CSV</TabsTrigger>
                  </TabsList>

                  <TabsContent value="Basic">
                    <div className="space-y-2">
                      <Label htmlFor="Keywords" className="text-right">
                        Project goal
                      </Label>
                      <Textarea
                        id="Keywords"
                        className="resize-none w-full h-full sm:h-[140px] placeholder:text-zinc-500"
                        placeholder="things to do london, what to do in nyc"
                      />
                      <Text className="text-zinc-500">
                        Add keywords, either line or comma-separated.
                      </Text>
                      <Label htmlFor="Location" className="text-right">
                        Location
                      </Label>
                      <Select defaultValue="united kingdo1">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Location</SelectLabel>
                            <SelectItem value="united kingdo1">
                              <UKFlag />
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="united states">
                              <USFlag />
                              United States
                            </SelectItem>
                            <SelectItem value="united kingdom2">
                              <UKFlag />
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="united kingdom3">
                              <UKFlag />
                              United Kingdom
                            </SelectItem>
                            <SelectItem value="united kingdom4">
                              <UKFlag />
                              United Kingdom
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Label
                        htmlFor="refresh interval"
                        className="text-right mb-3"
                      >
                        Refresh interval
                      </Label>
                      <RadioGroup defaultValue="hourly" className="gap-2 mb-5">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hourly" id="r1" />
                          <Text>Hourly (740 credits)</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="daily" id="r2" />
                          <Text>Daily (31 credits)</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="r3" />
                          <Text>Weekly (4 credits)</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="r4" />
                          <Text>Monthly (1 credit)</Text>
                        </div>
                      </RadioGroup>

                      <Label htmlFor="device" className="text-right mb-3">
                        Device
                      </Label>
                      <RadioGroup defaultValue="desktop" className="gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="desktop" id="r1" />
                          <Text>Desktop</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mobile" id="r2" />
                          <Text>Mobile</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="r3" />
                          <Text>Both (2x credits)</Text>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>

                  <TabsContent value="Import CSV">
                    <div className="border border-dashed rounded-lg mb-2.5">
                      <Input id="picture" type="file" className="hidden" />
                      <div className="py-14 items-center flex flex-col gap-2.5">
                        <div className="border border-zinc-200 p-2 shadow-sm rounded-md">
                          <FileUp size={24} />
                        </div>
                        <Text variant="base" weight="medium">
                          Click to upload or drag and drop
                        </Text>
                        <Text variant="xs" className="text-zinc-500">
                          CSV only
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="ghost">
                        <Download />
                        Sample CSV
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
            <DeleteButton />
          </div>
        </div>
      </div>

      <Table className="mb-4 bg-white rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox className="my-1" />
            </TableHead>
            <TableHead className="text-zinc-500 my-1">Keyword</TableHead>
            <TableHead className="text-zinc-500 my-1">Location</TableHead>
            <TableHead className="text-zinc-500 my-1">Device</TableHead>
            <TableHead className="text-zinc-500 my-1">Tags</TableHead>
            <TableHead className="text-zinc-500 my-1">Trend</TableHead>
            <TableHead className="flex items-center gap-2 text-zinc-500 my-1">
              Last updated
              <ArrowUpDown size={16} />
            </TableHead>
            <TableHead className="text-zinc-500 my-1">SERP features</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="h-[78px]">{item.Keyword}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 align-middle">
                  {item.Country}
                  {item.Location}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{item.deviceLabel}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{item.TagsLabel}</Badge>
              </TableCell>
              <TableCell>
                <ChartContainer
                  config={chartConfig}
                  className="w-[130px] h-[47px]"
                >
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="natural"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </TableCell>
              <TableCell>{item.LastupdatedTime}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Toggle>
                    <WandSparkles size={16} className="text-zinc-500" />
                  </Toggle>
                  <Toggle>
                    <Video size={16} className="text-zinc-500" />
                  </Toggle>
                  <Toggle>
                    <MessageSquare size={16} className="text-zinc-500" />
                  </Toggle>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-zinc-900" />
                  <Search size={16} className="text-zinc-900" />

                  <DropdownMenu align="end">
                    <DropdownMenuTrigger asChild>
                      <Ellipsis size={16} className="text-zinc-900" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger
                            className="gap-2"
                            onClick={() => setOpen(true)}
                          >
                            <Search size={16} color="#09090b" /> Tags
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>Email</DropdownMenuItem>
                              <DropdownMenuItem>Message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                          <Tags color="#09090b" />
                          View SERP
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <History color="#09090b" />
                          Position history
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />

                      <DeleteButton />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-2 justify-end">
        <Button variant="outline" className="opacity-50">
          Previous
        </Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
