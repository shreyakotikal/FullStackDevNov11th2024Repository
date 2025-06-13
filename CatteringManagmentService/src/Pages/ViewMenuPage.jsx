import React, { useState, useEffect } from 'react';
import viewmenu from '../assets/CoverImages/Viewmenu.jpg'; // Background image
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images for each menu item
import orderonline from '../assets/CoverImages/OrderOnline.jpg';
import dinning from '../assets/CoverImages/DinningSystem.jpg';
import decoration from '../assets/CoverImages/Decoration.jpg';

import collection1 from '../assets/CoverImages/Collection1.jpg';
import collection2 from '../assets/CoverImages/Collection2.jpg';
import collection3 from '../assets/CoverImages/Collection3.jpg';
import collection4 from '../assets/CoverImages/Collection4.jpg';
import collection5 from '../assets/CoverImages/Collection5.jpg';
import collection6 from '../assets/CoverImages/Collection6.jpg';
import collection7 from '../assets/CoverImages/Collection7.jpg';
import collection8 from '../assets/CoverImages/Collection8.jpg';
import collection9 from '../assets/CoverImages/Collection9.jpg';
import collection10 from '../assets/CoverImages/Collection10.jpg';
import collection11 from '../assets/CoverImages/Collection11.jpg';
import collection12 from '../assets/CoverImages/Collection12.jpg';


const ViewMenuPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cards array with imported images and links
  const cards = [
    {
      title: "Order Online",
      image: orderonline, // Using the imported image for Menu Item 1
      link: "/menupage" // Link to Home page
    },
    {
      title: "Dining",
      image: dinning, // Using the imported image for Menu Item 2
      link: "/#" // Link to another page (example)
    },
    {
      title: "Decoration",
      image: decoration, // Using the imported image for Menu Item 3
      link: "/#" // Link to another page (example)
    }
  ];

  // Function to move to the next cycle of cards
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Keeps the index within bounds of 0, 1, 2
  };

  // Automatically move to the next cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Function to get the cards in the current rotated order
  const getRotatedCards = () => {
    return [
      cards[(currentIndex + 0) % 3], // Card 1
      cards[(currentIndex + 1) % 3], // Card 2
      cards[(currentIndex + 2) % 3], // Card 3
    ];
  };

  return (
    // BackGround Image And Home links
    <div style={{ position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
      {/* Navigation Links */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '80%',
          transform: 'translateX(-60%)',
          display: 'flex',
          gap: '20px',
          padding: '10px 20px',
          borderRadius: '30px',
          zIndex: 2
        }}
      >
        <Link to="/homepage" style={{ color: 'black', textDecoration: 'underline', fontSize: '20px' }}>Home</Link>|
        <Link to="/services" style={{ color: 'black', textDecoration: 'underline', fontSize: '20px' }}>Services</Link>|
        <Link to="/about" style={{ color: 'black', textDecoration: 'underline', fontSize: '20px' }}>AboutUs</Link>|
        <Link to="/contact" style={{ color: 'black', textDecoration: 'underline', fontSize: '20px' }}>Contact</Link>
      </div>

      {/* Background Image */}
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        <img
          src={viewmenu}
          className="img-fluid"
          alt="View Menu"
          style={{ width: '100%', height: '600px', objectFit: 'cover', filter: 'brightness(100%)' }}
        />

        {/* Cards on the Image */}
        {/* Cards Container */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            width: '80%',
            height: '200px', // Adjust the height of the card container
          }}
        >
          {/* Cards */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
              gap: '20px', // Space between cards
            }}
          >
            {/* Dynamically change card order */}
            {getRotatedCards().map((card, index) => {
              const isCenter = index === 1; // Check if the card is in the center (active)
              return (
                <Link
                  to={card.link} // Add the link here to navigate to the respective page
                  key={index}
                  style={{
                    position: 'absolute',
                    opacity: isCenter ? 1 : 0.5,
                    transform: `translateX(${(index - 1) * 80}%) scale(${isCenter ? 1.10 : 1})`,
                    transition: 'transform 0.5s ease-in-out, opacity 1 ease-in-out',
                    background: isCenter ? '#D2B48C' : '#F4A460',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(252, 247, 247, 0.95)',
                    minWidth: '300px',
                    textAlign: 'center',
                    zIndex: isCenter ? 3 : 2,
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: "'Dancing Script', cursive",
                    fontWeight: "bolder",
                  }}
                >
                  {/* Card Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  {/* View Link Button */}
                  <div style={{ marginTop: '10px' }}>
                    <Link
                      to={card.link}
                      style={{

                        color: 'black',
                        padding: '8px 16px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'normal',
                        display: 'inline-block',
                        fontFamily: "sans-serif",
                      }}
                    >
                      Order Here...
                    </Link>
                  </div>
                </Link>

              );
            })}
          </div>
        </div>
      </div>

      {/* Collections starts here */}
      <br />
      <br />
      <h1 style={{ fontFamily: "'Delius', cursive", textAlign: "center", backgroundColor: "burlywood" }}>Collections :-</h1>
      <br />
      <div className='containerfluid'>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
          {/* Collection 1 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection1} alt="Collection 1" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Classic Catering</p>
          </div>

          {/* Collection 2 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection2} alt="Collection 2" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Grand Dining</p>
          </div>

          {/* Collection 3 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection3} alt="Collection 3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Royal Decoration</p>
          </div>

          {/* Collection 4 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection4} alt="Collection 4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Exquisite Desserts</p>
          </div>
          {/* Collection 5 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection5} alt="Collection 3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Royal Decoration</p>
          </div>

          {/* Collection 6 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection6} alt="Collection 4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Exquisite Desserts</p>
          </div>
          {/* Collection 7 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection7} alt="Collection 1" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Classic Catering</p>
          </div>

          {/* Collection 8 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection8} alt="Collection 2" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Grand Dining</p>
          </div>

          {/* Collection 9 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection9} alt="Collection 3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Royal Decoration</p>
          </div>

          {/* Collection 10 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection10} alt="Collection 4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Exquisite Desserts</p>
          </div>
          {/* Collection 11 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection11} alt="Collection 3" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Royal Decoration</p>
          </div>

          {/* Collection 12 */}
          <div style={{ width: "300px", textAlign: "center" }}>
            <img src={collection12} alt="Collection 4" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
            <p style={{ fontFamily: "'Delius', cursive", fontSize: "18px", fontWeight: "bold" }}>Exquisite Desserts</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* FOOTER Component */}
          <div className="row justify-content-evenly bg-dark pb-2">
            <br/>
                  <div className="col-md-3">
                    <br/>
                      <h5 className='text-white'>BHOJANALAYA</h5>
                      <p className='text-white'>Food is the essence of life, nourishing the body and soul while connecting people across cultures. 🍽️❤️</p>
                  </div>
                  <div className="col-md-3"><br/>
                  <h5 className='text-white'>Important Links</h5>
                  <Link to={'/'} className='text-white text-decoration-none'  >HOME</Link> <br/>
                  <Link to={'/viewmenupage'} className='text-white text-decoration-none'  >MENU</Link> <br/>
                  <Link to={'/services'} className='text-white text-decoration-none'  >SERVICE</Link> <br/>
                  <Link to={'/contact'} className='text-white text-decoration-none' >CONTACT US</Link> <br/>
                  <Link to={'/about'} className='text-white text-decoration-none' >ABOUT US</Link>
                  </div>
                  <div className="col-md-3"><br/>
                  <h5 className='text-white'>Address</h5>
                  <p className='text-white'>
                      BHOJANALAYA <br/>
                      Attigupe Metro Station <br/>
                      Vijayanagar 2nd Pahse <br/>
                      Bangalore -560023 <br/>
                      <i className="bi bi-telephone"></i>: 080-234-567-123
                  </p>
                  </div>
              </div>
    </div>




  );
};

export default ViewMenuPage;
