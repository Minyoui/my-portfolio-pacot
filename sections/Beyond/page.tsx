import Container from "@/component/Containers/page";
import { Lightbulb } from "lucide-react";

interface BeyondProps {
    className?:string;
}

const softSkills = [
    "Video Editing",
    "Drone Pilot",
    "Computer Assembly",
    "Soldering",
    "Portrait Drawing",
    "Content Creation",
    "Video Gaming",
    "Crafting",
    "Workout",
]

const Beyond: React.FC<BeyondProps> = ({ className }) => {
    return (
        <Container
            title="Beyond Coding"
            icon={<Lightbulb className="w-5 h-5"/>}
            className={className}
        >
            <div className="flex flex-col">
                <p className="text-sm font-inter text-justify hyphens-auto">I spend my time exploring new hobbies and activities that will improve my character and well-being. I like to play games and create contents through social media.</p>
                <div className="flex-wrap flex gap-2 mt-5 justify-center">
                    {softSkills.map((skill) => (
                        <p className="hover:-translate-y-1 hover:shadow-md transition-all duration-300 font-inter text-xs p-2 border rounded-md" key={skill}>
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Beyond;