import Image from "next/image";

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
        <p className="home-eyebrow">TRUESTRIDE JOURNEY</p>
        <h2 id="true-stride-journey-title">A More Considered Way Forward.</h2>
      </div>
    </section>
  );
}
