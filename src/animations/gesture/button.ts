import gsap from "gsap";

const hoverTl = gsap.timeline({ delay: 0.1, repeatDelay: 0.2 });
hoverTl.pause();

const clickTl = gsap.timeline({});
clickTl.pause();

export const animateHover = (
  button: string,
  arrow: string,
  firstSpan: string,
  secondSpan: string
) => {
  hoverTl.to(arrow, {
    x: "100%",
    opacity: 0,
    duration: 0.2,
    ease: "power2.inOut",
  });
  hoverTl.to(firstSpan, {
    x: "300px",
    scale: 1.3,
    duration: 0.1,
    ease: "power2.inOut",
  });
  hoverTl.to(secondSpan, {
    x: "300px",
    scale: 1.3,
    duration: 0.1,
    ease: "power2.inOut",
  });
  hoverTl.to(button, {
    scale: 1.2,
    duration: 0.2,
    ease: "circ.inOut",
  });

  hoverTl.play();
};

export const animateHoverLeave = () => hoverTl.reverse();
