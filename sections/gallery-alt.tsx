import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ScaleIn } from "@/components/animations/scale-in";
import { InteractiveLink } from "@/components/interactive-link";

type SelectedWorkItem = {
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  link: string;
  src: string;
};

export default function GalleryAlt({ items = [] }: { items?: SelectedWorkItem[] }) {
  const projects =
    items.length > 0
      ? items
      : [
          {
            title: "Faces of Resilience",
            date: "March 2022",
            link: "#",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
            description:
              "A collection of moments captured with intention, using natural light and composition to tell an honest story.",
          },
          {
            title: "Teslim Induction",
            date: "April 2026",
            link: "#",
            src: "https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573",
            description:
              "Documenting the energy and emotion of a landmark celebration through candid, unscripted frames.",
          },
          {
            title: "Elegance in Monochrome",
            date: "January 2020",
            link: "#",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964",
            description:
              "Stripped of colour, these portraits rely on light and shadow to reveal character and mood.",
          },
          {
            title: "Cultural Depiction",
            date: "January 2020",
            link: "#",
            src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0010.jpg?updatedAt=1783676357258",
            description:
              "A visual love letter to tradition, capturing heritage through authentic, unposed moments.",
          },
        ];

  return (
    <section id="selected-works" className="md:pt-40 pt-30">
      {/* Section Header */}
      <FadeIn className="mb-10" yOffset={30}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-4">
          Selected Work
        </p>
        <h2 className="md:text-5xl text-4xl font-semibold text-foreground uppercase tracking-tight leading-[0.9]">
          ShowCase
        </h2>
      </FadeIn>

      {/* Editorial Grid */}
      <div className="flex flex-col gap-0">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <FadeIn
              key={index}
              yOffset={0}
              className="group border-t border-foreground/10 last:border-b"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-0 items-stretch min-h-[500px] lg:min-h-[600px]">
                {/* Text Side */}
                <div
                  className={`col-span-5 flex flex-col justify-between p-10 lg:p-16 ${
                    isEven
                      ? "order-1 md:ps-0 lg:ps-0"
                      : "order-2 md:pe-0 md:pe-0"
                  }`}
                >
                  <FadeIn yOffset={40} delay={0.2}>
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40 block mb-3">
                      {project.date}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6">
                      {project.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-foreground/20 mb-6" />
                    <p className="text-foreground/60 leading-relaxed max-w-sm text-sm lg:text-base">
                      {project.description ||
                        "A collection of moments captured with intention, using natural light and composition to tell an honest story."}
                    </p>
                  </FadeIn>

                  <FadeIn yOffset={0} delay={0.4}>
                    <InteractiveLink
                      href={project.link || "#"}
                      {...(project.link && project.link !== "#"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-[#ec4624] transition-colors group/link"
                    >
                      View Album
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </InteractiveLink>
                  </FadeIn>
                </div>

                {/* Image Side */}
                <div
                  className={`col-span-7 relative overflow-hidden ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <ScaleIn
                    initialScale={1.1}
                    duration={1.2}
                    className="absolute inset-0"
                  >
                    <ImageWithSkeleton
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="60vw"
                      className="object-cover object-[50%_calc(50%+6rem)] transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </ScaleIn>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <ScaleIn
                    initialScale={1.08}
                    duration={1}
                    className="absolute inset-0"
                  >
                    <ImageWithSkeleton
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </ScaleIn>
                </div>
                <div className="py-8 flex flex-col gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">
                    {project.date}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-foreground/50 leading-relaxed text-sm">
                    {project.description ||
                      "A collection of moments captured with intention."}
                  </p>
                  <InteractiveLink
                    href={project.link || "#"}
                    {...(project.link && project.link !== "#"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors mt-2"
                  >
                    View Album
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </InteractiveLink>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Bottom CTA — links to full gallery */}
      <FadeIn yOffset={20} delay={0.2} className="mt-10 flex flex-col items-center text-center">
        <p className="text-foreground/40 text-sm uppercase tracking-widest mb-6">
          Want to see more?
        </p>
        <InteractiveLink
          href="/gallery"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 text-sm font-medium uppercase tracking-widest text-foreground hover:bg-[#ec4624] hover:border-0 hover:text-background transition-all duration-300"
        >
          View Full Gallery
          <ArrowUpRight className="w-4 h-4" />
        </InteractiveLink>
      </FadeIn>
    </section>
  );
}
