"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { MagneticButton } from "@/components/magnetic-button";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-background relative md:pt-40 pt-30 overflow-hidden"
    >
      {/* --- MOBILE LAYOUT --- */}
      <div className="flex flex-col gap-8 md:hidden">
        <div className="flex flex-col gap-6">
          <p className="text-xs text-center font-semibold uppercase tracking-[0.3em] text-foreground/40">
            The Approach
          </p>
          <h2 className="md:text-5xl text-4xl text-center font-semibold uppercase tracking-tight text-foreground">
            My Thought Process
          </h2>
          <p className="text-center text-foreground/60 leading-relaxed">
            My process starts with understanding the moment. I take time to
            observe the light, the mood, and what’s naturally happening before I
            shoot. I focus on using light and composition in a simple,
            intentional way so the image feels natural, not forced. When working
            with people, I keep things relaxed to capture real expressions
            rather than staged ones. Timing is key for me, knowing when to wait
            and when to react. In the end, I aim to create images that feel
            honest and true to the moment.
          </p>
        </div>

        <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden">
          <motion.div
            initial={{ y: 50, scale: 1.05, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute inset-0"
          >
            <ImageWithSkeleton
              src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964"
              alt="Portfolio Showcase"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex justify-between items-center">
          <MagneticButton className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-foreground"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </MagneticButton>
          <p className="text-xs font-medium tracking-widest text-foreground/50 uppercase max-w-[150px] text-right">
            Scroll down to see my gallery
          </p>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:block max-w-7xl mx-auto">
        {/* Outer Container to hold the shape */}
        <div className="relative w-full h-[550px] lg:h-[650px] rounded-tl-[40px] overflow-hidden">
          {/* The Base Image */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute inset-0"
          >
            <ImageWithSkeleton
              src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964"
              alt="Portfolio Background"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* 1. Top-Right Cutout */}
          <div className="absolute top-0 right-0 w-[65%] bg-background rounded-bl-[40px] pb-12 pl-12 z-10">
            <p className="text-end text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-4 mt-2">
              The Approach
            </p>
            <h2 className="text-end md:text-5xl text-4xl uppercase font-semibold text-foreground mb-10 tracking-tight">
              My Thought Process
            </h2>
            <p className="text-end text-foreground/60 leading-relaxed">
              My process starts with understanding the moment. I take time to
              observe the light, the mood, and what’s naturally happening before
              I shoot. I focus on using light and composition in a simple,
              intentional way so the image feels natural, not forced. When
              working with people, I keep things relaxed to capture real
              expressions rather than staged ones. Timing is key for me, knowing
              when to wait and when to react. In the end, I aim to create images
              that feel honest and true to the moment.
            </p>

            {/* Inverted Corner: Bottom-Right (where image starts below the text) */}
            <div className="absolute top-[100%] right-0 w-[40px] h-[40px] bg-[radial-gradient(circle_at_0%_100%,transparent_40px,var(--background)_40px)]"></div>

            {/* Inverted Corner: Top-Left (where image starts to the left of text) */}
            <div className="absolute top-0 right-[100%] w-[40px] h-[40px] bg-[radial-gradient(circle_at_0%_100%,transparent_40px,var(--background)_40px)]"></div>
          </div>

          {/* 2. Bottom-Right Cutout (Star Button) */}
          <div className="absolute bottom-0 right-0 w-[140px] h-[140px] bg-background rounded-tl-[40px] z-10 flex items-end justify-end pl-6 pt-6">
            <MagneticButton className="w-20 h-20 rounded-full border border-foreground/30 flex items-center justify-center mb-2 mr-2 cursor-pointer relative z-20">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-foreground"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </MagneticButton>

            {/* Inverted Corner: Top-Right */}
            <div className="absolute bottom-[100%] right-0 w-[40px] h-[40px] bg-[radial-gradient(circle_at_0%_0%,transparent_40px,var(--background)_40px)]"></div>

            {/* Inverted Corner: Bottom-Left */}
            <div className="absolute bottom-0 right-[100%] w-[40px] h-[40px] bg-[radial-gradient(circle_at_0%_0%,transparent_40px,var(--background)_40px)]"></div>
          </div>

          {/* 3. Bottom-Left Cutout (Scroll Down Text) */}
          <div className="absolute bottom-0 left-0 w-[35%] h-[140px] bg-background rounded-tr-[40px] z-10 flex items-end justify-start pr-6 pt-6">
            <p className="text-sm font-medium tracking-widest text-foreground/50 uppercase max-w-[200px] mb-6 ml-6">
              Scroll down to see my gallery
            </p>

            {/* Inverted Corner: Top-Left */}
            <div className="absolute bottom-[100%] left-0 w-[40px] h-[40px] bg-[radial-gradient(circle_at_100%_0%,transparent_40px,var(--background)_40px)]"></div>

            {/* Inverted Corner: Bottom-Right */}
            <div className="absolute bottom-0 left-[100%] w-[40px] h-[40px] bg-[radial-gradient(circle_at_100%_0%,transparent_40px,var(--background)_40px)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
