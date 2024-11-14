import Hero from "@/components/Homepage/Hero";
import About from "@/components/Homepage/About";
import React from "react";
import Works from "@/components/Homepage/Works";
import Testimonials from "@/components/Homepage/Testimonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Testimonials />
    </main>
  );
};

export default HomePage;
