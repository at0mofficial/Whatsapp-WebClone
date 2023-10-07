import React from "react";
import Navbar from "./Navbar";
import Chatwindow from "./Chatwindow";

const Rightsidebar = () => {
  return (
    <div className="flex flex-col grow">
      <Navbar rightSidebar />
      <Chatwindow />
      <div className="justify-end bg-green-800">asd</div>
    </div>
  );
};

export default Rightsidebar;
