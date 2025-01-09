import React, { useEffect, useState } from "react";
import { navLinks } from "../../Constants/nav_links";
const NavMobile = () => {
  const [navActive, setNavActive] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const handleMenuBtn = () => {
    setNavActive(true);
  };
  const handleCloseBtn = () => {
    setNavActive(false);
  };

  const handleScroll = () => {
    setPositionY(window.scrollY);
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);
  return (
    <>
      <div
        className={`bg-white py-2  flex items-center justify-center lg:hidden w-full h-[80px] ${
          positionY > 0 ? "fixed top-0 z-[9999999]" : ""
        }`}
      >
        <div className=" flex items-center justify-center">
          <i
            className="ri-menu-line translate-x-[-50px] md:translate-x-[-150px] text-3xl"
            onClick={() => handleMenuBtn()}
          ></i>
          <div className="w-16 object-center h-16 rounded-full overflow-hidden">
            {/* <img
            src="https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" object-cover w-full h-full object-bottom"
          /> */}
            <img
              src="/Logo.png"
              alt=""
              className=" object-cover w-full h-full object-bottom"
            />
          </div>

          <h1 className="text-black text-3xl font-bold ml-4">Fasiha</h1>
        </div>
        <ul
          className="nav-links flex flex-col items-start fixed left-[-100%] h-screen min-w-[60%] md:min-w-[50%] z-[99] bg-white gap-3 px-5 pt-5 text-black top-0 duration-500 ease-in-out"
          style={{ left: navActive ? "0" : "-100%" }}
        >
          <i
            className="ri-close-line mb-3 text-2xl w-8 h-8 rounded-full border-zinc-400 border-2 flex items-center justify-center"
            onClick={handleCloseBtn}
          ></i>
          {navLinks.map((links, i) => (
            <li
              onClick={handleCloseBtn}
              className="text-[#111] w-full border-b-[1px] py-3 border-opacity-30 border-b-zinc-500"
              key={links.name}
            >
              <a href={links.path} className="w-full font-semibold">
                {links.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {navActive && (
        <div
          onClick={handleCloseBtn}
          className="w-full h-screen top-0 left-0 fixed bg-black/70 z-10 "
        ></div>
      )}
    </>
  );
};

export default NavMobile;
