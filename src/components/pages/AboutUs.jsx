import Header from "../Header";
import "./AboutUs.css";

function AboutUs() {
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
      imageLeft: true,
    },
    {
      text: "We create a welcoming workshop where participants can learn at their own pace, build confidence, and enjoy working alongside others in a supportive environment.",
      imageLeft: false,
    },
    {
      text: "Through practical projects and guided support, participants build independence, capability, and pride in what they create.",
      imageLeft: true,
    },
  ];

  return (
    <div className="about-page">
      <Header />

      <section className="about-hero-banner">
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

            <h3 className="three-c-heading">The three C&apos;s</h3>

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
                    <img
                      src="https://via.placeholder.com/220"
                      alt="Woodworks team"
                    />
                  </div>

                  <div className="team-text-box">
                    <p>{section.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-footer-section">
          <div className="content-container">
            <div className="about-footer-content">
              <h2>WANT TO FIND OUT MORE?</h2>

              <div className="about-footer-block">
                <h3>Contact us Here</h3>
                <p>
                  We&apos;re here to help you with any questions. Reach out to
                  us for program details or to discuss how we can support you.
                </p>
              </div>

              <div className="about-footer-block">
                <h3>Email us</h3>
                <p>We&apos;d love to hear from you</p>
                <p>Email@woodworksonline.com.au</p>
              </div>

              <div className="about-footer-block">
                <h3>Call us</h3>
                <p>Connect with us directly.</p>
                <p>0414 481 947</p>
              </div>

              <div className="about-footer-block">
                <h3>Our Location</h3>
                <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
              </div>
            </div>

            <div className="about-footer-bar">
              <div className="about-footer-logo">WOODWORKS</div>

              <div className="about-footer-socials">
                <span>Facebook</span>
                <span>Instagram</span>
              </div>

              <div className="about-footer-partners">
                <span>ABI Services</span>
                <span>Aspect</span>
                <span>Daily Matters</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;