import React from "react";
import "./styles/styles.css";
import imgSrc from "../../public/images/bg2.png";
import { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Reviews from "./Reviews";
import Footer from "./Footer";

const Home = () => {
  const wlcText = "Weclome to CompanyName";
  const wlcDesc = "Travel is about creating lasting memories. Whether you're looking htmlFor a romantic getaway, a family vacation, or a solo adventure, we have the resources to help you craft the perfect journey.";

  const [formData, setFormData] = useState({
    pickup : '',
    drop: '',
    date: ''
  });

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData((prev) =>{
      return { ...prev, [name] : value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <Navbar/>
      <main className="container">
        <img src={imgSrc} alt="bg" />
        <div className="home-content">
          <h1>{wlcText}</h1>
          <p>{wlcDesc}</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="user-input">
            <label htmlFor="pickup">Pick-up Location</label>
            <input
              type="text"
              name="pickup"
              id="pickup"
              placeholder="Enter pick-up location"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="user-input">
            <label htmlFor="dateInput">Pick-up Date</label>
            <input 
              type="date" 
              name="date" 
              id="dateInput" 
              placeholder="Select a date"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="user-input">
            <label htmlFor="drop">Return Location</label>
            <input
              type="text"
              name="drop"
              id="drop"
              placeholder="Enter return location"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="user-input">
            <button type="submit" id="bookingBtnSubmit">
              Find Vehicle
            </button>
          </div>
        </form>
      </main>
      <About />
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default Home;
