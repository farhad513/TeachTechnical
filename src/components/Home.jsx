import React from "react";
import Brands from "./Brands";

import Home2 from "./Home2";
import Home3 from "./Home3";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechTechnical</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </main>
      </div>
      <Home2 />
      <Home3 />
      <Brands />
    </>
  );
};

export default Home;
