"use client";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight, Play } from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  // Initialize GSAP animations for about scroll effect in a client-safe way

  return (
    <section
      id="about"
      className="flex flex-col items-center pt-[200px] w-full h-full overflow-hidden"
    >
      <AboutInfoSection />
      <AboutVideoSection />
      <SlideShowSection />
    </section>
  );
};

// Component for "About Info" section
const AboutInfoSection: React.FC = () => (
  <section
    id="about-info"
    className="flex flex-col lg:flex-row justify-between w-[90%] lg:w-[70%] gap-8 lg:gap-[150px] mt-[100px] lg:mt-[450px]"
  >
    <div className="flex flex-col gap-2 w-full lg:w-[680px]" id="about-text">
      <h3 className="text-primary uppercase font-medium text-[12px] lg:text-[14px] leading-[15px]">
        About Us
      </h3>
      <h1 className="text-secondary font-semibold text-3xl lg:text-[55px] leading-9 lg:leading-[64px]">
        With our knowledge, we guarantee success
      </h1>
      <h4 className="text-secondary font-medium text-[12px] lg:text-[14px] leading-[15px] my-2">
        Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat congue
      </h4>
      <p className="text-[#41444B] font-light text-[15px] lg:text-[17px] leading-5 lg:leading-[18px] my-2">
        Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo
        consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum
        elit egestas sit amet.
      </p>
      <AnimatedButton label="Learn More" />
    </div>
  </section>
);

// Props for AnimatedButton component
interface AnimatedButtonProps {
  label: string;
}

// Component for the animated button
const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label }) => (
  <Button className="relative btn rounded-none bg-primary h-[50px] lg:h-[64px] w-[180px] lg:w-[240px] overflow-hidden">
    {label}
    <MoveRight className="arrow" />
    <span className="absolute left-0 -translate-x-[140%] span_one w-3 h-full bg-white bg-opacity-40 -rotate-12" />
    <span className="absolute left-0 -translate-x-[145%] span_two w-3 h-full bg-white bg-opacity-40 -rotate-12" />
  </Button>
);

// Component for "About Video" section
const AboutVideoSection: React.FC = () => (
  <div
    className="w-full lg:w-[500px] h-[400px] lg:h-[600px] relative"
    id="about-video"
  >
    <div className="absolute top-0 right-0 about-c1 w-[200px] lg:w-[380px] h-[200px] lg:h-[387px] shadow-xl p-3 lg:p-6 translate-x-8 lg:translate-x-[100px] -translate-y-8 lg:-translate-y-[100px] opacity-0">
      <ImageWrapper src="/images/img.png" alt="img" />
    </div>
    <div className="absolute bottom-0 left-0 about-c2 w-[180px] lg:w-[300px] h-[200px] lg:h-[387px] shadow-xl p-3 lg:p-6 bg-white -translate-x-8 lg:-translate-x-[100px] translate-y-8 lg:translate-y-[100px] opacity-0 z-10">
      <ImageWrapper src="/images/about-img.png" alt="img" />
    </div>
    <Button className="absolute top-[35%] left-[15%] lg:left-[20%] bg-secondary text-white hover:bg-slate-900 rounded-none z-20 opacity-0 about-btn">
      <Play />
    </Button>
  </div>
);

// Props for ImageWrapper component
interface ImageWrapperProps {
  src: string;
  alt: string;
}

// Component for wrapping images
const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt }) => (
  <div className="w-full h-full relative">
    <Image src={src} alt={alt} fill />
  </div>
);

// Component for "Slide Show" section
const SlideShowSection: React.FC = () => (
  <section
    className="w-full mt-10 h-[400px] lg:h-[600px] flex flex-col lg:flex-row ring-1"
    id="slide-show"
  >
    <Slide imageSrc="/images/slide-1.jpg" alt="img1" />
    <SlideWithOverlay
      imageSrc="/images/slide-2.png"
      overlayColor="bg-secondary"
      title="Research & Analysis"
      description="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
    />
    <SlideWithOverlay
      imageSrc="/images/slide-3.png"
      overlayColor="bg-primary"
      title="Industry Development"
      description="Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat"
    />
    <SlideWithOverlay
      imageSrc="/images/slide-4.png"
      overlayColor="bg-secondary"
      title="Production Launch"
      description="Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus"
    />
  </section>
);

// Props for Slide component
interface SlideProps {
  imageSrc: string;
  alt: string;
}

// Component for a simple slide
const Slide: React.FC<SlideProps> = ({ imageSrc, alt }) => (
  <div className="w-full lg:w-[850px] h-full relative">
    <Image src={imageSrc} alt={alt} fill />
  </div>
);

// Props for SlideWithOverlay component
interface SlideWithOverlayProps {
  imageSrc: string;
  overlayColor: string;
  title: string;
  description: string;
}

// Component for a slide with overlay and text
const SlideWithOverlay: React.FC<SlideWithOverlayProps> = ({
  imageSrc,
  overlayColor,
  title,
  description,
}) => (
  <div className="w-full lg:w-[356px] h-full relative">
    <div
      className={`absolute w-full h-full ${overlayColor} bg-opacity-65 z-10`}
    />
    <Image src={imageSrc} alt="overlay image" fill />
    <SlideTextOverlay title={title} description={description} />
    <div
      className="w-full flex items-end justify-end absolute bottom-0 left-0 px-4 lg:px-8 py-4 lg:py-10 h-[50%] z-20"
      id="slide-footer"
    >
      <Button className="rounded-none bg-primary stroke-[3px] text-white">
        <MoveRight />
      </Button>
    </div>
  </div>
);

// Props for SlideTextOverlay component
interface SlideTextOverlayProps {
  title: string;
  description: string;
}

// Component for overlay text on slides
const SlideTextOverlay: React.FC<SlideTextOverlayProps> = ({
  title,
  description,
}) => (
  <div
    className="w-full absolute top-0 left-0 px-4 lg:px-8 py-4 lg:py-10 h-[50%] z-20"
    id="slide-text"
  >
    <h1 className="text-xl lg:text-3xl text-white font-semibold">{title}</h1>
    <p className="text-xs lg:text-sm text-[#D4D7DD] mt-4 lg:mt-10">
      {description}
    </p>
  </div>
);

export default About;
