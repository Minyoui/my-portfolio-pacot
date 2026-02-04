import { motion } from "motion/react";
import Image from "next/image";

interface AnimatedListProps {
  className?: string;
  text: string;
  icon: string;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  className,
  text,
  icon,
}) => {
  return (
    <motion.li
      className={`group/list relative px-4 py-2 shadow-md rounded-md text-sm ${className}`}
      whileHover={{ y: -2 }}
    >
      {/* TEXT (not clipped) */}
      <span className="relative z-10 block transition-all duration-300 group-hover/list:pl-4">
        {text}
      </span>

      {/* ICON CLIP CONTAINER */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
        <div
          className="
            absolute
            top-20
            -left-10
            h-5
            w-5
            rotate-90
            scale-0
            group-hover/list:top-1/4
            group-hover/list:left-1.5
            group-hover/list:rotate-0
            group-hover/list:scale-100
            transition-all
            duration-350
          "
        >
          <Image
            src={icon}
            alt={text}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </motion.li>
  );
};

export default AnimatedList;
