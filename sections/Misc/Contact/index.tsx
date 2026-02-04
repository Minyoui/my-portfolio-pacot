import { motion } from "motion/react";
import { Mail } from "lucide-react";
import Image from "next/image";

interface ContactProps {
    className?: string;
    email: string;
}

const Contact: React.FC<ContactProps> = ({
    className,
    email,
}) => {
    // const copyNumber = async () => {
    //     await navigator.clipboard.writeText(`${contact}`);
    //     alert("Contact number copied!");
    // };

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <motion.a 
                className="flex flex-col gap-2 shadow-md p-2 text-sm" 
                href={`mailto:${email}`}
                whileHover={{ y:-3 }}
            >
                <div className="flex gap-1 items-center">
                    <Mail className="h-5 w-5"/>
                    Email
                </div>
                <span className="text-xs">{email}</span>
            </motion.a>
            <motion.a 
                className="flex flex-col gap-2 shadow-md p-2 text-sm" 
                href="https://www.facebook.com/messages/t/10003781126320191"
                target="_blank"
                whileHover={{ y:-3 }}
            >
                <div className="flex gap-1 items-center">
                    <div className="relative w-5 h-5">
                        <Image 
                            src="/icons/Facebook Messenger.png"
                            alt="Facebook Messenger"
                            fill
                            className="inset-0 dark:invert-0 invert-100"
                        />
                    </div>
                    Messenger
                </div>
                <span className="text-xs">Chat with Me</span>
            </motion.a>
        </div>
    );
};

export default Contact;
