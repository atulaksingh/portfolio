import React from "react";
import Card from "../cards/Card";
import DesignationCard from "../cards/DesignationCard";

function Designation() {
  return (
    <div>
      <Card
        title="Zezo Software Pvt. Ltd"
        content={<DesignationCard />}
        bgcolor="bg-white text-black "
        border={{ backgroundColor: "black" }}
      />
    </div>
  );
}

export default Designation;
