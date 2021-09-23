import React from "react";
import Image from "next/image";
import wavingHand from "../public/wave.png";
import { SiReact } from "react-icons/si";
import { BiDoorOpen } from "react-icons/bi";

const PubBanner = () => {
  return (
    <div
      className="flex flex-row justify-between mx-auto bg-helloblue-500 py-5 md:py-5 px-4 text-white rounded-3xl"
      id="Banner"
    >
      <div className="flex flex-row">
        <div className="hidden md:block md:text-8xl mx-4 my-auto">
          {" "}
          <SiReact />{" "}
        </div>
        <div className=" my-auto">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-around">
              <h1 className="text-lg md:text-3xl font-bold md:font-extrabold">
                Hello, React{" "}
              </h1>
              <Image
                src={wavingHand}
                alt="Waving Hand"
                // placeholder="blur"
                //   placeholderStyle={{ rounded: "100%" }}
                width={35}
                height={30}
                className="mx-4 my-auto"
              />{" "}
            </div>
            <p className="text-xs md:text-lg font-light ">
              All the Resources you need...
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col place-content-end bg-helloblue-600 py-4 md:py-10 px-4 md:px-8 rounded-3xl cursor-pointer">
        <p className="md:italic text-xs md:text-md">Reserved Space</p>
        <h2 className="text-xs md:text-md font-bold text-center mb-4">
          Contact us
        </h2>
        <div className="flex flex-row justify-center text-helloblue-700 font-bold bg-helloyellow-500 rounded-xl p-2">
          <p>Open</p>
          <div className="text-xl my-auto">
            <BiDoorOpen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubBanner;
