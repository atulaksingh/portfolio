import React from "react";
import Card from "../cards/Card";
import PersonalContent from "../cards/PersonalContent";

function PersonalSkills() {
  return (
    <>
      <div>
        <Card
          title="Technicals Skills"
          content={<PersonalContent />}
          border={{ backgroundColor: "black", Width: "50px" }}
        />
      </div>
    </>
  );
}

export default PersonalSkills;
