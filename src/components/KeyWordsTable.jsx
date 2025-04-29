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
  ListFilter,
  MessageSquare,
  Plus,
  Search,
  Video,
  WandSparkles,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  DeleteButton,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
} from "@/components";
import { UKFlag, USFlag } from "@/icons";
import { Line, LineChart } from "recharts";

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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between mt-9">
        <Text variant="xl" weight="bold">
          Keywords
        </Text>
        <div className="flex items-center gap-4">
          <SearchInput className="mr-4" />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="flex items-center gap-2">
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
            <Button variant="outline">
              <File size={16} />
              Export
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus size={16} />
                  Add keywords
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
                      <Text
                        variant="sm"
                        weight="normal"
                        className="text-zinc-500"
                      >
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
                          <Text variant="sm" weight="normal">
                            Hourly (740 credits)
                          </Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="daily" id="r2" />
                          <Text variant="sm" weight="normal">
                            Daily (31 credits)
                          </Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="r3" />
                          <Text variant="sm" weight="normal">
                            Weekly (4 credits)
                          </Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="r4" />
                          <Text variant="sm" weight="normal">
                            Monthly (1 credit)
                          </Text>
                        </div>
                      </RadioGroup>

                      <Label htmlFor="device" className="text-right mb-3">
                        Device
                      </Label>
                      <RadioGroup defaultValue="desktop" className="gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="desktop" id="r1" />
                          <Text variant="sm" weight="normal">
                            Desktop
                          </Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mobile" id="r2" />
                          <Text variant="sm" weight="normal">
                            Mobile
                          </Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="r3" />
                          <Text variant="sm" weight="normal">
                            Both (2x credits)
                          </Text>
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
                        <Text
                          variant="xs"
                          weight="normal"
                          className="text-zinc-500"
                        >
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
      <div>
        <Table className="mb-4">
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Keyword</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Trend</TableHead>
              <TableHead className="flex items-center gap-2">
                Last updated
                <ArrowUpDown size={16} />
              </TableHead>
              <TableHead>SERP features</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.Keyword}</TableCell>
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
                    <WandSparkles size={16} className="text-zinc-500" />
                    <Video size={16} className="text-zinc-500" />
                    <MessageSquare size={16} className="text-zinc-500" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-zinc-900" />
                    <Search size={16} className="text-zinc-900" />
                    <Ellipsis size={16} className="text-zinc-900" />
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
    </div>
  );
}
