import React from "react";
// import { transform } from "framer-motion";
// import { lapOpacity } from "react-icons/lap";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <>
        <div className="flex flex-col items-center bg-[rgb(36,36,36)] text-white justify-center h-screen space-y-8 overflow-hidden text-center ">
          <div
            className="relative flex items-center justify-center "
            style={{ opacity: 1, borderRadius: "20%", transform: "none" }}
          >
            <div className="absolute border border-[#333333] rounded-full lap:h-[200px] lap:w-[200px] h-[150px] w-[150px] mt-[190px] animate-ping"></div>
            <div className="absolute border border-[#333333] rounded-full lap:h-[250px] lap:w-[250px] h-[220px] w-[220px] mt-[205px]"></div>
            <div className="absolute border border-[#333333] rounded-full lap:h-[450px] lap:w-[450px] h-[320px] w-[320px] mt-[205px]"></div>
            <div className="absolute border rounded-full border-[#f7ab0a] opacity-20 lap:h-[600px] lap:w-[600px] h-[420px] w-[420px] mt-[205px] animate-pulse"></div>
            <div className="border rounded-full border-[#333333] lap:h-[750px] lap:w-[750px] h-[520px] w-[520px] mt-[205px] absolute"></div>
          </div>
          <div className="relative w-28 h-28 mx-auto">
            <Image
              alt="Atul Profile Picture"
              // srcSet="https://res.cloudinary.com/dt0j68vdr/image/upload/v1670060657/Ellipse_20_rqfg0s.webp"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1689864930/passPic-removebg-preview_-_Copy_wlbsec.png"
              width="1920"
              height="1920"
              decoding="async"
              data-nimg="1"
              className="object-contain rounded-full"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="z-20  ">
            <h2 className="pb-6 pt-1 text-sm lap:text-sm text-gray-500 uppercase lap:tracking-[15px] tracking-[10px]">
              Frontend Developer
            </h2>
            <h1 className="text-3xl lap:text-red-400 font-semibold lap:px-10 lap:text-6xl s">
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
          </div>
        </div>
      </>
    </div>
  );
}

export default Hero;
