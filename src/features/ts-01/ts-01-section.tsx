"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  fadeUpIn,
  fadeUpInitial,
  scrollEase,
  scrollViewport,
} from "@/components/shared/scroll-motion";

const specifications = [
  {
    title: "Horse capacity",
    detail:
      "The layout begins with the horse. Room to stand, room to balance, and a feeling of space are the brief — not something adjusted once the vehicle has already been decided.",
  },
  {
    title: "Force Traveller base",
    detail:
      "TS-01 is developed on a Force Traveller foundation, then shaped for equine travel. The base carries the journey. What is built upon it is decided by the horse, not the other way around.",
  },
  {
    title: "Side and rear ramps",
    detail:
      "More than one way aboard, so the approach can suit the horse and the setting. Side and rear access stay clear and unhurried, with the path easy to read before the first step.",
  },
  {
    title: "Exterior design",
    detail:
      "The outside stays restrained. Line, proportion, and finish are quiet, so the vehicle reads as purposeful transport. What is seen follows what the horse needs within.",
  },
  {
    title: "Lighting and visibility",
    detail:
      "Light is there to make the space readable. It helps a handler see the work in front of them, and gives the horse a calmer sense of where they are, rather than calling attention to the vehicle.",
  },
  {
    title: "Loading access",
    detail:
      "The first moments of a journey are often the most telling. The approach, the threshold, and the step inside are arranged so horse and handler can move together, without rush or confusion.",
  },
];

export function Ts01Section() {
  const [openSpecification, setOpenSpecification] = useState<number | null>(
    null,
  );

  return (
    <section
      className="machine-section"
      id="ts-01"
      aria-labelledby="machine-title"
    >
      <div className="machine-section__reveal">
        <Image
          className="machine-section__background"
          src="/assets/Exterior/Machine.png"
          alt="Cinematic exterior view of the TrueStride TS-01 horse transport vehicle"
          fill
          priority={false}
          sizes="100vw"
        />
        <div className="machine-section__veil" aria-hidden="true" />

        <div className="machine-section__intro">
          <motion.p
            className="machine-section__eyebrow"
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
          >
            THE MACHINE
          </motion.p>
          <motion.h2
            id="machine-title"
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
          >
            TS-01
          </motion.h2>
          <motion.p
            className="machine-section__statement"
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
          >
            Purposeful by design. TS-01 is shaped around the horse — how they
            come aboard, how they travel, and how they arrive. The engineering
            stays quiet, so the journey can feel composed rather than merely
            completed.
          </motion.p>
        </div>

        <div className="machine-section__details">
          <motion.p
            className="machine-section__details-label"
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{ duration: 1.2, ease: scrollEase, delay: 0.2 }}
          >
            A CONSIDERED APPROACH
          </motion.p>
          <div className="machine-specifications">
            {specifications.map((specification, index) => {
              const isOpen = openSpecification === index;
              const detailId = `machine-specification-${index}`;

              return (
                <motion.div
                  className="machine-specification"
                  key={specification.title}
                  initial={fadeUpInitial}
                  whileInView={fadeUpIn}
                  viewport={scrollViewport}
                  transition={{
                    duration: 1.2,
                    ease: scrollEase,
                    delay: index * 0.18,
                  }}
                >
                  <button
                    type="button"
                    className="machine-specification__toggle"
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                    onClick={() => setOpenSpecification(isOpen ? null : index)}
                  >
                    <span className="machine-specification__title">
                      {specification.title}
                    </span>
                    <span
                      className="machine-specification__icon"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="machine-specification__detail" id={detailId}>
                      {specification.detail}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
