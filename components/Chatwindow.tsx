import React from "react";
import Message from "./Message";

const Chatwindow = () => {
  return (
    <div className="grow bg-[#0b141a] z-0 overflow-y-auto relative">
      <div className="absolute -z-10 w-full h-full bg-[url('/chatBackground.png')] bg-repeat opacity-[0.06]"></div>
      <Message incoming />

    </div>
  );
};

export default Chatwindow;
