import "./Ndis.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";
import logo from "../../img/woodwords logo.jpg";
import alexImage from "../../img/alex sanding.jpg";
import dadImage from "../../img/dad.jpg";

function Ndis() {
  const supports = [
    "Capacity Building - Increased Social and Community Participation",
    "Core Supports - Assistance with Social and Community Participation",
  ];

  const dots = Array.from({ length: 5 });

  return (
    <div className="ndis-page">
      <SiteHeader />

      <section
        className="ndis-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 29, 18, 0.42), rgba(44, 29, 18, 0.42)), url(${heroImage})`,
        }}
      >
        <div className="content-container">
          <h1>NDIS</h1>
        </div>
      </section>

      <main>
        <section className="ndis-overview">
          <div className="content-container ndis-overview-grid">
            <div className="ndis-overview-copy">
              <p>
                Our program focuses on capacity building, helping participants
                develop practical abilities while also strengthening
                communication, social connection, and personal confidence.
                Flexible session times are available to suit individual needs.
                <Link to="/individualised-programs" className="ndis-inline-link">
                  {" "}
                  Learn more about our programs and availability.
                </Link>
              </p>

              <h2>
                Participants may be able to access our program through NDIS
                supports related to:
              </h2>
            </div>

            <div className="ndis-overview-image">
              <img src={dadImage} alt="Woodworks participants building together" />
            </div>
          </div>
        </section>

        <section className="ndis-supports">
          <div className="content-container">
            <div className="ndis-support-list">
              {supports.map((item) => (
                <article className="ndis-support-item" key={item}>
                  <div className="ndis-support-icon" aria-hidden="true">
                    <span className="ndis-support-ring"></span>
                    <span className="ndis-support-tool"></span>
                  </div>

                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ndis-testimonials">
          <div className="content-container">
            <h2>TESTIMONIALS</h2>

            <div className="ndis-testimonial-row">
              <button className="ndis-arrow" type="button" aria-label="Previous testimonial">
                &#10094;
              </button>

              <div className="ndis-testimonial-center">
                <div className="ndis-testimonial-avatar-wrap">
                  <img
                    className="ndis-testimonial-avatar"
                    src={alexImage}
                    alt="Participant testimonial"
                  />
                </div>

                <div className="ndis-testimonial-box">
                  <p>
                    Woodworks gives participants a welcoming place to build
                    practical skills, confidence, and connection through
                    meaningful hands-on projects.
                  </p>
                </div>

                <div className="ndis-testimonial-dots" aria-label="Testimonial slides">
                  {dots.map((_, index) => (
                    <span key={index} className={index === 0 ? "active" : ""}></span>
                  ))}
                </div>
              </div>

              <button className="ndis-arrow" type="button" aria-label="Next testimonial">
                &#10095;
              </button>
            </div>
          </div>
        </section>

        <section className="ndis-contact">
          <div className="content-container">
            <div className="ndis-contact-copy">
              <h3>YOUR NEXT PROJECT STARTS NOW</h3>

              <div className="ndis-contact-block">
                <h4>Contact us here</h4>
                <p>
                  We&apos;re here to help you with any questions. Reach out to
                  us for program details or to discuss how we can support you.
                </p>
              </div>

              <div className="ndis-contact-block">
                <h4>Email us</h4>
                <p>We&apos;d love to hear from you.</p>
                <Link to="/contact" className="ndis-inline-link">
                  Use the contact form
                </Link>
              </div>

              <div className="ndis-contact-block">
                <h4>Call us</h4>
                <p>Connect with us directly.</p>
                <p>0414 481 947</p>
              </div>

              <div className="ndis-contact-block">
                <h4>Our location</h4>
                <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="ndis-footer">
          <div className="content-container ndis-footer-inner">
            <img className="ndis-footer-logo" src={logo} alt="Woodworks logo" />

            <div className="ndis-footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>

            <div className="ndis-footer-partners" aria-label="Partner organisations">
              <span>abi services</span>
              <span>aspect</span>
              <span>Brain Injury Matters</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Ndis;
