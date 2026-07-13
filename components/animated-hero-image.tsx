"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { useRef, useEffect, useState } from "react";

const HERO_IMAGES = [
  "https://ik.imagekit.io/kto43sqc5/IMG_9888edit.jpg?updatedAt=1783639799909",
  "https://ik.imagekit.io/kto43sqc5/IMG_9908edit.jpg?updatedAt=1783639823783",
];

export function AnimatedHeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const nextIndex = (currentIndex + 1) % HERO_IMAGES.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // Mouse tracking for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Flatten tilt when expanded
    if (expanded) {
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (expanded || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [expanded, mouseX, mouseY]);

  const handleExpandComplete = () => {
    setIsResetting(true);
    setCurrentIndex(nextIndex);
    setExpanded(false);

    // Tiny delay to allow state to settle before re-enabling animations
    setTimeout(() => {
      setIsResetting(false);
    }, 50);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full md:w-100 mx-auto aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!expanded && !isResetting) setExpanded(true);
      }}
      style={{ perspective: 800 }}
    >
      {/* Background Image (Current) */}
      <motion.div
        style={{ scale: scrollScale }}
        className="w-full h-full absolute inset-0"
      >
        <ImageWithSkeleton
          src={HERO_IMAGES[currentIndex]}
          alt="Enoch Photo"
          fill
          loading="eager"
          className="object-cover"
        />
      </motion.div>

      {/* Cursor Follow Wrapper for Thumbnail */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          animate={expanded ? "expanded" : "idle"}
          variants={{
            idle: {
              width: "140px",
              height: "140px",
              opacity: isHovered && !expanded && !isResetting ? 0.85 : 0,
              scale: isHovered && !expanded && !isResetting ? 1 : 0.8,
              borderRadius: "16px",
              transition: { duration: isResetting ? 0 : 0.4, ease: "easeOut" },
            },
            expanded: {
              width: "100%",
              height: "100%",
              opacity: 1,
              scale: 1,
              borderRadius: "0px",
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            },
          }}
          onAnimationComplete={(definition) => {
            if (definition === "expanded") {
              handleExpandComplete();
            }
          }}
          className="relative overflow-hidden shadow-2xl pointer-events-auto"
        >
          <ImageWithSkeleton
            src={HERO_IMAGES[nextIndex]}
            alt="Next Image Thumbnail"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
