import { Poppins, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const cabin = localFont({
  src: [
    {
      path: "./local/cabin-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./local/cabin-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const kotton = localFont({
  src: [
    {
      path: "./local/Kotton.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
