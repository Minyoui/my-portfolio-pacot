"use client"

import React from "react";
import Button from "@/component/Buttons/page";
import Image from "next/image";
import { MapPin, ArrowDownToLine, Mail, BookOpen, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
    className?:string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`w-full flex space-x-3 pt-10 ${className}`}>
            <motion.div 
                className="group/profile relative h-auto w-40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                <Image 
                    src="/profile.png"
                    fill
                    alt="profile picture"
                    className="rounded-2xl group-hover/profile:hidden"
                />
                <Image 
                    src="/hover-profile.png"
                    fill
                    alt="profile picture"
                    className="rounded-2xl hidden group-hover/profile:block group-active/profile:hidden"
                />
                <Image 
                    src="/active-profile.png"
                    fill
                    alt="profile picture"
                    className="rounded-2xl hidden group-active/profile:block"
                />
            </motion.div>
            <div className="flex flex-col pt-5 space-y-5 w-full items-start">
                <div className="grid grid-cols-2 items-center">
                    <div className="flex-col">
                        <h1 className="font-semibold text-3xl">Evane Pacot</h1>
                        <p className="flex text-sm items-center mt-1">
                            <MapPin className="w-5 h-5 mr-1"/> Imus Cavite, Philippines
                        </p>
                    </div>
                    <motion.p 
                        className="py-2 px-4 rounded-4xl text-sm bg-black text-white dark:bg-white dark:text-black text-center"
                        whileHover={{ y:-3 }}
                    >
                        Web Developer / Designer
                    </motion.p>
                </div>

                {/* MENU BUTTONS */}
                <div className="flex items-center space-x-2 w-full">
                    <motion.a
                        className="flex items-center bg-black text-white dark:bg-white dark:text-black p-2 text-sm rounded-lg gap-2 shadow-md"
                        whileHover={{ y:-2 }}
                        href="/Pacot Resume.pdf"
                        download
                    >
                        <ArrowDownToLine className="w-5 h-5" />
                        Download Resume
                    </motion.a>
                    <motion.a
                        className="flex items-center p-2 text-sm rounded-lg gap-2 shadow-md"
                        whileHover={{ y:-2 }}
                        href="mailto:evanepacot2002@gmail.com"
                    >
                        <Mail className="w-5 h-5" />
                        Send Email
                    </motion.a>
                    <motion.a
                        className="flex items-center justify-between p-2 text-sm rounded-lg shadow-md flex-1"
                        whileHover={{ y:-2 }}
                        href=""
                        target="_blank"
                    >
                        <span className="flex gap-2">
                            <BookOpen className="w-5 h-5"/>
                            Visit my blog
                        </span>
                        <ChevronRight className="w-5 h-5"/>
                    </motion.a>
                </div>
            </div>
        </header>
    );
};

export default Header;