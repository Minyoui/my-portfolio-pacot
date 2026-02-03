"use client"

import Container from "@/component/Containers/page";
import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Github, Link } from "lucide-react";

interface MiscProps {
    className?: string;
}

const SocialMedia = [
    {
        id:1,
        Social:"Instagram",
        Link:"https://www.instagram.com/evn_dc_pct/",
        icon:<Instagram className="w-5 h-5"/>
    },

    // {
    //     id:2,
    //     Social:"Facebook",
    //     Link:"https://www.facebook.com/evane.pacot/",
    //     icon:<Facebook className="w-5 h-5"/>
    // },

    {
        id:3,
        Social:"LinkedIn",
        Link:"https://www.linkedin.com/in/evane-pacot-260b85341",
        icon:<Linkedin className="w-5 h-5"/>
    },

    {
        id:4,
        Social:"Github",
        Link:"https://github.com/Minyoui",
        icon:<Github className="w-5 h-5"/>
    }
]

const Misc: React.FC<MiscProps> = ({ className }) => {
    return (
        <Container
            className={className}
        >
            <div className="flex gap-3 font-inter">
                <div className="shadow-md flex-2">
                    
                </div>

                <div className="flex-1 flex flex-col gap-3">
                    <p className="font-semibold flex items-center gap-1">
                        <span><Link className="w-4 h-4"/></span>
                        Social Links
                    </p>
                    {SocialMedia.map((item) => (
                        <motion.a
                            key={item.id}
                            href={item.Link}
                            target="_blank"
                            whileHover={{ y:-3 }}
                            className="shadow-md p-2 text-sm rounded-md flex gap-3"
                        >
                            {item.icon}
                            {item.Social}
                        </motion.a>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Misc;