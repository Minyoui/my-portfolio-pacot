import Container from "@/component/Containers/page";
import { BriefcaseBusiness } from "lucide-react";

interface ExperienceProps {
    className?: string;
}

const ExperienceData = [
    {
        id:1,
        role:"Frontend Developer",
        description:"Freelance",
        year:2025,
        present:true
    },

    {
        id:2,
        role:"Web Developer",
        description:"Internship (Blissful Bali Spa)",
        year:2025,
        present:false
    },

    {
        id:3,
        role:"Hello World!",
        description:"Wrote my first line of code",
        year:2018,
        present:false
    },
];

const Experience: React.FC<ExperienceProps> = ({ className }) => {
    return (
        <Container
            title="Experience"
            icon={<BriefcaseBusiness className="w-5 h-5"/>}
            className={className}
        >
            <ul className="relative flex flex-col font-inter">
                {ExperienceData.map(( exp ) => (
                    <li 
                        key={exp.id}
                        className="group/exp mb-2 relative pl-5"
                    >
                        <div 
                            className={`
                                z-50 
                                w-2.5 
                                h-2.5 
                                border-2 
                                border-black/25 
                                absolute 
                                left-0 
                                top-1/4 
                                rounded-[100%] 
                                ${exp.present? "bg-black" : "bg-white"}
                                group-hover/exp:bg-black
                                transition-colors
                                duration-200
                            `}
                        />
                        <div className="flex flex-col space-y-1">
                            <p className="font-semibold">{exp.role}</p>
                            <p className="text-xs flex justify-between">
                                {exp.description}
                                <span className="font-mono shadow-sm rounded-2xl px-2">
                                    {exp.year}
                                </span>
                            </p>
                        </div>
                    </li>
                ))}
                <div className="absolute h-full border border-black/25 left-1 bottom-2 top-3 w-px"/>
            </ul>
        </Container>
    );
};

export default Experience;