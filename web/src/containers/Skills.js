import React from "react";
import Skill from "../components/skill";

const SkillsContainer = () => {
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
            <div className="justify-center flex flex-1 mb-4 w-full lg:w-9/12 px-4 text-gray-800">
              <Skill logo="fab fa-html5 fa-9x" title="HTML 5"></Skill>
              <Skill logo="fab fa-css3 fa-9x" title="CSS 3"></Skill>
              <Skill logo="fab fa-js fa-9x" title="JavaScript"></Skill>
              <Skill logo="fab fa-react fa-9x" title="React.js"></Skill>
              <Skill logo="fab fa-vuejs fa-9x" title="Vue.js"></Skill>
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Backend
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-center flex flex-1 mb-4 w-full lg:w-9/12 px-4 text-gray-800">
              <Skill logo="fab fa-python fa-9x" title="Python"></Skill>
              <Skill logo="fab fa-node-js fa-9x" title="Node.js"></Skill>
            </div>
          </div>
        </div>
        <div className="text-sm leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
          Tools and Services
        </div>
        <div className="mt-2 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="justify-center flex flex-1 mb-4 w-full lg:w-9/12 px-4 text-gray-800">
              <Skill logo="fab fa-git fa-9x" title="Git"></Skill>
              <Skill logo="fab fa-aws fa-9x" title="AWS"></Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
