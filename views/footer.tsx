"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";
import { Send, X } from "lucide-react";

const FinalBreathSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#eaf6f7] px-4 py-24 bg-[url('/assets/bg-image-6.png')] bg-bottom bg-no-repeat bg-cover min-h-[1024px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT ILLUSTRATION ================= */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/assets/characters/final-breath.png" // replace with your asset
            alt="$FART final breath character"
            width={520}
            height={420}
            priority
            className="object-contain opacity-0"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col gap-6">
          <h2
            className={cn(
              kotton.className,
              "text-[#5a7c2f] font-bold",
              "text-4xl sm:text-5xl"
            )}
          >
            Final Breath
          </h2>

          <div
            className={cn(
              cabin.className,
              "text-[#1f2937]",
              "text-base sm:text-lg leading-relaxed",
              "space-y-2 max-w-[520px]"
            )}
          >
            <p>
              <span className="font-semibold">$FART</span> is not here to change
              the world.
            </p>
            <p>
              It’s here to pollute the timeline, give degens a laugh, and maybe
              — accidentally — moon.
            </p>
            <p>Let one rip.</p>
            <p>Join the Fart Frens.</p>
            <p className="font-semibold">And toot responsibly.</p>
          </div>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://t.me/FART_Official"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cabin.className,
                "flex items-center gap-2",
                "text-[#5a7c2f] text-lg font-semibold",
                "hover:opacity-80 transition"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                className="max-w-[20px] max-h-[20px]"
              >
                <path
                  d="M47.6486 63.6243L39.0292 53.8244C34.7622 48.9727 34.2567 46.8408 34.5376 46.3813L37.7726 43.776L50.8846 33.5198C51.9419 32.6929 52.1286 31.1655 51.3016 30.1082C50.4746 29.051 48.9471 28.8643 47.8897 29.6913L34.7641 39.9577L30.8168 43.1794C29.8954 44.1684 29.3077 45.8596 29.9487 48.2647C30.5467 50.5091 32.2244 53.4754 35.7965 57.5477L34.4773 60.1495C33.6251 61.3339 32.8341 62.4337 32.106 63.1875C31.3825 63.9363 30.0679 65.0371 28.2369 64.6729C26.43 64.3135 25.6192 62.8197 25.2177 61.8611C24.81 60.8874 24.4647 59.5669 24.09 58.1346L22.4649 51.9242C21.5622 48.4747 21.2505 47.4831 20.6632 46.7533C20.589 46.6613 20.5118 46.5722 20.4317 46.4866C19.8116 45.8227 18.9358 45.414 15.7279 44.1282L15.5521 44.0576C12.3908 42.7905 9.78664 41.7468 7.96522 40.7212C6.20065 39.7276 4.29511 38.2833 4.07589 35.8462C4.04184 35.4674 4.04242 35.0863 4.07764 34.7075C4.30435 32.271 6.21462 30.8327 7.9823 29.845C9.80692 28.8255 12.4143 27.7904 15.5796 26.5338L54.4138 11.1155C58.3863 9.53826 61.6342 8.24854 64.1864 7.66056C66.7885 7.0611 69.4765 6.99762 71.5828 8.94596C73.6477 10.8558 73.8949 13.5464 73.6376 16.258C73.3823 18.9483 72.543 22.4472 71.5077 26.7631L63.6667 59.4499C63.0069 62.2011 62.4499 64.5238 61.7817 66.2089C61.107 67.9114 60.0247 69.7394 57.8377 70.3178C55.6244 70.9031 53.7952 69.812 52.405 68.6354C51.0395 67.4798 49.4821 65.7092 47.6486 63.6243Z"
                  fill="#4C790C"
                />
              </svg>
              Telegram
            </a>

            <span className="text-[#5a7c2f] text-xl">|</span>

            <a
              href="https://x.com/pump_fart?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cabin.className,
                "flex items-center gap-2",
                "text-[#5a7c2f] text-lg font-semibold",
                "hover:opacity-80 transition"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                className="max-w-[20px] max-h-[20px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.888 4.0498C19.649 4.0498 4.05273 19.6461 4.05273 38.885C4.05273 58.1241 19.649 73.7203 38.888 73.7203C58.1271 73.7203 73.7232 58.1241 73.7232 38.885C73.7232 19.6461 58.1271 4.0498 38.888 4.0498ZM22.6855 20.2522C21.7729 20.2522 20.9371 20.7636 20.5216 21.5762C20.1061 22.3888 20.1809 23.3657 20.7153 24.1056L33.0927 41.2435L20.967 53.369C20.0179 54.3182 20.0179 55.8568 20.967 56.8059C21.9161 57.755 23.455 57.755 24.4041 56.8059L35.9754 45.2348L44.1188 56.5104C44.5757 57.1432 45.3087 57.5178 46.089 57.5178H55.0904C56.0032 57.5178 56.839 57.0065 57.2544 56.1938C57.6698 55.3814 57.595 54.4044 57.0606 53.6646L44.6832 36.5266L56.8088 24.4011C57.758 23.452 57.758 21.9132 56.8088 20.9641C55.8597 20.015 54.3211 20.015 53.372 20.9641L41.8005 32.5353L33.6572 21.2596C33.2003 20.627 32.4673 20.2522 31.6869 20.2522H22.6855Z"
                  fill="#4C790C"
                />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalBreathSection;
