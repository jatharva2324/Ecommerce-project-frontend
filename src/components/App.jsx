import React, { useState } from "react";
import Home from "./homePage/Home";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Product from "./Product";
import data from "./homePage/data";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
