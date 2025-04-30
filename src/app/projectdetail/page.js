import {
  Button,
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
  ScreenshotsGrid,
} from "@/components";
import { Bolt } from "@/icons";
import { Camera, FilePenLine, FileSearch2, Save } from "lucide-react";

export default function page() {
  return (
    <div className="px-0 py-0 md:px-4 md:py-12 max-w-[1174px] mx-auto">
      <Tabs defaultValue="keywords" className="w-full gap-0">
        <div className="flex flex-wrap lg:flex-nowrap remove-scroll items-center gap-2">
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-2">
            <div className="flex items-center gap-2 lg:gap-4 mr-1 xl:mr-6">
              <Bolt className="size-8 rounded-md" />
              <Text type="h1" variant="2xl" weight="bold">
                Bolt
              </Text>
            </div>
            <TabsList className="grid w-[240px] md:w-[254px] grid-cols-2">
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
          <div className="lg:ml-auto flex flex-nowrap items-center gap-1.5 md:gap-2 mb-2">
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
              <Button className="gap-0.5 md:gap-2">
                <FilePenLine size={16} className="mr-1" />
                Edit project
              </Button>
            </ProjectDialog>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TabsContent value="keywords" className="flex flex-col">
            <Separator className="mb-6 mt-5" />
            <ChartTabs />
            <KeyWordsTable />
          </TabsContent>
          <TabsContent value="Screenshots">
            <ScreenshotsGrid
              showHeading={false}
              showProjectFilter={false}
              className="px-0 py-0 md:px-4 md:py-9 max-w-[1174px] mx-auto"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
