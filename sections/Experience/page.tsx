import Container from "@/component/Containers/page";
import React, { ReactNode } from "react";
import { BriefcaseBusiness } from "lucide-react";

interface ExperienceProps {
    className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
    return (
        <Container
            title="Experience"
            icon={<BriefcaseBusiness className="w-5 h-5"/>}
            className={className}
        >
            <h1>Hello World</h1>
        </Container>
    );
};

export default Experience;