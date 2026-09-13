import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Image from 'next/image';
import Link from "next/link";
import CopyLinkButton from "./ui/home/copy-link-button";
import PillLink from "./ui/home/pill-link";
import AccordionCard from "./ui/home/accordion-card";
import ProjectCard from "./ui/home/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="w-full max-w-[504px] mx-auto pt-[120px] gap-0">
      {/* HEADER SECTION */}
      <div className="mb-[32px]">
        <p className="text-orange-500 text-title-M-brand">SOFTWARE DEVELOPER</p>
        <h1 className={`text-display-S-brand mb-[12px]`}>Nam Hoang Nguyen</h1>
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
          <h2 className="text-title-L-brand text-blue-500 mb-[16px]">My Projects</h2>
          <div className="flex flex-col gap-[8px]">
            {projects.map((proj) => <ProjectCard key={proj.name} name={proj.name} description={proj.description} img={proj.img} tags={proj.tags}/>)}
          </div>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <div className="mb-[32px]">
        <h2 className="text-title-L-brand text-blue-500 mb-[16px]">Work Experience</h2>
        <div className="flex flex-col gap-[8px]">
          <AccordionCard 
          header={
            <div>
              <p className="w-full text-left text-title-M-general">Software Developer Intern</p>
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
          <AccordionCard 
          header={
            <div>
              <p className="w-full text-left text-title-M-general">Software Developer Intern</p>
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
      </div>

      {/* CONTACTS SECTION */}
      <div className="mb-[32px]">
        <h2 className="text-title-L-brand text-blue-500 mb-[16px]">Contacts</h2>
        <div className="flex gap-[12px] items-end mb-[16px]">
          <div className="relative w-[96px] h-[120px] rounded-t-full overflow-hidden">
            <Image src="/Nam_Nguyen_Headshot.jpg" fill alt="Headshot" className="object-cover"/>
          </div>
          <div>
            <p className="text-body-M-general text-gray-800 mb-[12px]">Reach out for anything!</p>
            <Link href={"https://www.google.com"}>
              <div className="flex gap-[8px] items-center">
                <span className="material-symbols-rounded text-gray-700" style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>mail</span>
                <p className="text-body-S-general text-gray-800">namhnguyen0103@gmail.com</p>
              </div>
            </Link>
            <Link href={"https://www.google.com"}>
              <div className="flex gap-[8px] items-center">
                <IoLogoLinkedin className="text-gray-700 text-[12px]"/>
                <p className="text-body-S-general text-gray-800">namnguye</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="px-[20px] py-[16px] rounded-xl bg-gray-50">
          <p className="text-label-S-general text-gray-700">Name</p>
          <input type="text" placeholder="Your name" className="ring-[1px] ring-inset ring-gray-200 rounded text-label-S-general text-gray-950 placeholder-gray-400 px-[8px] py-[4px] focus:ring-blue-300 focus:outline-none"/>
        </div>
      </div>

    </div>
  );
}
