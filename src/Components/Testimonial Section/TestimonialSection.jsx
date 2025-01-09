import React, { useEffect, useRef } from "react";
import TestimonialSlider from "./TestimonialSlider";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "../../Constants/testimonial_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const TestimonialSection = () => {
  const items = testimonialData.map((item, i) => (
    <TestimonialSlider
      img={item.image}
      desc={item.desc}
      name={item.name}
      specialization={item.specialization}
    />
  ));
  const mainContainer = useRef(null);
  const headingsRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 60%",
        end: "top 70%",
        // markers: true,
      },
      stagger: 0.3,
    });
    tl.fromTo(
      mainContainer.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    tl.fromTo(
      headingsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    tl.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
    );
  }, []);

  return (
    <div ref={mainContainer} className="w-full h-full py-10 lg:py-20">
      <div ref={headingsRef} className="flex flex-col items-center w-full">
        <h2 className="bg-text-gradient  font-bold p-2 uppercase text-transparent text-xl bg-clip-text text-center w-fit inline-block">
          My Expertise
        </h2>
        <h1 className="text-white text-4xl font-black before:absolute before:w-16 before:translate-x-[-50%] before:h-[2px] before:bg-light-pink relative before:left-1/2 before:-bottom-5">
          Customers feedback
        </h1>
      </div>
      <div  ref={testimonialRef}>
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={500}
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
          controlsStrategy="none"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
