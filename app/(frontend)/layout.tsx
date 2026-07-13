import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enoch Olaoluwa | Photographer & Visual Storyteller",
  description:
    "Enoch Olaoluwa is a photographer drawn to honest moments and real stories. Explore a portfolio of visual storytelling, editorial photography, and natural portraits.",
  keywords: [
    "Enoch Olaoluwa",
    "Photographer",
    "Editorial Photography",
    "Visual Storytelling",
    "Portraits",
    "Creative Photographer",
    "Nigeria",
  ],
  authors: [{ name: "Enoch Olaoluwa" }],
  creator: "Enoch Olaoluwa",
  openGraph: {
    title: "Enoch Olaoluwa | Photographer",
    description:
      "Visual storytelling and editorial photography designed to make you stop and look.",
    url: "https://theolaoluwa.pxxl.run",
    siteName: "Enoch Olaoluwa Portfolio",
    images: [
      {
        url: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
        width: 1200,
        height: 630,
        alt: "Enoch Olaoluwa Photography Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enoch Olaoluwa | Photographer",
    description:
      "Visual storytelling and editorial photography designed to make you stop and look.",
    images: [
      "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { PreloaderWrapper } from "@/components/preloader-wrapper";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import { CustomCursor } from "@/components/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-hidden px-4 md:px-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <CustomCursor />
            <PreloaderWrapper>
              {children}
            </PreloaderWrapper>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
