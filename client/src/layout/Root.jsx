import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="-mt-24">
        {" "}
        <Navbar />
      </div>
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
