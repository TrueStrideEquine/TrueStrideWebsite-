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
} from "@/components/shared/scroll-motion";

const journeySteps = [
  { title: "Preparation & check", icon: "check" },
  { title: "Loading & settle", icon: "loading" },
  { title: "Comfortable transport", icon: "travel" },
  { title: "Safe arrival", icon: "arrival" },
] as const;

function JourneyIcon({
  name,
  delay,
}: {
  name: (typeof journeySteps)[number]["icon"];
  delay: number;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.5,
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      {...common}
      initial={scaleInitial}
      whileInView={scaleIn}
      viewport={scrollViewport}
      transition={{ duration: 1.2, ease: scrollEase, delay }}
    >
      {name === "check" && (
        <>
          <path d="M15 8h18a3 3 0 0 1 3 3v28H12V11a3 3 0 0 1 3-3Z" />
          <path d="M19 8V5h10v3M18 19h12M18 25h7m-6 7 3 3 7-8" />
        </>
      )}
      {name === "loading" && (
        <>
          <path d="M5 14h24v21H5zM29 21h8l6 8v6H29z" />
          <circle cx="14" cy="37" r="3" />
          <circle cx="36" cy="37" r="3" />
          <path d="M10 20h13M10 25h9" />
        </>
      )}
      {name === "travel" && (
        <>
          <path d="M8 34h32M12 34V19l6-7h12l7 7v15M18 27h12M18 21h12" />
          <path d="M22 12V7h7l3 5M16 39h16" />
        </>
      )}
      {name === "arrival" && (
        <>
          <path d="M24 5 39 11v11c0 10-6 16-15 21C15 38 9 32 9 22V11z" />
          <path d="m17 24 5 5 10-11" />
        </>
      )}
    </motion.svg>
  );
}

export function TrueStrideJourneySection() {
  return (
    <section
      className="true-stride-journey"
      id="truestride-journey"
      aria-labelledby="true-stride-journey-title"
    >
      <Image
        src="/assets/TrueStrideJourney/truestride-journey-route.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="true-stride-journey__media"
      />
      <div className="true-stride-journey__copy">
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
          id="true-stride-journey-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          With Your Horse Every Step.
        </motion.h2>
        <motion.p
          className="true-stride-journey__description"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
        >
          From preparation to arrival, we are with your horse every step of the
          way.
        </motion.p>
      </div>
      <ol className="true-stride-journey__steps">
        {journeySteps.map((step, index) => (
          <motion.li
            className="true-stride-journey__step"
            key={step.title}
            initial={fadeUpInitial}
            whileInView={fadeUpIn}
            viewport={scrollViewport}
            transition={{
              duration: 1.2,
              ease: scrollEase,
              delay: index * 0.22,
            }}
          >
            <JourneyIcon name={step.icon} delay={index * 0.22 + 0.1} />
            <span>{step.title}</span>
            {index < journeySteps.length - 1 && (
              <span className="true-stride-journey__arrow" aria-hidden="true">
                →
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
