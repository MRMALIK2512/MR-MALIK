import { Typography } from "@/ui/atoms";
import { RegularSection } from "@/ui/components";
import { GlitchTitle } from "@/ui/components/GlitchTitle";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div id="contact" className="pt-40 text-right flex justify-end">
        <GlitchTitle title="make_cøntact" textColor=""/>
      </div>
      <RegularSection lineColor="to-black">
        <Typography variant="h6" className="mb-2 lg:mb-8">
          SEND ME AN EMAIL TO
        </Typography>
       <Link href={"mailto:tabishmalik529@gmail.com"}>
       <Typography className="!text-white mb-8 lg:mb-20 !text-2xl lg:!text-6xl">
          tabishmalik529@gmail.com
        </Typography>
       </Link>

        <Typography variant="h6" className="mb-2 lg:mb-6">
          ALSO FIND ME ON
        </Typography>
        <div className="flex gap-2 mb-2">
          <Link href="https://linkedin.com/in/liamklyneker" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">
              LinkedIn
            </Typography>
          </Link>
          <Typography className="!text-white">{" / "}</Typography>
          <Link href="https://github.com/MRMALIK2512/" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">
              Github
            </Typography>
          </Link>
          <Typography variant="h5">{" / "}</Typography>
          <Link href="https://instagram.com/___mr_malik__" target="_blank">
            <Typography className="!text-white underline hover:bg-lk-turquoise">Instagram</Typography>
          </Link>
        </div>
         
      </RegularSection>
    </>
  );
}
