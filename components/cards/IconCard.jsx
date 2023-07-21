import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
function IconCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className=" ">
        <div className="mx-3 my-6">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-2"
          >
            <div className="relative w-16 h-16 hover:border-4 bg-black border-white rounded-full my-auto">
              <Image
                src={props.img}
                layout="fill"
                objectFit="cover"
                className="h-fit w-fit rounded-full"
              />
            </div>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-gray-300 lap:text-2xl text-xl my-auto"
            >
              {props.title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconCard;
