import Image from "next/image";

export function OurWorldSection() {
  return (
    <section
      className="home-world"
      id="our-world"
      aria-labelledby="world-title"
    >
      <Image
        src="/assets/OurWorld/our-world-horse-and-handler.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="home-world__media"
      />
      <div className="home-world__copy">
        <p className="home-eyebrow">OUR WORLD</p>
        <h2 id="world-title">
          More Than
          <br />
          Transportation. A
          <br />
          Better Journey.
        </h2>
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
      <p className="home-world__caption">MORE CONSIDERED WAY FORWARD</p>
    </section>
  );
}
