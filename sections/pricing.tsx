import { FadeIn } from "@/components/animations/fade-in";
import { Check } from "lucide-react";

export type PricingItem = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  features: string[];
};

export default function Pricing({ items = [] }: { items?: PricingItem[] }) {
  const plans = items.length > 0 ? items : [
    {
      name: "Mini Portrait",
      price: "₦20,000",
      description: "Perfect for a quick portrait update.",
      features: [
        "1-hour session",
        "1 outfit",
        "3 professionally retouched photos",
        "Online delivery within 3–5 days"
      ]
    },
    {
      name: "Signature Portrait",
      price: "₦40,000",
      description: "Perfect for birthdays, personal branding, or social media.",
      featured: true,
      features: [
        "Up to 2-hour session",
        "2 outfits",
        "6 professionally retouched photos",
        "Online gallery",
        "Delivery within 3–5 days"
      ]
    },
    {
      name: "Premium Experience",
      price: "₦60,000",
      description: "The ultimate session for comprehensive storytelling and variety.",
      features: [
        "Up to 3-hour session",
        "3 outfits",
        "10 professionally retouched photos",
        "Priority editing"
      ]
    }
  ];

  return (
    <section id="pricing" className="pt-40 md:pt-50">
      <div className="">
        <FadeIn className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-4">
            Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground uppercase tracking-tight leading-[0.9]">
            Pricing & Packages
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.2} yOffset={40}>
              <div
                className={`flex flex-col h-full p-8 md:p-10 rounded-2xl border transition-all duration-500 ${
                  plan.featured
                    ? "border-[#ec4624]/50 bg-[#ec4624]/5"
                    : "border-foreground/10 hover:border-foreground/30 bg-transparent"
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl md:text-5xl font-light tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow">
                  <div className="w-full h-px bg-foreground/10 mb-8" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-[#ec4624]" : "text-foreground/40"}`}
                        />
                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8">
                  <a
                    href="mailto:enocholaoluwa58@gmail.com"
                    className={`block w-full py-4 rounded-full text-center text-sm font-medium uppercase tracking-widest transition-colors ${
                      plan.featured
                        ? "bg-[#ec4624] text-background hover:bg-foreground"
                        : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background hover:border-transparent"
                    }`}
                  >
                    Book Session
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
