"use client"

import Container from "@/component/Containers/page";
import { Layers } from "lucide-react";
import ViewBtn from "@/component/Buttons/view";
import { motion } from "motion/react";
import AnimatedList from "@/component/AnimatedList";

interface TechStackProps {
    className?: string;
}

const StackData = {
    Frontend: [
        {  tech:"JavaScript", icon:"/icons/JavaScript.svg" },
        {  tech:"TypeScript", icon:"/icons/TypeScript.png" },
        {  tech:"React", icon:"/icons/React.svg" },
        {  tech:"Next.js", icon:"/icons/next-js.svg" },
    ],

    Backend: [
        {  tech:"Firebase", icon:"/icons/Firebase.svg" },
        {  tech:"MongoDB", icon:"/icons/MongoDB.png" },
    ],

    DevTools: [
        {  tech:"Git", icon:"/icons/Git.png" },
        {  tech:"Github", icon:"/icons/GitHub.svg" },
        {  tech:"VS Code", icon:"/icons/Visual Studio.svg" },
    ]
};

const TechStack: React.FC<TechStackProps> = ({ className }) => {
    return (
        <Container
            title="Tech Stack"
            icon={<Layers className="w-5 h-5"/>}
            action={
                <ViewBtn 
                    className="font-inter"
                    href="/TechStack"
                />
            }
            className={className}
        >
            {Object.entries(StackData).map(([category, items]) => (
                <div key={category}>
                    <h3 className="mb-2 font-semibold font-inter">{category}</h3>
                    <ul className="space-x-3 flex mb-2 flex-wrap">
                        {items.map((item) => (
                            // <motion.li whileHover={{ y:-3 }} key={tech} className="font-mono text-sm px-2 py-1 rounded-sm shadow-md">
                            //     {tech}
                            // </motion.li>
                            <AnimatedList 
                                className="font-mono cursor-default"
                                key={item.tech}
                                text={item.tech}
                                icon={item.icon}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </Container>
    );
};

export default TechStack;