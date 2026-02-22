import Container from "@/component/Containers/page";
import { Lightbulb } from "lucide-react";

interface BeyondProps {
    className?:string;
}

const Beyond: React.FC<BeyondProps> = ({ className }) => {
    return (
        <Container
            title="Beyond Coding"
            icon={<Lightbulb className="w-5 h-5"/>}
            className={className}
        >
            <p className="text-sm font-inter text-justify hyphens-auto">I spend my time exploring new hobbies and activities that will improve my character and well-being. I like to play games and create contents through social media.</p>
        </Container>
    );
};

export default Beyond;