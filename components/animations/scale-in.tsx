"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  amount?: number | "all" | "some";
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 1.2,
  initialScale = 1.1,
  amount = 0.3,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale: initialScale }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity", ...(props.style as object) }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
