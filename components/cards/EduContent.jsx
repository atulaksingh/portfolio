import React from "react";

function EduContent(props) {
  return (
    <>
      <div className="">
        <div className="container m-auto">
          <div id="about">
            <div className=" py-[30px] grid  lap:grid-cols-3 grid-cols-1 mx-10 ">
              <div class="col-span-1 my-auto text-black">
                <div class="text-4xl text-center lap:text-left font-semibold">
                  <h1>{props.class}</h1>
                </div>
                <div class="text-2xl text-center lap:text-left">
                  <h2>{props.university}</h2>
                </div>
              </div>
              <div class="col-span-1 lap:flex">
                <div class="lap:h-full lap:w-[3px] h-[3px] my-5 lap:my-0 bg-black"></div>
                <div
                  data-aos="fade-right"
                  class="lap:ml-20 text-black text-center lap:text-left aos-init aos-animate"
                >
                  <div class="text-3xl">
                    <h1>{props.college}</h1>
                  </div>
                  <div>
                    <h2>{props.year}</h2>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                class="col-span-1 text-2xl font-semibold text-black m-auto aos-init aos-animate"
              >
                <h1>{props.per}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EduContent;
