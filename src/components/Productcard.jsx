import React from "react";

function createCard(props) {
  return (
    <div className="col-lg-2 col-xxl-2 col-xl-2 col-md-3 col-sm-4 product-card">
      <hr />
      <img className="card-image" src={props.cardimage} alt="prodimage" />
      <hr />
      <p>{props.price}</p>
      <p>{props.prodname.substring(0,50)}</p>
      <button>Buy now</button>
    </div>
  );
}
export default createCard;
