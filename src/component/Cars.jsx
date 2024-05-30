import React, { useState, useEffect } from 'react';
import backgroundImg from '../../public/images/blurred-car-parking-img.jpg'

const Cars = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch("/data/cars.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Status code Error");
        }
        return res.json();
      })
      .then((data) => {
        setVehicleData(data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  return (
    <div className="vehicle-categories">
      {/* <img src={backgroundImg} id="backgroundImg" alt="backgroundImg" /> */}
      <h1 id="vehicle-categories-heading">Vehicle Categories</h1>
      <div className="cards">
        {vehicleData.map((vehicle, index) => (
          <div className="car-card" key={vehicle.id} data-car-id={vehicle.id}>
            <img src={vehicle.image} alt={`Image of ${vehicle.name}`} className="car-image" />
            <div className="car-details">
              <div className="car-info">
                <h2 className="car-name">{vehicle.name}</h2>
                <p className="car-model">{vehicle.model}</p>
              </div>
              <div className="car-features">
                {vehicle.features.map(feature => (
                  <div className="car-feature" key={feature.label}>
                    <img src={feature.icon} alt={feature.label} className="feature-icon" style={{ height: '20px', width: '20px', background: 'transparent' }} />
                    <span className="feature-label">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
