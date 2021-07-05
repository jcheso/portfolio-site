import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
var uniqid = require("uniqid");

const SkillsContainer = (props) => {
  const skills = (props || {}).skills;
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div className="px-6">
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            Skills
          </h3>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Frontend
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              {skills
                .filter((skill) => skill.skillType === "frontend")
                .map((filteredSkill, meta) => {
                  const icon = getImage(
                    filteredSkill.icon.asset.gatsbyImageData
                  );
                  return (
                    <div key={uniqid()} className="flex flex-col mx-2 my-2 p-2">
                      <GatsbyImage
                        className="w-24 h-24"
                        image={icon}
                        alt={filteredSkill.title}
                        key={uniqid()}
                      />
                      <div className="pt-1 text-center">
                        {filteredSkill.title}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Backend
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              {skills
                .filter((skill) => skill.skillType === "backend")
                .map((filteredSkill, meta) => {
                  const icon = getImage(
                    filteredSkill.icon.asset.gatsbyImageData
                  );
                  return (
                    <div key={uniqid()} className="flex flex-col mx-2 my-2 p-2">
                      <GatsbyImage
                        className="w-24 h-24"
                        image={icon}
                        alt={filteredSkill.title}
                        key={uniqid()}
                      />
                      <div className="pt-1 text-center">
                        {filteredSkill.title}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Tools and Services
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-evenly flex mb-4 w-full px-4 text-gray-800 flex-wrap">
              {skills
                .filter((skill) => skill.skillType === "tools")
                .map((filteredSkill, meta) => {
                  const icon = getImage(
                    filteredSkill.icon.asset.gatsbyImageData
                  );
                  return (
                    <div key={uniqid()} className="flex flex-col mx-2 my-2 p-2">
                      <GatsbyImage
                        className="w-24 h-24"
                        image={icon}
                        alt={filteredSkill.title}
                        key={uniqid()}
                      />
                      <div className="pt-1 text-center">
                        {filteredSkill.title}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
