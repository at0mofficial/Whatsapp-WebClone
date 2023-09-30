import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Chatcard from "./Chatcard";
import Image from "next/image";

const Leftsidebar = () => {
  return (

    <div className="flex flex-col">
      <Navbar />
      <div className="flex items-center bg-[#111b21] py-1.5 px-3">
        <Searchbar placeHolderText="Search or start new chat" />
        <Image
          src="/unreadMessage.svg"
          alt="unreadMessages"
          height={20}
          width={20}
          className="ml-2"
        />
      </div>
      <div className="flex-col">
      <Chatcard />
      </div>

      {/* get Whatsapp For windows */}
    </div>
  );
};

export default Leftsidebar;
