import React from "react";
import Card from "../cards/Card";
import EduContent from "../cards/EduContent";

function Education() {
  return (
    <>
      <div>
        <EduContent
          className="BSCIT"
          university="Mumbai University"
          college="Nagindas Khandwala College"
          year="2022"
          per="CGPI - 6.50"
        />
        <EduContent
          className="HSC"
          university="Maharashtra State Board"
          college="Anandibai Damodar Kale Vidyalaya Junior College"
          year="2018"
          per="53%"
        />
        <EduContent
          className="SSC"
          university="Maharashtra State Board"
          college="Thakur Shyamnarayan High School"
          year="2016"
          per="61%"
        />
      </div>
    </>
  );
}

export default Education;
