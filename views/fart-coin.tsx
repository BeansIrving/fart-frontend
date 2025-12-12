"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

const WhyFartOverFartcoinSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#eaf6f7] px-4 py-24 bg-[url('/assets/bg-image-4.png')] bg-bottom bg-no-repeat bg-cover min-h-[1024px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col gap-6">
          <h2
            className={cn(
              kotton.className,
              "text-[#5a7c2f] font-bold",
              "text-4xl sm:text-5xl md:text-6xl leading-tight"
            )}
          >
            Why $FART Over <br className="hidden sm:block" />
            $FARTCOIN?
          </h2>

          <div
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg leading-relaxed",
              "space-y-4 max-w-[560px]"
            )}
          >
            <p>
              <span className="font-semibold">$FARTCOIN</span> already blew up.
            </p>

            <p>
              <span className="font-semibold">$FART</span> is the raw,
              unfiltered, underdog play built for the next leg of meme season.
            </p>

            <p>
              Where <span className="font-semibold">$FARTCOIN</span> ballooned
              to a $450M MC, <span className="font-semibold">$FART</span> starts
              lean, early, and ready to rip.
            </p>

            <p>
              This is the degen reset button — cheaper, funnier, and designed
              for the next viral wave.
            </p>
          </div>
        </div>

        {/* ================= RIGHT CHARACTER ================= */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <Image
            src="/assets/image-1.png" // replace with your actual asset
            alt="$FART character holding sign"
            width={520}
            height={640}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFartOverFartcoinSection;
