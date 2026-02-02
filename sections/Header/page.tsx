"use client"

import React from "react";
import Button from "@/component/Buttons/page";
import Image from "next/image";
import { MapPin, ArrowDownToLine, Mail } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
    className?:string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`w-full flex space-x-3 pt-10 ${className}`}>
            <motion.div className="relative h-35 w-35">
                <Image 
                    src="/profile.png"
                    fill
                    alt="profile picture"
                    className="rounded-2xl"
                />
            </motion.div>
            <div className="flex-col pt-5 space-y-5">
                <div className="grid grid-cols-2 items-center">
                    <div className="flex-col">
                        <h1 className="font-semibold text-3xl">Evane Pacot</h1>
                        <p className="flex text-sm items-center mt-1">
                            <MapPin className="w-5 h-5 mr-1"/> Imus Cavite, Philippines
                        </p>
                    </div>
                    <motion.p 
                        className="py-2 px-4 rounded-4xl text-sm bg-black text-white"
                        whileHover={{ y:-3 }}
                    >
                        Web Developer / Designer
                    </motion.p>
                </div>

                {/* MENU BUTTONS */}
                <div className="flex items-center space-x-2">
                    <Button
                        text="Download Resume"
                        className="flex items-center bg-black text-white p-2 text-sm rounded-xl gap-2 shadow-md"
                        whileHover={{ y:-2 }}
                    >
                        <ArrowDownToLine className="w-5 h-5" />
                    </Button>
                    <Button
                        text="Send Email"
                        className="flex items-center text-black p-2 text-sm rounded-xl gap-2 shadow-md"
                        whileHover={{ y:-2 }}
                    >
                        <Mail className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;