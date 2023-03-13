import React from 'react';
import { ReactFloatingBalloons } from "react-floating-balloons";

// import "./floatingBalloons.css";


const FloatingBalloons = () => {
    const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

    return (
        <div className='balloons'>
        <h1>Floating Balloons</h1>
        {supportsTouch ? (
          <h2>Click the balloons to pop</h2>
        ) : (
          <h2>Double Click the balloons to pop </h2>
        )}
        <ReactFloatingBalloons
          count={10}
          msgText="Boom!!"
          colors={["yellow", "purple"]}
          popVolumeLevel={0.1}
        />
      </div>
    );
};

export default FloatingBalloons;