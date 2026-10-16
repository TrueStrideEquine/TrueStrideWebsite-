"use client";

import { useRef, useState } from "react";

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
    <form className="contact-form" ref={formRef}>
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
            <option value="general">General enquiry</option>
            <option value="ts-01">TS-01</option>
            <option value="journey">The journey</option>
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
        Check enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="contact-form__delivery-note">
        This form currently checks the required fields in your browser. It does
        not send or store your information.
      </p>
    </form>
  );
}
