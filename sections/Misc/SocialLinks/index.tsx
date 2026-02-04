import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Github, Link } from "lucide-react";

const SocialMedia = [
    {
        id:1,
        Social:"Instagram",
        Link:"https://www.instagram.com/evn_dc_pct/",
        icon:<Instagram className="w-5 h-5"/>
    },

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

interface SocialProps {
    className?: string;
}

const SocialLink: React.FC<SocialProps> = ({ className }) => {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
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
    );
};

export default SocialLink;