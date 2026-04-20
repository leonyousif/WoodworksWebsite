import "./IndividualisedPrograms.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero-individualised.jpeg";
import peterImage from "../../img/individualised-peter.jpeg";
import paulImage from "../../img/individualised-paul.jpeg";
import priscillaImage from "../../img/individualised-priscilla.jpg";
import maxImage from "../../img/individualised-max.jpg";

function IndividualisedPrograms() {
  const showcaseItems = [
    {
      image: peterImage,
      alt: "Peter holding a finished wooden tray",
      quote: "",
      author: "Peter",
    },
    {
      image: paulImage,
      alt: "Paul's woodworking project",
      quote: "Why do I like woodworks... well its like family to me",
      author: "Paul",
    },
    {
      image: priscillaImage,
      alt: "Priscilla working on a woodworking project",
      quote: "The environment is easy going. I like creating things with wood",
      author: "Priscilla",
    },
    {
      image: maxImage,
      alt: "Max holding a completed woodworking project",
      quote: "",
      author: "Max",
    },
  ];

  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const visibleShowcaseItems = Array.from({ length: 3 }, (_, index) => {
    const itemIndex = (activeShowcaseIndex + index) % showcaseItems.length;
    return showcaseItems[itemIndex];
  });

  const sessionTimes = [
    "Monday: Closed",
    "Tuesday: 9am - 6pm",
    "Wednesday: 9am - 3pm",
    "Thursday: 9am - 6pm",
    "Friday: 9am - 4pm",
  ];

  const showPreviousShowcase = () => {
    setActiveShowcaseIndex((current) =>
      current === 0 ? showcaseItems.length - 1 : current - 1
    );
  };

  const showNextShowcase = () => {
    setActiveShowcaseIndex((current) =>
      current === showcaseItems.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="individualised-page">
      <SiteHeader />

      <section
        className="individualised-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 88, 88, 0.43), rgba(88, 88, 88, 0.43)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 35%",
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
              participant, to talk about their interests, needs, abilities, and
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
              <button
                className="showcase-arrow"
                type="button"
                aria-label="Previous showcase"
                onClick={showPreviousShowcase}
              >
                &#8249;
              </button>

              <div className="showcase-grid">
                {visibleShowcaseItems.map((item, index) => (
                  <article
                    className="showcase-card"
                    key={`${activeShowcaseIndex}-${item.author}-${index}`}
                  >
                    <div className="showcase-image-wrap">
                      {item.image ? (
                        <img src={item.image} alt={item.alt} />
                      ) : (
                        <div className="showcase-placeholder" role="img" aria-label={item.alt || "Placeholder image"}>
                          <span>PLACEHOLDER</span>
                        </div>
                      )}
                    </div>

                    <blockquote className={!item.quote ? "showcase-empty-quote" : ""}>
                      {item.quote && <p>&ldquo;{item.quote}&rdquo;</p>}
                      <footer>- {item.author}</footer>
                    </blockquote>
                  </article>
                ))}
              </div>

              <button
                className="showcase-arrow"
                type="button"
                aria-label="Next showcase"
                onClick={showNextShowcase}
              >
                &#8250;
              </button>
            </div>
          </div>
        </section>

        <section className="individualised-session-details">
          <div className="content-container session-details-stack">
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
                after-school sessions{" "}
                <Link to="/contact" className="service-link">
                  Learn more here
                </Link>
              </p>
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

        <ContactCta smallHeading="INTERESTED IN SESSIONS?" />
      </main>
    </div>
  );
}

export default IndividualisedPrograms;
