import "./ContactCta.css";
import { Link } from "react-router-dom";
import logo from "../../../img/woodwords logo.jpg";

function ContactCta() {
  const mapQuery = encodeURIComponent(
    "9 Glenroy Crescent, St Johns Park, 2176, NSW"
  );

  return (
    <section className="contact-section">
      <div className="content-container">
        <p className="contact-small-heading">THE WORKSHOP IS WAITING...</p>

        <div className="contact-grid">
          <div className="contact-left">
            <h2>Get in Touch</h2>

            <p className="contact-intro">
              We&apos;re here to help you with any questions. Reach out to us for
              program details or to discuss how we can support you.
            </p>

            <div className="contact-block">
              <h3>Email Us</h3>
              <p>We&apos;d love to hear from you.</p>
              <Link className="contact-inline-link" to="/contact">
                Use the contact form
              </Link>
            </div>

            <div className="contact-block">
              <h3>Call Us</h3>
              <p>Connect with us directly.</p>
              <p>0414 481 947</p>
            </div>

            <div className="contact-block">
              <h3>Our Location</h3>
              <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
            </div>
          </div>

          <div className="contact-right">
            <iframe
              className="map-embed"
              title="Woodworks location map"
              src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-footer">
          <img className="footer-logo" src={logo} alt="Woodworks logo" />

          <div className="footer-socials">
            <div className="social-circle">f</div>
            <div className="social-circle">ig</div>
          </div>

          <div className="footer-partners">
            <div className="partner-box">abi</div>
            <div className="partner-box">aspect</div>
            <div className="partner-box">Brain Injury Matters</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
