import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.scss";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Marco Aurelio Antunes",
  description: "Full stack developer",
};

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={`${roboto.className}`} >
        <div id="windows-root"></div>
        {children}
      </body>
    </html>
  );
}
