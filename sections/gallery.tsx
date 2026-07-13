import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { CarouselClient } from "@/components/animations/carousel-client";

type GalleryItem = {
  title: string;
  date: string;
  link: string;
  src: string;
};

export default function Gallery({ items = [] }: { items?: GalleryItem[] }) {
  // Fallback to hardcoded if no items from CMS
  const projects = items.length > 0 ? items : [
    {
      title: "Faces of Resilience",
      date: "March 2022",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737",
    },
    {
      title: "Teslim Induction",
      date: "April 2026",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573",
    },
    {
      title: "Elegance in Monochrom",
      date: "January 2020",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964",
    },
    {
      title: "Cultural Depiction",
      date: "January 2020",
      link: "#",
      src: "https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0010.jpg?updatedAt=1783676357258",
    },
  ];

  return (
    <section id="gallery" className="pt-40">
      <CarouselClient>
        {projects.map((project, index) => (
          <FadeIn
            key={index}
            yOffset={50}
            delay={index < 3 ? index * 0.15 : 0}
            duration={0.6}
            className="w-full md:w-[calc(33.333%-1.5rem)] flex-none snap-start flex flex-col gap-4 md:gap-6"
          >
            <div className="relative w-full aspect-square md:aspect-[4/5]">
              <ImageWithSkeleton
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover pointer-events-none rounded-2xl"
              />
            </div>
            <div className="flex justify-between items-end px-1">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-lg md:text-xl text-foreground/90">
                  {project.title}
                </h3>
                <span className="text-sm text-foreground/50">
                  {project.date}
                </span>
              </div>
              <Link
                href={project.link || "#"}
                {...(project.link && project.link !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs md:text-sm font-medium uppercase text-foreground/50 border-b border-foreground/50 pb-1 hover:text-foreground hover:border-foreground transition-colors"
              >
                View Album
              </Link>
            </div>
          </FadeIn>
        ))}
      </CarouselClient>
    </section>
  );
}