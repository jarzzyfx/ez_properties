import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MessageSquareMore, Phone, Plus } from "lucide-react";

const Works = () => {
  return (
    <section className="w-full flex flex-col items-center ">
      <div className="flex flex-col gap-4 w-[90%] lg:w-[70%] my-10 lg:my-14">
        <h3 className="text-[12px] lg:text-[14px] text-center leading-[15px] text-primary uppercase font-medium">
          our works
        </h3>
        <h1 className="text-secondary text-center text-[32px] lg:text-[55px] leading-[38px] lg:leading-[64px] font-semibold">
          our special projects
        </h1>

        <div
          className="flex flex-col lg:flex-row w-full h-auto lg:h-[660px] gap-4 lg:gap-8 mt-10 lg:mt-14"
          id="works"
        >
          <div
            className="relative w-full lg:w-[380px] h-[300px] lg:h-full"
            id="work-1"
          >
            <Image
              src={"/images/work-1.png"}
              alt="work-1"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="grid grid-cols-2 gap-4 w-full h-auto lg:h-full"
            id="other-works"
          >
            {/* work */}
            <div className="relative w-full h-[150px] lg:h-auto" id="work-2">
              <Image
                src={"/images/work-2.png"}
                alt="work-2"
                fill
                className="object-cover"
              />
            </div>
            {/* work */}
            <div className="relative w-full h-[150px] lg:h-auto" id="work-3">
              <Image
                src={"/images/work-3.png"}
                alt="work-3"
                fill
                className="object-cover"
              />
            </div>
            {/* work */}
            <div className="relative w-full h-[150px] lg:h-auto" id="work-4">
              <Image
                src={"/images/work-4.png"}
                alt="work-4"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#001ED3] bg-opacity-75 flex flex-col items-center justify-center gap-2 lg:gap-4">
                <h4 className="font-light text-white text-[8px] lg:text-[10px] uppercase">
                  commercial
                </h4>
                <h4 className="font-medium text-white text-[12px] lg:text-[15px] capitalize">
                  Benoit Architecture
                </h4>
                <Button className="rounded-none bg-white text-secondary hover:bg-slate-950">
                  <Plus />
                </Button>
              </div>
            </div>
            {/* work */}
            <div className="relative w-full h-[150px] lg:h-auto" id="work-5">
              <Image
                src={"/images/work-5.png"}
                alt="work-5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full" id="locate">
        <div className="h-[300px] lg:h-[585px] w-full relative" id="map">
          <Image
            src={"/images/map.png"}
            className="object-cover"
            alt="map"
            fill
          />
          <div className="absolute top-0 left-0 bg-secondary opacity-30" />
          <div
            className="absolute bottom-0 left-0 translate-x-1/3 translate-y-[100%] w-[90%] lg:w-[1081px] h-[auto] lg:h-[235px] z-20 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center lg:justify-start"
            id="info-summary"
          >
            {/* item */}
            <div className="mr-0 lg:mr-10 w-full lg:w-[480px] h-auto lg:h-[285px] bg-white border-t-[5px] lg:border-t-[10px] border-primary shadow-xl -translate-x-1/3 lg:-translate-x-0 -translate-y-1/3 p-6 lg:px-10 lg:py-14 flex flex-col gap-2">
              <h3 className="text-[#41444B] text-[12px] lg:text-[14px] font-light">
                COMPANY ADDRESS
              </h3>
              <h2 className="w-full lg:w-5/6 text-lg lg:text-2xl text-secondary font-bold">
                EZ PROPERTIES NG Osayamen line beside Ecobank, Ugbowo-Lagos
                Road, Benin City, Edo State, Benin, Nigeria 300001
              </h2>
            </div>

            {/* item */}
            <div className="w-full lg:w-[290px] h-auto lg:h-full z-20 flex gap-2 items-start mt-4">
              <span className="w-[45px] lg:w-[65px] h-[45px] lg:h-[65px] bg-primary text-white flex items-center justify-center">
                <Phone />
              </span>
              <div className="flex flex-col h-full gap-1">
                <h4 className="text-[8px] lg:text-[10px] uppercase font-light">
                  COMPANY PHONES
                </h4>
                <h3 className="text-[12px] lg:text-[14px] uppercase font-medium">
                  + 234 5678 0988
                </h3>
                <h3 className="text-[12px] lg:text-[14px] uppercase font-medium">
                  + 234 7638 6549
                </h3>
              </div>
            </div>
            {/* item */}
            <div className="w-full lg:w-[290px] h-auto lg:h-full z-20 flex gap-2 items-start mt-4">
              <span className="w-[45px] lg:w-[65px] h-[45px] lg:h-[65px] bg-secondary text-white flex items-center justify-center">
                <MessageSquareMore />
              </span>
              <div className="flex flex-col h-full gap-1">
                <h4 className="text-[8px] lg:text-[10px] uppercase font-light">
                  COMPANY EMAILS
                </h4>
                <h3 className="text-[12px] lg:text-[14px] uppercase font-medium">
                  ezproperties@gmail.com
                </h3>
                <h3 className="text-[12px] lg:text-[14px] uppercase font-medium">
                  ezproperties.info@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Works;
