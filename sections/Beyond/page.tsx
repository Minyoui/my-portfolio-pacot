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
            <p className="font-inter">Lorem ipsum dolor sit amet consecterur</p>
        </Container>
    );
};

export default Beyond;