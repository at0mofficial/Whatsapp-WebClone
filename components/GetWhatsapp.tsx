import Image from "next/image";
import React from "react";

const GetWhatsapp = () => {
  return (
    <div className="flex h-full items-center justify-center py-7">
      <div className="w-[80%] max-w-[560px] text-center mt-[-20px]">
        <Image
          src="/getWhatsapp.png"
          alt="GetWhatsApp"
          width={320}
          height={188}
          className="mx-auto"
        />
          <h2 className="text-[32px] text-[#e9edef]/[0.88] leading-8 font-light mt-7">
            Download WhatsApp for Windows
          </h2>
          <p className="text-[#8696a0] text-[14px] leading-5 mt-[18px]">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>
          <div className="mt-8">
            <button className="border border-[#00a884] bg-[#00a884] rounded-3xl text-[#111b21] text-[14px] leading-4 font-medium py-2.5 px-6 ">
              Get the app
            </button>
          </div>
        <div className="absolute left-0 right-0 bottom-10 text-sm text-[#667781]">
        <Image
          src="/privacyLock.svg"
          alt="Privacy Policy"
          width={10}
          height={12}
          className="inline-block mb-[2px]"
        />
        <span> Your personal messages are end-to-end encrypted</span>
      </div>
      </div>
    </div>
  );
};

export default GetWhatsapp;
