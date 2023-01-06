import React from "react";

const Skill = ({skill}) => {
    console.log(skill);
    return (<li key={skill.id}> {skill.name} - {Math.round((skill.experience / 360).toFixed(2)) } Years </li>)
}

export default Skill;