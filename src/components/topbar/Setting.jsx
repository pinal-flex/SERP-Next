import { Settings } from "lucide-react";
import { Label, SettingSelect, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Switch, Tabs, TabsContent, TabsList, TabsTrigger } from "..";

export function Setting() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-0 md:p-1.5 hover:bg-muted data-[state=open]:bg-muted rounded-md">
          <Settings size={20} className="text-zinc-500" />
        </button>
      </SheetTrigger>
      <SheetContent className="gap-0 p-2.5">
        <SheetHeader className="p-0 mb-4">
          <SheetTitle className="text-xl font-bold text-zinc-900">
            Settings
          </SheetTitle>
          <SheetDescription className="text-sm font-normal text-zinc-500">
            Configure the default controls for browser settings and Google.
          </SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="Browser">
          <TabsList className="grid w-full grid-cols-2 mb-5">
            <TabsTrigger value="Browser">Browser</TabsTrigger>
            <TabsTrigger value="Google">Google</TabsTrigger>
          </TabsList>

          <TabsContent value="Browser">
            <div className="space-y-4">
              <SettingSelect
                id="device"
                label="Device"
                placeholder="Select a Device"
                defaultValue="iPhone X (375 x 812)"
                options={[
                  "iPhone X (375 x 812)",
                  "Pixel 5 (393 x 851)",
                  "Samsung Galaxy S20 (412 x 915)",
                  "iPhone 12 Pro (390 x 844)",
                  "Galaxy Fold (280 x 653)",
                ]}
              />

              <SettingSelect
                id="user-agent"
                label="User agent"
                placeholder="Select a User agent"
                defaultValue="Default"
                options={[
                  "Default",
                  "Chrome (Windows 10)",
                  "Safari (macOS)",
                  "Firefox (Ubuntu)",
                  "Samsung Internet (Android)",
                ]}
              />

              <SettingSelect
                id="network-throttling"
                label="Network throttling"
                placeholder="Select a Network throttling"
                defaultValue="None"
                options={[
                  "None",
                  "Slow 3G",
                  "Fast 3G",
                  "Regular 4G",
                  "Custom..",
                ]}
              />

              <SettingSelect
                id="vpn-proxy"
                label="VPN proxy"
                placeholder="Select a VPN proxy"
                defaultValue="Default"
                options={[
                  "Default",
                  "India - Mumbai",
                  "US - New York",
                  "Germany - Berlin",
                  "Japan - Tokyo",
                ]}
              />

              <SettingSelect
                id="geolocation"
                label="Geolocation"
                placeholder="Select a Geolocation"
                defaultValue="Default"
                options={[
                  "Default",
                  "Berlin, Germany",
                  "Tokyo, Japan",
                  "Sydney, Australia",
                  "Cape Town, South Africa",
                ]}
              />

              <div className="flex items-center justify-between">
                <Label htmlFor="Switch Text">Switch Text</Label>
                <Switch id="Switch Text" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="CSS">CSS</Label>
                <Switch id="CSS" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="Cookies">Cookies</Label>
                <Switch id="Cookies" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="Caching">Caching</Label>
                <Switch id="Caching" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="Incognito mode">Incognito mode</Label>
                <Switch id="Incognito mode" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="Google">
            <div className="space-y-4">
              <SettingSelect
                id="language"
                label="Language"
                placeholder="Select a Language"
                defaultValue="Default"
                options={[
                  "Default",
                  "English (en)",
                  "German (de)",
                  "Spanish (es)",
                  "Japanese (ja)",
                ]}
              />

              <SettingSelect
                id="domain"
                label="Domain"
                placeholder="Select a Domain"
                defaultValue="Default"
                options={[
                  "Default",
                  "google.com",
                  "google.co.uk",
                  "google.de",
                  "google.co.in",
                ]}
              />

              <SettingSelect
                id="results-per-page"
                label="Results per page"
                placeholder="Select a Results per page"
                defaultValue="None"
                options={["None", "10", "20", "30", "50"]}
              />

              <SettingSelect
                id="time-filter"
                label="Time filter"
                placeholder="Select a Time filter"
                defaultValue="Default"
                options={[
                  "Default",
                  "Past 24 hours",
                  "Past week",
                  "Past month",
                  "Past year",
                ]}
              />

              <SettingSelect
                id="custom-url"
                label="Custom URL parameters"
                placeholder="Select a Custom URL parameters"
                defaultValue="gl=us&hl=en"
                options={[
                  "gl=us&hl=en",
                  "gl=de&hl=de",
                  "pws=0&num=50",
                  "safe=active&as_qdr=w",
                  "as_sitesearch=bbc.com",
                ]}
              />

              <div className="flex items-center justify-between">
                <Label htmlFor="SafeSearch">SafeSearch</Label>
                <Switch id="SafeSearch" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="Personalization">Personalization</Label>
                <Switch id="Personalization" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="Hide ads">Hide ads</Label>
                <Switch id="Hide ads" />
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
