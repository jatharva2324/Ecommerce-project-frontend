import React from "react";

export default function Footer(){
    return (
        <footer id="footer">
      <a href="interests.html" target="_blank"
        ><p>Tell us what you are interested in...</p></a
      >
      <i className="fas fa-envelope fa-2x footer-icon"></i>
      <i className="fab fa-twitter fa-2x footer-icon twitter"></i>
      <i className="fab fa-instagram fa-2x footer-icon insta"></i>
      <i className="fab fa-facebook-f fa-2x footer-icon fb"></i>
      <p className="desc">
        Pranav Jagtap & Atharva Jadhav <br />
        Copyrightⓒ2022
      </p>
    </footer>
    )
}