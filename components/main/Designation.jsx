import React from "react";
import Card from "../cards/Card";
import DesignationCard from "../cards/DesignationCard";

function Designation() {
  return (
    <div>
      <div className=" bg-[rgb(36,36,36)] text-white">
        <div className="container m-auto">
          <div id="about">
            <div className=" py-[100px] grid   lap:grid-cols-3 grid-cols-1 mx-10">
              <div className="col-span-1 m-auto text-4xl  ">
                <h1 className=" text-center font-bold hover:underline cursor-pointer">
                  Zezo Software Pvt. Ltd.
                </h1>
                <div className="ml-2 text-xl text-center lap:text-left">
                  <h2>( 17 Oct 2022 - Present )</h2>
                </div>
              </div>
              <div className="col-span-2 lap:flex mb-4 ">
                <div
                  style={{ backgroundColor: "white", width: "3px" }}
                  className="lap:h-full lap:w-[7px] h-[3px]  lap:my-0 my-5 border-white"
                ></div>
                <div
                  data-aos="fade-right"
                  className="lap:ml-20 text-center lap:text-left text-white mb-5 aos-init aos-animate"
                >
                  <div className="text-2xl font-bold">
                    <h1>Designation: Front End Web Developer</h1>
                  </div>
                  <div>
                    <h2>
                      Learning and developing coding skills with internet and
                      senior web developer guidance.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designation;
