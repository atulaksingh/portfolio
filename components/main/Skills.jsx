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
        bgcolor="bg-[rgb(36,36,36)] text-white"
        border={{ backgroundColor: "white" }}
      />
    </div>
  );
}

export default Skills;
