import Image from "next/image";
import { IconDownload, IconFavorite } from "../atoms/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto py-16 px-4 lg:px-8 flex flex-col items-center md:flex-row gap-4 md:gap-12 justify-between">
        <p className="text-sm lg:text-base font-light text-lk-text-secondary -tracking-wide flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="text-lk-turquoise text-3xl relative -top-[1px]">
            ✺
          </span>
          <span>
            Pørtfolio designed and coded by MR MALIK lot of{" "}
            <span className="relative -top-1">
              <IconFavorite size="sm" />
            </span>{" "}
            in some part of planet Earth. 
          </span>
        </p>
      </div>
    </footer>
  );
}
