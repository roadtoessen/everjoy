import React, { useEffect, useRef } from "react";
import "./Competition.css";
import Header from "../../components/Header/Header";
import competitionBanner from "../../assets/competition-banner.png";
import RoadToEssenOverview from "../../components/RoadToEssenOverview/RoadToEssenOverview";
import JourneyHighlight from "../../components/JourneyHighlight/JourneyHighlight";
import PartnersCarousel from "../../components/PartnersCarousel/PartnersCarousel";
import ledRte from "../../assets/led-rte.png";
import Footer from "../../components/Footer/Footer";
import julyRuleBook from "../../assets/july_rule_book.png";
import amBinh from "../../assets/am_binh.png";
import keCho from "../../assets/ke_cho.png";
import auLac from "../../assets/au_lac.png";
import batLinh from "../../assets/bat_linh.png";
import lapDia from "../../assets/lap_dia.png";
import bubbleMarket from "../../assets/bubble_market.png";
import giap from "../../assets/giap.png";
import namQuocTraanhHung from "../../assets/nam_quoc_tranh_hung.png";
import netQue from "../../assets/net_que.png";
import thoaiPhu from "../../assets/thoai_phu.png";
import trumNongSan from "../../assets/trum_nong_san.png";
import vanNguyenCam from "../../assets/van_nguyen_cam.png";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Autoplay } from "@glidejs/glide/dist/glide.modular.esm";

const Competition = () => {
  const glideRef = useRef(null);

  const finalistData = [
    { title: "julyRuleBook", img: julyRuleBook },
    { title: "amBinh", img: amBinh },
    { title: "keCho", img: keCho },
    { title: "auLac", img: auLac },
    { title: "batLinh", img: batLinh },
    { title: "lapDia", img: lapDia },
    { title: "bubbleMarket", img: bubbleMarket },
    { title: "giap", img: giap },
    { title: "namQuocTraanhHung", img: namQuocTraanhHung },
    { title: "netQue", img: netQue },
    { title: "thoaiPhu", img: thoaiPhu },
    { title: "trumNongSan", img: trumNongSan },
    { title: "vanNguyenCam", img: vanNguyenCam },
  ];

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "carousel",
      perView: 3,
      focusAt: "center",
      gap: 20,
      autoplay: 4000,
      hoverpause: true,
      breakpoints: {
        768: {
          perView: 2,
          gap: 15,
        },
        480: {
          perView: 1,
          gap: 10,
        },
      },
    });

    glide.mount({ Autoplay });

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="competition-page">
      <Header />
      <div
        style={{ backgroundImage: `url(${competitionBanner})` }}
        className="competition-banner"
      >
        <h1>Meet the champion of</h1>
        <h1>Road to Essen 2025</h1>
        <p>
          Congratulations JULY- Mr. Huu Thinh , winner of the Road to Essen 2025
          competition.
        </p>
      </div>
      <div className="year-list">
        <p>
          2025
          <span className="divider"></span>
        </p>
        <p>2026</p>
        <p>2027</p>
        <p>2028</p>
        <p>2029</p>
        <p>2030</p>
      </div>
      <RoadToEssenOverview />
      <JourneyHighlight />
      <PartnersCarousel />
      <div>
        <div className="finalists-road">
          <h1>TOP 20 FINALISTS ROAD TO ESSEN 2025</h1>
          <p>
            Health Clubs with Simplicity. Value. And Your Good health in mind.
            These qualities form the bedrock of Fitness Evolution, the next
            generation of health and fitness centers. With our low-cost, no
            long-term-contract memberships and high-quality equipment, you can
            realize your fitness goals in a comfortable, safe environment.
          </p>
        </div>
        <div className="finalists-carousel">
          <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {finalistData.map((finalist, index) => (
                  <li className="glide__slide" key={index}>
                    <img src={finalist.img} alt={finalist.title} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              {finalistData.map((_, index) => (
                <button
                  className="glide__bullet"
                  data-glide-dir={`=${index}`}
                  key={index}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <h1 className="thank-you-partners">
          ROAD TO ESSEN 2025 EXTENDS ITS SINCERE GRATITUDE TO OUR PARTNERS &
          SPONSORS
        </h1>
        <img className="led-rte" src={ledRte} alt="led rte" />
      </div>
      <Footer />
    </div>
  );
};

export default Competition;
