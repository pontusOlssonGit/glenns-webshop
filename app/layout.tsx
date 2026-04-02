import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import Header from "@/components/ClientSideHeader";

const lexend = Lexend({
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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-gray-100 text-gray-900`}>
        <Header />
        <div className="pl-10 pr-10 lg:pl-35 lg:pr-35">{children}</div>
        {modal}
      </body>
    </html>
  );
}
