import Image from "next/image";

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
        <p className="home-eyebrow">THE ART OF EQUINE TRAVEL</p>
        <h1 id="home-title">Every Journey Begins With Care.</h1>
        <p>
          Thoughtfully engineered transport. A calmer, more considered journey
          for the horse at its heart.
        </p>
        <div className="home-actions">
          <a className="home-link home-link--dark" href="#our-world">
            Enter Our World <span aria-hidden="true">↓</span>
          </a>
          <a className="home-link home-link--light" href="#ts-01">
            Discover TS-01 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <span className="home-hero__index" aria-hidden="true">
        TRUESTRIDE EQUINE · 01 / 08
      </span>
    </section>
  );
}
