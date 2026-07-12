"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-40">
      <section id="about">
        <div className="grid md:grid-cols-2 gap-40 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/40 mb-4">
              Behind the lens
            </p>
            <h2 className="text-5xl uppercase font-semibold text-start text-foreground mb-10 tracking-tight">
              About Me
            </h2>
            <p className="text-foreground">
              I’m a photographer drawn to honest moments and real stories. My work
              focuses on capturing people, places, and details in a way that feels
              natural and unforced. Whether I’m shooting portraits, events, or
              everyday scenes, I aim to create images that feel personal and
              timeless. I started photography out of curiosity, but it quickly
              became a way for me to connect with the world around me. Over time,
              I’ve developed a style that leans toward simplicity, strong
              composition, and authentic emotion. I believe the best photos don’t
              just look good, they make you feel something. When I’m behind the
              camera, I pay attention to the small things: light, mood, and the
              quiet moments that others might miss. My goal is always the same, to
              tell a story in a way that feels true to the subject. I’m always
              learning, experimenting, and refining my craft, and I enjoy working
              with people who value creativity and genuine expression.
            </p>
          </div>

          {/* Recreated Image Grid */}
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="grid grid-cols-12 lg:[grid-template-columns:repeat(14,minmax(0,1fr))] gap-2 items-end">
              <div className="col-span-2 lg:col-span-3"></div>
              <motion.div 
                className="relative col-span-4 h-[160px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  alt="About grid"
                  src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0022.jpg?updatedAt=1783676357737"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-top rounded-lg"
                  priority
                />
              </motion.div>
              <motion.div 
                className="relative col-span-4 h-[240px]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <Image
                  alt="About grid"
                  src="https://ik.imagekit.io/kto43sqc5/DRM09804.jpg?updatedAt=1783669294573"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-top rounded-lg"
                  priority
                />
              </motion.div>
              <div className="col-span-2 lg:col-span-3"></div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 lg:[grid-template-columns:repeat(14,minmax(0,1fr))] gap-2">
              <motion.div 
                className="relative col-span-4 lg:col-span-5 h-[128px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Image
                  alt="About grid"
                  src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0009.jpg?updatedAt=1783676357964"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-top rounded-lg"
                />
              </motion.div>
              <motion.div 
                className="relative col-span-4 h-[240px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  alt="About grid"
                  src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0025.jpg?updatedAt=1783676357957"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-top rounded-lg"
                />
              </motion.div>
              <motion.div 
                className="relative col-span-4 lg:col-span-5 h-[128px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  alt="About grid"
                  src="https://ik.imagekit.io/kto43sqc5/IMG-20260710-WA0013.jpg?updatedAt=1783676357698"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-center rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}