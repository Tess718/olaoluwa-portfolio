"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";


export function CarouselClient({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { amount: 0.5 });
  const [isInteracted, setIsInteracted] = useState(false);

  const scrollPrev = () => {
    if (carouselRef.current) {
      setIsInteracted(true);
      carouselRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
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

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground uppercase tracking-tight max-w-[200px] md:max-w-none">
          Gallery
        </h2>
        {/* Desktop Controls */}
        <div className="hidden md:flex gap-5 rounded-full border border-foreground/50 p-1">
          <button
            onClick={scrollPrev}
            className="p-3 md:p-4 hover:opacity-50 bg-foreground/90 transition flex items-center justify-center rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-background" />
          </button>
          <button
            onClick={scrollNext}
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
        {children}
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden justify-center mt-12">
        <div className="flex bg-foreground text-background p-2 rounded-full">
          <button
            onClick={scrollPrev}
            className="p-4 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors disabled:opacity-30"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-4 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors disabled:opacity-30"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
