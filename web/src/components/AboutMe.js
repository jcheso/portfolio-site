import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
var uniqid = require("uniqid");

const AboutMe = (props) => {
  const portrait = getImage(props.portrait);
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative">
              <GatsbyImage
                key={uniqid()}
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-18"
                image={portrait}
                alt="Portrait Photo"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:mt-6 mt-4 pt-20">
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {props.name}
          </h3>
          <div className="text-sm leading-normal  mb-2 text-gray-500 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
            {props.location}
          </div>
          {props.job && (
            <div className="mb-2 text-gray-700 ">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
              {props.job}
            </div>
          )}
          {props.education && (
            <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
              {props.education}
            </div>
          )}
        </div>
        <div className="mt-10 py-10 border-t border-gray-300 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-gray-800">
                {props.aboutMe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
