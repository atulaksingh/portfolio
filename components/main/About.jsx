import React from "react";
import AboutContent from "../cards/AboutContent";
import Card from "../cards/Card";

function About() {
  return (
    <>
      <Card
        title="About"
        content={<AboutContent />}
        bgcolor="bg-[rgb(36,36,36)] text-white"
        border={{ backgroundColor: "white" }}
      />
    </>
  );
}

export default About;
