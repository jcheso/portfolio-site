import React from "react";

const Skill = ({ logo, title }) => {
  return (
    <div className="flex flex-col mx-8 my-2 p-2">
      <div>
        <i className={logo}></i>
      </div>
      <div className="text-center">{title}</div>
    </div>
  );
};

export default Skill;
