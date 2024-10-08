import Intro from "./_sections/intro";
import FirstThingsFirst from "./_sections/first-things-first";
import Skills from "./_sections/skills";
import HighlightedProject from "./_sections/highlighted-project";
import Contact from "./_sections/contact";
import { PageProps } from "@/.next/types/app/page";
import JourneyModal from "./_sections/journey-modal";


export default function Home(props: PageProps) {
  const { searchParams } = props;

  return (
    <main>
      <div>
        <Intro />
        <FirstThingsFirst />
      </div>
      <HighlightedProject />
      <Skills/>
      <Contact />

      {searchParams?.modal === "journey" && <JourneyModal />}
    </main>
  );
}
