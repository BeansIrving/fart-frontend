"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

const LoreAndCommunitySection = () => {
  return (
    <section className="w-full flex justify-center bg-[#eaf6f7] px-4 py-24">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-24">
        {/* ================= THE LORE ================= */}
        <div className="flex flex-col items-center gap-10 text-center">
          <h2
            className={cn(
              kotton.className,
              "text-[#5a7c2f] font-bold",
              "text-4xl sm:text-5xl"
            )}
          >
            The Lore
          </h2>

          <p
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg leading-relaxed max-w-[720px]"
            )}
          >
            In the beginning, Bitcoin made a loud bang.
            <br />
            Meme coins followed with even louder ones.
            <br />
            And now comes the purest form of on-chain gas:{" "}
            <span className="font-semibold">$FART</span>.
          </p>

          <p
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg"
            )}
          >
            A coin for people who:
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px]">
            {[
              "Are tired of “serious” roadmaps",
              "Think dips and pumps should both make funny noises",
              "Know the market stinks sometimes, but still show up",
            ].map((text, i) => (
              <div
                key={i}
                className={cn(
                  cabin.className,
                  "flex items-start gap-3 text-left text-[#1f2937]"
                )}
              >
                <span className="mt-1 h-4 w-4 rounded-full border-4 border-[#5a7c2f]" />
                <span className="text-base sm:text-lg leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg max-w-[760px]"
            )}
          >
            <span className="font-semibold">$FART</span> is the coin that admits
            what everyone is pretending not to smell.
          </p>
        </div>

        {/* ================= COMMUNITY ================= */}
        <div className="flex flex-col items-center gap-12 text-center">
          <h2
            className={cn(
              kotton.className,
              "text-[#5a7c2f] font-bold",
              "text-4xl sm:text-5xl"
            )}
          >
            The $FART Community
          </h2>

          <div
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg max-w-[640px] leading-relaxed"
            )}
          >
            <p>Holders are Fart Frens.</p>
            <p>A proud group of misfits who believe:</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[900px]">
            {[
              "Every pump is a silent-but-deadly breakout.",
              "Every dump is a whoopsie, not a crisis.",
              "A good meme is worth more than any VC pitch deck.",
            ].map((text, i) => (
              <div
                key={i}
                className={cn(
                  cabin.className,
                  "bg-white rounded-xl px-6 py-6",
                  "border-2 border-[#7a6a2f]",
                  "text-[#1f2937] text-base sm:text-lg"
                )}
              >
                {text}
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <div
            className={cn(
              kotton.className,
              "text-[#5a7c2f]",
              "text-base sm:text-lg leading-relaxed"
            )}
          >
            <p>
              Post your worst fart story → win airdrops.
              <br />
              Raid with gas jokes → win clout.
            </p>
          </div>

          <div
            className={cn(
              kotton.className,
              "text-[#1f2937]",
              "text-lg sm:text-xl font-semibold"
            )}
          >
            <p>There are no rules.</p>
            <p>If it stinks, it sticks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoreAndCommunitySection;
