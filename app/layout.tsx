import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/ui/components";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MR MALIK [⏃⎑⎅▽]",
  description:
    "MR MALIK IS A FULLSTACK ENGINEER LOOKING FOR OPPORTUNITIES TO CONTRIBUTE.",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
