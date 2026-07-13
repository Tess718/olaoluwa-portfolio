import { Inter } from "next/font/google";
import { AnimatedHeroImage } from "@/components/animated-hero-image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <div className="lg:min-h-screen max-sm:min-h-screen flex flex-col justify-center pt-40 gap-8">
      <h1 className="md:text-5xl text-4xl uppercase font-semibold text-center text-foreground tracking-tight">
        Capturing the Art in the Everyday.
      </h1>
      <p className="text-lg md:text-2xl text-center text-foreground/60">
        Visual storytelling and editorial photography designed{" "}
        <br className="max-sm:hidden" /> to make you stop and look.
      </p>
      <AnimatedHeroImage />

      <p className="text-xl md:text-2xl text-center text-foreground/60">
        Bold photography that turns fleeting seconds{" "}
        <br className="max-sm:hidden" /> into permanent art.
      </p>
    </div>
  );
}
