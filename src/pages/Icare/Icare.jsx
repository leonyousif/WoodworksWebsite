import "./Icare.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero-icare.jpeg";
import iCareOverviewImage from "../../img/icare-overview.jpeg";
import iCareProgressImage from "../../assets/icare-progress-home.png";

function Icare() {
  const testimonials = [
    {
      paragraphs: [
        "In my professional experience as a Recreation Therapist, Woodworks at St Johns Park provides a safe and supportive environment for individuals to return to woodworking following injury. Under the guidance of an experienced vocational instructor specialising in woodwork, participants are supported to re-engage in meaningful, skill-based activity aligned with their rehabilitation goals.",
        "The program effectively encourages the use of affected limbs where appropriate and adapts tasks to suit individual abilities, promoting functional recovery in a practical and engaging way. It also offers a valuable social space, where participants can connect with others who share similar interests and experiences, fostering confidence, connection, and overall wellbeing.",
        "Overall, this is a well-structured and therapeutically beneficial program that integrates rehabilitation with meaningful occupation.",
      ],
      attribution: ["Amanda Vizas", "Senior Recreation Therapist and Director"],
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
    <div className="icare-page">
      <SiteHeader />

      <section
        className="icare-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 88, 88, 0.44), rgba(88, 88, 88, 0.44)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 28%",
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
                <img
                  className="icare-overview-image"
                  src={iCareOverviewImage}
                  alt="Participant working on a woodworking machine in the Woodworks workshop"
                />
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

                <div className="icare-placeholder-image">
                  <img
                    src={iCareProgressImage}
                    alt="Illustration showing improved confidence, concentration, task focus, and work capacity"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="icare-testimonials">
          <div className="content-container">
            <h2>SUPPORT COORDINATOR TESTIMONIALS</h2>

            <div className="icare-testimonial-row">
              <button
                className="icare-arrow"
                type="button"
                aria-label="Previous testimonial"
                onClick={showPreviousTestimonial}
              >
                &#10094;
              </button>

              <div className="icare-testimonial-center">
                <div className="icare-testimonial-box">
                  <div className="icare-testimonial-copy">
                    {currentTestimonial.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    <footer className="icare-testimonial-attribution">
                      {currentTestimonial.attribution.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </footer>
                  </div>
                </div>

                <div className="icare-testimonial-dots" aria-label="Testimonial slides">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`icare-testimonial-dot ${index === activeTestimonial ? "active" : ""}`}
                      aria-label={`Show testimonial ${index + 1}`}
                      aria-pressed={index === activeTestimonial}
                      onClick={() => setActiveTestimonial(index)}
                    ></button>
                  ))}
                </div>
              </div>

              <button
                className="icare-arrow"
                type="button"
                aria-label="Next testimonial"
                onClick={showNextTestimonial}
              >
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
