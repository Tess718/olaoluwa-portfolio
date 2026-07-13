import { StackedCardsClient } from "@/components/animations/stacked-cards-client";
import { FadeIn } from "@/components/animations/fade-in";

export type Testimonial = {
  clientName: string;
  quote: string;
};

export default function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  const testimonials =
    items.length > 0
      ? items
      : [
          {
            clientName: "Finn & Emma",
            quote:
              "I could not recommend Enoch enough for your special day. He was so unbelievably kind and attentive and put so much love and effort into his work. His photography style is something so rare.",
          },
          {
            clientName: "Sarah & James",
            quote:
              "Absolutely breathtaking. Every image feels like a scene from a classic film. We are so grateful for the memories captured with such grace.",
          },
          {
            clientName: "Chloe & Michael",
            quote:
              "The attention to detail and the way he catches those fleeting, honest moments is unparalleled. We will cherish these photos forever.",
          },
        ];

  return (
    <section className="relative bg-background">
      {/* Header outside the sticky area */}
      <FadeIn yOffset={30} className="text-center md:pt-40 pt-30 pb-10 flex flex-col items-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/40 mb-4">
          What people have to say
        </p>
        <h2 className="md:text-5xl text-4xl font-semibold text-foreground uppercase tracking-tight">
          Testimonials
        </h2>
      </FadeIn>

      {/* Cards Container */}
      <StackedCardsClient testimonials={testimonials} />
    </section>
  );
}
