import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import essenBackdrop from "../../assets/essen-backdrop.png";
import BestSeller from "../../components/BestSeller/BestSeller";
import Footer from "../../components/Footer/Footer";
import xamHuongLeft from "../../assets/xam_huong_1.jpg";
import xamHuong from "../../assets/xam_huong.png";
import bunny from "../../assets/bunny.png";
import bunnyRight from "../../assets/bunny_1.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="left-corner"></div>
        <div className="hero-container">
          <section className="hero-content">
            <h1>Highlight Games</h1>
            <div className="highlight-games">
              {/* Xam Huong Game - Illustration on LEFT */}
              <div className="highlight-game-item-container">
                <div className="game-layout left-layout">
                  <div className="side-image left">
                    <img src={xamHuongLeft} alt="xam huong left illustration" />
                  </div>
                  <div className="main-image">
                    <img src={xamHuong} alt="xam huong main" />
                    <div className="game-title">Xam Huong</div>
                  </div>
                </div>
              </div>

              {/* Bunny Game - Illustration on RIGHT */}
              <div className="highlight-game-item-container">
                <div className="game-layout right-layout">
                  <div className="main-image">
                    <img src={bunny} alt="bunny main" />
                    <div className="game-title">Bunny</div>
                  </div>
                  <div className="side-image right">
                    <img src={bunnyRight} alt="bunny right illustration" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="right-corner"></div>
      </div>
      <PartnersCarousel />
      <img
        className="essen-backdrop"
        src={essenBackdrop}
        alt="essen-backdrop"
      />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default Home;
