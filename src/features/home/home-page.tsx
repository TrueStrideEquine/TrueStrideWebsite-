import { ContactSection } from "@/features/contact/contact-section";
import { HeroSection } from "@/features/home/hero-section";
import { JourneySection } from "@/features/journey/journey-section";
import { OurWorldSection } from "@/features/our-world/our-world-section";
import { PhilosophySection } from "@/features/philosophy/philosophy-section";
import { OurPurposeSection } from "@/features/philosophy/our-purpose-section";
import { Ts01Section } from "@/features/ts-01/ts-01-section";
import { TrueStrideJourneySection } from "@/features/journey/true-stride-journey-section";

export default function HomePage() {
  return (
    <main className="home-page" id="main-content">
      <HeroSection />
      <OurWorldSection />
      <OurPurposeSection />
      <PhilosophySection />
      <Ts01Section />
      <JourneySection />
      <TrueStrideJourneySection />
      <ContactSection />
    </main>
  );
}
