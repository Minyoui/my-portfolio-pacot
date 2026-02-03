import React, { ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children: ReactNode;
    title?: string;
    icon?: ReactNode;
    action?: ReactNode;
}

const Container: React.FC<ContainerProps> = 
    ({
        className,
       children,
       title,
       icon, 
       action
    }) => {
    return (
        <div className={`group/container flex flex-col shadow-md overflow-hidden rounded-xl dark:bg-[#171717] ${className}`}>
            {/* HEADER */}
            <div className="flex justify-between items-center group-hover/container:bg-[#EBEBEB] dark:group-hover/container:bg-white/5 py-2 px-5 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    {icon}
                    <h1 className="font-bold font-inter">{title}</h1>
                </div>
                {action && <div>{action}</div>}
            </div>

            {/* BODY */}
            <div className="p-5">
                {children}
            </div>
        </div>
    );
};

export default Container;