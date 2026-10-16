import { ContactForm } from "@/features/contact/contact-form";

export function ContactSection() {
  return (
    <section
      className="home-contact-section home-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="home-contact-section__intro">
        <p className="home-eyebrow">CONTACT</p>
        <h2 id="contact-title">Let’s Begin a Conversation.</h2>
        <p>We’d be pleased to hear from you.</p>
      </div>
      <ContactForm />
    </section>
  );
}
