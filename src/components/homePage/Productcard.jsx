import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";


function createCard(props) {
  return (
    <div className="col-lg-3 col-xxl-2 col-xl-3 col-md-4 col-sm-6 col-xs-12">
      <div className="product-card">
      <hr />
      <img className="card-image" src={props.cardimage} alt="prodimage" />
      <hr />
      <p className="fw-bold">{props.price}</p>
      <p>{props.prodname.substring(0,50)}</p>
      <Link to={`/product/${props.id}`}>
      <Button>Buy Now</Button>
      </Link>
      </div>
    </div>
  );
}
export default createCard;
