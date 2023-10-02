import Image from "next/image";
import React from "react";

const Chatcard = () => {
  return (
      <div className="flex items-center gap-[15px] pl-[13px] pr-[15px]">
        <div className="w-[49px] aspect-square shrink-0 relative">
          <Image
            src={"/profile_pic.jpg"}
            alt={"profile Pic"}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 flex-col overflow-auto py-3 border-b border-[#8696a026]">
          <div className="flex items-center justify-between">
            <p className="text-[]">trainwithrc</p>
            <p className="text-xs text-[#8696a0]">9/11/2023</p>
          </div>
          <div className="flex items-center overflow-auto">
            <p className="text-sm text-[#8696a0] truncate">Arms ko lock rkho elbow pr extension nhi honi chahiye bilkul bhi</p>
          </div>
        </div>
      </div>
  );
};

export default Chatcard;
