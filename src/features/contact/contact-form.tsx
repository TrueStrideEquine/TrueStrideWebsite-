"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [notice, setNotice] = useState("");

  function handleCheck() {
    const form = formRef.current;
    if (!form) return;

    if (!form.reportValidity()) {
      setNotice("Please complete the required fields before continuing.");
      return;
    }

    setNotice(
      "Your message has not been sent. Enquiry delivery is not connected yet.",
    );
  }

  return (
    <motion.form className="contact-form" ref={formRef}>
      <div className="contact-form__row">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input autoComplete="name" id="contact-name" name="name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            type="email"
            required
          />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-field">
          <label htmlFor="contact-enquiry-type">Enquiry type</label>
          <select
            id="contact-enquiry-type"
            name="enquiryType"
            defaultValue=""
            required
          >
            <option disabled value="">
              Select an enquiry type
            </option>
            <option value="horse-transportation">
              Horse transportation enquiry
            </option>
            <option value="stud-farm">Stud farm or equestrian club</option>
            <option value="business-partnership">Business partnership</option>
            <option value="ts-01-collaboration">
              TS-01 design or collaboration
            </option>
            <option value="general">General enquiry</option>
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" required />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={6} required />
      </div>
      <p className="contact-form__notice" role="status" aria-live="polite">
        {notice}
      </p>
      <button
        className="home-link home-link--light"
        type="button"
        onClick={handleCheck}
      >
        Submit Enquiry <span aria-hidden="true">↗</span>
      </button>
    </motion.form>
  );
}
