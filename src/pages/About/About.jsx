import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import everJoyPublishing from "../../assets/ever-joy-publishing.png";
import everJoyGlobal from "../../assets/ever-joy-global.png";
import highlightSection from "../../assets/highlight-section.png";
import bannerShoppe from "../../assets/banner-shoppe.png";
import partnersSponsors from "../../assets/partners-sponsors.png";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-section">
          <div className="about-section-left">
            <img src={everJoyPublishing} alt="Ever Joy Publishing" />
            <h1>GREAT GAMES, PLAYED TOGETHER!</h1>
            <p>
              Founded in 2022, Everjoy Publishing inherited the leading position
              in Vietnam’s board game industry after merging with several
              pioneering companies, including Board Game VN. That same year,
              Everjoy proudly became the first-ever Vietnamese representative at
              SPIEL ESSEN 2022.Everjoy aims to support leading consumer brands
              in leveraging the power of play to engage their audiences through
              impactful campaigns and creative storytelling.
            </p>
          </div>
          <div className="about-section-right">
            <img src={everJoyGlobal} alt="Ever Joy Global" />
            <h1>VIETNAMESE CREATIVITY, GLOBAL JOY</h1>
            <p>
              Everjoy Global is a Seattle-based company on a mission to showcase
              the creativity and innovation of Vietnamese game designers.  As a
              sister company of Everjoy Publishing, we promote and sell
              Everjoy’s catalog of Vietnamese-made games through global
              marketing, international publishers, and distribution partners.
              From family-friendly fun to deep strategy experiences, we believe
              Vietnamese games can inspire joy across cultures and generations.
            </p>
          </div>
        </div>
      </div>
      <div className="highlight-section">
        <img src={highlightSection} alt="Highlight Section" />
      </div>
      <div className="banner-shoppe">
        <img src={bannerShoppe} alt="Banner Shoppe" />
      </div>
      <div className="partners-and-sponsors">
        <h1>Our Partners & Sponsors</h1>
        <img src={partnersSponsors} alt="Partners and Sponsors" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
