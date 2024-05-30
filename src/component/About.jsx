import React from 'react';
import './styles/styles.css'; 
import imgLike from '../../public/images/like.png';
import imgQuality from '../../public/images/high-quality.png';
import imgLocation from '../../public/images/locations.png';
import imgStroller from '../../public/images/stroller.png';
import imgGearshift from '../../public/images/gearshift.png';
import img24x7 from '../../public/images/24-hours.png';

const About = () => {
  return (
    <div className='about'>
      <h1>Why Choose Us</h1>
      <div className="content-wrapper">
        <div className="content">
          <div className="content-img">
            <img src={imgLike}  alt="Like" />
          </div>
          <div className="content-desc">
            <h2>Outstanding Services</h2>
            <p>We prioritize customer satisfaction by providing top-notch services tailored to your needs. Our team is dedicated to ensuring a smooth and enjoyable experience.</p>
          </div>
        </div>

        <div className="content">
          <div className="content-img">
            <img src={imgLocation}  alt="Location" />
          </div>
          <div className="content-desc">
            <h2>Known for Quality Vehicles</h2>
            <p>Our fleet consists of high-quality, well-maintained vehicles. We ensure that each vehicle meets safety and comfort standards, giving you peace of mind during your journey.</p>
          </div>
        </div>

        <div className="content">
          <div className="content-img">
            <img src={imgQuality}  alt="Quality" />
          </div>
          <div className="content-desc">
            <h2>GPS on Every Vehicle</h2>
            <p>Navigate with confidence. All our vehicles are equipped with GPS, allowing you to find the best routes and stay on track during your trip.</p>
          </div>
        </div>

        <div className="content">
          <div className="content-img">
            <img src={imgStroller}  alt="Stroller" />
          </div>
          <div className="content-desc">
            <h2>Baby Chairs/Booster Seats</h2>
            <p>Traveling with young children? We offer baby chairs and booster seats to ensure the safety and comfort of your little ones.</p>
          </div>
        </div>

        <div className="content">
          <div className="content-img">
            <img src={imgGearshift}  alt="Gearshift" />
          </div>
          <div className="content-desc">
            <h2>Automatic and Manual Transmissions</h2>
            <p>We cater to all preferences with a selection of vehicles featuring both automatic and manual transmissions. Choose what suits you best.</p>
          </div>
        </div>

        <div className="content">
          <div className="content-img">
            <img src={img24x7}  alt="24x7" />
          </div>
          <div className="content-desc">
            <h2>24/7 Support</h2>
            <p>Our support team is available around the clock to assist with any issues or questions. Enjoy your journey knowing we are always here for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
