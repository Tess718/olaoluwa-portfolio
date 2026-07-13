"use client";

import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type GalleryImage = {
  title: string;
  src: string;
  link?: string;
};

export function ParallaxColumn({
  images,
  yRange,
  className = "",
}: {
  images: GalleryImage[];
  yRange: [string, string];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div ref={ref} style={{ y, willChange: "transform" }} className={`flex flex-col gap-3 md:gap-4 ${className}`}>
      {images.map((image, index) => {
        const hasValidLink = image.link && image.link !== "#";
        const Wrapper = hasValidLink ? Link : "div";
        return (
          <Wrapper
            key={index}
            href={image.link || "#"}
            {...(hasValidLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group block"
          >
            <ImageWithSkeleton
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
              <p className="text-white text-sm font-medium p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {image.title}
              </p>
            </div>
          </Wrapper>
        );
      })}
    </motion.div>
  );
}
