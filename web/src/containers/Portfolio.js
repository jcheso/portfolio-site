import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectCMS from "../components/projectCMS";
var uniqid = require("uniqid");

const Portfolio = (props) => {
  return (
    <>
      <main className=" flex flex-row flex-wrap mt-8 mb-32 justify-evenly">
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
