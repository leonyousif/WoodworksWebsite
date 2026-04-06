import "./Icare.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";

function Icare() {
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
          <div className="content-container icare-overview-layout">
            <div className="icare-overview-top">
              <div className="icare-overview-image-card">
                <div className="icare-image-placeholder" role="img" aria-label="Placeholder image">
                  <span>PLACEHOLDER</span>
                </div>
              </div>

              <div className="icare-intro-copy">
                <p>
                  Our workshop also supports individuals funded through iCare
                  who are recovering from an accident or workplace injury and
                  working towards rebuilding skills and confidence.
                </p>

                <p>
                  Woodworks provides a practical, hands-on environment where
                  participants can gradually re-engage with structured activity
                  while developing practical abilities in a safe and supportive setting.
                </p>
              </div>
            </div>

            <div className="icare-overview-bottom">
              <div className="icare-progress-copy">
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
                  VIEW OUR SESSIONS AND HOURS
                </Link>
              </div>

              <article className="icare-placeholder-card">
                <h2>
                  Through guided woodworking projects, participants may work on:
                </h2>

                <div className="icare-placeholder-image" role="img" aria-label="Placeholder image">
                  <span>PLACEHOLDER</span>
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
                <div className="icare-testimonial-avatar-wrap" aria-hidden="true">
                  <div className="icare-testimonial-cloud icare-testimonial-cloud-one"></div>
                  <div className="icare-testimonial-cloud icare-testimonial-cloud-two"></div>
                  <div className="icare-testimonial-hill icare-testimonial-hill-back"></div>
                  <div className="icare-testimonial-hill icare-testimonial-hill-front"></div>
                </div>

                <div className="icare-testimonial-box">
                  <p>PLACEHOLDER</p>
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

        <ContactCta smallHeading="SEE WHAT YOU COULD ACHIEVE" />
      </main>
    </div>
  );
}

export default Icare;
