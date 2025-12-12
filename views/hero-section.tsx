"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-start bg-[#eaf6f7] py-24 px-4 bg-[url('/assets/bg-image-1.png')] bg-bottom bg-no-repeat bg-cover min-h-[1024px]">
      <div className="flex flex-col gap-10 items-center justify-center max-w-[1200px] w-full relative">
        {/* 🟢 Headline */}
        <h1
          className={cn(
            kotton.className,
            "text-[#5a7c2f] text-center",
            "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-[900px]"
          )}
        >
          “Toot to the Moon. Because <br className="hidden sm:block" />
          Everything’s Just Hot Air.”
        </h1>

        {/* 📝 Subtext */}
        <p
          className={cn(
            cabin.className,
            "text-center text-[#1f2937]",
            "text-base sm:text-lg md:text-xl",
            "max-w-[760px] leading-relaxed"
          )}
        >
          Crypto’s in a rebound phase, meme coins are running the timeline
          again, and the market is proving one thing:
          <br />
          <span className="font-semibold">Degens don’t want utility.</span>
          <br />
          They want comedy, chaos, and charts that look like flatulence.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
