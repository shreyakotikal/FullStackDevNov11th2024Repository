import React from 'react'
import food1 from '../assets/CoverImages/Food1.jpg';
import food2 from '../assets/CoverImages/Food2.jpg';
import food3 from '../assets/CoverImages/Food3.jpg';
import food4 from '../assets/CoverImages/Food4.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carosel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="2000">
          <img src={food1} className="d-block w-100" style={{ height: "600px" }} alt="South Indian Meals" />
            <div className="carousel-caption d-none d-md-block">
            <h1 className="falling-text">Welcome to Bhojanalaya</h1>
              <h4 style={{ fontSize: "xx-large", fontFamily: "Dancing Script, serif", color: "black", fontWeight: "bold" }}>
                South Indian Meals
              </h4>
              <p style={{ fontSize: "x-large", color: "black", fontWeight: "normal", fontStyle: "italic" }}>
                "The perfect blend of spices and textures."
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={food2} className="d-block w-100" style={{ height: "600px" }} alt="North Indian Meals" />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ fontSize: "xx-large", fontFamily: "Dancing Script, serif", color: "black", fontWeight: "bold" }}>
                North Indian Meals
              </h4>
              <p style={{ fontSize: "x-large", color: "black", fontWeight: "normal", fontStyle: "italic" }}>
                "North Indian curries usually have thick, moderately spicy, and creamy gravies."
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={food3} className="d-block w-100" style={{ height: "600px" }} alt="Yummy Desserts" />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ fontSize: "xx-large", fontFamily: "Dancing Script, serif", color: "black", fontWeight: "bold" }}>
                Yummy Desserts
              </h4>
              <p style={{ fontSize: "x-large", color: "black", fontWeight: "normal", fontStyle: "italic" }}>
                "A party without cake is just a meeting."
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={food4} className="d-block w-100" style={{ height: "600px" }} alt="Mood Fresheners" />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ fontSize: "xx-large", fontFamily: "Dancing Script, serif", color: "black", fontWeight: "bold" }}>
                Mood Fresheners
              </h4>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  )
}

export default Carosel