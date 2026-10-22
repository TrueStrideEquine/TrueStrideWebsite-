"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "4e0e9185-8fed-4499-8268-126c8fb4f1e5";

function FieldIcon({
  name,
}: {
  name: "name" | "email" | "phone" | "type" | "subject" | "message";
}) {
  const paths = {
    name: (
      <>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </>
    ),
    email: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
    phone: (
      <path d="M7 3.75h3l1.25 4-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 4 1.25v3a1.5 1.5 0 0 1-1.65 1.5A16.5 16.5 0 0 1 5.5 5.4 1.5 1.5 0 0 1 7 3.75Z" />
    ),
    type: (
      <>
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="6" cy="6" r=".5" />
        <circle cx="6" cy="12" r=".5" />
        <circle cx="6" cy="18" r=".5" />
      </>
    ),
    subject: (
      <>
        <path d="M6 3.75h8l4 4V20H6z" />
        <path d="M14 3.75V8h4M9 12h6M9 16h6" />
      </>
    ),
    message: <path d="M4 5.5h16v11H9l-5 3v-14Z" />,
  };

  return (
    <svg
      aria-hidden="true"
      className="contact-field__icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      {paths[name]}
    </svg>
  );
}

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
          <label htmlFor="contact-name">
            <FieldIcon name="name" />
            Name
          </label>
          <input autoComplete="name" id="contact-name" name="name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">
            <FieldIcon name="email" />
            Email
          </label>
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
          <label htmlFor="contact-phone">
            <FieldIcon name="phone" />
            Phone
          </label>
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
          <label htmlFor="contact-enquiry-type">
            <FieldIcon name="type" />
            Enquiry type
          </label>
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
        <label htmlFor="contact-subject">
          <FieldIcon name="subject" />
          Subject
        </label>
        <input id="contact-subject" name="subject" required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">
          <FieldIcon name="message" />
          Message
        </label>
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
