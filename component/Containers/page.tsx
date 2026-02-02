import React, { ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children: ReactNode;
    title: string;
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
        <div className={`flex flex-col shadow-md overflow-hidden rounded-xl ${className}`}>
            {/* HEADER */}
            <div className="flex justify-between items-center bg-[#EBEBEB] py-2 px-5">
                <div className="flex items-center gap-2">
                    {icon}
                    <h1 className="font-bold font-inter">{title}</h1>
                </div>
                {action && <div>{action}</div>}
            </div>

            {/* BODY */}
            <div className="bg-white p-5">
                {children}
            </div>
        </div>
    );
};

export default Container;