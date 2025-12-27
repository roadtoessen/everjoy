import React from "react";
import "./RoadToEssenOverview.css";

const RoadToEssenOverview = () => {
  return (
    <section className="overview-container">
      <h2 className="overview-title">ROAD TO ESSEN 2025 OVERVIEW</h2>
      <div className="overview-line"></div>

      <div className="overview-cards">
        {/* Card 1 */}
        <div className="overview-card card-1">
          <h3>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/roadtoessen">ROAD TO ESSEN 2025 COMPETITION</a>
          </h3>
          <p>
            The “Road to Essen” board game competition aims to discover and
            nurture Vietnamese board game design talents from around the world,
            offering a total prize pool of up to 200 million VND and a chance to
            exhibit their game at Spiel Essen 2025.
          </p>
          <div className="arrow">+</div>
        </div>

        {/* Card 2 */}
        <div className="overview-card card-2">
          <h3>
            <a target="_blank" rel="noreferrer" href="https://linktr.ee/podcastYourTurn?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExU1Flc3c1S2hmUlFxUlpaeXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR77nSkVR4CXhS6ReGX0obP9UXwX7TrI1jiv-QyIhGsuqhHmteXxmdEXMKlePA_aem_d_hZLvRr7ghJhn_h4wmcqg">YOUR TURN PODCAST</a>
          </h3>
          <p>
            A podcast series of 7–10 episodes, featuring interviews with top
            board game creators from around the world and Vietnam, aiming to
            share valuable experiences and inspire the Vietnamese game design
            community.
          </p>
          <div className="arrow">&#8594;</div>
        </div>

        {/* Card 3 */}
        <div className="overview-card card-3">
          <h3>VIETNAM BOARD GAME BOOTH AT SPIEL ESSEN 2025</h3>
          <p>
            A Vietnamese board game pavilion will be organized at Spiel Essen
            2025 in Germany, welcoming over 250,000 international visitors in
            late October 2025. With a design rich in Vietnamese cultural
            identity, the pavilion will not only showcase board games but also
            present impressive cultural products from Vietnam, including
            consumer goods, handicrafts, and gifts from notable local brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadToEssenOverview;
