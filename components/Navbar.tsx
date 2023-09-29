import Image from "next/image";
import React from "react";
import { leftNavLinks, rightNavLinks } from "@/constants";
import Link from "next/link";

const Navbar = ({rightSidebar}:{rightSidebar?:boolean}) => {
  return (
    <>
      <nav className="flex justify-between bg-[#202c33] h-[59px] py-2.5 px-4">
        <div className="flex items-center">
        <div className="h-10 w-10 relative mr-[15px]">
          <Image
            src={"/profile_pic.jpg"}
            alt={"profile Pic"}
            fill
            className="rounded-full object-cover"
          />
        </div>
          {
            rightSidebar && <div>
              <p className="font-semibold text-base/[21px] text-[#e9edef]">Mousam</p>
              <p className="text-sm text-[#8696a0]">click here for contact info</p>
            </div>
          }
        </div>
        
        <div className="flex items-center">
          {!rightSidebar &&
            leftNavLinks.map((item) =>(
              <Link href={item.route}
                    key={item.label}
                    className="p-2"
              >
                <Image
                src={item.imageUrl}
                alt={item.label}
                width={24}
                height={24}
                />
              </Link>
            ))
            
          }
          {rightSidebar &&
            rightNavLinks.map((item) =>(
              <Link href={item.route}
                    key={item.label}
                    className="p-2"
              >
                <Image
                src={item.imageUrl}
                alt={item.label}
                width={24}
                height={24}
                />
              </Link>
            ))
            
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
