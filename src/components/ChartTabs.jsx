"use client";
import {
  Card,
  CardContent,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@/components";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

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

export function ChartTabs() {
  return (
    <Card className="rounded-lg border shadow-none overflow-hidden p-0">
      <Tabs defaultValue="ranking distribution" className="gap-0">
        <TabsList className="grid w-full grid-cols-4 p-0 h-36 rounded-none">
          <TabsTrigger
            value="ranking distribution"
            className="h-36 rounded-none data-[state=active]:shadow-none border-t-0 border-l-0 border-zinc-200 data-[state=active]:border-y-0 data-[state=active]:border-x-0 block p-1.5 md:p-6"
          >
            <div className="space-y-2">
              <div className="flex-wrap md:flex-nowrap">
                <Text
                  weight="medium"
                  className="flex justify-between text-wrap lg:text-nowrap"
                >
                  Ranking distribution
                </Text>
                <TrendingUp size={16} color="#16A34A" />
              </div>
              <Text variant="2xl" weight="bold" className="text-left pb-9">
                +5.2%
              </Text>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="average rank"
            className="h-36 rounded-none data-[state=active]:shadow-none border-t-0 border-zinc-200 data-[state=active]:border-y-0 data-[state=active]:border-x-0 block p-1 md:p-6"
          >
            <div className="space-y-2">
              <div className="flex-wrap md:flex-nowrap">
                <Text
                  weight="medium"
                  className="flex justify-between text-wrap md:text-nowrap"
                >
                  Average rank
                </Text>
                <TrendingUp size={16} color="#16A34A" />
              </div>
              <Text variant="2xl" weight="bold" className="text-left">
                +5.2%
              </Text>
              <Text
                variant="xs"
                className="text-left text-zinc-500 text-wrap md:text-nowrap"
              >
                From last period
              </Text>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="serp features"
            className="h-36 rounded-none data-[state=active]:shadow-none border-t-0 border-zinc-200 data-[state=active]:border-y-0 data-[state=active]:border-x-0 block p-1 md:p-6"
          >
            <div className="space-y-2">
              <div className="flex-wrap md:flex-nowrap">
                <Text
                  weight="medium"
                  className="flex justify-between text-wrap md:text-nowrap"
                >
                  SERP features
                </Text>
                <TrendingUp size={16} color="#ef4444" />
              </div>
              <Text variant="2xl" weight="bold" className="text-left">
                +5.2%
              </Text>
              <Text
                variant="xs"
                className="text-left text-zinc-500 text-wrap md:text-nowrap"
              >
                From last period
              </Text>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="volatility"
            className="h-36 rounded-none data-[state=active]:shadow-none border-t-0 border-r-0 border-zinc-200 data-[state=active]:border-y-0 data-[state=active]:border-x-0 block p-1 md:p-6"
          >
            <div className="space-y-2">
              <div className="flex-wrap md:flex-nowrap">
                <Text
                  weight="medium"
                  className="flex justify-between text-wrap md:text-nowrap"
                >
                  Volatility
                </Text>
                <TrendingUp size={16} color="#16A34A" />
              </div>
              <Text variant="2xl" weight="bold" className="text-left">
                +5.2%
              </Text>
              <Text
                variant="xs"
                className="text-left text-zinc-500 text-wrap md:text-nowrap"
              >
                From last period
              </Text>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ranking distribution">
          <CardContent className="p-6 pt-4 pl-0 pr-4">
            <ChartContainer config={chartConfig} className="w-full h-[283px]">
              <AreaChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                  top: 12,
                }}
                stackOffset="expand"
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickCount={5}
                  tickFormatter={(value) => `${Math.round(value * 400)}`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="other"
                  type="natural"
                  fill="var(--color-other)"
                  fillOpacity={0.1}
                  stroke="var(--color-other)"
                  stackId="a"
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </TabsContent>
        <TabsContent value="average rank">
          <CardContent className="p-6 pt-4 pl-0 pr-4">
            <ChartContainer config={chartConfig} className="w-full h-[283px]">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  ticks={[0, 100, 200, 300, 400]}
                />
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
          </CardContent>
        </TabsContent>
        <TabsContent value="serp features">
          <CardContent className="p-6 pt-4 pl-0 pr-4">
            <ChartContainer config={chartConfig} className="w-full h-[283px]">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  ticks={[0, 100, 200, 300, 400]}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </TabsContent>
        <TabsContent value="volatility">
          <CardContent className="p-6 pt-4 pl-0 pr-4">
            <ChartContainer config={chartConfig} className="w-full h-[283px]">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  ticks={[0, 100, 200, 300, 400]}
                />
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
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
