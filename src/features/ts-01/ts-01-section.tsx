"use client";

import Image from "next/image";
import { useState } from "react";

const specifications = [
  "Horse Capacity",
  "Force Traveller Base",
  "Side & Rear Ramps",
  "Exterior Design",
  "Lighting & Visibility",
  "Loading Access",
];

export function Ts01Section() {
  const [openSpecification, setOpenSpecification] = useState<number | null>(
    null,
  );

  return (
    <section
      className="machine-section"
      id="ts-01"
      aria-labelledby="machine-title"
    >
      <div className="machine-section__reveal">
        <Image
          className="machine-section__background"
          src="/assets/Exterior/exterior-vehicle-2.png"
          alt="Cinematic exterior view of the TrueStride TS-01 horse transport vehicle"
          fill
          priority={false}
          sizes="100vw"
        />
        <div className="machine-section__veil" aria-hidden="true" />

        <div className="machine-section__intro">
          <p className="machine-section__index">02 / 05</p>
          <p className="machine-section__eyebrow">THE MACHINE</p>
          <h2 id="machine-title">TS-01</h2>
          <p className="machine-section__statement">
            Built for the journey. Designed for the horse.
          </p>
        </div>

        <div className="machine-section__details">
          <p className="machine-section__details-label">
            A considered approach
          </p>
          <div className="machine-specifications">
            {specifications.map((specification, index) => {
              const isOpen = openSpecification === index;
              const detailId = `machine-specification-${index}`;

              return (
                <div className="machine-specification" key={specification}>
                  <button
                    type="button"
                    className="machine-specification__toggle"
                    aria-expanded={isOpen}
                    aria-controls={detailId}
                    onClick={() => setOpenSpecification(isOpen ? null : index)}
                  >
                    <span>{specification}</span>
                    <span
                      className="machine-specification__icon"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="machine-specification__detail" id={detailId}>
                      Further details will be shared once specifications are
                      confirmed.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
