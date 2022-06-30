import React from "react";

function Caro() {
  return (
    <div className="mb-5 pt-5">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade top"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/1.jpeg"
              className="d-block w-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/2.jpg"
              className="d-block w-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/3.jpg"
              className="d-block w-75"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Caro;
