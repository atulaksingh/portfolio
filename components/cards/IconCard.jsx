import React from "react";
import Image from "next/image";
function IconCard(props) {
  return (
    <>
      <div>
        <div className="mx-3 my-6">
          <div className="flex gap-2">
            <div className="relative w-16 h-16 hover:border-4 bg-white border-black rounded-full my-auto">
              <Image
                src={props.img}
                layout="fill"
                objectFit="cover"
                className="h-fit w-fit rounded-full"
              />
            </div>
            <h2 className="my-auto text-4xl font-semibold">{props.title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconCard;
