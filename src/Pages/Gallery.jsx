import React from "react";
import "../style/Gallery.css";
import galleryImg1 from "../images/gallery1.jpg"
import galleryImg2 from "../images/gallery2.jpg"
import galleryImg3 from "../images/gallery3.jpg"
import galleryImg4 from "../images/gallery4.jpg"

function Gallery() {
  return (
    <div className="gallery-container" id="gallery">
        <div className="gallery-head-container">
        <h1>Our Gallery</h1>
        </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={galleryImg4} className="d-block w-180" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={galleryImg2} className="d-block w-180" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={galleryImg3} className="d-block w-180" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
