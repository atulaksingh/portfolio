import React from "react";
import Card from "../cards/Card";
import PersonalContent from "../cards/PersonalContent";
import SkillsContent from "../cards/SkillsContent";

function PersonalSkills() {
  return (
    <>
      <div>
        <Card
          title="Personal Skills"
          content={<PersonalContent />}
          border={{ backgroundColor: "black" }}
        />
      </div>
    </>
  );
}

export default PersonalSkills;
