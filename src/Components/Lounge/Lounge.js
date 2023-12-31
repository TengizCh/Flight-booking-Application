import React, { useEffect } from "react";

import lounge from "../../assets/lounge.jpg";

// import Aos from "aos";
// import "aos/dist/aos.css";

const Lounge = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 });
  // });

  return (
    <div className="lounge container section" id="lounge">
      <div className="sectionContainer grid">
        <div data-aos="fade-down" data-aos-duration="2500" className="imgDiv">
          <img src={lounge} />
        </div>

        <div className="textDiv">
          <h2 className="loungeText">Unaccompanied minor Lounge</h2>

          <div className="grids grid">
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Help throught the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="singleGrid"
            >
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3500"
              className="singleGrid"
            >
              <span className="gridTitle">Care on the flight </span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="3400"
              className="singleGrid"
            >
              <span className="gridTitle">Priotity boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
