import "./About.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import dadImage from "../../img/dad.jpg";
import alexImage from "../../img/alex sanding.jpg";
import heroImage from "../../assets/hero.png";

function About() {
  const values = [
    {
      title: "Confidence",
      text: "Building belief in what participants can achieve.",
    },
    {
      title: "Capability",
      text: "Developing practical skills through hands-on learning.",
    },
    {
      title: "Community",
      text: "Creating connection, support, and social inclusion.",
    },
  ];

  const teamSections = [
    {
      text: "Our team is dedicated to fostering a supportive environment where participants can develop practical skills and take pride in creating projects of their own.",
      image: dadImage,
      imageLeft: true,
    },
    {
      text: "We create a welcoming workshop where participants can learn at their own pace, build confidence, and enjoy working alongside others in a supportive environment.",
      image: alexImage,
      imageLeft: false,
    },
    {
      text: "Through practical projects and guided support, participants build independence, capability, and pride in what they create.",
      image: dadImage,
      imageLeft: true,
    },
  ];

  return (
    <div className="about-page">
      <SiteHeader />

      <section
        className="about-hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(47, 34, 21, 0.42), rgba(47, 34, 21, 0.42)), url(${heroImage})` }}
      >
        <div className="about-hero-overlay">
          <div className="content-container">
            <h1>ABOUT US</h1>
          </div>
        </div>
      </section>

      <main>
        <section className="about-section">
          <div className="content-container">
            <h2 className="about-heading">OUR STORY</h2>

            <div className="about-story-box">
              <p>
                Woodworks is a supportive and inclusive woodworking workshop
                where participants build confidence, practical skills, and a
                sense of achievement through hands-on learning. We focus on
                creating meaningful experiences that encourage independence,
                growth, and connection through creative projects.
              </p>
            </div>

            <h3 className="three-c-heading">The Three C&apos;s</h3>

            <div className="three-c-grid">
              {values.map((item) => (
                <div className="three-c-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="team-section">
              <h2 className="about-heading">MEET THE TEAM</h2>

              <p className="team-intro">
                Our team is dedicated to fostering a supportive environment
                where participants can develop practical skills and take pride
                in creating projects of their own.
              </p>

              {teamSections.map((section, index) => (
                <div
                  className={`team-row ${
                    section.imageLeft ? "image-left" : "image-right"
                  }`}
                  key={index}
                >
                  <div className="team-image-circle">
                    <img src={section.image} alt="Woodworks team" />
                  </div>

                  <div className="team-text-box">
                    <p>{section.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  );
}

export default About;
