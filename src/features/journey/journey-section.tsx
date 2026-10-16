const journey = [
  {
    number: "01",
    title: "Prepare",
    description: "Every journey begins with thoughtful preparation.",
  },
  {
    number: "02",
    title: "Travel",
    description: "Care and consideration accompany every mile.",
  },
  {
    number: "03",
    title: "Arrive",
    description:
      "A composed arrival, with the horse at the heart of the experience.",
  },
];

export function JourneySection() {
  return (
    <section
      className="home-journey home-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="home-journey__heading">
        <p className="home-eyebrow">THE JOURNEY</p>
        <h2 id="journey-title">From Preparation to Arrival.</h2>
      </div>
      <div className="home-journey__steps">
        {journey.map((step) => (
          <article className="home-journey-step" key={step.number}>
            <span className="home-journey-step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <a className="home-text-link" href="#contact">
        Begin a conversation <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
