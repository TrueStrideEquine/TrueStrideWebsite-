import Image from "next/image";

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
        <p className="home-eyebrow">OUR PURPOSE</p>
        <h2 id="our-purpose-title">Care Is in Every Detail.</h2>
        <p>
          The smallest decisions shape the whole experience. We believe care
          should be present in how a journey is imagined, prepared and made.
        </p>
        <a className="home-text-link" href="#contact">
          Continue the conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
