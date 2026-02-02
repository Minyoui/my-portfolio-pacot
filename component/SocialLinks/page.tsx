"use client"

import { motion } from "motion/react"
import { Instagram, Facebook, Linkedin, Github } from "lucide-react";

const SocialLinks = [
    {
        id:1,
        icon: <Instagram />,
        link:"https://www.instagram.com/evn_dc_pct/"
    },
    {
        id:2,
        icon: <Facebook />,
        link:"https://www.facebook.com/evane.pacot/"
    },
    {
        id:3,
        icon: <Linkedin />,
        link:"https://www.linkedin.com/in/evane-pacot-260b85341"
    },
    {
        id:4,
        icon: <Github />,
        link:"https://github.com/Minyoui"
    },
];

const FixedLinks = () => {
    return (
        <aside
            className="fixed flex flex-col left-20 top-1/2 space-y-3"
        >
            {SocialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    className="cursor-pointer"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    href={social.link}
                >
                    {social.icon}
                </motion.a>
            ))}
        </aside>
    );
};

export default FixedLinks;