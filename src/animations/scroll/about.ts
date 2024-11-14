import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//TODO: my about is not triggering on scroll
gsap.registerPlugin(ScrollTrigger);
export const animateAboutScroll = () => {
  const aboutTl = gsap.timeline({
    delay: 0.1,
    repeatDelay: 0.2,
    scrollTrigger: {
      trigger: ".about-c1",
      start: "top bottom",
    },
  });
  aboutTl.pause();

  aboutTl.to(".about-btn", {
    opacity: 1,
    duration: 0.8,
    ease: "power3.inOut",
  });
  aboutTl.to(".about-c1", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.inOut",
  });
  aboutTl.to(".about-c2", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.inOut",
  });
  aboutTl.play();
};
