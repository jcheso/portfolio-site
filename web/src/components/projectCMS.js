import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { BsStack } from "react-icons/bs";
var uniqid = require("uniqid");

const ProjectCMS = (props) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <GatsbyImage
          className="lg:h-96 md:h-36 w-full object-cover object-center"
          image={props.img}
          alt="blog"
        />
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2> */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3 h-32">{props.description}</p>
          <div className="flex items-center flex-wrap ">
            <OutboundLink
              href={props.link}
              className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </OutboundLink>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <BsStack className="w-6 h-6 mr-1"></BsStack>
              Tech Stack
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <ul className="flex flex-wrap justify-evenly">
                {props.skills.map((skill, index) => {
                  const icon = getImage(skill.icon.asset.gatsbyImageData);
                  return (
                    <li key={index}>
                      <GatsbyImage
                        className="w-6 h-6 mr-1"
                        image={icon}
                        alt="text"
                        key={uniqid()}
                      />
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <OutboundLink href={props.link}>
      <div className="p-6 m-4 bg-gray-50 shadow-xl rounded-2xl md:w-96 hover:bg-gray-100 flex flex-col ">
        <div className="text-xl lg:text-xl font-bold leading-normal text-gray-800  text-center">
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
          <ul className="flex flex-wrap justify-evenly">
            {props.skills.map((skill, index) => {
              const icon = getImage(skill.icon.asset.gatsbyImageData);
              return (
                <li key={index}>
                  <GatsbyImage
                    className="h-10 w-10 m-1"
                    image={icon}
                    alt="text"
                    key={uniqid()}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-justify text-sm leading-normal mt-4 mb-2 h-full text-gray-800">
          {props.description}
        </div>
      </div>
    </OutboundLink> */
  }
};

export default ProjectCMS;
