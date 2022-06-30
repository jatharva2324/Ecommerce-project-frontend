import React from "react";

function Caro() {
  return (
    <div className="mb-5 mt-5">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade top"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://blog.hubspot.com/hubfs/ecommerce-1.png"
              className="d-block w-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://chameleoncollective.com/wp-content/uploads/2018/04/e-commerce-blog-post-scaled.jpg"
              className="d-block w-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ecommerceresult.com/wp-content/uploads/2019/12/Ecommerce-trends-van-2020.jpeg"
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
