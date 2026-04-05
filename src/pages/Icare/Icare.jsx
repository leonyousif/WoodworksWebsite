import "./Icare.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";
import logo from "../../img/woodwords logo.jpg";
import alexImage from "../../img/alex sanding.jpg";
import dadImage from "../../img/dad.jpg";

function Icare() {
  const outcomes = [
    "Rebuilding confidence and motivation",
    "Strengthening fine motor skills and coordination",
    "Improving concentration and task focus",
    "Developing practical and vocational skills",
    "Increasing capacity for work-related activities",
  ];

  const dots = Array.from({ length: 5 });

  return (
    <div className="icare-page">
      <SiteHeader />

      <section
        className="icare-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 29, 18, 0.5), rgba(44, 29, 18, 0.5)), url(${heroImage})`,
        }}
      >
        <div className="content-container">
          <h1>ICARE</h1>
        </div>
      </section>

      <main>
        <section className="icare-overview">
          <div className="content-container icare-overview-grid">
            <div className="icare-overview-left">
              <div className="icare-overview-image-card">
                <img src={alexImage} alt="Participant working on a woodworking project" />
              </div>

              <div className="icare-overview-copy-card">
                <p>
                  Our workshop allows participants to progress at their own pace
                  while experiencing a sense of achievement, purpose, and
                  capability through the projects they create.
                </p>

                <p>
                  For many people, engaging in meaningful practical work can
                  play an important role in recovery, skill rebuilding, and
                  preparation for returning to work.
                </p>

                <Link className="icare-session-link" to="/contact">
                  View our sessions and hours
                </Link>
              </div>
            </div>

            <div className="icare-overview-right">
              <div className="icare-intro-card">
                <p>
                  Our workshop also supports individuals funded through iCare
                  who are recovering from an accident or workplace injury and
                  who would benefit from practical, hands-on skill building.
                </p>

                <p>
                  Woodworks provides a practical, hands-on environment where
                  participants can gradually re-engage with structured activity
                  while developing practical abilities in a safe and supportive
                  setting.
                </p>
              </div>

              <article className="icare-outcomes-card">
                <h2>
                  Through guided woodworking projects, participants may work on:
                </h2>

                <div className="icare-outcomes-grid">
                  {outcomes.map((item, index) => (
                    <div className="icare-outcome-item" key={item}>
                      <span className="icare-outcome-number">{index + 1}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="icare-testimonials">
          <div className="content-container">
            <h2>SUPPORT COORDINATOR TESTIMONIALS</h2>

            <div className="icare-testimonial-row">
              <button className="icare-arrow" type="button" aria-label="Previous testimonial">
                &#10094;
              </button>

              <div className="icare-testimonial-center">
                <div className="icare-testimonial-avatar-wrap">
                  <img
                    className="icare-testimonial-avatar"
                    src={dadImage}
                    alt="Support coordinator testimonial"
                  />
                </div>

                <div className="icare-testimonial-box">
                  <p>
                    Woodworks offers a supportive setting where participants can
                    rebuild confidence, re-engage in purposeful activity, and
                    develop practical skills that connect with real-world goals.
                  </p>
                </div>

                <div className="icare-testimonial-dots" aria-label="Testimonial slides">
                  {dots.map((_, index) => (
                    <span key={index} className={index === 0 ? "active" : ""}></span>
                  ))}
                </div>
              </div>

              <button className="icare-arrow" type="button" aria-label="Next testimonial">
                &#10095;
              </button>
            </div>
          </div>
        </section>

        <section className="icare-contact">
          <div className="content-container">
            <div className="icare-contact-copy">
              <h3>SEE WHAT YOU COULD ACHIEVE</h3>

              <div className="icare-contact-block">
                <h4>Contact us here</h4>
                <p>
                  We&apos;re here to help you with any questions. Reach out to
                  us for program details or to discuss how we can support you.
                </p>
              </div>

              <div className="icare-contact-block">
                <h4>Email us</h4>
                <p>We&apos;d love to hear from you.</p>
                <Link to="/contact" className="icare-session-link icare-contact-link">
                  Use the contact form
                </Link>
              </div>

              <div className="icare-contact-block">
                <h4>Call us</h4>
                <p>Connect with us directly.</p>
                <p>0414 481 947</p>
              </div>

              <div className="icare-contact-block">
                <h4>Our location</h4>
                <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="icare-footer">
          <div className="content-container icare-footer-inner">
            <img className="icare-footer-logo" src={logo} alt="Woodworks logo" />

            <div className="icare-footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>

            <div className="icare-footer-partners" aria-label="Partner organisations">
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

export default Icare;
