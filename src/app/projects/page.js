import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  DeleteButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ProjectDialog,
  Separator,
  Text,
} from "@/components";
import { TheNorthFace } from "@/icons";
import {
  ArrowDownZA,
  ArrowUpAZ,
  Ellipsis,
  FileSearch,
  Plus,
  Star,
  Timer,
  TrendingUp,
} from "lucide-react";

const clients = [
  {
    logo: TheNorthFace,
    name: "The North Face",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Apple",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "21 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Momondo",
    visitDate: "07 Sept",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "142 keywords",
    growth: "24GB",
  },
  {
    logo: TheNorthFace,
    name: "Ryanair",
    visitDate: "01 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "1044 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Uber",
    visitDate: "02 June",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
  {
    logo: TheNorthFace,
    name: "Bolt",
    visitDate: "07 Oct",
    description:
      "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
    keywords: "14 keywords",
    growth: "+5%",
  },
];

export default function Page() {
  return (
    <div className="px-4 py-12 max-w-[1174px] mx-auto">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <Text type="h1" variant="2xl" weight="bold">
            Projects
          </Text>
        </div>
        <div className="flex gap-2 md:gap-3.5 items-center">
          <DeleteButton />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 items-center p-1.5 hover:bg-muted rounded-md data-[state=open]:bg-muted">
              <ArrowUpAZ size={16} />
              Sort
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[187px]" align="end">
              <DropdownMenuItem>
                <ArrowUpAZ color="#09090b" size={16} />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArrowDownZA color="#09090b" size={16} />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Timer color="#09090b" size={16} />
                Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star color="#09090b" size={16} />
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ProjectDialog
            title="Create project"
            description="Create a project to save screenshots and keywords to a group. Revisit them later to see changes."
            footerText="3 projects remaining"
            footerButton={
              <Button>
                <Plus className="mr-1" size={16} />
                Create Project
              </Button>
            }
          >
            <Button>
              <Plus className="mr-1" />
              Create Project
            </Button>
          </ProjectDialog>
        </div>
      </div>
      <Separator className="mb-9" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {clients.map((client, index) => (
          <Card
            key={index}
            className="w-full rounded-md border border-zinc-200 pt-4 pb-3 gap-4"
          >
            <CardHeader className="flex justify-between px-4">
              <Text variant="sm" weight="medium" className="text-zinc-500">
                Last Visited: {client.visitDate}
              </Text>
              <div className="flex items-center gap-2">
                <Checkbox size={18} className="border-zinc-200" />
                <Star color="#71717a" size={18} />
                <Ellipsis color="#71717a" size={18} />
              </div>
            </CardHeader>

            <CardContent className="px-4 flex gap-2.5 flex-wrap">
              <div>
                <client.logo className="size-10 rounded-md border border-zinc-200" />
              </div>
              <div>
                <CardTitle>
                  <Text variant="lg" weight="semibold">
                    {client.name}
                  </Text>
                </CardTitle>
                <CardDescription>
                  <Text variant="sm" weight="normal" className="text-zinc-500">
                    {client.description}
                  </Text>
                </CardDescription>
              </div>
            </CardContent>

            <div className="border border-dashed border-zinc-200" />
            <CardFooter className="text-sm text-muted-foreground px-4 flex items-center justify-between">
              <div className="flex truncate gap-1 items-center">
                <FileSearch size={16} color="#717170" />
                <Text variant="xs" weight="medium">
                  {client.keywords}
                </Text>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="text-green-600" size={16} />
                <Text>{client.growth}</Text>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
