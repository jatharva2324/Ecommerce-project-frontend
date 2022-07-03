import React, { useState } from "react";
import Home from "./homePage/Home";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Product from "./Product";
import data from "./homePage/data";
import Navbar from "./Navbar"
import Footer from "./Footer";
import Cart from "./Cart";
import Order from "./Order";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/orders" element={<Order />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
