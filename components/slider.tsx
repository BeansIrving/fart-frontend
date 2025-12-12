// "use client";

// import { cn } from "@/lib/utils";
// import { gotham } from "@/public/fonts";

// export default function Slider() {
//   return (
//     <div
//       className={cn(
//         "w-full bg-[#341F02] border-y-[6px] border-dashed border-[#E3B31D] py-4 px-8 overflow-hidden"
//       )}
//     >
//       <div className="flex gap-8 animate-marquee whitespace-nowrap w-full">
//         {Array.from({ length: 30 }).map((_, i) => (
//           <p
//             key={i}
//             className={cn(
//               gotham.className,
//               "text-[#FAFAE5] text-[32px] font-bold"
//             )}
//           >
//             $FUMFU • $FUMFU • $FUMFU • $FUMFU • $FUMFU •
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full flex justify-center items-center -mt-[0.5rem] relative z-[999] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap w-full">
        {Array.from({ length: 30 }).map((_, i) => (
          <Image
            src={"/assets/slider-v2.png"}
            alt={"slider"}
            height={109}
            width={600}
            className=""
          />
        ))}
      </div>
    </div>
  );
}
