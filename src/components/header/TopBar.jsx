"use client";

import { CaptureOptions, LocationSelector, NavigationControls, RedirectTrace, Setting } from ".";

export function TopBar() {

  return (
    <div className="flex justify-between py-2">
     <NavigationControls />

      <div className="flex">
        <CaptureOptions />
       <LocationSelector />
        <RedirectTrace />
        <Setting />
      </div>
    </div>
  );
}
