import React from "react";
import { Icon, InlineIcon } from "@iconify/react";

const Project = ({ img, title, skillsList, description, link }) => {
  return (
    <a href={link}>
      <div className="p-10 m-4 bg-gray-50 shadow-xl rounded-2xl md:w-96">
        <div className="text-xl lg:text-xl font-bold leading-normal mb-8 text-gray-800 uppercase text-center">
          {title}
        </div>
        <div>
          <img className="rounded-2xl" src={img} />
        </div>
        <div>
          <ul className="flex flex-row justify-evenly">
            {skillsList.map((icon, meta) => (
              <li>
                <Icon
                  className="h-8 w-8 mt-8 mb-2"
                  key={meta}
                  icon={icon}
                ></Icon>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-sm leading-normal my-8 text-gray-800 h-12">
          {description}
        </div>
      </div>
    </a>
  );
};

export default Project;
