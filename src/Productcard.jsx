import React from "react";

function createCard(props) {
  return (
    <div className={props.cardclass}>
      <hr />
      <img src={props.cardimage} alt="prodimage" />
      <hr />
      <p>{props.prodname}</p>
      <button>Buy now</button>
    </div>
  );
}
export default createCard;
