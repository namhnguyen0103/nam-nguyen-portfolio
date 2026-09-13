import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
    name: string,
    description: string,
    img: string,
    tags: string[],
    link?: string
}

function Tag({ text }: { text: string }) {
    return (
        <div className="text-label-S-general px-[8px] py-[2px] bg-gray-100 rounded-sm">
            <p>{text}</p>
        </div>
    );
}

export default function ProjectCard({ name, description, img, tags, link="https://www.google.com" } : ProjectCardProps) {
    return (
        <Link href={link} target="_blank">
            <div className="group flex bg-white px-[20px] py-[16px] ring-[1.5px] ring-gray-200 rounded-xl gap-[20px] hover:ring-blue-300 hover:ring-[3px]">
                <div className="relative w-[128px] h-[144px] rounded-xl overflow-hidden shrink-0 bg-red-400">
                    <Image
                        src={img}
                        fill
                        alt="Placeholder image"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-title-M-general text-gray-800 mb-[8px] group-hover:text-gray-950">{name}</p>
                    <p className="text-body-M-general text-gray-800 mb-[8px]">{description}</p>
                    <div className="flex gap-[8px] mt-auto">
                        {tags.map((tag) => <Tag key={tag} text={tag}/>)}
                    </div>  
                </div>
            </div>
        </Link>
    );
}