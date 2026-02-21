"use client"

import Container from "@/component/Containers/page";
import { LayoutDashboard } from "lucide-react";
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
            tag:"pct-blog-orcin.vercel.app",
            thumbnail:"/projects/pacot-blog.jpg"
        },
        {
            id:2,
            title:"Maison`D",
            description:"Lorem Ipsum dolor sit",
            link:"https://maison-spa-project.vercel.app/",
            tag:"maison-spa-project.vercel.app",
            thumbnail:""
        },
        {
            id:3,
            title:"MyBINI",
            description:"Lorem Ipsum dolor sit amet",
            link:"",
            tag:"",
            thumbnail:""
        },
        {
            id:4,
            title:"MyBINI",
            description:"Lorem Ipsum dolor sit amet",
            link:"",
            tag:"",
            thumbnail:""
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
                    <motion.div
                        whileHover={{ y:-3 }}  
                        key={project.id} 
                        className="min-w-70 min-h-35 relative shadow-md flex-1 p-4 rounded-lg overflow-hidden"
                    >
                        <p className="font-semibold">{project.title}</p>
                        <p className="text-sm opacity-75 truncate max-w-45 mb-2">{project.description}</p>
                        <p className="bg-[#ebebeb] dark:bg-black text-xs font-mono px-2 py-1 rounded-md">{project.tag}</p>
                        <Image 
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export default Projects;