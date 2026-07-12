"use client";

import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { playClickSound, playHoverSound } from "@/lib/audio";

type GalleryItem = {
  title: string;
  date: string;
  link: string;
  src: string;
};

export default function Gallery({ items = [] }: { items?: GalleryItem[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { amount: 0.5 });
  const [isInteracted, setIsInteracted] = useState(false);

  const scrollPrev = () => {
    playClickSound();
    if (carouselRef.current) {
      setIsInteracted(true);
      carouselRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    playClickSound();
    if (carouselRef.current) {
      setIsInteracted(true);
      carouselRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isInView || isInteracted) return;

    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isInView, isInteracted]);

  // Fallback to hardcoded if no items from CMS
  const projects = items.length > 0 ? items : [
    {
      title: "Faces of Resilience",
      date: "March 2022",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
    },
    {
      title: "Teslim Induction",
      date: "April 2026",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573",
    },
    {
      title: "Elegance in Monochrom",
      date: "January 2020",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964",
    },
    {
      title: "Cultural Depiction",
      date: "January 2020",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0010.jpg?updatedAt=1783676357258",
    },
  ];

  return (
    <section id="gallery" className="pt-40">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-tight max-w-[200px] md:max-w-none">
          Gallery
        </h2>
        {/* Desktop Controls */}
        <div className="hidden md:flex gap-5 rounded-full border border-foreground/50 p-1">
          <button
            onClick={scrollPrev}
            onMouseEnter={playHoverSound}
            className="p-3 md:p-4 hover:opacity-50 bg-foreground/90 transition flex items-center justify-center rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-background" />
          </button>
          <button
            onClick={scrollNext}
            onMouseEnter={playHoverSound}
            className="p-3 md:p-4 hover:opacity-50 bg-foreground/90 transition flex items-center justify-center rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-background" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onPointerDown={() => setIsInteracted(true)}
        className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index < 3 ? index * 0.15 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full md:w-[calc(33.333%-1.5rem)] flex-none snap-start flex flex-col gap-4 md:gap-6"
          >
            <div className="relative w-full aspect-square md:aspect-[4/5]">
              <ImageWithSkeleton
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover pointer-events-none rounded-2xl"
              />
            </div>
            <div className="flex justify-between items-end px-1">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-lg md:text-xl text-foreground/90">
                  {project.title}
                </h3>
                <span className="text-sm text-foreground/50">
                  {project.date}
                </span>
              </div>
              <Link
                href={project.link || "#"}
                {...(project.link && project.link !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs md:text-sm font-medium uppercase text-foreground/50 border-b border-foreground/50 pb-1 hover:text-foreground hover:border-foreground transition-colors"
              >
                View Album
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden justify-center mt-12">
        <div className="flex bg-foreground text-background p-2 rounded-full">
          <button
            onClick={scrollPrev}
            onMouseEnter={playHoverSound}
            className="p-4 rounded-full hover:bg-background/20 transition flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            onMouseEnter={playHoverSound}
            className="p-4 rounded-full hover:bg-background/20 transition flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}