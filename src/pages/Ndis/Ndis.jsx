import "./Ndis.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";

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
              <div className="ndis-image-placeholder" role="img" aria-label="Placeholder image">
                <span>PLACEHOLDER</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ndis-supports">
          <div className="content-container">
            <div className="ndis-support-list">
              {supports.map((item) => (
                <article className="ndis-support-item" key={item}>
                  <div className="ndis-support-icon" aria-hidden="true">
                    <span>PLACEHOLDER</span>
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
                <div className="ndis-testimonial-avatar-wrap" aria-hidden="true">
                  <div className="ndis-testimonial-cloud ndis-testimonial-cloud-one"></div>
                  <div className="ndis-testimonial-cloud ndis-testimonial-cloud-two"></div>
                  <div className="ndis-testimonial-hill ndis-testimonial-hill-back"></div>
                  <div className="ndis-testimonial-hill ndis-testimonial-hill-front"></div>
                </div>

                <div className="ndis-testimonial-box">
                  <p>PLACEHOLDER</p>
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

        <ContactCta smallHeading="YOUR NEXT PROJECT STARTS NOW" />
      </main>
    </div>
  );
}

export default Ndis;
