"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Typography } from "@/ui/atoms";
import { IconTrendingFlat } from "@/ui/atoms/icons";
import { StickySection } from "@/ui/components";
import Image from 'next/image';

export default function FirstThingsFirst() {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleObserverCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.document.body.classList.add("pink-background");
        window.document.body.style.backgroundColor = "#FF034F";
      } else if (
        window.scrollY < 500 ||
        window.scrollY > window.innerHeight * 3
      ) {
        window.document.body.style.backgroundColor = "";
        window.document.body.classList.remove("pink-background");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(titleObserverCallback, {
      threshold: 0.3,
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  return (
    <div ref={containerRef} className="relative z-20 showFirstThingsFirst">
      <StickySection className={"flex flex-col gap-y-3"} >
      <div className="w-auto flex flex-col justify-end" >
      <div className="lg:w-[75%] max-w-[700px] ">
          <Typography className="mb-8 text-justify">
           I am a driven Computer Science major with a passion for problem-solving and innovative development. 
           Proficient in <span className="text-white">DSA</span>{" "}, <span className="text-white">Data Science</span>{" "}, and <span className="text-white">Data Analysis</span>{" "},
            I combine analytical thinking with creativity to craft efficient solutions.
          </Typography>
          <Typography className="mb-12 text-justify">
            My expertise spans  <span className="text-white">full-stack development</span>{" "} using the <span className="text-white">MERN stack</span>{" "}, and
            I am deeply interested in <span className="text-white">Low-Level Design (LLD)</span>{" "}, striving to contribute to impactful projects in the field of computer science.
          </Typography>
        </div>
       
      
        
        <Typography variant="link">
          <Link scroll={false} href="?modal=journey">
            See jøurney <IconTrendingFlat />
          </Link>
        </Typography>
      </div>
      </StickySection>
    </div>
  );
}
