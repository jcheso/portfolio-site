import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectCMS from "../components/projectCMS";
var uniqid = require("uniqid");

const AboutMe = (props) => {
  console.log(props);
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                alt="..."
                src={require("../assets/img/team-2-800x800.jpg").default}
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
          {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div className="py-6 px-3 sm:mt-0"></div>
          </div>
          <div className="w-full lg:w-4/12 px-4 lg:order-1">
            <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
          </div> */}
        </div>
        <div className="text-center lg:mt-6 mt-4 pt-20">
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {props.name}
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
            {props.location}
          </div>
          {/* <div className="mb-2 text-gray-700 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
            {props.job}
          </div> */}
          <div className="mb-2 text-gray-700">
            <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
            {props.education}
          </div>
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
