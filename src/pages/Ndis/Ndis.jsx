import "./Ndis.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";

function Ndis() {
  const supports = [
    "Capacity Building - Increased Social and Community Participation",
    "Core Supports - Assistance with Social and Community Participation",
  ];

  const testimonials = [
    {
      quote:
        "Jenny and Paul have created something really special at Woodworks. Their passion, care, and commitment make a lasting impact on everyone who walks through their doors.",
      attribution: ["Support Worker Jayda"],
    },
    {
      quote:
        "My son has been on his woodworking journey for over three years now. The knowledge he has gained is truly beyond words. He has progressed from basics to confidently using a wide range of tools and completing projects independently. Jenny and Paul are incredibly dedicated; they go above and beyond to support each individual and help them reach their full potential. We are truly blessed to have met the woodworks team.",
      attribution: ["Monica"],
    },
    {
      quote:
        "It’s the atmosphere and diversity of each person to achieve outcomes and develop skills",
      attribution: ["Craig", "Lioness care Support services"],
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

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
              <button
                className="ndis-arrow"
                type="button"
                aria-label="Previous testimonial"
                onClick={showPreviousTestimonial}
              >
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
                  <div className="ndis-testimonial-copy">
                    <p>&ldquo;{currentTestimonial.quote}&rdquo;</p>

                    <footer className="ndis-testimonial-attribution">
                      {currentTestimonial.attribution.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </footer>
                  </div>
                </div>

                <div className="ndis-testimonial-dots" aria-label="Testimonial slides">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`ndis-testimonial-dot ${index === activeTestimonial ? "active" : ""}`}
                      aria-label={`Show testimonial ${index + 1}`}
                      aria-pressed={index === activeTestimonial}
                      onClick={() => setActiveTestimonial(index)}
                    ></button>
                  ))}
                </div>
              </div>

              <button
                className="ndis-arrow"
                type="button"
                aria-label="Next testimonial"
                onClick={showNextTestimonial}
              >
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
