"use client"

import Link from "next/link";
import { MoveLeft, Github, ArrowUpRight } from "lucide-react";
import { AnimatedThemeToggler } from "@/component/ThemeToggler/page";
import Container from "@/component/Containers/page";
import LogoLoop from "@/component/LogoLoop";
import Footer from "@/component/Footer";
import Image from "next/image";
import { motion } from "motion/react";


const ProjectData = [
        {
            id:1,
            title:"Pacot Portfolio",
            description:"A personally developed professional portfolio. Design was inspired by Sir Bryl Lim's portfolio. Development was done using Visual Studio Code.",
            link:"https://pacot-portfolio.vercel.app/",
            banner:"/projects/pacot-portfolio.jpg",
            url:"pacot-portfolio.vercel.app",
            github: "",
            tags: [
                { node: <Image src="/icons/next-js.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Tailwind CSS.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/TypeScript.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Html 5.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Figma.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/motion.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Github />, title:"React", href:""},
            ]
        },
        {
            id:2,
            title:"Pacot Blog",
            description:"A personally developed blog website using Next.js",
            link:"https://pct-blog-orcin.vercel.app",
            banner:"/projects/pacot-blog.jpg",
            url:"pct-blog-orcin.vercel.app",
            github: "https://github.com/Minyoui/pct-blog",
            tags: [
                { node: <Image src="/icons/next-js.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Tailwind CSS.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/TypeScript.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Html 5.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Figma.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/motion.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Github />, title:"React", href:""},
            ]

        },
        {
            id:3,
            title:"Maison`D",
            description:"A modern, luxury spa website typically developed and designed for a local spa business. It offers seamless booking process for users who are looking for a serene experience.",
            link:"https://maison-spa-project.vercel.app",
            banner:"/projects/maison-d.jpg",
            url:"maison-spa-project.vercel.app",
            github: "",
            tags: [
                { node: <Image src="/icons/next-js.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Tailwind CSS.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/TypeScript.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Html 5.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/Figma.svg" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/motion.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Image src="/icons/MongoDB.png" width="30" height="30" alt="nextjs"/>, title:"React", href:""},
                { node: <Github />, title:"React", href:""},
            ]

        },
        {
            id:4,
            title:"ParSafe: A Smart Parcel Receiver",
            description:"A modern smart parcel receiver that accepts inbound parcels from different couriers. This device was built and developed for research and consists of three members. I, Evane Pacot was assigned to design and construct the entire chassis and framework of the device. The material of the shell consists of wood and plastic. The design was done using a software application (SketchUp) in order to produce a 3D model.",
            link:"",
            banner:"",
            url:"Hardware",
            github: "",
            tags: [
                
            ]
        },
    ];

const Projects = () => {
    return (
        <main className="mx-auto max-w-5xl px-15 pt-10 font-inter mb-20">
            <AnimatedThemeToggler className="fixed right-20 top-1/2 z-50 max-xl:right-5 transition-all duration-300"/>
            <header className="flex w-full items-center">
                <Link href="/" className="cursor-pointer flex items-center">
                    <MoveLeft className="w-5 h-5 mr-2" />
                    Go Back
                </Link>
                <h1 className="ml-5 text-3xl font-bold">Projects</h1>
            </header>
            <div className="flex flex-col space-y-5 mt-10">
                {ProjectData.map(( project ) => (
                    <Container 
                        key={project.id}
                        className="group"
                    >
                        <div className="flex flex-col space-y-4">
                            <div className="relative w-full min-h-80">
                                <Image 
                                    src={project.banner}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
                                <div className="flex items-center gap-2">
                                    <motion.a 
                                        href={project.github} 
                                        target="_blank" 
                                        className="shadow-md p-2 rounded-lg"
                                        whileHover={{ scale:1.1 }}
                                    >
                                        <Github />
                                    </motion.a>
                                    <motion.a 
                                        href={project.link} 
                                        target="_blank" 
                                        className="shadow-md p-2 rounded-lg"
                                        whileHover={{ scale:1.1 }}
                                    >
                                        <ArrowUpRight />
                                    </motion.a>
                                </div>
                            </div>
                            <div className="dark:bg-black bg-gray-200 w-fit p-2 rounded-sm">
                                <p className="font-mono text-xs">{project.url}</p>
                            </div>
                            <p className="text-sm">{project.description}</p>
                            <div 
                                className="mt-3 transition-all duration-300 relative overflow-hidden h-0 group-hover:h-20 rounded-2xl">
                                <LogoLoop
                                    logos={project.tags}
                                    speed={100}
                                    direction="left"
                                    logoHeight={60}
                                    gap={60}
                                    hoverSpeed={0}
                                    scaleOnHover
                                    fadeOutColor={""}
                                    ariaLabel="Technology partners"
                                />
                            </div>
                        </div>
                    </Container>
                ))}
            </div>
            <Footer className="mt-20"/>
        </main>
    );
};

export default Projects;