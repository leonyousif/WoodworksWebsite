import "./ContactCta.css";
import { Link } from "react-router-dom";
import logo from "../../../img/woodworks_transparent.png";
import brainInjuryMattersLogo from "../../../img/brain-injury-matters.png";
import instagramLogo from "../../../img/instagram.png";
import facebookLogo from "../../../img/facebook.png";
import disabilityGatewayLogo from "../../../img/disability-gateway.jpg";
import autismSpectrumAustraliaLogo from "../../../img/autism-spectrum-australia.jpg";

function ContactCta({ smallHeading = "THE WORKSHOP IS WAITING..." }) {
  const mapQuery = encodeURIComponent(
    "9 Glenroy Crescent, St Johns Park, 2176, NSW"
  );

  return (
    <section className="contact-section">
      <div className="content-container">
        <p className="contact-small-heading">{smallHeading}</p>

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
            <a
              href="https://www.facebook.com/woodworksskillsbuildingworkshop"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Woodworks on Facebook"
            >
              <img
                className="social-icon social-icon-facebook"
                src={facebookLogo}
                alt="Facebook"
              />
            </a>
            <img
              className="social-icon social-icon-instagram"
              src={instagramLogo}
              alt="Instagram"
            />
          </div>

          <div className="footer-partners">
            <div className="partner-box">
              <a
                href="https://www.disabilitygateway.gov.au/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Disability Gateway"
              >
                <img
                  className="partner-logo"
                  src={disabilityGatewayLogo}
                  alt="Disability Gateway"
                />
              </a>
            </div>
            <div className="partner-box">
              <a
                href="https://www.aspect.org.au/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Autism Spectrum Australia"
              >
                <img
                  className="partner-logo"
                  src={autismSpectrumAustraliaLogo}
                  alt="Autism Spectrum Australia"
                />
              </a>
            </div>
            <div className="partner-box">
              <a
                href="https://www.braininjurymatters.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Brain Injury Matters"
              >
                <img
                  className="partner-logo"
                  src={brainInjuryMattersLogo}
                  alt="Brain Injury Matters"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
