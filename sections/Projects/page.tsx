"use client"

import Container from "@/component/Containers/page";
import { LayoutDashboard } from "lucide-react";
import ViewBtn from "@/component/Buttons/view";
import { motion } from "motion/react";

interface ProjectProps {
    className?:string;
}

const Projects: React.FC<ProjectProps> = ({ className }) => {
    const ProjectData = [
        {
            id:1,
            title:"Personal Portfolio",
            description:"Lorem Ipsum dolor sit amet",
            link:"https://pct-portfolio.vercel.app",
            tag:"pct-portfolio.vercel.app"
        },
        {
            id:2,
            title:"Maison`D",
            description:"Lorem Ipsum dolor sit",
            link:"https://maison-spa-project.vercel.app/",
            tag:"maison-spa-project.vercel.app"
        },
        {
            id:3,
            title:"MyBINI",
            description:"Lorem Ipsum dolor sit amet",
            link:"",
            tag:""
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
            <div className="flex flex-wrap font-inter gap-3">
                {ProjectData.map(( project ) => (
                    <motion.a
                        whileHover={{ y:-3 }} 
                        href={project.link} 
                        target="_blank" 
                        key={project.id} 
                        className="shadow-md p-4 rounded-lg flex-1"
                    >
                        <p className="font-semibold">{project.title}</p>
                        <p className="text-sm opacity-75 truncate max-w-45 mb-2">{project.description}</p>
                        <p className="bg-[#ebebeb] dark:bg-black text-xs font-mono px-2 py-1 rounded-md">{project.tag}</p>
                    </motion.a>
                ))}
            </div>
        </Container>
    );
};

export default Projects;