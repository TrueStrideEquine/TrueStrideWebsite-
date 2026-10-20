import Image from "next/image";

export function PhilosophySection() {
  return (
    <section
      className="home-philosophy"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="home-philosophy__image-panel">
        <Image
          src="/assets/EveryHorseMatters/every-horse-matters.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 760px) 100vw, 60vw"
          className="home-philosophy__media"
        />
      </div>
      <div className="home-philosophy__copy">
        <p className="home-eyebrow">OUR PHILOSOPHY</p>
        <h2 id="philosophy-title">Every Horse Matters.</h2>
        <p>
          We believe that every horse is unique, valuable and deserves the
          highest standard of care. Our mission is simple — to ensure their
          journey is as safe, comfortable and stress-free as possible.
        </p>
        <p className="home-philosophy__signature">TrueStride Equine</p>
      </div>
    </section>
  );
}
