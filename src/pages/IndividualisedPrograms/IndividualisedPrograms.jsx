import "./IndividualisedPrograms.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";
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
                        <div className="showcase-accent-panel" aria-hidden="true"></div>
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
