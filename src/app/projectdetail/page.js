import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DatePickerWithRange,
  ProjectDialog,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  ChartTabs,
  KeyWordsTable,
} from "@/components";
import { Bolt } from "@/icons";
import { Camera, FilePenLine, FileSearch2, Save } from "lucide-react";

export default function page() {
  return (
    <div className="p-4 md:p-12 overflow-y-auto">
      <Tabs defaultValue="keywords" className="w-full">
        <div className="mb-5 flex flex-row remove-scroll items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-4 mr-6">
              <Bolt className="size-8 rounded-md" />
              <Text type="h1" variant="2xl" weight="bold">
                Bolt
              </Text>
            </div>
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="keywords">
                <FileSearch2 size={16} />
                keywords
              </TabsTrigger>
              <TabsTrigger value="Screenshots">
                <Camera size={16} />
                Screenshots
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DatePickerWithRange />
            <ProjectDialog
              title="Edit project"
              description="Your SERP result tracking will track your new domain and competitors going forward. Historical results will not change."
              footerButton={
                <Button>
                  <Save className="mr-1" size={16} />
                  Save
                </Button>
              }
            >
              <Button>
                <FilePenLine size={16} className="mr-1" />
                Edit project
              </Button>
            </ProjectDialog>
          </div>
        </div>
        <Separator className="mb-6" />
        <div className="flex flex-col gap-6">
          <TabsContent value="keywords" className="flex flex-col gap-9">
            <ChartTabs />
            <KeyWordsTable />
          </TabsContent>
          <TabsContent value="Screenshots">
            <Card>
              <CardHeader>
                <CardTitle>Screenshots</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you will be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Text>paladiya</Text>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
