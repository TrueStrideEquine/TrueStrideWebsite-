"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "4e0e9185-8fed-4499-8268-126c8fb4f1e5";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice("Sending your enquiry…");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const result: { success?: boolean } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setNotice("Thank you. Your enquiry has been sent successfully.");
    } catch {
      setNotice(
        "We couldn’t send your enquiry. Please try again or email equinetruestride@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="access_key"
        type="hidden"
        value={WEB3FORMS_ACCESS_KEY}
      />
      <input
        aria-hidden="true"
        autoComplete="off"
        name="botcheck"
        tabIndex={-1}
        type="checkbox"
        style={{ display: "none" }}
      />
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
          <label htmlFor="contact-phone">Phone</label>
          <input
            autoComplete="tel"
            id="contact-phone"
            inputMode="tel"
            maxLength={13}
            name="phone"
            pattern="\\+91[6-9][0-9]{9}"
            placeholder="+91XXXXXXXXXX"
            title="Enter an Indian mobile number starting with +91, followed by 10 digits."
            type="tel"
            required
          />
        </div>
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
      </div>
      <div className="contact-field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" required />
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
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Submit Enquiry"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </motion.form>
  );
}
