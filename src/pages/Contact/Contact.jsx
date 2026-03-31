import "./Contact.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import logo from "../../img/woodwords logo.jpg";
import heroImage from "../../assets/hero.png";
import workshopImage from "../../img/alex sanding.jpg";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-top-brand">
        <img className="contact-brand-logo" src={logo} alt="Woodworks logo" />
        <p>A Capacity and Skills Building Workshop</p>
      </div>

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
                <p>Email@woodworksonline.com.au</p>
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
            <div className="cta-box">
              <h2>SEND US A MESSAGE BACK END</h2>
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
