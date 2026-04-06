import { Link } from "react-router-dom";
import "./ContactSuccess.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";

function ContactSuccess() {
  return (
    <div className="contact-success-page">
      <SiteHeader />

      <section
        className="contact-success-hero"
        style={{ backgroundImage: `linear-gradient(rgba(41, 29, 18, 0.34), rgba(41, 29, 18, 0.34)), url(${heroImage})` }}
      >
        <div className="contact-success-hero-overlay">
          <div className="content-container">
            <h1>THANK YOU</h1>
          </div>
        </div>
      </section>

      <main>
        <section className="contact-success-section">
          <div className="content-container">
            <div className="contact-success-card">
              <p className="contact-success-eyebrow">Enquiry received</p>
              <h2>We&apos;ve got your message.</h2>
              <p>
                Thanks for reaching out to Woodworks. We&apos;ll review your enquiry and get back to you as soon as we can.
              </p>
              <div className="contact-success-actions">
                <Link to="/" className="contact-success-button">
                  Back to home
                </Link>
                <Link to="/contact" className="contact-success-link">
                  Send another enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactSuccess;
