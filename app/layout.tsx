import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { cabin, kotton } from "@/public/fonts";

export const metadata: Metadata = {
  title: "Fart",
  description: "Fart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(kotton.className, cabin.className)}>{children}</body>
    </html>
  );
}
