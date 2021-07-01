import React from "react";
import { Icon, InlineIcon } from "@iconify/react";

const Project = ({ img, title, skillsList, description, link }) => {
  return (
    <a href={link}>
      <div
        id="container"
        className="p-10 min-w-0 m-10 bg-gray-50 shadow-xl rounded-2xl w-96"
      >
        <div
          id="title"
          className="text-2xl pl-4 font-bold leading-normal mb-8 text-gray-800 uppercase text-center"
        >
          {title}
        </div>
        <div id="image" className="rounded-2xl">
          <img className="" src={img} />
        </div>
        <div>
          <ul className="flex flex-row justify-evenly">
            {skillsList.map((icon, meta) => (
              <li>
                <Icon
                  className="h-12 w-12 mt-8 mb-2"
                  key={meta}
                  icon={icon}
                ></Icon>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="description"
          className="text-center text-sm leading-normal my-8 text-gray-800 font-semibold "
        >
          {description}
        </div>
      </div>
    </a>
  );
};

export default Project;
