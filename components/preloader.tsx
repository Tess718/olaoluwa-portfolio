"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      setCounter((prev) => {
        if (prev < 100) {
          const increment = Math.floor(Math.random() * 8) + 2;
          return Math.min(prev + increment, 100);
        }
        return 100;
      });
    };

    const interval = setInterval(updateCounter, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 600); // Pause at 100% for drama
      return () => clearTimeout(timer);
    }
  }, [counter, onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-foreground text-background"
    >
      <div className="flex flex-col items-center gap-8 w-full px-8">
        <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.4em] ml-[0.4em] text-center">
          The Olaoluwa
        </h1>
        
        <div className="w-full max-w-xs h-[1px] bg-background/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-background"
            initial={{ width: "0%" }}
            animate={{ width: `${counter}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        
        <p className="text-xs md:text-sm font-mono tracking-widest text-background/60">
          {counter.toString().padStart(3, '0')}%
        </p>
      </div>
    </motion.div>
  );
}
