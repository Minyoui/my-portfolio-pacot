import Container from "@/component/Containers/page";
import { Layers } from "lucide-react";
import ViewBtn from "@/component/Buttons/view";
import { motion } from "motion/react";

interface TechStackProps {
    className?: string;
}

const StackData = {
    Frontend: [
        "React",
        "Next",
        "HTML5",
        "SCSS",
        "Tailwind"
    ],

    Backend: [
        "Firebase",
        "MongoDB",
        "Node.js"
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
                    <ul className="space-x-3 flex mb-2">
                        {items.map((tech) => (
                            <li key={tech} className="font-mono text-sm px-2 py-1 rounded-sm shadow-md">
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