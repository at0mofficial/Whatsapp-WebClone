"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, useRef } from "react";

const Searchbar = ({ placeHolderText }: { placeHolderText: string }) => {
  const [searchValue, setSearchValue] = useState("");
  const inputSearchRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const searchIconRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const backIconRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handelBlur = () =>{
    if (searchValue === ""){
      backIconRef.current.className="m-2 cursor-pointer hidden"; 
      searchIconRef.current.className="m-2 cursor-pointer";
    }
  }
  const handelBack = () => {
    searchIconRef.current.className="m-2 cursor-pointer";
    backIconRef.current.className="m-2 cursor-pointer hidden"; 
    setSearchValue("")
  }


  return (
    <>
      <div className="flex items-center bg-[#202c33] rounded-md w-full">
        <Image
          src="searchIcon.svg"
          alt="searchIcon"
          width={20}
          height={20}
          ref={searchIconRef}
          className="m-2 cursor-pointer"
          onClick={()=>{inputSearchRef.current.focus()}}
        />
        <Image
          src="back.svg"
          alt="searchIcon"
          width={20}
          height={20}
          ref={backIconRef}
          className="m-2 cursor-pointer hidden"
          onClick={handelBack}
        />
        <input
          type="search"
          placeholder={placeHolderText}
          value={searchValue}
          onChange={handleChange}
          onFocus={()=>{searchIconRef.current.className="m-2 cursor-pointer hidden"; backIconRef.current.className="m-2 cursor-pointer"}}
          onBlur={handelBlur}
          ref={inputSearchRef}
          className="w-full pl-7 bg-transparent outline-none placeholder:text-sm text-white placeholder:text-[#8696a0] focus:placeholder:opacity-0"
        />

        <Image
          src="/x.svg"
          alt="cancel"
          width={20}
          height={20}
          className={`m-2 hover:cursor-pointer ${
            searchValue.length > 0 ? "opacity-100" : "opacity-0"
          }`}
          onClick={handelBack}
        />
      </div>
    </>
  );
};

export default Searchbar;
