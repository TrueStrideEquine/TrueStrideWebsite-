import { MediaPlaceholder } from "@/components/shared/media-placeholder";

const pillars = [
  {
    number: "01",
    title: "Horse First",
    description:
      "Every decision begins with the horse at the heart of the journey.",
  },
  {
    number: "02",
    title: "Thoughtful Engineering",
    description: "Considered design, guided by what matters most to the horse.",
  },
  {
    number: "03",
    title: "Considered Travel",
    description: "A more composed experience from preparation through arrival.",
  },
  {
    number: "04",
    title: "Refined Craftsmanship",
    description:
      "Care expressed through the details of every part of the experience.",
  },
];

export function OurWorldSection() {
  return (
    <section
      className="home-world-group"
      id="our-world"
      aria-labelledby="world-title"
    >
      <div className="home-world home-section">
        <div className="home-world__media-wrap">
          <MediaPlaceholder
            label="Approved horse photography to be added"
            className="home-world__media"
          />
          <span className="home-image-note">A more considered way forward</span>
        </div>
        <div className="home-world__copy">
          <p className="home-eyebrow">OUR WORLD</p>
          <h2 id="world-title">More Than Transportation. A Better Journey.</h2>
          <p>
            TrueStride Equine is shaped by a simple belief: every journey should
            begin with the horse. We bring thoughtful engineering and considered
            care together to create a more composed experience, from the first
            preparation to arrival.
          </p>
          <a className="home-text-link" href="#philosophy">
            See our philosophy <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <section
        className="home-pillars home-section"
        aria-labelledby="pillars-title"
      >
        <div className="home-pillars__intro">
          <p className="home-eyebrow">WHAT GUIDES US</p>
          <h2 id="pillars-title">Care, carried through every detail.</h2>
        </div>
        <div className="home-pillars__list">
          {pillars.map((pillar) => (
            <article className="home-pillar" key={pillar.number}>
              <span className="home-pillar__number">{pillar.number}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-engineering" aria-labelledby="engineering-title">
        <MediaPlaceholder
          label="Approved horse and engineering photography to be added"
          className="home-engineering__media"
        />
        <div className="home-engineering__copy site-container">
          <p className="home-eyebrow">HORSE FIRST. BY DESIGN.</p>
          <h2 id="engineering-title">Designed Around What Matters Most.</h2>
          <p>
            Engineering has a purpose here: to serve a more thoughtful journey
            for the horse at its heart.
          </p>
        </div>
      </section>
    </section>
  );
}
