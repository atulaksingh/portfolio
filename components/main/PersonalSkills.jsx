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
          bgcolor="bg-[rgb(36,36,36)] text-white"
          border={{ backgroundColor: "white" }}
        />
      </div>
    </>
  );
}

export default PersonalSkills;
