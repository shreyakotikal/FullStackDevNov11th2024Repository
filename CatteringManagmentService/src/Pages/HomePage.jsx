import React, { useEffect, useState } from "react";
import NavBar from '../Components/NavBar'
import Carosel from '../Components/Carosel'
import { Link } from 'react-router-dom';
import menu1 from '../assets/CoverImages/Menu1.jpg';
import menu2 from '../assets/CoverImages/Menu2.jpg';
import menu3 from '../assets/CoverImages/Menu3.jpg';
import menu4 from '../assets/CoverImages/Menu4.jpg';


const HomePage = () => {
  useEffect(() => {
    const testimonials = document.querySelectorAll(".testimonial");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    testimonials.forEach((testimonial) => observer.observe(testimonial));

    return () => {
      testimonials.forEach((testimonial) => observer.unobserve(testimonial));
    };
  }, []);
  return (
    <div>
    <NavBar />
    <Carosel/>
    <h2
        style={{
          fontFamily: 'Dancing Script, serif',
          fontSize: 'xx-large',
          color: 'rgb(235, 83, 83)',
          textAlign: 'center',
          backgroundColor: 'rgb(214, 197, 174)',
        }}
      >
        Services Offered By Us
      </h2>

      <br />
      <br />

      <div className="container-fluid">
        <div className="row d-flex justify-content-center flex-nowrap gap-3 overflow-auto">
          {/* Card 1 */}
          <div className="col-md-auto">
            <Link to="/viewmenupage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="card text-bg-dark"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={menu1}
                  className="card-img"
                  alt="..."
                  style={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h3
                    className="card-title"
                    style={{ fontFamily: 'Dancing Script, serif', color: 'black' }}
                  >
                    A great server doesn’t just serve food; they serve experiences.
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="col-md-auto">
            <Link to="/viewmenupage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="card text-bg-dark"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={menu2}
                  className="card-img"
                  alt="..."
                  style={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h3
                    className="card-title"
                    style={{ fontFamily: 'Dancing Script, serif', color: 'black' }}
                  >
                    "A chef blends passion, creativity, and skill to turn simple ingredients into
                    unforgettable culinary experiences."
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="col-md-auto">
            <Link to="/viewmenupage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="card text-bg-dark"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={menu3}
                  className="card-img"
                  alt="..."
                  style={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h3
                    className="card-title"
                    style={{ fontFamily: 'Dancing Script, serif', color: 'black' }}
                  >
                    Desserts are sweet treats that bring joy and satisfaction after a meal.
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="col-md-auto">
            <Link to="/viewmenupage" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="card text-bg-dark"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={menu4}
                  className="card-img"
                  alt="..."
                  style={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h3
                    className="card-title"
                    style={{ fontFamily: 'Dancing Script, serif', color: 'black' }}
                  >
                    A Banana Leaf Meal symbolizes tradition and the joy of sharing food. 
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Centered Button Below All Cards */}
        <div className="text-center mt-4">
          <Link to="/viewmenupage" className="btn btn-primary">
            View Menu
          </Link>
        </div>
      </div>

      <br />
      <br />

      {/* <!-- Status bar --> */}
    <div className="banner text-center text-white">
        <div className="container">
            <span className="highlight">Finest in food industry since 1977...</span>
        </div>
    </div>

    <div className="banner text-center">
        <div className="container">
            <span className="highlight-white">More than 50,000 events organised...</span>
        </div>
    </div>

    <div className="banner text-center text-white">
        <div className="container">
            <span className="highlight">More than 10,000 customers served...</span>
        </div>
    </div>

    <div className="banner text-center">
        <div className="container">
            <span className="highlight-white">Selection from 1,000 plus variety of dishes...</span>
        </div>
    </div>

    {/* <!-- Comment of Client --> */}
    <div className="container text-center my-5">
      <h2 className="section-title">Our Clients Say...</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial">
            <p>
              “The Family Table is simply the best! Not just their food was top grade but the entire
              arrangements were perfect. Thanks a lot.”
            </p>
            <h5>- Mr.Krishna..</h5>
            <span className="client-company">Bangalore, Karnataka</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial">
            <p>
              “My guests were more than pleased to be present at my party. All thanks to The Family Table
              team! Cheers!”
            </p>
            <h5>- Ms.Radha</h5>
            <span className="client-company">Bangalore, Karnataka</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial">
            <p>
              “I have experienced quite a many catering service providers and I must say that they are the finest!”
            </p>
            <h5>- Mr. GowriShankar</h5>
            <span className="client-company">Bangalore, Karnataka</span>
          </div>
        </div>
      </div>
    </div>
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
  )
}

export default HomePage