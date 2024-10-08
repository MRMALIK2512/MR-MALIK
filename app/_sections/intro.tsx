import { Logo, Typography } from "@/ui/atoms";
import Link from "next/link";
import "./animations.css";
import { useState } from "react";
import { DynamicTitle } from "./dynamic-title";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="min-h-[88svh] max-w-screen-xl mx-auto px-8 md:px-10 sticky top-0 flex flex-col justify-end pt-20 pb-20 overflow-x-hidden show-intro">
      <Logo size="small" />
      <Typography className="mt-2 mb-1 lg:mb-4 !text-2xl lg:!text-4xl !font-normal">
      MALIK UMAR TAABISH
      </Typography>
      <div className="flex flex-col md:flex-row md:items-end gap-8 lg:gap-8 xl:gap-12 md:justify-between">
        <DynamicTitle />
        <div className="flex gap-3 pb-1 showCTA">
          <Typography className="!text-lk-pink randomBlink">✺</Typography>
          <Typography className="max-w-[460px] max-h-[460px] text-sm">
          Turning code and pixels into seamless, human-centered digital experiences. I specialize in the MERN stack, 
          delivering elegant solutions that bridge technology and user needs.
            <Link href="/#contact" className="block">
              <Typography
                variant="small"
                className="hover:underline !font-light"
              >
                make_cøntact
              </Typography>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
