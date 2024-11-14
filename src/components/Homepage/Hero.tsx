"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { shortInfo } from "@/lib/constants";

const Hero = () => {
  const animationsRef = useRef<{
    animateHover:
      | ((
          button: string,
          arrow: string,
          firstSpan: string,
          secondSpan: string
        ) => void)
      | null;
    animateHoverLeave: (() => void) | null;
  }>({
    animateHover: null,
    animateHoverLeave: null,
  });

  useEffect(() => {
    const loadAnimations = async () => {
      const { animateIntro } = await import("@/animations/sequences/intro");
      const { animateHover, animateHoverLeave } = await import(
        "@/animations/gesture/button"
      );

      animateIntro();

      // Store the animations in the ref
      if (animationsRef.current) {
        animationsRef.current.animateHover = animateHover;
        animationsRef.current.animateHoverLeave = animateHoverLeave;
      }
    };

    loadAnimations();
  }, []);

  return (
    <section className="w-full h-[90vh] relative flex items-center justify-center flex-col md:flex-row ">
      <div className="absolute top-0 left-0 z-0 w-full h-full" id="bg-im">
        <div className="relative w-full h-full">
          <Image src={"/images/hero-img.png"} alt="hero-img" fill />
          <div className="absolute left-0 top-0 bg-[#d8d8d818] z-10 w-full h-full" />
        </div>
      </div>
      <div
        className="w-[90%] md:w-[70%] flex flex-col gap-4 md:gap-6 z-20 px-4 md:px-0"
        id="hero-texts"
      >
        <div className="text-4xl md:text-8xl text-white font-bold overflow-hidden text-center md:text-left">
          <h1 className="translate-y-[200px] hero-h1 opacity-0">
            Construction solution
          </h1>
          <h1 className="translate-y-[200px] hero-h1 opacity-0">
            for everyone
          </h1>
        </div>
        <p className="w-full md:w-[751px] text-white text-[15px] md:text-[17px] font-bold leading-[24px] md:leading-[28px] opacity-0 hero-text text-center md:text-left">
          In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis
          non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod
          nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris
          efficitur dapibus enim in posuere
        </p>
        <Button
          onMouseEnter={() =>
            animationsRef.current.animateHover?.(
              ".btn",
              ".arrow",
              ".span_one",
              ".span_two"
            )
          }
          onMouseLeave={() => animationsRef.current.animateHoverLeave?.()}
          className="relative btn rounded-none bg-primary h-[50px] md:h-[64px] w-full md:w-[240px] overflow-hidden translate-y-[100px] hero-btn opacity-0 mx-auto md:mx-0"
        >
          Learn More
          <MoveRight className="arrow" />
          <div className="absolute left-0 -translate-x-[140%] span_one w-3 h-full bg-white bg-opacity-40 -rotate-12" />
          <div className="absolute left-0 -translate-x-[145%] span_two w-3 h-full bg-white bg-opacity-40 -rotate-12" />
        </Button>
      </div>
      {/* Info summary section */}
      <div
        className="absolute bottom-0 left-0 translate-x-0 lg:translate-x-1/3 translate-y-[100%] w-full md:w-[1081px] h-auto md:h-[235px] bg-primary z-20 flex"
        id="info-summary"
      >
        <div className="w-1/2 md:w-[290px] h-[150px] md:h-full bg-secondary z-20 flex flex-col gap-2 items-center justify-center">
          <h1 className="text-5xl md:text-[100px] text-white font-bold">147</h1>
          <h3 className="text-[16px] md:text-[22px] text-white font-normal capitalize">
            completed projects
          </h3>
        </div>
        <div className="w-1/2 md:w-[290px] h-[150px] md:h-full z-20 flex flex-col gap-2 items-center justify-center">
          <h1 className="text-5xl md:text-[100px] text-white font-bold">25+</h1>
          <h3 className="text-[16px] md:text-[22px] text-white font-normal capitalize">
            years of experience
          </h3>
        </div>
        <div className="hero-service hidden w-full md:w-[501px] h-auto md:h-[549px] bg-white border-t-[10px] border-secondary shadow-xl px-6 md:px-10 py-10 md:py-14 lg:flex flex-col gap-2">
          <h2 className="w-full md:w-5/6 text-lg md:text-2xl text-secondary font-bold text-center md:text-left">
            We Construct and Manage Places and Infrastructures{" "}
          </h2>
          <div className="w-full h-full flex flex-col justify-between mt-4 gap-1">
            {shortInfo.map((info) => (
              <div className="flex gap-2 md:gap-1 w-full" key={info.title}>
                <Image
                  src={info.image}
                  alt={info.title}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-1 p-1">
                  <h3 className="text-[16px] md:text-[18px] font-medium text-secondary capitalize">
                    {info.title}
                  </h3>
                  <p className="text-[14px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal text-[#41444B]">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
