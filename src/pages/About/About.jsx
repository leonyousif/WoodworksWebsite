import "./About.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";

function About() {
  const storyParagraphs = [
    "Woodworks started in our shed in 2022, just after COVID, when the timing finally felt right to build something meaningful. It grew from a genuine desire to support people with disabilities in a way that felt practical and grounded in real experience.",
    "What began as a small, hands-on setup has developed over time through working alongside participants, learning what works, and shaping the space around their needs. Every session has played a part in building Woodworks into what it is today - a place built on patience, consistency, and respect for each person's pace, with a strong focus on the three C's: confidence, capability, and connection.",
    "At its core, Woodworks is about more than making things. It's about giving people the opportunity to feel capable, included, and proud of what they can achieve - in a space that started small but was always driven by a bigger purpose.",
  ];

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
      text: "Creating connection, support, and relationships.",
    },
  ];

  const teamMembers = [
    {
      name: "Paul",
      role: "Co-Founder of Woodworks",
      bio: "I run the day-to-day workshop. I'm a practical, hands-on person, and I use my carpentry skills to work alongside participants and support them in each session. After a fall from a roof earlier in my life, I developed a real understanding of physical limitations and recovery, which led me to work in the brain injury unit at Liverpool Hospital for 17 years. That experience showed me how much the right environment and meaningful activity can build skills, confidence, and wellbeing.",
      imageSide: "left",
    },
    {
      name: "Jenny",
      role: "Co-Founder and Program Coordinator at Woodworks",
      bio: "I was a teacher for 30 years, and that experience shapes the way I support people - with patience and an understanding that everyone learns differently. I develop and coordinate the program, making sure sessions are tailored to each person's individual needs, while also working alongside participants on the workshop floor. I try to be patient and meet people where they're at, creating a space where people feel comfortable, supported, and able to build skills over time - while having fun and building a strong sense of team and community.",
      imageSide: "right",
    },
    {
      name: "Alyse",
      role: "a support worker at Woodworks",
      bio: "I work alongside Paul and Jenny in the workshop. I've been a support worker for three years and have been volunteering with Woodworks since it began in 2022, so I've been part of the journey from the start. I'm involved in the day-to-day sessions, supporting participants as they build skills and work on their projects. I bring a positive, energetic approach and have a genuine heart for helping people feel comfortable, included, and supported as they learn and have a go.",
      imageSide: "left",
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

      <main className="about-main">
        <section className="about-sheet">
          <div className="content-container about-sheet-inner">
            <section className="about-block">
              <h1 className="about-title">OUR STORY</h1>

              <div className="about-story">
                {storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="about-block about-values-block">
              <h2 className="about-subtitle">The Three C&apos;s</h2>

              <div className="about-values-grid">
                {values.map((item) => (
                  <article className="about-value-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-block">
              <h2 className="about-title">MEET THE TEAM</h2>
              <p className="about-team-intro">
                Our team is dedicated to fostering a supportive environment where participants can develop practical skills and take pride in creating projects of their own.
              </p>
            </section>

            <section className="about-team-list" aria-label="Woodworks team">
              {teamMembers.map((member) => (
                <article
                  className={`about-team-row about-team-row-${member.imageSide}`}
                  key={member.name}
                >
                  <div className="about-team-portrait" aria-hidden="true">
                    <div className="about-team-portrait-cloud about-team-portrait-cloud-one"></div>
                    <div className="about-team-portrait-cloud about-team-portrait-cloud-two"></div>
                    <div className="about-team-portrait-hill about-team-portrait-hill-back"></div>
                    <div className="about-team-portrait-hill about-team-portrait-hill-front"></div>
                  </div>

                  <div className="about-team-copy">
                    <p>
                      <strong>I&apos;m {member.name}</strong>, {member.role}. {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </section>

        <ContactCta smallHeading="WANT TO FIND OUT MORE?" />
      </main>
    </div>
  );
}

export default About;
