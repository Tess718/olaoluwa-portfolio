"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/sections/testimonials";

const colorPairs = [
  { bg: "bg-[#fdebf3]", text: "text-[#333]", border: "border-current/20" },
  { bg: "bg-[#c7ce9a]", text: "text-[#333]", border: "border-current/20" },
  { bg: "bg-[#ffd869]", text: "text-[#333]", border: "border-current/20" },
  { bg: "bg-[#fe4f2d]", text: "text-[#333]", border: "border-current/20" },
  { bg: "bg-[#d7897f]", text: "text-[#333]", border: "border-current/20" },
  { bg: "bg-[#6aa6da]", text: "text-[#333]", border: "border-current/20" },
];

const TestimonialCard = ({
  testimonial,
  i,
  progress,
  range,
  targetScale,
}: {
  testimonial: Testimonial;
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const containerRef = useRef(null);
  const colors = colorPairs[i % colorPairs.length];
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div
      ref={containerRef}
      className="h-fit flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(20px + ${i * 30}px)`,
          willChange: "transform",
        }}
        className={`relative flex flex-col justify-between w-full h-[400px] md:h-[400px] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 origin-top ${colors.bg} ${colors.text} ${colors.border} border`}
      >
        {/* Top bar with pill */}
        <div className="flex justify-between items-center w-full">
          <div className={`px-5 py-2 rounded-full border ${colors.border} text-xs md:text-sm font-medium uppercase tracking-widest`}>
            Testimonial {i + 1}
          </div>
          <div className="w-12 h-12 rounded-full border border-current opacity-20 flex items-center justify-center">
            {/* Minimalist icon/dot */}
            <div className="w-2 h-2 rounded-full bg-current" />
          </div>
        </div>

        {/* Center massive quote */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex md:hidden items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h3 className="text-lg font-medium tracking-tighter leading-[1.1] md:leading-[1.1]">
            &quot;{testimonial.quote}&quot;
          </h3>
        </div>

        {/* Bottom bar with client name */}
        <div className="flex w-full items-end justify-between border-t border-current/10 pt-8 mt-12">
          <p className="text-xl md:text-3xl font-medium tracking-tight">
            {testimonial.clientName}
          </p>
          <div className="hidden md:flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function StackedCardsClient({ testimonials }: { testimonials: Testimonial[] }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative md:pb-[30vh] lg:pb-0">
      {testimonials.map((testimonial, i) => {
        const targetScale = 1 - (testimonials.length - i) * 0.05;
        return (
          <TestimonialCard
            key={i}
            i={i}
            testimonial={testimonial}
            progress={scrollYProgress}
            range={[i * (1 / testimonials.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
