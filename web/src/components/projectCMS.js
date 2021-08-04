import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

var uniqid = require("uniqid");

const ProjectCMS = (props) => {
  return (
    <OutboundLink href={props.link}>
      <div className="p-10 m-4 bg-gray-50 shadow-xl rounded-2xl md:w-96">
        <div className="text-xl lg:text-xl font-bold leading-normal text-gray-800 uppercase text-center">
          {props.title}
        </div>
        <div>
          <GatsbyImage
            key={uniqid()}
            className="rounded-2xl my-4"
            image={props.img}
            alt="text"
          />
        </div>
        <div>
          <ul className="flex flex-row justify-evenly">
            {props.skills.map((skill, index) => {
              const icon = getImage(skill.icon.asset.gatsbyImageData);
              return (
                <li key={index}>
                  <GatsbyImage
                    className="h-10 w-10"
                    image={icon}
                    alt="text"
                    key={uniqid()}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center text-sm leading-normal my-6 text-gray-800 h-10">
          {props.description}
        </div>
      </div>
    </OutboundLink>
  );
};

export default ProjectCMS;
