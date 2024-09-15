import React from "react";
import "./LoadingScreen.css"; // Add CSS for the loading screen

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      {/* <div className="spinner"></div>
      <p>Loading...</p> */}
      <div class="boxes">
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
