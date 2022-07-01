import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
import data from "./homePage/data";

function Product(){
    const params = useParams();
    const {id} = params;
    return (
        data.map( (prod) => {
            if(id == prod.id)
            {
               return ( <div>
        <div className="product-image">
        <img src={prod.image} alt="" />
        <img src={prod.image} alt="" />
        <img src={prod.image} alt="" />
        </div>
        <hr className="dotted-line"/>
        <div className="product-details">
            <h3>{prod.name}</h3>
            <h3>{prod.price}</h3>
            <div className="specs">
                <h4>Key Features</h4>
               
                <p>{prod.specs}</p>
            </div>
            <hr className="dotted-line"/>
            <div className="specs">
                <h4>Specification</h4>
                
                <p>{prod.specs}</p>
            </div>
            <div className="last">
                <button className="btn btn-sm btn-dark">Buy Now</button>
                <Link to={`/cart/${id}`}>
                <button className="btn btn-sm btn-dark"> Add to Cart</button>
                </Link>
            </div>
        </div> 
    </div> )
            }
        })
    )
}

export default Product;