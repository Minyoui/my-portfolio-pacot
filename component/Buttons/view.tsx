import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface ViewProps {
    className?: string;
    href:string;
}

const ViewBtn: React.FC<ViewProps> = ({ className, href }) => {
    return (
        <Link
            href={href}
            className={`text-sm flex cursor-pointer ${className}`}
        >
            View All
            <ChevronRight className="w-5 h-5"/>
        </Link>
    );
};

export default ViewBtn;

