import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./homePage/data";

function Product(){
    const params = useParams();
    const {id} = params;
    // return (
    //     <div>
    //     <div className="product-image">
    //     <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351" alt="" />
    //     <img src="https://raukelectronic.com/wp-content/uploads/2016/03/r450-4.png" alt="" />
    //     <img src="https://www.tshong.bt/wp-content/uploads/2021/05/r450-6.png" alt="" />
    //     </div>
    //     <hr className="dotted-line"/>
    //     <div className="product-details">
    //         <h3>boAt On-Ear Wireless Headphone with Mic(Bluetooth 4.2, Rockerz 450R, Aqua Blue)</h3>
            
    //         <div className="specs">
    //             <h4>Key Features</h4>
    //             <ul>
    //                 <li>On-Ear</li>
    //                 <li>
    //                     Ideal For: Entertainment | Beginner Audiophiles | Hi-End Audiophiles
    //                 </li>
    //                 <li>
    //                     HD Immersive Audio
    //                 </li>
    //                 <li>
    //                     Bluetooth 4.2
    //                 </li>
    //             </ul>
    //         </div>
    //         <hr className="dotted-line"/>
    //         <div className="specs">
    //             <h4>Specification</h4>
    //             <table>
    //                 <thead>
    //                 <tr className="text-center align-items-center">
    //                     <th>Device type</th>
    //                     <th>Device Orientation</th>
    //                     <th>Lifestyle</th>
    //                     <th>Model Series</th>
    //                     <th>Model Number</th>
    //                 </tr>
    //                 </thead>
    //                 <tbody>
    //                 <tr className="text-center">
    //                     <td>Wireless Headphone</td>
    //                     <td>On-Ear</td>
    //                     <td>Entertainment | Beginner Audiophiles | Hi-End Audiophiles</td>
    //                     <td>Rockerz 450R</td>
    //                     <td>Rockerz 450R</td>
    //                 </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //         <div className="last">
    //             <button className="btn btn-sm btn-dark">Buy Now</button>
    //             <button className="btn btn-sm btn-dark">Add to Cart</button>
    //         </div>
    //     </div> 
    // </div> 
    // )

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
                <button className="btn btn-sm btn-dark">Add to Cart</button>
            </div>
        </div> 
    </div> )
            }
        })
    )
}

export default Product;