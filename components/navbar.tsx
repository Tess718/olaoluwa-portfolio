"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLenis } from 'lenis/react';
import { usePathname } from "next/navigation";
import { RolloverLink } from "@/components/animations/rollover-link";

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (pathname !== "/") {
      setIsMobileMenuOpen(false);
      return; // Do not prevent default, let the link navigate
    }

    e.preventDefault();
    if (lenis) {
      if (target === 'top') {
        lenis.scrollTo(0, { offset: 0, duration: 1.5 });
      } else {
        lenis.scrollTo(target, { offset: -100, duration: 1.5 });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavLinks = () => (
    <>
      <RolloverLink
        href="/"
        onClick={(e: any) => handleScrollTo(e, 'top')}
        className="text-sm font-medium hover:opacity-100 transition-opacity"
      >
        Home
      </RolloverLink>
      <RolloverLink
        href="/#about"
        onClick={(e: any) => handleScrollTo(e, '#about')}
        className="text-sm font-medium hover:opacity-100 transition-opacity"
      >
        About
      </RolloverLink>
      <RolloverLink
        href="/#selected-works"
        onClick={(e: any) => handleScrollTo(e, '#selected-works')}
        className="text-sm font-medium hover:opacity-100 transition-opacity"
      >
        Showcase
      </RolloverLink>
      <RolloverLink
        href="/gallery"
        onClick={() => {
          setIsMobileMenuOpen(false);
          // Note: playClickSound is handled inside RolloverLink
        }}
        className="text-sm font-medium hover:opacity-100 transition-opacity"
      >
        Gallery
      </RolloverLink>
      <RolloverLink
        href="/#contact"
        onClick={(e: any) => handleScrollTo(e, '#contact')}
        className="text-sm font-medium hover:opacity-100 transition-opacity"
      >
        Contact
      </RolloverLink>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <RolloverLink
          href="/"
          className="font-bold text-xl tracking-tight z-50"
        >
          The Olaoluwa.
        </RolloverLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {renderNavLinks()}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <button
            onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
            className="p-2 rounded-full bg-foreground/5 hover:bg-[#ec4624] transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full h-[calc(100dvh-77px)] bg-background flex flex-col items-center pt-24 gap-8 md:hidden"
          >
            {renderNavLinks()}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
