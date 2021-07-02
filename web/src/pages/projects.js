import React from "react";
import SEO from "../components/seo";

import Header from "../components/header";
import Footer from "../components/Footer";
import Portfolio from "../containers/Portfolio";
import Container from "../components/container";

import "../styles/layout.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Projects = () => (
  <>
    <SEO title="My Projects" />
    <Header></Header>

    <Portfolio></Portfolio>

    <Footer></Footer>
  </>
);

export default Projects;
