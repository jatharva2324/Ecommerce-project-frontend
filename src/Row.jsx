import React from "react";
import Card from "./Productcard";
import products from "./products.js";

function Row(props) {
  return (
    <div className={props.rownumber}>
      {products.map((product) => {
        return (
          <Card
            cardclass="col-lg-2 col-xxl-2 col-xl-2 col-md-3 col-sm-4 product-card"
            cardimage={product.image}
            prodname={product.name}
          />
        );
      })}
    </div>
  );
}

{
  /* <Card
        cardclass="col-2 product-card"
        cardimage="../public/images/img0.png"
        prodname="ASUS Core i3 10th Gen ..."
      />
      <Card
        cardclass="col-2 product-card"
        cardimage="../public/images/img2.png"
        prodname="realme narzo 50A (Oxygen Blue, 4GB RAM + 128GB Storage)..."
      />
      <Card
        cardclass="col-2 product-card"
        cardimage="../public/images/img3.png"
        prodname="Apple iPhone 12 (128GB ROM, 4GB RAM, MGJA3HN/A, Black)..."
      />
      <Card
        cardclass="col-2 product-card"
        cardimage="../public/images/img4.png"
        prodname="boAt On-Ear Wireless Headphone ..."
      />
      <Card
        cardclass="col-2 product-card"
        cardimage="../public/images/img7.png"
        prodname="boAt Rockerz 245 V2 BLUETOOTH EARPHONES..."
      />
    </div> */
}

//   );
// }
export default Row;
