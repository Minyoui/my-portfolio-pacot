"use client"

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { AnimatedThemeToggler } from "@/component/ThemeToggler/page";
import { motion } from "motion/react";

const StackData = {
    Frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "SCSS",
        "CSS3",
        "HTML5",
        "Vite",
        "Motion"
    ],

    Backend: [
        "Firebase",
        "MongoDB",
        "Node.js"
    ],

    Developer_Tools: [
        "Git",
        "Github",
        "VS Code",
        "Discord"
    ],

    Multimedia: [
        "Adobe Photoshop",
        "Adobe Premier Pro",
        "CapCut",
        "Figma",
        "Canva",
    ]
};

const TechStack = () => {
    return (
        <main className="mx-auto max-w-5xl px-15 pt-10 font-inter mb-20">
            <AnimatedThemeToggler className="fixed right-20 top-1/2 z-50 max-xl:right-5 transition-all duration-300"/>
            <header className="flex w-full items-center">
                <Link href="/" className="cursor-pointer flex items-center">
                    <MoveLeft className="w-5 h-5 mr-2" />
                    Go Back
                </Link>
                <h1 className="ml-5 text-3xl font-bold">Tech Stack</h1>
            </header>
            {Object.entries(StackData).map(([category, items]) => (
                <div className="mb-3 p-5" key={category}>
                    <h2 className="text-2xl font-semibold mb-2">
                        {category}
                    </h2>
                    <ul className="flex flex-wrap gap-3 font-mono">
                        {items.map((tech) => (
                            <motion.li 
                                className="px-3 py-2 border-2 rounded-md text-sm" 
                                key={tech}
                                whileHover={{ y:-3 }}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
            <footer className="pt-10 border-t">
                <p className="text-center font-inter text-sm">All rights reserved © Evane Pacot 2026</p>
            </footer>
        </main>
    );
};

export default TechStack;