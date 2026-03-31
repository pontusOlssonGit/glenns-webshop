import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3, } from "next/font/google";
import Header from "@/components/ClientSideHeader";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Glenn's Webbutik",
  description: "Webbutik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} bg-gray-100 text-gray-900`}>
        <Header />
        <div className="pl-10 pr-10 lg:pl-40 lg:pr-40">{children}</div>
      </body>
    </html>
  );
}
