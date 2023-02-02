import React from "react";
import AboutContent from "../cards/AboutContent";
import Card from "../cards/Card";
import SkillsContent from "../cards/SkillsContent";

function Skills() {
  return (
    <div>
      <Card
        title="Technicals Skills"
        content={<SkillsContent />}
        border={{ backgroundColor: "black", Width: "50px" }}
      />
    </div>
  );
}

export default Skills;
