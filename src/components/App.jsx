import React, { useState } from "react";
import Home from "./homePage/Home";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Product from "./Product";
import data from "./homePage/data";
import Navbar from "./homePage/Navbar"
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
