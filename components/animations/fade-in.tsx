"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  initialScale?: number;
  margin?: string;
  amount?: number | "all" | "some";
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  xOffset = 0,
  initialScale = 1,
  margin = "-50px",
  amount = 0.3,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset, scale: initialScale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity", ...(props.style as object) }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
