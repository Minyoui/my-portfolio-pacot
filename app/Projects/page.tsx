import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { AnimatedThemeToggler } from "@/component/ThemeToggler/page";
import Container from "@/component/Containers/page";
import LogoLoop from "@/component/LogoLoop";
import { Facebook, Instagram, Youtube } from "lucide-react";


const ProjectData = [
        {
            id:1,
            title:"Pacot Blogs",
            description:"Personally developed blog website",
            link:"https://pct-blog-orcin.vercel.app",
            url:"pct-blog-orcin.vercel.app",
            tags: [
                { node: <Facebook />, title:"React", href:""},
                { node: <Instagram />, title:"React", href:""},
                { node: <Youtube />, title:"React", href:""},
            ]

        },
        {
            id:2,
            title:"Maison`D",
            description:"Lorem Ipsum dolor sit",
            link:"https://maison-spa-project.vercel.app/",
            url:"maison-spa-project.vercel.app",
            tags: [
                { node: <Facebook />, title:"React", href:""},
                { node: <Instagram />, title:"React", href:""},
                { node: <Youtube />, title:"React", href:""},
            ]
        },
        {
            id:3,
            title:"MyBINI",
            description:"Lorem Ipsum dolor sit amet",
            link:"",
            url:"",
            tags: [
                { node: <Facebook />, title:"React", href:""},
                { node: <Instagram />, title:"React", href:""},
                { node: <Youtube />, title:"React", href:""},
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
            <div className="flex flex-col space-y-5">
                {ProjectData.map(( project ) => (
                    <Container 
                        key={project.id}
                        className=""
                    >
                        <h1 className="text-2xl font-bold">{project.title}</h1>
                        <p className="text-sm">{project.description}</p>
                        <div 
                            className="relative overflow-hidden h-auto rounded-2xl">
                            <LogoLoop
                                logos={project.tags}
                                speed={100}
                                direction="left"
                                logoHeight={60}
                                gap={60}
                                hoverSpeed={0}
                                scaleOnHover
                                fadeOut
                                fadeOutColor={""}
                                ariaLabel="Technology partners"
                            />
                        </div>
                    </Container>
                ))}
            </div>
        </main>
    );
};

export default Projects;