import React from "react";
import { getImage } from "gatsby-plugin-image";
import ProjectCMS from "../components/project";
var uniqid = require("uniqid");

const Portfolio = (props) => {
  return (
    <>
      <main className=" text-gray-600 flex flex-row flex-wrap mx-8 mt-8 mb-32 justify-evenly">
        {props.projects.map((project) => {
          const img = getImage(project.previewImage.asset.gatsbyImageData);
          return (
            <ProjectCMS
              img={img}
              title={project.title}
              skills={project.skills}
              description={project.description}
              link={project.projectUrl}
              key={uniqid()}
            ></ProjectCMS>
          );
        })}
      </main>
    </>
  );
};

export default Portfolio;
