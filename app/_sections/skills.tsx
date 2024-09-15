import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { RegularSection, StickySection } from "@/ui/components";
import Link from "next/link";
import { GlitchTitle } from "@/ui/components/GlitchTitle";

export default function Skills() {
  return (
    <RegularSection bgColor="black" >
      <GlitchTitle title="Skiłłs" textColor ="!text-lk-green" />
      <ul className="mb-16 lg:mb-28 flex flex-col gap-3 lg:gap-6 mt-20">
        <li>
          <Typography className="!text-lk-green flex items-center gap-6 text-4xl" variant="h2" >
            Programming Languages :<Typography variant="small" className="!text-lk-pink">C++</Typography>
            <Typography variant="small" className="!text-lk-pink">Python</Typography> <Typography variant="small" className="!text-lk-pink" >Javascript</Typography>
          </Typography>
        </li>
        <li>
        <Typography className="!text-lk-green flex items-center gap-6 text-4xl" variant="h2">
            FrontEnd :<Typography variant="small" className="!text-lk-pink">React</Typography>
            <Typography variant="small" className="!text-lk-pink">Tailwind</Typography> <Typography variant="small" className="!text-lk-pink" >Redux</Typography>
          </Typography>
        </li>
        <li>
        <Typography className="!text-lk-green flex items-center gap-6 text-4xl" variant="h2">
            BackEnd :<Typography variant="small" className="!text-lk-pink">ExpressJS</Typography>
            <Typography variant="small" className="!text-lk-pink">NodeJs</Typography> <Typography variant="small" className="!text-lk-pink" >Flask</Typography>
          </Typography>
        </li>
        <li>
        <Typography className="!text-lk-green flex items-center gap-6 text-4xl" variant="h2">
            DataBase :<Typography variant="small" className="!text-lk-pink">MongoDB</Typography>
            <Typography variant="small" className="!text-lk-pink">MySql</Typography>
          </Typography>
        </li>
        <li>
        <Typography className="!text-lk-green flex items-center gap-6 text-4xl" variant="h2">
            Other Skills :<Typography variant="small" className="!text-lk-pink">Data Analytics</Typography>
            <Typography variant="small" className="!text-lk-pink">DSA</Typography> <Typography variant="small" className="!text-lk-pink" >Machine Learning</Typography>
          </Typography>
        </li>

      </ul>

      <Typography className="mb-8 lg:mb-16 ">
        In Malik&apos;s <span className="!text-lk-green">Github profile</span> you
        will know more about <span className="!text-lk-green">his skills</span> and
        what <span className="!text-lk-green">he can do</span> in some of his{" "}
        <span className="!text-lk-green">pinned repos</span>, all of them with{" "}
        <span className="!text-lk-green">live urls</span>.
      </Typography>

      <Link href="https://github.com/MRMALIK2512/" target="_blank">
        <Typography variant="link">
          Go to Malik&apos;s Github
          <IconOpenInNew />
        </Typography>
      </Link>
    </RegularSection>
  );
}
