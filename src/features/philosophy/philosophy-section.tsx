import { MediaPlaceholder } from "@/components/shared/media-placeholder";

export function PhilosophySection() {
  return (
    <section
      className="home-philosophy home-section"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="home-philosophy__media-wrap">
        <MediaPlaceholder
          label="Approved close up horse photography to be added"
          className="home-philosophy__media"
        />
      </div>
      <div className="home-philosophy__copy">
        <p className="home-eyebrow">OUR PHILOSOPHY</p>
        <h2 id="philosophy-title">Care Is in Every Detail.</h2>
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
