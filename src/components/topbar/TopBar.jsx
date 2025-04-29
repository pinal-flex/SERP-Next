"use client";

import {
  CaptureOptions,
  ContactUs,
  LocationSelector,
  NavigationControls,
  RedirectTrace,
  SearchDialog,
  Setting,
} from "@/components";

export function TopBar() {
  return (
    <div className="flex-wrap md:flex justify-between w-full p-2">
      <NavigationControls />
      <SearchDialog />
      <div className="flex">
        <CaptureOptions />
        <LocationSelector />
        <RedirectTrace />
        <Setting />
        <ContactUs />
      </div>
    </div>
  );
}
