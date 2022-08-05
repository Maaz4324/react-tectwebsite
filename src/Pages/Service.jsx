import React from "react";
import "../style/Service.css";
import card1 from"../images/card1.jpg"
import card2 from"../images/card2.jpg"
import card3 from"../images/card3.jpg"

function Service() {
  return (
    <div className="service-container" id="service">
      <div className="common-head service-head-container">
        <h1>Our Services</h1>
      </div>
      <div className="service-card-container">
        <div className="card-container">
          <div className="card" style={{width: '18rem'}}>
            <img src={card1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to buil
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card" style={{width: '18rem'}}>
            <img src={card2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card" style={{width: '18rem'}}>
            <img src={card3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-web btn-service-visit">Visit Now</button>
    </div>
  );
}

export default Service;
