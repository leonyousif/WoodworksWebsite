import "./AfterSchool.css";
import { Link } from "react-router-dom";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import heroImage from "../../assets/hero.png";
import logo from "../../img/woodwords logo.jpg";

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
              <span>placeholder image</span>
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
              <span>placeholder image</span>
            </div>
          </div>
        </section>

        <section className="afterschool-supports">
          <div className="content-container">
            <h2>Our after school program may support:</h2>

            <div className="afterschool-support-grid">
              {supports.map((item, index) => (
                <article className="afterschool-support-card" key={item}>
                  <span className="afterschool-support-icon" aria-hidden="true">
                    {index + 1}
                  </span>

                  <p>{item}</p>
                </article>
              ))}
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
              <span>placeholder image</span>
            </div>
          </div>
        </section>

        <section className="afterschool-contact">
          <div className="content-container">
            <div className="afterschool-contact-copy">
              <h3>SEE WHAT YOU COULD ACHIEVE</h3>

              <div className="afterschool-contact-block">
                <h4>Contact us here</h4>
                <p>
                  We&apos;re here to help you with any questions. Reach out to
                  us for program details or to discuss how we can support you.
                </p>
              </div>

              <div className="afterschool-contact-block">
                <h4>Email us</h4>
                <p>We&apos;d love to hear from you.</p>
                <Link to="/contact" className="afterschool-contact-link">
                  Use the contact form
                </Link>
              </div>

              <div className="afterschool-contact-block">
                <h4>Call us</h4>
                <p>Connect with us directly.</p>
                <p>0414 481 947</p>
              </div>

              <div className="afterschool-contact-block">
                <h4>Our location</h4>
                <p>9 Glenroy Crescent, St Johns Park, 2176, NSW</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="afterschool-footer">
          <div className="content-container afterschool-footer-inner">
            <img
              className="afterschool-footer-logo"
              src={logo}
              alt="Woodworks logo"
            />

            <div className="afterschool-footer-socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>

            <div
              className="afterschool-footer-partners"
              aria-label="Partner organisations"
            >
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

export default AfterSchool;
