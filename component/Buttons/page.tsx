import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement> {
        text: string;
        className?: string;
    }

const Button: React.FC<ButtonProps> = ({
    text,
    className,
    onClick
}) => {
    return (
        <button
            className={`cursor-pointer ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
        