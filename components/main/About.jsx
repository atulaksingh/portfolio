import React from "react";
import AboutContent from "../cards/AboutContent";
import Card from "../cards/Card";

function About() {
  return (
    <>
      {/* <div className="bg-black text-white">
        <div className="container m-auto">
          <div id="about">
            <div className=" py-[205px] grid grid-cols-1 lap:grid-cols-3 mx-10">
              <div className="col-span-1 m-auto text-4xl  ">
                <h1 className="">About</h1>
              </div>
              <div className="col-span-2 lap:flex ">
                <div className="lap:h-full lap:w-[5px] h-[5px] bg-white lap:my-0 my-5"></div>
                <div className="lap:ml-20 text-2xl lap:text-left text-center">
                  <h2>
                    {" "}
                    I am an energetic, ambitious, motivated person who has
                    developed a mature and responsible approach to any task that
                    I undertake, or situation that I am presented.
                    <br /> I am a Web Developer, Eager to obtain a challenging
                    position at a prestigious company that will expand my
                    learning and build upon my developer skills.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Card
        title="About"
        content={<AboutContent />}
        bgcolor="bg-black text-white"
        border={{ backgroundColor: "white" }}
      />
    </>
  );
}

export default About;
