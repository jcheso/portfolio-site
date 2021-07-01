import React from "react";
import SEO from "../components/seo";

import Header from "../components/header";
import Footer from "../components/Footer";
import Portfolio from "../containers/Portfolio";

const Projects = () => (
  <>
    <SEO title="My Projects" />
    <Header></Header>
    <Portfolio></Portfolio>
    <Footer></Footer>
  </>
);

export default Projects;
