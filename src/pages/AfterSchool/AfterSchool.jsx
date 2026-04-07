import "./AfterSchool.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero.png";

function AfterSchool() {
  const supports = [
    "Development of practical woodworking skills",
    "Learning to follow structured processes and safety procedures",
    "Building confidence and independence",
    "Developing workplace-style routines and responsibilities",
    "Strengthening focus and problem-solving skills",
    "Building readiness for TAFE, training pathways, or employment",
  ];

  return (
    <div className="afterschool-page">
      <SiteHeader />

      <section
        className="afterschool-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 29, 18, 0.5), rgba(44, 29, 18, 0.5)), url(${heroImage})`,
        }}
      >
        <div className="content-container">
          <h1>AFTER SCHOOL PROGRAM</h1>
        </div>
      </section>

      <main>
        <section className="afterschool-overview">
          <div className="content-container afterschool-overview-grid">
            <div className="afterschool-placeholder-card">
              <span>PLACEHOLDER</span>
            </div>

            <div className="afterschool-intro-copy">
              <p>
                We offer an after school woodworking program for young people
                who are interested in developing practical skills in a
                supportive workshop environment.
              </p>

              <p>
                The program provides an opportunity for participants to explore
                woodworking while building confidence, independence, and
                work-related skills.
              </p>
            </div>

            <div className="afterschool-support-copy">
              <p>
                For some young people, the workshop can support the transition
                from school to further education, training, or employment.
                Through hands-on projects, participants develop practical
                abilities while also strengthening concentration, problem
                solving, and task completion.
              </p>
            </div>

            <div className="afterschool-placeholder-card afterschool-placeholder-offset">
              <span>PLACEHOLDER</span>
            </div>
          </div>
        </section>

        <section className="afterschool-supports">
          <div className="content-container">
            <div className="afterschool-supports-placeholder">
              <span>PLACEHOLDER</span>
            </div>
          </div>
        </section>

        <section className="afterschool-followup">
          <div className="content-container">
            <div className="afterschool-followup-copy">
              <p>
                For participants already enrolled in TAFE, the workshop can
                also provide an environment to practise skills and reinforce
                learning alongside their studies.
              </p>

              <p>
                The program encourages young people to take pride in their work
                while gaining experience that can support their future training
                and employment goals.
              </p>
            </div>

            <div className="afterschool-wide-placeholder">
              <span>PLACEHOLDER</span>
            </div>
          </div>
        </section>

        <ContactCta smallHeading="SEE WHAT YOU COULD ACHIEVE" />
      </main>
    </div>
  );
}

export default AfterSchool;
