"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpIn,
  fadeUpInitial,
  scaleIn,
  scaleInitial,
  scrollEase,
  scrollViewport,
  slideIn,
  slideLeftInitial,
} from "@/components/shared/scroll-motion";

export function HeroSection() {
  return (
    <section className="home-hero" id="home-hero" aria-labelledby="home-title">
      <div className="home-hero__media" aria-hidden="true">
        <Image
          src="/assets/Hero/hero-horse.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
      </div>
      <div className="home-hero__content site-container">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.15 }}
        >
          THE ART OF EQUINE TRAVEL
        </motion.p>
        <motion.h1
          id="home-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.3 }}
        >
          <span>Every Journey</span>
          <span>Begins With Care.</span>
        </motion.h1>
        <motion.p
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.45 }}
        >
          Designed around the horse, with comfort and care at every mile.
        </motion.p>
        <div className="home-actions">
          <motion.a
            className="home-link home-link--dark"
            href="#our-world"
            initial={scaleInitial}
            whileInView={scaleIn}
            viewport={scrollViewport}
            transition={{ duration: 1.2, ease: scrollEase, delay: 0.6 }}
          >
            Enter Our World <span aria-hidden="true">↓</span>
          </motion.a>
          <motion.a
            className="home-link home-link--light"
            href="#ts-01"
            initial={slideLeftInitial}
            whileInView={slideIn}
            viewport={scrollViewport}
            transition={{ duration: 1.2, ease: scrollEase, delay: 0.75 }}
          >
            Discover TS-01 <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
