"use client"

import Container from "@/component/Containers/page";
import { motion } from "motion/react";

import SocialLink from "./SocialLinks";
import Contact from "./Contact";
import { Trophy } from "lucide-react";

interface MiscProps {
    className?: string;
}

const Misc: React.FC<MiscProps> = ({ className }) => {
    return (
        <Container
            className={className}
        >
            <div className="flex md:flex-row flex-col gap-3 font-inter">
                <div className="shadow-md flex-2">
                    <div className="flex gap-1 items-center mb-2">
                        <Trophy className="h-4.5 w-4.5"/>
                        <h3 className="font-semibold">Personal Goal</h3>
                    </div>
                    <p className="text-sm">Hello World</p>
                </div>
                <SocialLink className="flex-1"/>
                <Contact 
                    className="flex-1"
                    email="evanepacot2002@gmail.com"
                />
            </div>
        </Container>
    );
};

export default Misc;