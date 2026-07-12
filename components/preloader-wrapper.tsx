"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "./preloader";
import { Navbar } from "./navbar";
import Footer from "./footer";

export function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
