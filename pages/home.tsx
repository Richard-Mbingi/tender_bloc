import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const home = () => {
  return (
    <div className="h-screen bg-secondary text-primary grid grid-flow-col">
      <div className="bg-primary text-secondary">
        <Sidebar />
      </div>
      <div className="col-span-7">
        <Dashboard />
      </div>
      <div className="bg-primary text-secondary col-span-3">grid 3</div>
    </div>
  );
};

export default home;
