import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function LoadingScreen() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span className="text-vice-pink font-display text-4xl">
            Loading Vice City
            <span className="animate-pulse">.</span>
            <span className="animate-pulse [animation-delay:200ms]">.</span>
            <span className="animate-pulse [animation-delay:400ms]">.</span>
          </span>
        }
        src={`/images/loading-screen.png`}
        showGradient={false}
      />
    </div>
  );
}
