"use client";

import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

const WhyFartExistsSection = () => {
  return (
    <section className="w-full flex justify-center items-start bg-[#eaf6f7] px-4 py-24 bg-[url('/assets/bg-image-2.png')] bg-bottom bg-no-repeat bg-cover min-h-[1024px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 📝 LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2
            className={cn(
              kotton.className,
              "text-[#5a7c2f] font-bold",
              "text-4xl sm:text-5xl"
            )}
          >
            Why $FART Exists
          </h2>

          <div
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg leading-relaxed",
              "space-y-4 max-w-[520px]"
            )}
          >
            <p>
              Every cycle has its defining meme.
              <br />
              This one belongs to fart humor and unhinged brainrot.
            </p>

            <p>
              While $FARTCOIN blasted 300% in a week,
              <br />
              the space proved a point:
              <br />
              People want a joke they can trade.
            </p>

            <p>
              So $FART leans into what everyone already knows:
              <br />
              Crypto is 90% hot air. We just say it proudly.
            </p>

            <p className="italic">
              A collective exhale from the degen hive mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFartExistsSection;
