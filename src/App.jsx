import "./App.css";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ImageSlider from "./components/ImageSlider";
import TestimonialSlider from "./components/TestimonialSlider";

function App() {
  const serviceImages = [
    {
      image: "https://via.placeholder.com/320x220?text=Service+1",
      title: "Icare",
    },
    {
      image: "https://via.placeholder.com/320x220?text=Service+2",
      title: "Afterschool Program",
    },
    {
      image: "https://via.placeholder.com/320x220?text=Service+3",
      title: "Individual Program",
    },
  ];

  const testimonials = [
    {
      quote:
        "Woodworks provided amazing support and made a real difference in our lives.",
      name: "Client Family",
    },
    {
      quote:
        "The team is kind, professional, and truly focused on participant wellbeing.",
      name: "Participant",
    },
    {
      quote:
        "Their programs helped build confidence, independence, and community connection.",
      name: "Support Coordinator",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-left-accent"></div>
          <h1>Welcome to Woodworks!</h1>
        </section>

        <section className="section-divider"></section>

        <InfoSection
          title="Who we are?"
          text=""
          imageText="Image placeholder here"
        />

        <InfoSection
          title="Our mission"
          text=""
          imageText="Image placeholder here"
          reverse={true}
        />

        <section className="services-section">
          <div className="section-container">
            <h2 className="section-heading center">Services We Offer</h2>
            <ImageSlider items={serviceImages} />
          </div>
        </section>

        <section className="programs-section">
          <div className="section-container">
            <InfoSection
              title="Who Our Programs Are For?"
              text=""
              imageText="Image placeholder here"
              dark={true}
            />
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-container">
            <h2 className="section-heading center">Testimonials</h2>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        <section className="team-section">
          <div className="section-container team-content">
            <div className="team-text">
              <h2 className="section-heading">Meet the Team</h2>
              <p>
                
              </p>
            </div>

            <div className="team-image">
              <img
                src="https://via.placeholder.com/420x280?text=Team+Image"
                alt="Woodworks team"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;