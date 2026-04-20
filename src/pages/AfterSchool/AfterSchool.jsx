import "./AfterSchool.css";
import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import heroImage from "../../assets/hero-afterschool.jpeg";
import afterSchoolSupportsImage from "../../assets/afterschool-supports-grid.png";
import afterSchoolKevinImage from "../../assets/afterschool-kevin.jpeg";
import afterSchoolDrillImage from "../../assets/afterschool-drill.jpg";

function AfterSchool() {
  return (
    <div className="afterschool-page">
      <SiteHeader />

      <section
        className="afterschool-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 88, 88, 0.42), rgba(88, 88, 88, 0.42)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 38%",
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
              <img
                src={afterSchoolKevinImage}
                alt="Student using sanding equipment in the Woodworks workshop"
              />
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
              <img
                src={afterSchoolDrillImage}
                alt="Student drilling a woodworking project in the workshop"
              />
            </div>
          </div>
        </section>

        <section className="afterschool-supports">
          <div className="content-container">
            <h2>Our after school program may support:</h2>

            <div className="afterschool-supports-placeholder">
              <img
                src={afterSchoolSupportsImage}
                alt="Overview of after school program support areas including practical skills, safety procedures, independence, routines, focus, and training readiness"
              />
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
          </div>
        </section>

        <ContactCta smallHeading="SEE WHAT YOU COULD ACHIEVE" />
      </main>
    </div>
  );
}

export default AfterSchool;
