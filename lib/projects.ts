export type Project = {
    name: string,
    description: string,
    tags: string[],
    img: string,
    link?: string
};

export const projects: Project[] = [
    {
        name: "UMass Events Map",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
        tags: ["React Native", "Supabase"],
        img: "/placeholder.png"
    },
    {
        name: "Synapse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
        tags: ["React", "Supabase"],
        img: "/placeholder.png"
    }
];