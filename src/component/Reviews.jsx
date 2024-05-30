import React, { useState, useEffect } from "react";

const Reviews = () => {

  //Posting Data
  const [userData, setUserData] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonStr = JSON.stringify(userData);

    fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonStr,
    })
      .then((res) => {
        if (res.ok) {
          alert("Review added");
          return res.json();
        } else {
          console.log("Status code is not OK!!!");
        }
      })
      .then((data) => {
        console.log(data); // If you want to do something with the response
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  };

  //Getting Data
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Status code Error");
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  return (
    <div className="review-card-container">
      <h1>What Our Clients Say</h1>
      <div className="client-reviews">
        {/* Form */}
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h4>Write your Feedback here</h4>
          <div className="review-input">
            <label htmlFor="username">Enter Your Name</label>
            <input 
              type="text" 
              id="username" 
              name = "name"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="review-input" id="pick-drop">
            <div className="from">
              <label htmlFor="from">From</label>
              <input 
                type="text" 
                id="from" 
                name="from"
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="to">
              <label htmlFor="to">To</label>
              <input 
                type="text" 
                id="to" 
                name="to"
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="review-input">
          <label htmlFor="date-input">Date</label>
            <input 
              type="date" 
              id="date-input"
              name="date" 
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="review-input">
            <label htmlFor="textarea">Feedback</label>
            <textarea
              id="textarea"
              cols="50"
              rows="5"
              name="feedback"
              onChange={handleChange}
              required
              autoComplete="off"
            ></textarea>
          </div>
          <div className="review-input">
            <button type="submit" id="feedbackBtnSubmit">
              Submit
            </button>
          </div>
        </form>

        {/* Customer reviews */}
        <div className="review">
          <h2 id="recent-feeds">Customer reviews</h2>
          {/* Dynamically render reviews */}
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="user-profile">
                <img
                  src="./images/account.png"
                  style={{ height: "20px" }}
                  alt="User"
                />
                <h3 id="reviewed-username">{review.username}</h3>
              </div>
              <p id="review-date">Reviewed {review.date}</p>
              <div className="from-to">
                <p>{review.from}</p>
                <p>TO</p>
                <p>{review.to}</p>
              </div>
              <p id="feedback">{review.feedback}</p>
            </div>
          ))}
          {/* View More link */}
          <div className="more-reviews">
            <a href="/view-more">
              <span>View More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
