"use client";

import Link from "next/link";

import React from "react";

interface RolloverLinkProps {
  href: string;
  children: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function RolloverLink({ href, children, className = "", onClick }: RolloverLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      className={`group relative overflow-hidden inline-flex ${className}`}
    >
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full will-change-transform">
        {children}
      </span>
      <span
        className="absolute left-0 top-0 block translate-y-full text-[#ec4624] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 will-change-transform"
        aria-hidden="true"
      >
        {children}
      </span>
    </Link>
  );
}
