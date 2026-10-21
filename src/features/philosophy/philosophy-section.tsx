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

export function PhilosophySection() {
  return (
    <section
      className="home-philosophy"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="home-philosophy__image-panel">
        <Image
          src="/assets/EveryHorseMatters/every-horse-matters.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 760px) 100vw, 60vw"
          className="home-philosophy__media"
        />
      </div>
      <div className="home-philosophy__copy">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
        >
          OUR PHILOSOPHY
        </motion.p>
        <motion.h2
          id="philosophy-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          Every Horse Matters.
        </motion.h2>
        <motion.p
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
        >
          We believe that every horse is unique, valuable and deserves the
          highest standard of care. Our mission is simple — to ensure their
          journey is as safe, comfortable and stress-free as possible.
        </motion.p>
        <motion.p
          className="home-philosophy__signature"
          initial={slideRightInitial}
          whileInView={slideIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.55 }}
        >
          TrueStride Equine
        </motion.p>
        <motion.p
          className="home-philosophy__tagline"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.7 }}
        >
          <span>Trust in Every Stride</span>
        </motion.p>
      </div>
    </section>
  );
}
