import "./IndividualisedPrograms.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";
import logo from "../../img/woodwords logo.jpg";
import alexImage from "../../img/alex sanding.jpg";
import dadImage from "../../img/dad.jpg";

function IndividualisedPrograms() {
  const showcaseItems = [
    {
      image: alexImage,
      alt: "Participant holding a Woodworks project sign",
      quote:
        "Woodworks is a great school for people with all abilities to come learn skills.",
      author: "Alex",
    },
    {
      image: dadImage,
      alt: "Participant holding a timber tray project",
      quote:
        "Each project helps build confidence, focus, and a real sense of achievement.",
      author: "Participant feedback",
    },
    {
      image: null,
      alt: "",
      quote: "It is more than a workshop.",
      author: "Dave",
      accent: true,
    },
  ];

  const sessionTimes = [
    "Monday: 9am - 3pm",
    "Tuesday: 9am - 6pm",
    "Wednesday: 9am - 3pm",
    "Thursday: 9am - 6pm",
    "Friday: 9am - 4pm",
  ];

  return (
    <div className="individualised-page">
      <SiteHeader />

      <section
        className="individualised-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 29, 18, 0.48), rgba(44, 29, 18, 0.48)), url(${heroImage})`,
        }}
      >
        <div className="content-container">
          <h1>INDIVIDUALISED PROGRAMS</h1>
        </div>
      </section>

      <main>
        <section className="individualised-intro">
          <div className="content-container intro-narrow">
            <h2>NO TWO PEOPLE ARE THE SAME. NEITHER ARE THEIR PROJECTS</h2>

            <p>
              At Woodworks, every program begins with choice. We meet with each
              participant to talk about their interests, needs, abilities, and
              personal goals for attending the workshop.
            </p>

            <p>
              From this conversation, our team designs an individualised
              program that supports the participant&apos;s goals and
              capacity-building outcomes. Projects and activities are tailored
              to the individual, allowing participants to develop skills at
              their own pace while working on projects that are meaningful to
              them.
            </p>

            <p>
              Participants receive ongoing mentoring, guidance, and instruction
              throughout their time in the workshop. Getting to know each
              participant is an important part of their progress, and we value
              regular communication to review skill development and support
              their personal outcomes.
            </p>

            <p>
              Our approach is guided by the three C&apos;s: Confidence,
              Capability, and Community. Through hands-on learning,
              participants build confidence in themselves, develop practical
              capability, and become part of a welcoming workshop community.
            </p>
          </div>
        </section>

        <section className="individualised-showcase">
          <div className="content-container">
            <h2>PROJECTS BUILT WITH CONFIDENCE AND CAPABILITY</h2>

            <div className="showcase-frame">
              <button className="showcase-arrow" type="button" aria-label="Previous showcase">
                &#8249;
              </button>

              <div className="showcase-grid">
                {showcaseItems.map((item) => (
                  <article
                    className={`showcase-card ${item.accent ? "accent-card" : ""}`}
                    key={item.author}
                  >
                    <div className="showcase-image-wrap">
                      {item.image ? (
                        <img src={item.image} alt={item.alt} />
                      ) : (
                        <div className="showcase-accent-panel">
                          More tailored projects
                        </div>
                      )}
                    </div>

                    <blockquote>
                      <p>&ldquo;{item.quote}&rdquo;</p>
                      <footer>- {item.author}</footer>
                    </blockquote>
                  </article>
                ))}
              </div>

              <button className="showcase-arrow" type="button" aria-label="Next showcase">
                &#8250;
              </button>
            </div>
          </div>
        </section>

        <section className="individualised-session-details">
          <div className="content-container session-details-grid">
            <article className="session-copy-card">
              <h3>SESSION TIMES</h3>

              <p>
                Woodworks offers structured workshop sessions throughout the
                week. Each session provides participants with dedicated time to
                work on their projects, develop skills, and enjoy the process
                of creating something meaningful.
              </p>

              <p>
                We offer 2, 3, and 4-hour sessions, depending on each
                participant&apos;s needs and capabilities. Finding the right
                session length is key to maximising productivity, social
                capacity, and overall endurance and stamina.
              </p>
            </article>

            <article className="service-copy-card">
              <h3>SERVICE HOURS</h3>

              <p>
                Our workshop operates during weekday hours, with additional
                after-school sessions available for participants needing later
                support.
              </p>

              <Link to="/contact" className="service-link">
                Learn more here
              </Link>
            </article>
          </div>
        </section>

        <section className="individualised-timetable">
          <div className="content-container">
            <div className="timetable-panel">
              {sessionTimes.map((time) => (
                <p key={time}>{time}</p>
              ))}
            </div>

            <div className="timetable-copy">
              <p>
                Woodworks follows the NSW school term calendar and closes
                during the school holidays. We have found that taking a break
                between terms helps participants maintain focus, motivation, and
                enthusiasm for the program when sessions resume.
              </p>
            </div>
          </div>
        </section>

        <section className="individualised-contact">
          <div className="content-container individualised-contact-grid">
            <div className="individualised-contact-copy">
              <h3>INTERESTED IN SESSIONS?</h3>

              <div className="contact-detail-block">
                <h4>Contact us here</h4>
                <p>
                  We&apos;re here to help you with any questions. Reach out to
                  us for program details or to discuss how we can support you.
                </p>
              </div>

              <div className="contact-detail-block">
                <h4>Email us</h4>
                <p>We&apos;d love to hear from you.</p>
                <Link to="/contact" className="service-link">
                  Use the contact form
                </Link>
              </div>

              <div className="contact-detail-block">
                <h4>Call us</h4>
                <p>Connect with us directly.</p>
                <p>0414 481 947</p>
              </div>

              <div className="contact-detail-block">
                <h4>Our location</h4>
                <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
              </div>
            </div>

            <div className="individualised-contact-panel">
              <div className="individualised-mini-card">
                <span>Flexible support</span>
                <strong>Choice-led sessions</strong>
              </div>

              <div className="individualised-mini-card">
                <span>Hands-on growth</span>
                <strong>Confidence, capability, community</strong>
              </div>
            </div>
          </div>
        </section>

        <footer className="individualised-footer">
          <div className="content-container individualised-footer-inner">
            <img
              className="individualised-footer-logo"
              src={logo}
              alt="Woodworks logo"
            />

            <div className="individualised-footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>

            <div className="individualised-footer-partners" aria-label="Partner organisations">
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

export default IndividualisedPrograms;
