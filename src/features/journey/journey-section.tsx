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
} from "@/components/shared/scroll-motion";

const journey = [
  {
    number: "01",
    title: "Prepare",
    description: "Every journey begins with thoughtful preparation.",
  },
  {
    number: "02",
    title: "Travel",
    description: "Care and consideration accompany every mile.",
  },
  {
    number: "03",
    title: "Arrive",
    description:
      "A composed arrival, with the horse at the heart of the experience.",
  },
];

export function JourneySection() {
  return (
    <section
      className="home-journey home-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <Image
        src="/assets/OurJourney/our-journey-horse-trailer.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="home-journey__media"
      />
      <div className="home-journey__heading">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
        >
          THE JOURNEY
        </motion.p>
        <motion.h2
          id="journey-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          From Preparation to Arrival.
        </motion.h2>
      </div>
      <div className="home-journey__steps">
        {journey.map((step, index) => (
          <motion.article
            className="home-journey-step"
            key={step.number}
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{
              duration: 1.2,
              ease: scrollEase,
              delay: index * 0.22 + 0.35,
            }}
          >
            <span className="home-journey-step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.article>
        ))}
      </div>
      <motion.a
        className="home-text-link"
        href="#contact"
        initial={slideLeftInitial}
        whileInView={slideIn}
        viewport={scrollViewport}
        transition={{ duration: 1.2, ease: scrollEase, delay: 0.75 }}
      >
        Begin a conversation <span aria-hidden="true">↗</span>
      </motion.a>
    </section>
  );
}
