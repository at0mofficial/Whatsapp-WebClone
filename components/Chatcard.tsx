import Image from "next/image";
import React from "react";

const Chatcard = () => {
  return (
    <>
      <div className="flex max-w-full py-2 px-3 bg-[#111b21]">
        <div className="shrink-0 h-[49px] w-[49px] relative mr-[15px]">
          <Image
            src={"/profile_pic.jpg"}
            alt={"profile Pic"}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 flex-col">
          <div className="flex items-center justify-between">
            <p>trainwithrc</p>
            <p className="text-xs text-[#8696a0]">9/11/2023</p>
          </div>
          <div className="w-[5rem] text-sm text-[#8696a0] truncate ">
            Arms ko lock rkho elbow pr extension nhi honi chahiye bilkul bhi
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatcard;
