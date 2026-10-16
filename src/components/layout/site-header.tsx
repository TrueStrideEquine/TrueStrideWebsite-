"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactCallToAction, siteNavigation } from "@/config/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const hero = document.getElementById("home-hero");
    if (!hero) return;

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage || typeof IntersectionObserver === "undefined") return;

    const sections = siteNavigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];

        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const headerClassName = [
    "site-header",
    isHomePage && !isScrolled ? "site-header--transparent" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <div className="site-container site-header__inner">
        <Link
          className="site-wordmark"
          href="/"
          aria-label="TrueStride Equine home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="site-wordmark__name">TRUESTRIDE</span>
          <span className="site-wordmark__descriptor">EQUINE</span>
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Main navigation">
          {siteNavigation.map((item) => (
            <a
              className="site-nav-link"
              href={item.href}
              key={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? "location" : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="site-header__cta"
            href={contactCallToAction.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {contactCallToAction.label}
          </a>
        </nav>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-icon" aria-hidden="true" />
        </button>
      </div>

      <div
        className="site-header__mobile-panel"
        id="mobile-navigation"
        hidden={!isMenuOpen}
      >
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {siteNavigation.map((item) => (
            <a
              className="site-nav-link"
              href={item.href}
              key={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? "location" : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="site-header__cta site-header__mobile-cta"
            href={contactCallToAction.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {contactCallToAction.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
