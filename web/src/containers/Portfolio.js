import React from "react";
import Project from "../components/project";
import { Icon, InlineIcon } from "@iconify/react";

import mongodbIcon from "@iconify-icons/cib/mongodb";
import bxlDjango from "@iconify-icons/bx/bxl-django";
import expressIcon from "@iconify-icons/logos/express";
import herokuIcon from "@iconify-icons/cib/heroku";
import bxlFirebase from "@iconify-icons/bx/bxl-firebase";
import pandasIcon from "@iconify-icons/simple-icons/pandas";
import numpyIcon from "@iconify-icons/file-icons/numpy";
import tailwindIcon from "@iconify-icons/file-icons/tailwind";
import htmlFive from "@iconify-icons/icomoon-free/html-five";
import css3Icon from "@iconify-icons/simple-icons/css3";
import bxlJavascript from "@iconify-icons/bx/bxl-javascript";
import bxlReact from "@iconify-icons/bx/bxl-react";
import vueJs from "@iconify-icons/cib/vue-js";
import nodeJs from "@iconify-icons/fa-brands/node-js";
import bxlPython from "@iconify-icons/bx/bxl-python";
import databaseIcon from "@iconify-icons/dashicons/database";
import documentsIcon from "@iconify-icons/et/documents";
import linuxIcon from "@iconify-icons/cib/linux";
import gitIcon from "@iconify-icons/fa-brands/git";
import amazonAws from "@iconify-icons/cib/amazon-aws";
import mysqlIcon from "@iconify-icons/fontisto/mysql";
import gatsbyIcon from "@iconify-icons/cib/gatsby";
import graphqlIcon from "@iconify-icons/cib/graphql";
import bulmaIcon from "@iconify-icons/simple-icons/bulma";
import netlifyIcon from "@iconify-icons/cib/netlify";

import f1memtest from "../assets/img/projects/f1viewport.png";
import jobsearch from "../assets/img/projects/jobsearchanalyticaViewport.png";
import algotrading from "../assets/img/projects/algotrading.png";
import snp500 from "../assets/img/projects/snp500.png";
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

        {/* 
        <Project
          img={f1memtest}
          title="F1 Driver Memory Test"
          skillsList={[htmlFive, css3Icon, bxlJavascript, bxlReact]}
          description="A memory game that requires you to click every driver without hitting the same one twice."
          link="https://jcheso.github.io/F1-memory-tester/"
        ></Project>

        <Project
          img={jobsearch}
          title="JobSearch Analytica"
          skillsList={[
            htmlFive,
            bxlPython,
            bxlDjango,
            tailwindIcon,
            herokuIcon,
          ]}
          description="A search engine that returns analytics on salary, top companies hiring, and top skills advertised."
          link="https://job-search-analytica.herokuapp.com/"
        ></Project>

        <Project
          img={algotrading}
          title="IG Market Algo-trading"
          skillsList={[bxlPython, pandasIcon, numpyIcon, amazonAws]}
          description="An algo-trading script built to run on an IG Markets account. Deployable to AWS to run in the cloud."
          link="https://github.com/jcheso/IG-Market-Trading-Script"
        ></Project>

        <Project
          img={snp500}
          title="S&P 500 Stock Analysis"
          skillsList={[bxlPython, pandasIcon, numpyIcon, mysqlIcon]}
          description="A script that scrapes stock data from the S&P 500 to a MySQL database and recommends stock buys based off various strategies."
          link="https://github.com/jcheso/Investment-Strategies"
        ></Project> */}
      </main>
    </>
  );
};

export default Portfolio;
