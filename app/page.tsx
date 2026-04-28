import { IoLogoGithub } from "react-icons/io";
import Image from 'next/image';
import Link from "next/link";
import CopyLinkButton from "./ui/home/copy-link-button";
import PillLink from "./ui/home/pill-link";
import AccordionCard from "./ui/home/accordion-card";

export default function Home() {
  return (
    <div className="w-full max-w-[504px] mx-auto pt-[120px] gap-0">
      {/* HEADER SECTION */}
      <div className="mb-[32px]">
        <p className="text-orange-500 text-title-M-brand">SOFTWARE DEVELOPER</p>
        <h1 className={`text-display-S-brand text-blue-500 mb-[12px]`}>Nam Hoang Nguyen</h1>
        <p className="text-gray-800 text-body-L-general mb-[16px]">Welcome to my home on the internet! I’m a software developer that is passionate about exploring both the technical and creative sides of programming. </p>
        <div className="gap-[4px]">
          <div className="flex items-center gap-[8px]">
            <span className="material-symbols-rounded text-gray-500 leading-[16px]" style={{ fontSize: '16px', fontVariationSettings: "'opsz' 20" }}>school</span>
            <p className="text-body-S-general text-gray-700">UMass Amherst (B.S & M.S Computer Science)</p>
          </div>
          <div className="flex items-center gap-[8px] pb-[16px]">
            <span className="material-symbols-rounded text-gray-500 leading-[16px]" style={{ fontSize: '16px', fontVariationSettings: "'opsz' 20" }}>location_on</span>
            <p className="text-body-S-general text-gray-700">Amherst, MA</p>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <PillLink 
            href={"https://github.com/namhnguyen0103"} 
            label={"namhnguyen0103"} 
            icon={
              <IoLogoGithub className="text-gray-700 text-[12px] group-hover:text-gray-900"/>
            }            
          />
          <PillLink 
            href={"/Nam_Nguyen_Resume.pdf"} 
            label={"resume"} 
            icon={
              <span className="material-symbols-rounded text-gray-700 group-hover:text-gray-900" style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>docs</span>
            }            
          />

          <CopyLinkButton link="namhnguyen0103@gmail.com"/>

        </div>
      </div>

      {/* PROJECT SECTION */}
      <div className="mb-[32px]">
          <h2 className="text-title-L-brand text-gray-800 mb-[16px]">My Projects</h2>
          <Link href="https://www.google.com" target="_blank">
            <div className="group flex bg-gray-50 px-[20px] py-[16px] ring-[1.5px] ring-gray-200 rounded-xl gap-[20px] hover:ring-blue-200 hover:ring-[3px]">
              <div className="relative w-[128px] h-[144px] rounded-xl overflow-hidden shrink-0 bg-red-400">
                <Image
                  src="/placeholder.png"
                  fill
                  alt="Placeholder image"
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <div>
                <p className="text-title-M-general text-gray-800 mb-[8px] group-hover:text-gray-950">UMass Events Map</p>
                <p className="text-body-M-general text-gray-800 mb-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
              </div>
            </div>
          </Link>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <div className="mb-[32px]">
        <h2 className="text-title-L-brand text-gray-800 mb-[16px]">Work Experience</h2>
        <AccordionCard 
        header={
          <div>
            <div className="flex">
              <p className="w-full text-left text-title-M-general">Software Developer Intern</p>
              <span className="material-symbols-rounded text-gray-700 leading-[16px]" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}>expand_all</span>
            </div>
            <div className="flex gap-[8px] text-label-S-general text-gray-700 pb-[8px]">
              <p>IV&C</p>
              <p>•</p>
              <p>Jun 2025 - Dec 2025</p>
            </div>
            <p className="text-body-S-general text-gray-800 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
          </div>
        } 
        content={
          <div className="pt-[16px] text-body-S-general text-left">
            <ul className="list-disc pl-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
            </ul>
          </div>
        } />
      </div>

      {/* CONTACTS SECTION */}
      <div className="mb-[32px]">
        <h2 className="text-title-L-brand text-gray-800 ">Contacts</h2>
      </div>

    </div>
  );
}
