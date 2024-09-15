import { StudyNotionfeaturesList } from "@/public/projects/edtechplatform/featureslist";
import { InvoicifyFeatureList } from "@/public/projects/invoicify/featureslist";
import { Typography } from "@/ui/atoms";
import { IconOpenInNew } from "@/ui/atoms/icons";
import { ImagesCarousel, RegularSection } from "@/ui/components";
import { FancySectionTitle } from "@/ui/components/FancySectionTitle";
import Image from "next/image";
import Link from "next/link";


export default function HighlightedProject() {

  return (
    <>
    {/* PROJECT 1 */}
      <FancySectionTitle title="Persønał_prøjects" />
      <RegularSection id="projects">
      <Typography variant="h1" className="mb-8">
        #1 <br />
        StudyNotion
      </Typography>
        <div className="lg:w-[75%] max-w-[700px] mb-8 lg:mb-16">
          <Typography>
            StudyNotion is a{" "}
            fully functional  <span className="text-white">EdTech platform</span> that enables users to create, consume, and rate  <span className="text-white">educational content.</span> 
             The platform is built using the <span className="text-white"> MERN stack</span>, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
          </Typography>
        </div>

        <Typography variant="link" className="text-white">
          <Link href={STUDY_NOTION_GITHUB} target="_blank">
            Github Repo
            <IconOpenInNew />
          </Link>
        </Typography>
      </RegularSection>

      <ImagesCarousel items={StudyNotionfeaturesList} />

      <RegularSection>
        <Typography variant="h2" className="!text-white mb-4">
         Features
        </Typography>
        <ul className="flex flex-col gap-6 mb-40">
          <li>
            <Typography>⎔ Homepage introduces the platform with links to courses and user details.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ Course list displays available courses with descriptions and ratings.
            </Typography>
          </li>
          <li>
            <Typography>⎔ Wishlist shows saved courses.</Typography>
          </li>
          <li>
            <Typography>⎔ Cart checkout allows course purchases.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ Course content contains videos and related materials for each course.
            </Typography>
          </li>
          <li>
            <Typography>
              ⎔ Users can view and edit their account details.
            </Typography>
          </li>
          <li>
            <Typography>⎔ Instructors have a dashboard for course overview, feedback, and performance insights.</Typography>
          </li>
          <li>
            <Typography>⎔ Instructors manage courses and edit profiles.</Typography>
          </li>
        </ul>
      </RegularSection>

      <RegularSection>

      <Typography variant="h1" className="mb-8">
        #2 <br />
        Invoicify
      </Typography>
        <div className="lg:w-[75%] max-w-[700px] mb-8 lg:mb-16">
          <Typography>
          About
          Invoicify is a web-based <span className="text-white">invoicing application</span> designed to help businesses manage their invoices with ease.
          The platform allows users to  <span className="text-white">create, send, and track invoices,</span> view payment history, and upload their business logo.
          <span className="text-white">Google authentication</span> is also integrated to make logging in <span className="text-white"> quick and secure.</span>
          The project is built on <span className="text-white">MERN stack</span>
          </Typography>
        </div>

        <Typography variant="link" className="text-white">
          <Link href={INVOICIFY_GITHUB} target="_blank">
            Github Repo
            <IconOpenInNew />
          </Link>
        </Typography>
      </RegularSection>

      <ImagesCarousel items={InvoicifyFeatureList} />

      <RegularSection>
        <Typography variant="h2" className="!text-white mb-4">
         Features
        </Typography>
        <ul className="flex flex-col gap-6 mb-40">
          <li>
            <Typography>⎔ Easy invoice creation for quick and professional billing.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ Efficient client management with stored details.
            </Typography>
          </li>
          <li>
            <Typography>⎔ Automated PDF downloads for easy sharing and printing.</Typography>
          </li>
          <li>
            <Typography>⎔ Real-time insights into earnings and overdue payments.</Typography>
          </li>
          <li>
            <Typography>
              ⎔ Direct email notifications for seamless client communication.
            </Typography>
          </li>
          <li>
            <Typography>
              ⎔ Customizable templates to personalize with logos and fields.
            </Typography>
          </li>
          <li>
            <Typography>⎔ Mobile-friendly access for managing invoices on any device.</Typography>
          </li>
        </ul>
      </RegularSection>


 
    </>
  );
}

const STUDY_NOTION_GITHUB =
  "https://github.com/MRMALIK2512/ED-techplatform";
const INVOICIFY_GITHUB =
  "https://github.com/MRMALIK2512/Invoicify";
