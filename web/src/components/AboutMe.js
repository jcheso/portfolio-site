import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
var uniqid = require("uniqid");

const AboutMe = (props) => {
  const portrait = getImage(props.portrait);
  return (
    <div className=" text-gray-600 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 max-w-5xl">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative">
              <GatsbyImage
                key={uniqid()}
                className="shadow-xl rounded-full h-a36 align-middle border-none absolute -m-16 overflow:hidden border-collapse:separate ;
"
                image={portrait}
                alt="Portrait Photo"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:mt-4 mt-4  md:pt-16 pt-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {props.name}
          </h1>
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
              <p class="leading-relaxed text-lg mb-4">{props.aboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
