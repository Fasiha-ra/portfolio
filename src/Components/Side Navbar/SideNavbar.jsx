import React from "react";
import "./SideNavbar.css";
import { navLinks } from "../../Constants/nav_links";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const SideNavbar = () => {
  const mainNav = useRef(null);
  const icons = useRef(null);
  const singleIcon = useRef([]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      mainNav.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.3 }
    ).addLabel("mainNavComplete"); // Add a label to mark the completion of mainNav animation

    // After mainNav animation completes, start the icons animation with a delay
    navLinks.forEach((links, i) => {
      tl.fromTo(
        icons.current.children[i],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.2 },
        `mainNavComplete+=0.5` // Add a delay of 0.5 seconds after mainNav animation completes
      ).fromTo(
        singleIcon.current[i],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3,delay:0.4, stagger: 0.3 },
        `-=${0.5}` // Add a small overlap to the previous animation
      );
    });
  }, []);

  return (
    <div ref={mainNav} className="bg-dark-blue h-fit hidden lg:block lg:h-full">
      <div className="py-2 bg-light-pink flex items-center justify-center">
        {/* <div className="w-20 object-center h-20 rounded-full overflow-hidden">
          <img
            src="/hero.jpg"
            alt=""
            className=" object-cover w-full h-full object-bottom"
          />
        </div> */}
      </div>
      <ul ref={icons} className="nav-links ">
        {navLinks.map((links, i) => (
          <li
            className="text-white w-full border-b-[1px] border-opacity-30 border-b-zinc-500 flex items-center justify-center"
            key={i}
          >
            <a
               ref={(el) => (singleIcon.current[i] = el)}
              href={links.path}
              className="items-center relative overflow-hidden justify-center w-full flex p-4"
            >
              <h4 className="text-sm uppercase absolute left-0 scale-0 opacity-0 duration-500 translate-x-[-30px]  font-semibold">
                {links.name}
              </h4>
              <i class={`${links.icon} text-4xl duration-500`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
