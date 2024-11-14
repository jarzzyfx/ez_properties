import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col gap-10 justify-center items-center min-h-screen px-4 md:px-8 mt-[300px] lg:mt-0 overflow-hidden">
      <section className="w-full md:w-[70%] flex flex-col gap-4 mt-[150px] md:mt-[350px] mb-[100px] md:mb-[200px]">
        <h3 className="text-center text-[12px] md:text-[14px] leading-[15px] text-primary uppercase font-medium">
          Testimonials
        </h3>
        <h1 className="text-center text-secondary text-[32px] md:text-[55px] leading-[36px] md:leading-[64px] font-semibold">
          Our Clients Say
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between gap-6 md:gap-10 mt-10 h-auto md:h-[444px]">
          <div className="w-full md:w-[468px] h-[300px] md:h-full bg-white shadow-xl p-6 md:p-8">
            <div className="relative w-full h-full">
              <Image src={"/images/testimonial-1.png"} alt="testimonial" fill />
            </div>
          </div>

          <div
            className="w-full h-full flex flex-col justify-center gap-2"
            id="testimonial-text"
          >
            <span className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#001ED3] text-white flex items-center justify-center">
              <Quote />
            </span>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal text-[#41444B]">
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique
            </p>

            <div className="flex flex-col gap-1 my-2 md:my-4">
              <h3 className="text-[#16213E] text-[18px] md:text-[22px] font-medium leading-[22px] md:leading-[26px]">
                Katy Grey{" "}
              </h3>
              <p className="text-[#001ED3] text-[12px] md:text-[14px] leading-[15px] underline"></p>
            </div>

            <div className="flex gap-2 items-center">
              <span className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-secondary" />
              <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-secondary" />
              <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[300px] md:h-[550px] relative">
        <Image src={"/images/demo-vid.png"} alt="vid" fill />
        {/* <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-r from-transparent to-[#00215B] bg-opacity-20"></div> */}
      </section>
    </section>
  );
};

export default Testimonials;
