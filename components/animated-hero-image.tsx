"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AnimatedHeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the container hits the bottom of the viewport
    // End tracking when the bottom of the container hits the top of the viewport
    offset: ["start end", "end start"],
  });

  // Scale the image up slightly as the user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div
      ref={containerRef}
      className="w-55 md:w-100 mx-auto overflow-hidden rounded-2xl"
    >
      <motion.div style={{ scale }} className="w-full h-full">
        <Image
          src="https://ik.imagekit.io/kto43sqc5/IMG_9888edit.jpg?updatedAt=1783639799909"
          alt="Enoch Photo"
          width={1000}
          height={1000}
          loading="eager"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}
