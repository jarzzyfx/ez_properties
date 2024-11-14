import gsap from "gsap";

const introTl = gsap.timeline({ delay: 0.1, repeatDelay: 0.2 });
introTl.pause();

export const animateIntro = () => {
  introTl.to(".hero-service", {
    y: "-33.3%",
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.2,
  });
  introTl.to(".headnav", {
    y: 0,
    duration: 1,
    ease: "power3.inOut",
  });
  introTl.to(".hero-h1", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.2,
  });
  introTl.to(".hero-text", {
    opacity: 1,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.2,
  });
  introTl.to(".hero-btn", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.inOut",
    stagger: 0.2,
  });
  introTl.play();
};
