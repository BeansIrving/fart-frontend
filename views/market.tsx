"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

const FartInThisMarketSection = () => {
  return (
    <section className="relative w-full flex justify-center bg-[#eaf6f7] px-4 py-24 overflow-hidden">
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center gap-10">
        {/* ================= TITLE ================= */}
        <h2
          className={cn(
            kotton.className,
            "text-[#5a7c2f] font-bold",
            "text-4xl sm:text-5xl md:text-6xl"
          )}
        >
          $FART In This Market
        </h2>

        {/* ================= INTRO COPY ================= */}
        <p
          className={cn(
            cabin.className,
            "text-[#1f2937]",
            "text-base sm:text-lg leading-relaxed max-w-[720px]"
          )}
        >
          Crypto’s bouncing back. ETFs are trending. Rates may drop.
          <br />
          But meme coins are what’s actually moving feeds and charts.
          <br />
          <span className="font-semibold">$FART</span> slots perfectly into:
        </p>

        {/* ================= BULLET LIST ================= */}
        <ul
          className={cn(
            kotton.className,
            "grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4",
            "text-[#5a7c2f] text-base sm:text-lg"
          )}
        >
          <li>• TikTok humor</li>
          <li>• X raids</li>
          <li>• Solana degen culture</li>
          <li>• Viral absurdity</li>
          <li className="sm:col-span-2">• End-of-year “just vibe” trading</li>
        </ul>

        {/* ================= CLOSING LINE ================= */}
        <p
          className={cn(
            cabin.className,
            "text-[#1f2937]",
            "text-base sm:text-lg max-w-[640px]"
          )}
        >
          This is the easiest story to tell and the funniest
          <br />
          coin to rally behind.
        </p>
      </div>

      {/* ================= LEFT TOKEN ================= */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <Image
          src="/assets/image-2.png" // replace with your asset
          alt="$FART token"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* ================= RIGHT CHARACTER ================= */}
      <div className="absolute right-6 bottom-12 hidden lg:block">
        <Image
          src="/assets/image-3.png" // replace with your asset
          alt="$FART character"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default FartInThisMarketSection;
