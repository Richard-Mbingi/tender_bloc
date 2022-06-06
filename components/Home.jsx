//TODO: Font not visible

import React from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-primary">
      <div className="min-h-screen">
        <input
          placeholder="Search"
          type="text"
          name="search"
          id="search"
          className="bg-secondary border-2 border-primary"
        />
      </div>
      <h1>Hi, Tenderer</h1>
      <h1>Latest Activities</h1>
      <p>Updated 2hrs ago</p>
    </div>
  );
};

export default Home;
