import Image from "next/image";
import React from "react";

const GetWhatsapp = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center relative py-7">
      <div className="mt-[-20px] w-[80%] max-w-[560px]">
        <Image
          src="/getWhatsapp.png"
          alt="GetWhatsApp"
          width={320}
          height={188}
          className="mx-auto"
        />
        <div className="text-center">
          <h2 className="text-[32px] text-[#e9edef]/[0.88] font-light mt-7">
            Download WhatsApp for Windows
          </h2>
          <p className="text-[#8696a0] text-[14px] mt-[18px]">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>
          <div className="mt-8">
            <button className="border border-[#111b21] bg-[#00a884] rounded-3xl text-[#111b21] text-[14px] font-medium py-2.5 px-6 ">
              Get the app
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-1 absolute bottom-10 justify-center">
        <Image
          src="/privacyLock.svg"
          alt="Privacy Policy"
          width={10}
          height={12}
        />
        <p className="text-[#667781] text-[14px]">
          Your personal messages are end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default GetWhatsapp;
