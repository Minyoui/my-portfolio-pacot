import Container from "@/component/Containers/page";
import React from "react";
import { Layers, ChevronRight } from "lucide-react";
import Button from "@/component/Buttons/page";
import Link from "next/link";

interface TechStackProps {
    className?: string;
}

const StackData = {
    Frontend: [
        "HTML5",
        "Tailwind"
    ],

    Backend: [
        "Firebase",
        "MongoDB"
    ],

    DevTools: [
        "Git",
        "Github",
        "VS Code"
    ]
};

const TechStack: React.FC<TechStackProps> = ({ className }) => {
    return (
        <Container
            title="Tech Stack"
            icon={<Layers className="w-5 h-5"/>}
            action={
                <Link 
                    className="font-inter text-sm flex cursor-pointer"
                    href=""
                    target="_blank"
                >
                    View All <ChevronRight className="w-5 h-5"/>
                </Link>
            }
            className={className}
        >
            {Object.entries(StackData).map(([category, items]) => (
                <div key={category}>
                    <h3 className="mb-2 font-semibold font-inter">{category}</h3>
                    <ul className="space-x-3 flex">
                        {items.map((tech) => (
                            <li key={tech} className="font-mono text-sm">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Container>
    );
};

export default TechStack;