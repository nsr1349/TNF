import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TNF",
  description: "TNF boardgame shop",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" >
      <body className="bg-main text-purewhite">
          {children}
      </body>
    </html>
  );
}
