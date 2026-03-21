import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import PracticeSlider from "./components/PracticeSlider";
import CaterFor from "./components/CaterFor";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <Hero />

      <main>
        <section className="welcome-section">
          <div className="content-container">
            <h1>WELCOME TO THE WORKSHOP!</h1>
          </div>
        </section>

        <IntroSection
          title="WHO ARE WE ?"
          text={`Woodworks is an inclusive woodworking workshop where participants build practical skills, confidence, and independence through hands-on projects.

In a safe and supportive environment, participants explore woodworking, work towards personal goals, and experience the satisfaction of creating something with their own hands.

Our experienced and supportive team is dedicated to helping each participant learn, grow, and feel proud of what they achieve. Every project completed is a step toward greater confidence, capability, and community.`}
          imageAlt="Who we are"
          buttonText="COME MEET THE TEAM"
          buttonLink="#"
          imageLeft={false}
        />

        <IntroSection
          title="OUR MISSION"
          text={`To support people with disability to discover their potential through woodworking. In a safe and inclusive workshop, participants are empowered to build practical skills, confidence, and independence while developing capacity, exercising choice, and engaging in meaningful social and community participation.`}
          imageAlt="Our mission"
          buttonText="Learn more about our individualised programs"
          buttonLink="#"
          imageLeft={true}
          missionStyle={true}
        />

        <PracticeSlider />
        <CaterFor />
        <Testimonials />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;