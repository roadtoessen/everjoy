import React from "react";
import "./BestSeller.css";
import bestSeller1 from "../../assets/best_seller_1.png";
import bestSeller2 from "../../assets/best_seller_2.png";

const products = [
  {
    id: 1,
    name1: [
      {
        title: "~70.000 Copies Sold",
        isTitle: true,
      },
      {
        title: "- Top 1 bestseller on largest Ecom platform in 2022",
      },
      {
        title:
          "- Top 1 bestseller in the largest bookstore franchise in Vietnam",
      },
    ],
    image: bestSeller1,
  },
  {
    id: 2,
    name: "ZODIAC RUSH",
    image: bestSeller2,
  },
];

const BestSeller = () => {
  return (
    <section className="best-seller-section">
      <h2 className="section-title">BEST SELLER</h2>

      <div className="best-seller-grid">
        {products.map((item) => (
          <div key={item.id} className="best-seller-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            {item.name1 ? (
              <div className="product-description">
                {item.name1.map((line, index) => {
                  if (line.isTitle) {
                    return <h3 key={index}>{line.title}</h3>;
                  }
                  return <p key={index}>{line.title}</p>;
                })}
              </div>
            ) : (
              <h3>{item.name}</h3>
            )}
            <button className="more-btn">MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
