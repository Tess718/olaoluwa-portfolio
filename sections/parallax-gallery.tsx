"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type GalleryImage = {
  title: string;
  src: string;
  link?: string;
};

function ParallaxColumn({
  images,
  yRange,
}: {
  images: GalleryImage[];
  yRange: [string, string];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col gap-3 md:gap-4">
      {images.map((image, index) => {
        const Wrapper = image.link ? Link : "div";
        return (
            <Wrapper
              key={index}
              href={image.link || "#"}
              {...(image.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group block"
            >
              <Image
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

export default function ParallaxGallery({
  images = [],
}: {
  images?: GalleryImage[];
}) {
  // Fallback images
  const allImages =
    images.length > 0
      ? images
      : [
          {
            title: "Faces of Resilience",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
          },
          {
            title: "Teslim Induction",
            src: "https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573",
          },
          {
            title: "Elegance in Monochrome",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964",
          },
          {
            title: "Cultural Depiction",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0010.jpg?updatedAt=1783676357258",
          },
          {
            title: "Faces of Resilience",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
          },
          {
            title: "Teslim Induction",
            src: "https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573",
          },
        ];

  // Split images into 3 columns (or 2 on mobile via CSS)
  const col1: GalleryImage[] = [];
  const col2: GalleryImage[] = [];
  const col3: GalleryImage[] = [];

  allImages.forEach((img, i) => {
    if (i % 3 === 0) col1.push(img);
    else if (i % 3 === 1) col2.push(img);
    else col3.push(img);
  });

  return (
    <section className="pt-40">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-10">
          All Work
        </p>
        <h1 className="md:text-5xl text-4xl font-semibold text-foreground uppercase tracking-tight leading-[0.9]">
          Gallery
        </h1>
      </motion.div>

      {/* Parallax Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <ParallaxColumn images={col1} yRange={["0%", "-5%"]} />
        <ParallaxColumn images={col2} yRange={["0%", "5%"]} />
        <div className="hidden md:block">
          <ParallaxColumn images={col3} yRange={["0%", "-8%"]} />
        </div>
      </div>

      {/* On mobile, show column 3 images below */}
      {col3.length > 0 && (
        <div className="md:hidden mt-3">
          <div className="grid grid-cols-2 gap-3">
            {col3.map((image, index) => {
              const Wrapper = image.link ? Link : "div";
              return (
                <Wrapper
                  key={index}
                  href={image.link || "#"}
                  {...(image.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group block"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
                    <p className="text-white text-sm font-medium p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {image.title}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
