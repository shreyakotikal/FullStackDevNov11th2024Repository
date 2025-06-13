import React from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import NavBar from "../Components/NavBar";
import viewmenu from "../assets/CoverImages/Viewmenu.jpg";
import bevarages from "../assets/HotDrinksMenu/CoverImage.jpg";
import breakfast from "../assets/BreakFast/CoverImage.jpg";

const menuItems = [
  { image: bevarages, title: "Beverages", link: "/bevarages" },
  { image: breakfast, title: "Breakfast", link: "/" },
  { image: "./Images/Starters/CoverImage.jpg", title: "Starters/Snacks", link: "/" },
  { image: "...", title: "Veg Dishes", link: "/-dishes" },
  { image: "...", title: "Non-Veg Dishes", link: "/" },
  { image: "...", title: "Desserts", link: "/" },
];

const BrowserMenu = () => {
  return (
    <div>
      <NavBar />

      {/* Background Image Wrapper */}
      <div
        style={{
          backgroundImage: `url(${viewmenu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Overlay for Better Readability */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></div>

        {/* Content Wrapper */}
        <div style={{ zIndex: 2, width: "100%" }}>
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          >
            Browse Our Menu
          </h2>

          <p
            style={{
              fontStyle: "italic",
              fontSize: "large",
              maxWidth: "600px",
              margin: "10px auto",
              lineHeight: "1.5",
            }}
          >
            Here is the list of mouth-watering, delicious food. <br />
            Browse our complete range of menu items, categorized into various
            types—choose as per your wish!
          </p>

          {/* Menu Items */}
          <div className="container-fluid">
            <div className="row d-flex justify-content-center flex-wrap gap-3 mt-4">
              {menuItems.map((item, index) => (
                <div key={index} className="col-md-auto">
                  
                  {/* React Router Link */}
                  <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="menu-card">
                      <img src={item.image} alt={item.title} className="menu-img" />
                    </div>
                  </Link>

                  <h3 className="menu-title">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <p className="closing-text">
            Satisfy your cravings with food made to lift your mood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowserMenu;
