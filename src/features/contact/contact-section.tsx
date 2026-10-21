"use client";

import { motion } from "framer-motion";
import {
  fadeUpIn,
  fadeUpInitial,
  scrollEase,
  scrollViewport,
  slideIn,
  slideRightInitial,
} from "@/components/shared/scroll-motion";
import { ContactForm } from "@/features/contact/contact-form";

export function ContactSection() {
  return (
    <section
      className="home-contact-section home-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="home-contact-section__intro">
        <motion.p
          className="home-eyebrow"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.1 }}
        >
          CONTACT
        </motion.p>
        <motion.h2
          id="contact-title"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.35, ease: scrollEase, delay: 0.25 }}
        >
          Let’s Begin a Conversation.
        </motion.h2>
        <motion.p
          className="home-contact-section__description"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.25, ease: scrollEase, delay: 0.4 }}
        >
          Whether you are a horse owner, stud farm, equestrian club or
          equine-industry professional, we’d be pleased to understand your
          requirements and discuss how TrueStride Equine can help.
        </motion.p>
      </div>
      <motion.div
        initial={slideRightInitial}
        whileInView={slideIn}
        viewport={scrollViewport}
        transition={{ duration: 1.25, ease: scrollEase, delay: 0.35 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
