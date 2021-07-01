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
import f1memtest from "../assets/img/projects/f1memorytester.png";

const Portfolio = () => {
  return (
    <>
      <main className="flex flex-row flex-wrap p-10 m-10 justify-evenly">
        <Project
          img={f1memtest}
          title="F1 Driver Memory Tester"
          skillsList={[htmlFive, css3Icon, bxlJavascript, bxlReact]}
          description="A game to see if you can click all 20 F1 drivers of the 2021 season without hitting the same one twice"
          link="https://jcheso.github.io/F1-memory-tester/"
        ></Project>

        <Project
          img={f1memtest}
          title="F1 Driver Memory Tester"
          skillsList={[htmlFive, css3Icon, bxlJavascript, bxlReact]}
          description="A game to see if you can click all 20 F1 drivers of the 2021 season without hitting the same one twice"
          link="https://jcheso.github.io/F1-memory-tester/"
        ></Project>

        <Project
          img={f1memtest}
          title="F1 Driver Memory Tester"
          skillsList={[htmlFive, css3Icon, bxlJavascript, bxlReact]}
          description="A game to see if you can click all 20 F1 drivers of the 2021 season without hitting the same one twice"
          link="https://jcheso.github.io/F1-memory-tester/"
        ></Project>

        <Project
          img={f1memtest}
          title="F1 Driver Memory Tester"
          skillsList={[htmlFive, css3Icon, bxlJavascript, bxlReact]}
          description="A game to see if you can click all 20 F1 drivers of the 2021 season without hitting the same one twice"
          link="https://jcheso.github.io/F1-memory-tester/"
        ></Project>
      </main>
    </>
  );
};

export default Portfolio;
