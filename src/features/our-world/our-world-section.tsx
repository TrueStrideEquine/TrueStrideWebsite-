"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpIn,
  fadeUpInitial,
  scrollEase,
  scrollViewport,
  slideIn,
  slideRightInitial,
} from "@/components/shared/scroll-motion";

export function OurWorldSection() {
  return (
    <section
      className="home-world"
      id="our-world"
      aria-labelledby="world-title"
    >
      <Image
        src="/assets/OurJourney/our-journey-loading.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="home-world__media"
      />
      <div className="home-world__copy">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
        >
          OUR WORLD
        </motion.p>
        <motion.h2
          id="world-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          More Than
          <br />
          Transportation. A
          <br />
          Better Journey.
        </motion.h2>
        <motion.p
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
        >
          TrueStride Equine is shaped by a simple belief: every journey should
          begin with the horse. We bring thoughtful engineering and considered
          care together to create a more composed experience, from the first
          preparation to arrival.
        </motion.p>
        <motion.a
          className="home-text-link"
          href="#philosophy"
          initial={slideRightInitial}
          whileInView={slideIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.55 }}
        >
          See our philosophy <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  );
}
