"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactCallToAction, siteNavigation } from "@/config/navigation";
import {
  fadeUpIn,
  fadeUpInitial,
  scrollEase,
  scrollViewport,
  slideIn,
  slideLeftInitial,
  slideRightInitial,
} from "@/components/shared/scroll-motion";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="M4 7.2 12 13l8-5.8" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__main">
          <motion.div
            className="site-footer__brand"
            initial={slideLeftInitial}
            whileInView={slideIn}
            viewport={scrollViewport}
            transition={{ duration: 1.25, ease: scrollEase, delay: 0.15 }}
          >
            <Link className="site-footer__lockup" href="/">
              <span className="site-wordmark__text">
                <span className="site-wordmark__name">TRUESTRIDE</span>
                <span className="site-wordmark__descriptor">EQUINE</span>
              </span>
              <p className="site-footer__motto">Trust in Every Stride.</p>
              <Image
                className="site-wordmark__logo"
                src="/assets/logo/logo.png"
                alt=""
                width={1774}
                height={887}
              />
            </Link>
            <p className="site-footer__statement">
              Horse first. Thoughtful engineering. A more considered journey.
            </p>
            <p className="site-footer__location">
              Equine transportation · India
            </p>
            <ul className="site-footer__contact">
              <li>
                <a href="mailto:equinetruestride@gmail.com">
                  <MailIcon />
                  equinetruestride@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/truestride.equine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.nav
            className="site-footer__nav"
            aria-label="Footer navigation"
            initial={slideRightInitial}
            whileInView={slideIn}
            viewport={scrollViewport}
            transition={{ duration: 1.25, ease: scrollEase, delay: 0.3 }}
          >
            {siteNavigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={contactCallToAction.href}>Enquire</a>
          </motion.nav>
        </div>

        <motion.div
          className="site-footer__legal"
          id="legal"
          initial={fadeUpInitial}
          whileInView={fadeUpIn}
          viewport={scrollViewport}
          transition={{ duration: 1.2, ease: scrollEase, delay: 0.2 }}
        >
          <span>© 2026 TrueStride Equine. All rights reserved.</span>
          <span>Thoughtfully considered equine travel.</span>
        </motion.div>
      </div>
    </footer>
  );
}
