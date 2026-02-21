import Container from "@/component/Containers/page";
import { Info } from "lucide-react";

interface AboutProps {
    className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <Container
            title="About"
            icon={<Info className="w-5 h-5"/>}
            className={className}
        >
            <p className="text-xs font-inter text-justify">
                Hello! My name is Evane Dela Cruz Pacot, and I have a keen eye for creativity and design. I am deeply passionate about continuous learning to further hone my skills and grow as a professional with strong values and a solid work ethic. I’m always eager to take on new challenges, with the goal of contributing meaningfully to projects that blend innovation, aesthetics, and functionality. I thrive in collaborative environments where I can share ideas, learn from others, and continue developing both personally and professionally.
            </p>
        </Container>
    );
};

export default About;