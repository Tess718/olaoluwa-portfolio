"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export function ImageWithSkeleton({ className, alt, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${className || ""}`}>
      {/* Skeleton Background */}
      <div
        className={`absolute inset-0 bg-foreground/10 animate-pulse ${
          isLoaded ? "hidden" : "block"
        }`}
      />
      <Image
        alt={alt}
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className || ""}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
