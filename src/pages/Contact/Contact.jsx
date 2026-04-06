import "./Contact.css";
import { Link } from "react-router-dom";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";
import workshopImage from "../../img/alex sanding.jpg";

function Contact() {
  const successUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/contact/success`
      : "/contact/success";

  return (
    <div className="contact-page">
      <SiteHeader />

      <section
        className="contact-hero"
        style={{ backgroundImage: `linear-gradient(rgba(41, 29, 18, 0.34), rgba(41, 29, 18, 0.34)), url(${heroImage})` }}
      >
        <div className="contact-hero-overlay">
          <div className="content-container">
            <h1>CONTACT US</h1>
          </div>
        </div>
      </section>

      <main>
        <section className="contact-info-section">
          <div className="content-container contact-grid">
            <div className="contact-cards">
              <div className="contact-card">
                <h3>Email Us</h3>
                <a className="contact-card-link" href="#contact-form">
                  Use the contact form below
                </a>
              </div>

              <div className="contact-card">
                <h3>Call Us</h3>
                <p>0414 481 947</p>
              </div>

              <div className="contact-card">
                <h3>Find Us</h3>
                <p>9 Glenroy Crescent, St Johns Park, NSW</p>
              </div>
            </div>

            <div
              className="contact-hours"
              style={{ backgroundImage: `linear-gradient(rgba(245, 245, 245, 0.72), rgba(245, 245, 245, 0.72)), url(${workshopImage})` }}
            >
              <h3>Workshop Hours:</h3>

              <ul>
                <li>Monday: 9am - 3pm</li>
                <li>Tuesday: 9am - 6pm</li>
                <li>Wednesday: 9am - 3pm</li>
                <li>Thursday: 9am - 6pm</li>
                <li>Friday: 9am - 4pm</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="content-container">
            <div className="cta-box" id="contact-form">
              <div className="contact-form-heading">
                <h2>Email Us</h2>
                <p>
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll get back to you as soon as we can.
                </p>
                <p className="contact-form-email">
                  Use the form below and we&apos;ll get back to you as soon as we can.
                </p>
              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/leon.yousif01@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_next" value={successUrl} />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Woodworks website enquiry"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="contact-form-grid">
                  <label className="contact-field">
                    <span>Name</span>
                    <input type="text" name="name" required />
                  </label>

                  <label className="contact-field">
                    <span>Email</span>
                    <input type="email" name="email" required />
                  </label>

                  <label className="contact-field">
                    <span>Phone</span>
                    <input type="tel" name="phone" />
                  </label>

                  <label className="contact-field">
                    <span>Program of interest</span>
                    <select name="program">
                      <option>General enquiry</option>
                      <option>NDIS</option>
                      <option>Individualised Programs</option>
                      <option>After school Program</option>
                      <option>ICARE</option>
                    </select>
                  </label>
                </div>

                <label className="contact-field contact-field-full">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell us a little about what support or workshop information you need."
                  ></textarea>
                </label>

                <div className="contact-form-actions">
                  <button type="submit" className="contact-submit-button">
                    Send enquiry
                  </button>
                  <Link to="/" className="contact-secondary-link">
                    Back to home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-bottom-image">
          <div className="content-container">
            <div
              className="contact-bottom-image-box"
              style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.48), rgba(255, 255, 255, 0.48)), url(${workshopImage})` }}
            ></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
