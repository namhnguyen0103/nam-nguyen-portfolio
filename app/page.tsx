import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Image from 'next/image';
import Link from "next/link";
import CopyLinkButton from "./ui/components/copy-link-button";
import PillLink from "./ui/components/pill-link";
import AccordionCard from "./ui/components/accordion-card";
import ProjectCard from "./ui/components/project-card";
import Button from "./ui/components/button";
import ContactForm from "./ui/components/contact-form";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="w-full max-w-126 mx-auto pt-30 gap-0 mb-8">
      {/* HEADER SECTION */}
      <div>
        <p className="text-title-M-brand">
          <span className="text-blue-500">SOFTWARE ENGINEER</span> + <span className="text-orange-500">UI/UX DESIGN</span>
        </p>
        <h1 className={`text-display-S-brand`}>Nam Hoang Nguyen</h1>
        <p className="text-gray-800 text-body-L-general mt-3">Welcome to my home on the internet! I’m a software developer that is passionate about exploring both the technical and creative sides of programming. </p>
        <div className="gap-1 mt-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-gray-500 leading-4" style={{ fontSize: '16px', fontVariationSettings: "'opsz' 20" }}>school</span>
            <p className="text-body-S-general text-gray-700">UMass Amherst (B.S & M.S Computer Science)</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-gray-500 leading-4" style={{ fontSize: '16px', fontVariationSettings: "'opsz' 20" }}>location_on</span>
            <p className="text-body-S-general text-gray-700">Amherst, MA</p>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
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
      <div className="mt-8">
          <h2 className="text-title-L-brand">My Projects</h2>
          <div className="flex flex-col mt-4 gap-2">
            {projects.map((proj) => <ProjectCard key={proj.name} name={proj.name} description={proj.description} img={proj.img} tags={proj.tags}/>)}
          </div>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <div className="mt-8">
        <h2 className="text-title-L-brand">Work Experience</h2>
        <div className="flex flex-col mt-4 gap-2">
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
              <ul className="list-disc pl-6">
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
              <ul className="list-disc pl-6">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
              </ul>
            </div>
          } />
        </div>
      </div>

      {/* CONTACTS SECTION */}
      <div className="mt-8">
        <h2 className="text-title-L-brand">Contacts</h2>
        <div className="flex gap-3 items-end mt-4">
          <div className="relative w-24 h-30 rounded-xl overflow-hidden">
            <Image src="/Nam_Nguyen_Headshot.jpg" fill alt="Headshot" className="object-cover"/>
          </div>
          <div>
            <p className="text-body-M-general text-gray-800 mb-3">Reach out for anything!</p>
            <Link href={"https://www.google.com"}>
              <div className="flex gap-2 items-center">
                <span className="material-symbols-rounded text-gray-700" style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>mail</span>
                <p className="text-body-S-general text-gray-800">namhnguyen0103@gmail.com</p>
              </div>
            </Link>
            <Link href={"https://www.google.com"}>
              <div className="flex gap-2 items-center">
                <IoLogoLinkedin className="text-gray-700 text-[12px]"/>
                <p className="text-body-S-general text-gray-800">namnguye</p>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="px-5 py-4 mt-4 rounded-xl bg-gray-20 ring-[1px] ring-gray-50">
          <div className="flex w-full gap-3">
            <div className="w-full">
              <p className="text-label-S-general text-gray-700">Name</p>
              <input type="text" placeholder="Your name" className="w-full ring-[1px] ring-gray-200 rounded text-label-S-general text-gray-950 placeholder-gray-400 px-2 py-1 focus:ring-blue-500 focus:outline-none"/>
            </div>
            <div className="w-full">
              <p className="text-label-S-general text-gray-700">Email</p>
              <input type="text" placeholder="Your email" className="w-full ring-[1px] ring-gray-200 rounded text-label-S-general text-gray-950 placeholder-gray-400 px-2 py-1 focus:ring-blue-500 focus:outline-none"/>
            </div>
          </div>
          <div className="w-full pt-2">
            <p className="text-label-S-general text-gray-700">Subject</p>
            <input type="text" placeholder="Subject" className="w-full ring-[1px] ring-gray-200 rounded text-label-S-general text-gray-950 placeholder-gray-400 px-2 py-1 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <div className="w-full pt-2">
            <p className="text-label-S-general text-gray-700">Message</p>
            <textarea placeholder="Your message" className="w-full min-h-30 ring-[1px] ring-gray-200 rounded text-label-S-general text-gray-950 placeholder-gray-400 px-2 py-1 focus:ring-blue-500 focus:outline-none"/>
          </div>
          <div className="flex justify-end">
            <Button variant="primary-blue" size="small">
              Send Message
            </Button>
          </div>
        </div> */}
        <ContactForm />
      </div>
      

    </div>
  );
}
