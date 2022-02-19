import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
var uniqid = require("uniqid");

const SkillsContainer = (props) => {
  const skills = (props || {}).skills;
  return (
    <div className="text-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 max-w-5xl">
      <div className="px-6">
        <div className="text-center mt-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Skills
          </h1>
        </div>
        <h3 className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Frontend
        </h3>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div class="flex flex-wrap -m-4 justify-center">
            {skills
              .filter((skill) => skill.skillType === "frontend")
              .map((filteredSkill, meta) => {
                const icon = getImage(filteredSkill.icon.asset.gatsbyImageData);
                return (
                  <div
                    key={uniqid()}
                    className="flex flex-col justify-evenly items-center mx-4 my-2  w-1/6 text-gray-800"
                  >
                    <GatsbyImage
                      className="h-14 w-14"
                      image={icon}
                      alt={filteredSkill.title}
                      key={uniqid()}
                    />
                    <div className="pt-1 text-center text-sm md:text-sm">
                      {filteredSkill.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <h3 className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Backend
        </h3>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div class="flex flex-wrap -m-4 justify-center">
            {skills
              .filter((skill) => skill.skillType === "backend")
              .map((filteredSkill, meta) => {
                const icon = getImage(filteredSkill.icon.asset.gatsbyImageData);
                return (
                  <div
                    key={uniqid()}
                    className="flex flex-col justify-center items-center mx-4 my-2  w-1/6 text-gray-800"
                  >
                    <GatsbyImage
                      className="h-14 w-14"
                      image={icon}
                      alt={filteredSkill.title}
                      key={uniqid()}
                    />
                    <div className="pt-1 text-center text-sm md:text-sm">
                      {filteredSkill.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <h3 className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Tools and Services
        </h3>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div class="flex flex-wrap -m-4 justify-center">
            {skills
              .filter((skill) => skill.skillType === "tools")
              .map((filteredSkill, meta) => {
                const icon = getImage(filteredSkill.icon.asset.gatsbyImageData);
                return (
                  <div
                    key={uniqid()}
                    className="flex flex-col justify-center items-center mx-4 my-2  w-1/6  text-gray-800"
                  >
                    <GatsbyImage
                      className="h-14 w-14"
                      image={icon}
                      alt={filteredSkill.title}
                      key={uniqid()}
                    />
                    <div className="pt-1 text-center text-sm md:text-sm">
                      {filteredSkill.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
