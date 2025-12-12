"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cabin } from "@/public/fonts";
import { Send, X } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full flex justify-center px-4 pt-6">
      <div
        className={cn(
          "w-full max-w-[1200px]",
          "flex items-center justify-between gap-4",
          "rounded-full",
          "border-[4px] border-[#7da33a]",
          "bg-[#eef9fa]",
          "px-6 py-3"
        )}
      >
        {/* ================= LEFT: LOGO + NAME ================= */}
        <Image
          src="/assets/navbar-logo.png" // replace with your logo
          alt="$FART logo"
          width={40}
          height={40}
          className="w-full max-w-[150px]"
          unoptimized
        />

        {/* ================= RIGHT: CTA + CLOSE ================= */}
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/FART_Official"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              cabin.className,
              "flex items-center gap-2",
              "bg-[#6f8f2e] text-white",
              "px-5 py-2 rounded-full",
              "text-sm sm:text-base font-semibold",
              "hover:opacity-90 transition"
            )}
          >
            Join the Fart Frens
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="25"
              viewBox="0 0 29 25"
              fill="none"
              className="max-w-[18px] max-h-[18px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.8542 0.168562C26.2088 0.0193094 26.5969 -0.0321669 26.9782 0.0194905C27.3595 0.071148 27.7199 0.224051 28.022 0.462285C28.3241 0.700518 28.5569 1.01537 28.696 1.37408C28.8351 1.73278 28.8756 2.12223 28.8131 2.50187L25.5586 22.2431C25.2429 24.1474 23.1535 25.2394 21.4071 24.2909C19.9463 23.4973 17.7766 22.2747 15.825 20.999C14.8492 20.3604 11.8601 18.3155 12.2274 16.8604C12.5431 15.6163 17.5656 10.9411 20.4356 8.1615C21.5621 7.06946 21.0484 6.4395 19.7181 7.444C16.4148 9.93802 11.111 13.7307 9.35746 14.7984C7.81053 15.7397 7.00406 15.9004 6.03974 15.7397C4.28044 15.447 2.64884 14.9935 1.31717 14.441C-0.48232 13.6948 -0.394785 11.2209 1.31573 10.5005L25.8542 0.168562Z"
                fill="white"
              />
            </svg>
          </a>

          <a
            href="https://x.com/pump_fart?s=21"
            className={cn(
              "flex items-center justify-center bg-white rounded-full p-2",
              "border-2 border-[#7da33a]"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g clip-path="url(#clip0_2115_127)">
                <mask
                  id="mask0_2115_127"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="28"
                  height="28"
                >
                  <path d="M0 0H27.3103V27.3103H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_2115_127)">
                  <path
                    d="M21.5069 1.27968H25.6951L16.5462 11.7629L27.3103 26.0307H18.8832L12.278 17.3791L4.72859 26.0307H0.536453L10.3214 14.8139L0 1.28163H8.64177L14.6032 9.18797L21.5069 1.27968ZM20.0341 23.5181H22.3555L7.37379 3.66153H4.88465L20.0341 23.5181Z"
                    fill="#4C790C"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2115_127">
                  <rect width="27.3103" height="27.3103" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
