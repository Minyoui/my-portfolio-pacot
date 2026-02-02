import React from "react";
import Button from "@/component/Buttons/page";

interface HeaderProps {
    className?:string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${className}`}>
            <Button 
                text="Hello Click Me!"
                whileHover={{ scale:1.2 }}
                whileTap={{scale:1}}
            />
        </header>
    );
};

export default Header;