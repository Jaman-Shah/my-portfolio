import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
