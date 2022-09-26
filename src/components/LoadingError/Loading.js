import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <lottie-player
        src="https://lottie.host/530ebf45-61fc-4fa2-9e2b-02671cdd95bb/Nom6lVPVw0.json"
        background="transparent"
        speed="1"
        style={{ width: "400px", height: "400px" }}
        loop
        autoplay
      ></lottie-player>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
