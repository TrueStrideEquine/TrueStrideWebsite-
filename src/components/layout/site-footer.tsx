import Link from "next/link";
import { contactCallToAction, siteNavigation } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link className="site-wordmark" href="/">
              <span className="site-wordmark__name">TRUESTRIDE</span>
              <span className="site-wordmark__descriptor">EQUINE</span>
            </Link>
            <p className="site-footer__statement">
              Horse first. Thoughtful engineering. A more considered journey.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {siteNavigation
              .filter((item) => item.href !== contactCallToAction.href)
              .map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            <a href={contactCallToAction.href}>Enquire</a>
          </nav>
        </div>

        <div className="site-footer__legal" id="legal">
          <span>© 2026 TrueStride Equine. All rights reserved.</span>
          <nav className="site-footer__legal-links" aria-label="Legal links">
            <a href="#legal">Privacy notice (forthcoming)</a>
            <a href="#legal">Terms (forthcoming)</a>
          </nav>
          <span>Thoughtfully considered equine travel.</span>
        </div>
      </div>
    </footer>
  );
}
