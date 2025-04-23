import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Text,
} from "@/components";
import { TheNorthFace } from "@/icons";
import {
  ArrowUpAZ,
  Ellipsis,
  FileSearch,
  Star,
  TrendingUp,
} from "lucide-react";

export default function Page() {
  const clients = [
    {
      logo: "https://logo.clearbit.com/thenorthface.com",
      name: "The North Face",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "21 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/momondo.com",
      name: "Momondo",
      visitDate: "07 Sept",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "142 keywords",
      growth: "24GB",
    },
    {
      logo: "https://logo.clearbit.com/ryanair.com",
      name: "Ryanair",
      visitDate: "01 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "1044 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/uber.com",
      name: "Uber",
      visitDate: "02 June",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
    {
      logo: "https://logo.clearbit.com/bolt.eu",
      name: "Bolt",
      visitDate: "07 Oct",
      description:
        "Optimize BetterGifts Co. for enhanced search rankings and improved online visibility results.",
      keywords: "14 keywords",
      growth: "+5%",
    },
  ];

  return (
    <div className="p-4 md:p-12 overflow-y-auto">
      <div className="mb-5 flex flex-row justify-between remove-scroll items-center">
        <div>
          <Text type="h1" variant="2xl" weight="bold">
            Projects
          </Text>
        </div>
        <div className="flex items-center gap-0 md:gap-3.5">
          <Button variant="ghost" className="text-red-500">
            Delete
          </Button>
          <Button variant="ghost">
            <ArrowUpAZ />
            Sort
          </Button>
          <Button>Add Project</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

            <CardContent className="px-4 flex gap-2.5">
              <div>
                <TheNorthFace className="size-10 rounded-md border border-zinc-200" />
              </div>
              <div>
                <CardTitle>
                  <Text
                    variant="lg"
                    weight="semibold"
                    className="text-zinc-900"
                  >
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
