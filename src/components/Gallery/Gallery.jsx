import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import gallery8 from "../../assets/gallery8.png";
import gallery9 from "../../assets/gallery9.png";
import gallery10 from "../../assets/gallery10.png";
import gallery11 from "../../assets/gallery11.png";
import gallery12 from "../../assets/gallery12.png";
import gallery13 from "../../assets/gallery13.png";
import gallery14 from "../../assets/gallery14.png";
import gallery15 from "../../assets/gallery15.png";

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
    { id: 10, src: gallery13 },
    { id: 11, src: gallery14 },
    { id: 12, src: gallery15 },
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
            backgroundImage: `url(${currentItems[0]?.src || "/images/placeholder.jpg"
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
            className={`gallery-page-btn ${currentPage === i + 1 ? "active" : ""
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
