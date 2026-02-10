"use client";

import Container from "@/component/Containers/page";
import { Image, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "motion/react";

const Images = [
  "/gallery/photo-1.jfif",
  "/gallery/photo-2.jfif",
  "/gallery/photo-3.jfif",
  "/gallery/photo-4.jfif",
  "/gallery/photo-5.jfif",
  "/gallery/photo-6.jfif",
  "/gallery/photo-7.jfif",
  "/gallery/photo-8.jfif",
  "/gallery/photo-9.jfif",
  "/gallery/photo-10.jpg",
  "/gallery/photo-11.png",
];

const Gallery = ({ className }: { className?: string }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const scrollLeft = () => {
    galleryRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Container
      title="Gallery"
      icon={<Image className="w-5 h-5" />}
      className={className}
    >
      <div className="relative">
        <motion.button
          onClick={scrollLeft}
          className="absolute left-0 top-0 bottom-0 z-10 p-3 bg-linear-to-r from-black/30 dark:from-black to-white/0 rounded-xl"
          whileHover={{ x: -3 }}
          whileTap={{ x: -6 }}
        >
          <ArrowLeft />
        </motion.button>

        <div
          ref={galleryRef}
          className="
            flex gap-4 overflow-x-auto
            snap-x snap-mandatory scroll-smooth
            rounded-xl
          "
        >
          {Images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="
                h-48 rounded-lg cursor-pointer
                snap-center shrink-0
              "
              onClick={() => setActiveImage(src)}
            />
          ))}
        </div>

        <motion.button
          onClick={scrollRight}
          className="absolute right-0 top-0 bottom-0 z-10 p-3 bg-linear-to-l from-black/30 dark:from-black to-white/0 rounded-xl"
          whileHover={{ x: 3 }}
          whileTap={{ x: 6 }}
        >
          <ArrowRight />
        </motion.button>
      </div>

      {activeImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={activeImage}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </Container>
  );
};

export default Gallery;
