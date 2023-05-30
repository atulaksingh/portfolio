import React from "react";
// import { transform } from "framer-motion";
// import { MdOpacity } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <>
        <div className="flex flex-col items-center bg-[rgb(36,36,36)] text-white justify-center h-screen space-y-8 overflow-hidden text-center">
          <div
            className="relative flex items-center justify-center "
            style={{ opacity: 1, borderRadius: "20%", transform: "none" }}
          >
            <div className="absolute border border-[#333333] rounded-full md:h-[200px] md:w-[200px] h-[150px] w-[150px] mt-[190px] animate-ping"></div>
            <div className="absolute border border-[#333333] rounded-full md:h-[250px] md:w-[250px] h-[220px] w-[220px] mt-[205px]"></div>
            <div className="absolute border border-[#333333] rounded-full md:h-[450px] md:w-[450px] h-[320px] w-[320px] mt-[205px]"></div>
            <div className="absolute border rounded-full border-[#f7ab0a] opacity-20 md:h-[600px] md:w-[600px] h-[420px] w-[420px] mt-[205px] animate-pulse"></div>
            <div className="border rounded-full border-[#333333] lg:h-[750px] lg:w-[750px] h-[520px] w-[520px] mt-[205px] absolute"></div>
          </div>
          <div className="relative w-36 h-36 mx-auto">
            <Image
              alt="Atul Profile Picture"
              srcset="https://res.cloudinary.com/dt0j68vdr/image/upload/v1670060657/Ellipse_20_rqfg0s.webp"
              // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1670060657/Ellipse_20_rqfg0s.webp"
              width="1920"
              height="1920"
              decoding="async"
              data-nimg="1"
              className="object-contain rounded-full "
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="z-20">
            <h2 className="pb-4 pt-1 text-sm md:text-sm text-gray-500 uppercase md:tracking-[15px] tracking-[10px]">
              Frontend Developer
            </h2>
            <h1 className="text-6xl lg::text-red-400 font-semibold md:px-10 md:text-5xl lg:text-6xl">
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  "Hi, The Name's Atul Singh",
                  1000,
                  "Guy-who-loves-Coffee.tsx",
                  1000,

                  "<ButLovesToCodeMore />",
                  1000,
                ]}
                speed={40} // Custom Speed from 1-99 - Default Speed: 40
                className="mr-3"
                // style={{ fontSize: '1em',marginRight:"10px"}}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              {/* <span className="mr-3">Hi, The Name's Atul</span> */}
              <span
                className="styles-module_blinkingCursor__yugAC styles-module_blinking__9VXRT"
                style={{ color: "rgb(247, 171, 10)" }}
              >
                |
              </span>
            </h1>
            {/* <div className="pt-20">
              <a href="/#about">
                <button className="heroButton">About</button>
              </a>
              <a href="/#experience">
                <button className="heroButton">Experience</button>
              </a>
              <a href="/#skills">
                <button className="heroButton">Skills</button>
              </a>
              <a href="/#projects">
                <button className="heroButton">Projects</button>
              </a>
            </div> */}
          </div>
          <div className="absolute bottom-0">
            {/* <a href="/#hero"> */}
            {/* <footer className="sticky w-full cursor-pointer bottom-10 sm:bottom-10 md:bottom-5 mt-[12px]">
              <div className="flex items-center justify-center">
                <img
                  alt="footer logo"
                  srcset="https://res.cloudinary.com/dt0j68vdr/image/upload/v1670060657/Ellipse_20_rqfg0s.webp"
                  width="1920"
                  height="1920"
                  decoding="async"
                  data-nimg="1"
                  class="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0 animate-bounce"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </footer> */}
            {/* </a> */}
          </div>
        </div>
      </>
    </div>
  );
}

export default Hero;
