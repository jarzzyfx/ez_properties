import React from "react";
import { Button } from "../ui/button";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { clientSupport, newsFooter, quickLinks } from "@/lib/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-14 w-full flex flex-col md:flex-row">
      <section className="w-full md:w-[750px] h-auto md:h-[489px] bg-primary flex flex-col gap-6 md:gap-10 items-center p-8 md:p-14">
        <div className="text-bold">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-[12px] md:text-[14px] leading-[15px] font-light text-white uppercase">
            call us today
          </h3>
          <Button
            className="text-[24px] md:text-[34px] leading-[28px] md:leading-[38px] font-semibold text-white p-0 hover:bg-transparent"
            variant={"ghost"}
          >
            + 1 634 7638 654
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button className="rounded-full bg-white text-secondary h-[32px] w-[32px] md:h-[40px] md:w-[40px]">
            <Twitter />
          </Button>
          <Button className="rounded-full bg-white text-secondary h-[32px] w-[32px] md:h-[40px] md:w-[40px]">
            <Facebook />
          </Button>
          <Button className="rounded-full bg-white text-secondary h-[32px] w-[32px] md:h-[40px] md:w-[40px]">
            <Linkedin />
          </Button>
          <Button className="rounded-full bg-white text-secondary h-[32px] w-[32px] md:h-[40px] md:w-[40px]">
            <Youtube />
          </Button>
        </div>

        <p className="w-full md:w-[331px] text-[14px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal text-white text-center md:text-left">
          Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque a
          velit
        </p>
      </section>
      <section className="w-full h-auto md:h-[489px] bg-secondary flex flex-col gap-6 md:gap-10 p-8 md:p-14 text-white">
        <div
          className="flex flex-col md:flex-row items-start gap-8 md:gap-[100px]"
          id="links"
        >
          {/* quick links */}
          <div className="flex flex-col gap-2">
            <h3 className="mb-4 md:mb-10 text-[18px] md:text-[22px] leading-[22px] md:leading-[26px]">
              Quick Links
            </h3>
            {quickLinks.map((link) => (
              <Link
                key={link.text}
                href={""}
                className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal capitalize"
              >
                {link.text}
              </Link>
            ))}
          </div>
          {/* client support */}
          <div className="flex flex-col gap-2">
            <h3 className="mb-4 md:mb-10 text-[18px] md:text-[22px] leading-[22px] md:leading-[26px]">
              Client Support
            </h3>
            {clientSupport.map((link) => (
              <Link
                key={link.text}
                href={""}
                className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal capitalize"
              >
                {link.text}
              </Link>
            ))}
          </div>
          {/* our news */}
          <div className="flex flex-col gap-2">
            <h3 className="mb-4 md:mb-10 text-[18px] md:text-[22px] leading-[22px] md:leading-[26px]">
              Our News
            </h3>
            {newsFooter.map((news) => (
              <Link
                key={news.date}
                href={""}
                className="text-[15px] md:text-[18px] leading-[24px] md:leading-[26px] font-normal capitalize flex flex-col gap-1"
              >
                {news.news.map((n) => (
                  <span key={n}>{n}</span>
                ))}
                <div className="flex items-center gap-4">
                  <span className="text-[12px] md:text-[14px] leading-[15px] font-extralight text-[#EBECEE]">
                    {news.date}
                  </span>
                  <span className="text-[12px] md:text-[14px] leading-[15px] font-extralight text-[#EBECEE]">
                    by {news.writtenBy}
                  </span>
                </div>
              </Link>
            ))}
            <div className="flex items-center gap-1 mt-4">
              <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-white" />
              <span className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-white" />
              <span className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-white" />
            </div>
          </div>
        </div>
        <p className="text-[14px] md:text-[17px] leading-[24px] md:leading-[28px] font-normal text-[#D4D7DD] text-center md:text-left">
          ezproperties © Dustro Template All rights reserved Copyrights 2020
        </p>
      </section>
    </footer>
  );
};

export default Footer;
