import React from "react";
import NavBar from "../Components/NavBar";
import viewmenu from "../assets/CoverImages/Viewmenu.jpg";
import browseMenu from "../assets/CoverImages/BrowseMenu.jpg";
import makeMenu from "../assets/CoverImages/MakeMenu.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          backgroundImage: `url(${viewmenu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Changed from fixed height to minHeight
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          padding: "20px",
        }}
      >
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100vh", // Ensures it covers the full content height
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0, // Keep it behind text
          }}
        ></div>

        {/* Content */}
        <h1
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: "bold",
            fontSize: "3rem",
            zIndex: 1,
          }}
        >
          Our Food Menu Here...
        </h1>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.5rem",
            maxWidth: "80%",
            zIndex: 1,
          }}
        >
          Here is the list of mouth-watering delicious food.
          <br />
          Browse our complete range of menus, categorized into various types.
        </p>

        <p style={{ fontStyle: "italic", fontSize: "1.5rem", zIndex: 1 }}>OR</p>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.5rem",
            maxWidth: "80%",
            zIndex: 1,
          }}
        >
          Use our Menu Planner to plan it for your special occasion and send it
          to us in no time.
          <br />
          We make it easy for you, and it's on the go.
        </p>

        {/* Browse Menu and Planning Menu */}
        <div className="container-fluid mt-4" style={{ zIndex: 1 }}>
          <div className="row d-flex justify-content-center flex-wrap gap-3">
            {/* Browse Menu */}
            <div className="col-md-auto">
              <Link to="/browsermenu" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="card text-bg-dark rounded-circle"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={browseMenu}
                    className="card-img"
                    alt="Browse Menu"
                    style={{
                      width: "95%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Link>
              <h3 className="mt-2" style={{ fontFamily: "'Dancing Script', serif", color: "black", textAlign: "center" }}>
                Browse Menu
              </h3>
            </div>
            {/* Make Your Own Menu */}
            <div className="col-md-auto">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="card text-bg-dark rounded-circle"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={makeMenu}
                    className="card-img"
                    alt="Make Menu"
                    style={{
                      width: "95%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Link>
              <h3 className="mt-2" style={{ fontFamily: "'Dancing Script', serif", color: "black", textAlign: "center" }}>
                Make Your Own Menu
              </h3>
            </div>
          </div>
        </div>
        <br />
        <p style={{ fontFamily: "'Dancing Script', serif", textalign: "center", fontweight: "bold", color: "black", fontSize: "xx-large" }}>Satisfy
          your cravings with food made to lift your mood.</p>
      </div>
      <br />
      <div className="row justify-content-evenly bg-dark pb-2">
        <br />
        <div className="col-md-3">
          <br />
          <h5 className='text-white'>BHOJANALAYA</h5>
          <p className='text-white'>Food is the essence of life, nourishing the body and soul while connecting people across cultures. 🍽️❤️</p>
        </div>
        <div className="col-md-3"><br />
          <h5 className='text-white'>Important Links</h5>
          <Link to={'/'} className='text-white text-decoration-none'  >HOME</Link> <br />
          <Link to={'/viewmenupage'} className='text-white text-decoration-none'  >MENU</Link> <br />
          <Link to={'/services'} className='text-white text-decoration-none'  >SERVICE</Link> <br />
          <Link to={'/contact'} className='text-white text-decoration-none' >CONTACT US</Link> <br />
          <Link to={'/about'} className='text-white text-decoration-none' >ABOUT US</Link>
        </div>
        <div className="col-md-3"><br />
          <h5 className='text-white'>Address</h5>
          <p className='text-white'>
            BHOJANALAYA <br />
            Attigupe Metro Station <br />
            Vijayanagar 2nd Pahse <br />
            Bangalore -560023 <br />
            <i className="bi bi-telephone"></i>: 080-234-567-123
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
