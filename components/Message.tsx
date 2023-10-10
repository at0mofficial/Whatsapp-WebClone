import Image from "next/image";
import { isPortrait } from "@/lib/actions";

const Message = ({ incoming }: { incoming: Boolean }) => {
  return (
    <div className="block mt-2 ml-4 ">
      <div
        className={`inline-flex gap-2 ${
          incoming ? "bg-[#202c33] rounded-tl-none" : "bg-[#005c4b] rounded-tr-none"
        } p-[3px] rounded-[7.5px]  shadow-[0px_1px_0.5px_rgba(11,20,26,0.13)] relative`}
      >
        <Image
          src={`${incoming ? "/incoming.svg" : "/outgoing.svg"}`}
          alt=""
          height={13}
          width={8}
          className={`absolute top-0 ${incoming? " left-[-8px] scale-x-[-1]":" right-[-8px]"}`}
        />
        <div className={`relative ${isPortrait('/profile_pic.jpg')?'max-w-[240px]':'max-w-[320px]'}`}>
            <div className={`relative ${isPortrait('/profile_pic.jpg')? "w-[240px] h-[320px]":"w-[330px] h-[214px]"}`}>
              <Image src={'/profile_pic.jpg'}
                  alt='profile'
                  fill
                  className="rounded-[6px] object-cover"
                />
            </div>

            <div className="flex flex-wrap peer/message">
              <p className="text-[14.2px] break-all pt-[7px] pl-[6px] pr-[4px] pb-[5px] leading-[19px]">
                or bahi k kuch kr raya hai aaj kal
              </p>
              <span className="invisible text-[11px] text-right leading-[15px] text-white/[0.6]">
                8:53 AM
              </span>
            </div>

            <span className="absolute bottom-[2px] right-[5px] peer-[]/message:bottom-0 text-[11px] text-right leading-[15px] text-white/[0.6]">
                8:53 am
            </span>
        </div>
      </div>
    </div>
  );
};

export default Message;

//out-going: #005c4b
//incoming: #202c33
