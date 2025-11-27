import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../../assets/galleries/gallery1.png";
import gallery2 from "../../assets/galleries/gallery2.png";
import gallery3 from "../../assets/galleries/gallery3.png";
import gallery4 from "../../assets/galleries/gallery4.png";
import gallery5 from "../../assets/galleries/gallery5.png";
import gallery6 from "../../assets/galleries/gallery6.png";
import gallery7 from "../../assets/galleries/gallery7.png";
import gallery8 from "../../assets/galleries/gallery8.png";
import gallery9 from "../../assets/galleries/gallery9.png";
import gallery10 from "../../assets/galleries/gallery10.png";
import gallery11 from "../../assets/galleries/gallery11.png";
import gallery12 from "../../assets/galleries/gallery12.png";
import gallery13 from "../../assets/galleries/gallery13.png";
import gallery14 from "../../assets/galleries/gallery14.png";
import gallery15 from "../../assets/galleries/gallery15.png";
import gallery16 from "../../assets/galleries/gallery16.png";
import gallery17 from "../../assets/galleries/gallery17.png";
import gallery18 from "../../assets/galleries/gallery18.png";
import gallery19 from "../../assets/galleries/gallery19.png";
import gallery20 from "../../assets/galleries/gallery20.png";
import gallery21 from "../../assets/galleries/gallery21.png";
import gallery22 from "../../assets/galleries/gallery22.png";
import gallery23 from "../../assets/galleries/gallery23.png";
import gallery24 from "../../assets/galleries/gallery24.png";

const Gallery = () => {
  // Mock image data
  const images = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery5 },
    { id: 6, src: gallery6 },
    { id: 7, src: gallery7 },
    { id: 8, src: gallery8 },
    { id: 9, src: gallery9 },
    { id: 10, src: gallery10 },
    { id: 11, src: gallery11 },
    { id: 12, src: gallery12 },
    { id: 13, src: gallery13 },
    { id: 14, src: gallery14 },
    { id: 15, src: gallery15 },
    { id: 16, src: gallery16 },
    { id: 17, src: gallery17 },
    { id: 18, src: gallery18 },
    { id: 19, src: gallery19 },
    { id: 20, src: gallery20 },
    { id: 21, src: gallery21 },
    { id: 22, src: gallery22 },
    { id: 23, src: gallery23 },
    { id: 24, src: gallery24 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 3;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Handle page change with animation
  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>

      <div
        className={`gallery-container ${isAnimating ? "fade-out" : "fade-in"}`}
      >
        {/* Left large image */}
        <div
          className="gallery-main"
          style={{
            backgroundImage: `url(${
              currentItems[0]?.src || "/images/placeholder.jpg"
            })`,
          }}
        ></div>

        {/* Right smaller images */}
        <div className="gallery-side">
          {currentItems.slice(1).map((item) => (
            <div
              key={item.id}
              className="gallery-side-item"
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="gallery-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`gallery-page-btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
            disabled={isAnimating}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
