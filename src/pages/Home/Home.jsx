import "./Home.css";

import SiteHeader from "../../shared/components/SiteHeader/SiteHeader";
import ContactCta from "../../shared/components/ContactCta/ContactCta";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import WorkshopActivities from "./components/WorkshopActivities/WorkshopActivities";
import SupportPrograms from "./components/SupportPrograms/SupportPrograms";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import alexImage from "../../img/alex sanding.jpg";
import dadImage from "../../img/dad.jpg";

function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <HeroBanner />

      <main>
        <section className="welcome-section">
          <div className="content-container">
            <h1>WELCOME TO THE WORKSHOP!</h1>
          </div>
        </section>

        <FeatureSection
          title="WHO ARE WE ?"
          text={`Woodworks is an inclusive woodworking workshop where participants build practical skills, confidence, and independence through hands-on projects.

In a safe and supportive environment, participants explore woodworking, work towards personal goals, and experience the satisfaction of creating something with their own hands.

Our experienced and supportive team is dedicated to helping each participant learn, grow, and feel proud of what they achieve. Every project completed is a step toward greater confidence, capability, and community.`}
          imageAlt="Who we are"
          imageSrc={alexImage}
          buttonText="COME MEET THE TEAM"
          buttonLink="/about"
          imageLeft={false}
        />

        <FeatureSection
          title="OUR MISSION"
          text={`To support people with disability to discover their potential through woodworking. In a safe and inclusive workshop, participants are empowered to build practical skills, confidence, and independence while developing capacity, exercising choice, and engaging in meaningful social and community participation.`}
          imageAlt="Our mission"
          imageSrc={dadImage}
          buttonText="Learn more about our individualised programs"
          buttonLink="#"
          imageLeft={true}
          missionStyle={true}
        />

        <WorkshopActivities />
        <SupportPrograms />
        <TestimonialsSection />
        <ContactCta />
      </main>
    </div>
  );
}

export default Home;
