"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section id="selected-works" className="pt-40">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-4">
          Selected Work
        </p>
        <h2 className="text-5xl font-semibold text-foreground uppercase tracking-tight leading-[0.9]">
          ShowCase
        </h2>
      </motion.div>

      {/* Editorial Grid */}
      <div className="flex flex-col gap-0">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group border-t border-foreground/10 last:border-b"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-0 items-stretch min-h-[500px] lg:min-h-[600px]">
                {/* Text Side */}
                <div
                  className={`col-span-5 flex flex-col justify-between p-10 lg:p-16 ${
                    isEven ? "order-1 md:ps-0 lg:ps-0" : "order-2 md:pe-0 md:pe-0"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40 block mb-3">
                      {project.date}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6">
                      {project.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-foreground/20 mb-6" />
                    <p className="text-foreground/50 leading-relaxed max-w-sm text-sm lg:text-base">
                      {project.description ||
                        "A collection of moments captured with intention, using natural light and composition to tell an honest story."}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link
                      href={project.link || "#"}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors group/link"
                    >
                      View Album
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div
                  className={`col-span-7 relative overflow-hidden ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="60vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </motion.div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
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
                  <Link
                    href={project.link || "#"}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors mt-2"
                  >
                    View Album
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA — links to full gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-col items-center text-center"
      >
        <p className="text-foreground/40 text-sm uppercase tracking-widest mb-6">
          Want to see more?
        </p>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 text-sm font-medium uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          View Full Gallery
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
