import React from "react";

function Card(props) {
  return (
    <>
      <div className={props.bgcolor}>
        <div className="container m-auto">
          <div id="about">
            <div className="py-[50px] md:py-[150px] grid  lap:grid-cols-3 grid-cols-1 mx-10">
              <div className="col-span-1 m-auto text-4xl  justify-between ">
                <h1 className="">{props.title}</h1>
              </div>
              <div className="col-span-2 lap:flex mb-4">
                <div
                  className="lap:h-full lap:w-[2px] h-[3px]  lap:my-0 my-5"
                  style={props.border}
                ></div>
                <div className="lap:ml-20 text-xl text-gray-300 lap:text-2xl lap:text-left text-center">
                  <div>{props.content}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
