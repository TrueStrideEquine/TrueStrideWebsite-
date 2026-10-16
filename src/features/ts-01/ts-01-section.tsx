import { MediaPlaceholder } from "@/components/shared/media-placeholder";

export function Ts01Section() {
  return (
    <section
      className="home-product home-section"
      id="ts-01"
      aria-labelledby="product-title"
    >
      <div className="home-product__copy">
        <p className="home-eyebrow">INTRODUCING TS-01</p>
        <h2 id="product-title">Purposeful by Design.</h2>
        <p>
          TS-01 brings the TrueStride point of view to equine transport, with
          horse-first principles and considered details shaping the experience.
        </p>
        <ul className="home-product__themes" aria-label="TS-01 design themes">
          <li>Thoughtful space</li>
          <li>Composed travel</li>
          <li>Considered details</li>
        </ul>
        <a className="home-link home-link--dark" href="#ts-01">
          Explore TS-01 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="home-product__media-wrap">
        <MediaPlaceholder
          label="Approved silver grey TS-01 vehicle photography to be added"
          className="home-product__media"
        />
        <span className="home-image-note">TS-01 · purposeful by design</span>
      </div>
    </section>
  );
}
