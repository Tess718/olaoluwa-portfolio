import { Playfair_Display, Inter } from "next/font/google";
import { AnimatedHeroImage } from "@/components/animated-hero-image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-40 gap-8">
      <h1 className="md:text-5xl text-4xl uppercase font-semibold text-center text-foreground tracking-tight">
        Capturing the Art in the Everyday.
      </h1>
      <p className="text-lg md:text-2xl text-center text-foreground">
        Visual storytelling and editorial photography designed <br /> to make
        you stop and look.
      </p>
      <AnimatedHeroImage />

      <p className="text-xl md:text-2xl text-center text-foreground">
        Bold photography that turns fleeting seconds <br /> into permanent art.
      </p>
    </div>
  );
}
