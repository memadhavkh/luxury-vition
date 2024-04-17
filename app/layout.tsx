import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StateProvider } from "@/context/StateProvider";
import { Permanent_Marker } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent",
});

export const metadata: Metadata = {
  title: "LOUIS VUITTON | Recreation",
  description: "Recreation of the Louis Vuitton website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${permanentMarker.variable}`}>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
