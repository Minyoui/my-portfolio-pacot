"use client"

import Container from "@/component/Containers/page";
import { LayoutDashboard, Github, ArrowUpRight } from "lucide-react";
import ViewBtn from "@/component/Buttons/view";
import { motion } from "motion/react";
import Image from "next/image";

interface ProjectProps {
    className?:string;
}

const Projects: React.FC<ProjectProps> = ({ className }) => {
    const ProjectData = [
        {
            id:1,
            title:"Pacot Blogs",
            description:"Personally developed blog website",
            link:"https://pct-blog-orcin.vercel.app",
            github:"https://github.com/Minyoui/pct-blog",
            thumbnail:"/projects/pacot-blog.jpg"
        },
        {
            id:2,
            title:"Maison`D",
            description:"A premium & modern spa website",
            link:"https://maison-spa-project.vercel.app/",
            github:"",
            thumbnail:"/projects/maison-d.jpg"
        },
        {
            id:3,
            title:"Pacot Portfolio",
            description:"A Personally Developed Portfolio",
            link:"https://pacot-portfolio.vercel.app",
            github:"",
            thumbnail:"/projects/pacot-portfolio.jpg"
        },
        {
            id:4,
            title:"MyIDOL",
            description:"Lorem Ipsum dolor sit amet",
            link:"",
            github:"",
            thumbnail:"/projects/pacot-portfolio.jpg"
        },
    ];
    
    return (
        <Container
            title="Recent Projects"
            icon={<LayoutDashboard className="w-5 h-5"/>}
            className={className}
            action={
                <ViewBtn 
                    href="/Projects"
                />
            }
        >
            <div className="flex md:flex-wrap max-md:flex-col font-inter gap-3">
                {ProjectData.map(( project ) => (
                    <motion.div
                        whileHover={{ y:-3 }}  
                        key={project.id} 
                        className="group/project md:min-w-70 md:min-h-35 relative shadow-md flex-1 rounded-lg overflow-hidden"
                    >
                        <div className="
                        group-hover/project:bg-black/50
                        group-hover/project:backdrop-blur-xs
                        transition-all
                        duration-300
                        rounded-lg
                        relative 
                        z-10 
                        h-full
                        dark:bg-black/20 
                        bg-black/10
                        p-4
                        ">
                            <div className="
                            flex 
                            flex-col 
                            h-full 
                            justify-end 
                            translate-y-11
                            group-hover/project:translate-y-0
                            transition-all
                            duration-300
                            ">
                                <p className="text-lg font-semibold text-white drop-shadow-md">{project.title}</p>
                                <p className="text-sm opacity-75 mb-2 text-white drop-shadow-md">{project.description}</p>
                                <div className="transition-all duration-300 flex gap-2 items-center justify-evenly">
                                    <motion.a className="border bg-white/20 hover:bg-black/40 transition-all duration-300 flex-1 py-1 rounded-sm text-center text-xs text-white" 
                                    href={project.github} 
                                    target="_blank">
                                        Github
                                    </motion.a>
                                    <motion.a className="border bg-white/20 hover:bg-black/40 transition-all duration-300 flex-1 py-1 rounded-sm justify-center text-xs flex items-center gap-1 text-white" 
                                    href={project.link} 
                                    target="_blank">
                                        Visit <ArrowUpRight className="h-3 w-3"/>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                        <Image 
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover z-0"
                        />
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default Projects;