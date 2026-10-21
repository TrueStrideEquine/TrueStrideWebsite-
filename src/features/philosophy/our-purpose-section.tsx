"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpIn,
  fadeUpInitial,
  scrollEase,
  scrollViewport,
  slideIn,
  slideLeftInitial,
  slideRightInitial,
} from "@/components/shared/scroll-motion";

export function OurPurposeSection() {
  return (
    <section
      className="home-purpose"
      id="our-purpose"
      aria-labelledby="our-purpose-title"
    >
      <Image
        src="/assets/OurPurpose/our-purpose-horse-eye.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="home-purpose__media"
      />
      <div className="home-purpose__copy">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
        >
          OUR PURPOSE
        </motion.p>
        <motion.h2
          id="our-purpose-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          Care Is in Every Detail.
        </motion.h2>
        <motion.p
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
        >
          The smallest decisions shape the whole experience. We believe care
          should be present in how a journey is imagined, prepared and made.
        </motion.p>
        <motion.a
          className="home-text-link"
          href="#contact"
          initial={slideLeftInitial}
          whileInView={slideIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.55 }}
        >
          Continue the conversation <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  );
}
