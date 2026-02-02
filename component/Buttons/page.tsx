"use client"

import React, { ButtonHTMLAttributes } from "react";
import { motion, MotionProps } from "motion/react";

interface ButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement> {
        text: string;
        className?: string;
        whileHover?: MotionProps["whileHover"];
        whileTap?: MotionProps["whileTap"];
        whileInView?: MotionProps["whileInView"];
        initial?: MotionProps["initial"];
        animate?: MotionProps["animate"];
        transition?: MotionProps["transition"];
    }

const Button: React.FC<ButtonProps> = ({
    text,
    className,
    onClick,
    whileHover,
    whileTap,
    whileInView,
    initial,
    animate,
    transition
}) => {
    return (
        <motion.button
            className={`cursor-pointer ${className}`}
            onClick={onClick}
            whileHover={whileHover}
            whileTap={whileTap}
            whileInView={whileInView}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {text}
        </motion.button>
    );
};

export default Button;
        