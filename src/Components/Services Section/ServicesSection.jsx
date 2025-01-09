import React, { createRef, useEffect, useRef } from "react";
import { servicesCardData } from "../../Constants/services_card_data";
import ServicesCard from "./ServicesCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServicesSection = () => {
  const mainContainer = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const cardsRefs = useRef(
    Array.from({ length: servicesCardData.length }).map(() => createRef())
  );
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 40%",
        end: "top 60%",
        // markers: true,
      },
    });
    tl.fromTo(
      [mainContainer.current, heading1.current, heading2.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.2 }
    );
    servicesCardData.forEach((item, i) => {
      const cardRef = cardsRefs.current[i];
      tl.fromTo(
        cardRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.4 },
        `-=${0.2 * i}` // Stagger the animations
      );
    });
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.3 }
    );
  }, []);
  return (
    <div
      ref={mainContainer}
      className="w-full h-full relative pt-5 pb-5 sm:pt-10 sm:pb-20  bg-[#00000038]"
    >
      <div className="flex items-center flex-col justify-center">
        <h2
          ref={heading1}
          className="bg-text-gradient  font-bold p-2 uppercase text-transparent text-xl bg-clip-text"
        >
          My Expertise
        </h2>
        <h1
          ref={heading2}
          className="text-white text-4xl my-3 before:absolute before:w-1/2 before:translate-x-[-50%] before:h-[2px] before:bg-light-pink relative before:left-1/2 before:-bottom-5 font-bold"
        >
          What I Do
        </h1>
      </div>
      <div className="flex lg:flex-row lg:flex-nowrap flex-wrap items-center md:justify-between gap-8 pt-16 w-[90%]  mx-auto relative z-10">
        {servicesCardData.map((item, i) => (
          <ServicesCard
            ref={cardsRefs.current[i]}
            key={i}
            icon={item.icon}
            services={item.services}
            desc={item.desc}
          />
        ))}
        <img
          src="/light.png"
          alt=""
          className="h-16 lg:h-24 absolute -bottom-16  lg:bottom-[-120px] right-0   lg:-right-10"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
