import React from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import Firstpageproducts from "./Firstpageprods";
function App() {
  return (
    <div className="bg-container">
      <Navbar />
      <Carousal />
      <Firstpageproducts />
    </div>
  );
}
export default App;
