import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
import Header from "../components/header";
import Footer from "../components/Footer";
import Portfolio from "../containers/Portfolio";
import { mapEdgesToNodes } from "../lib/helpers";
import Layout from "../containers/layout";

import "../styles/layout.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject {
      edges {
        node {
          description
          projectUrl
          title
          skills {
            icon {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          previewImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

const Projects = (props) => {
  const { data, errors } = props;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
    : [];

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Seo
        title="My Projects"
        description={"A place to showcase my projects"}
      />
      <Header></Header>
      <Portfolio
        className="relative flex-grow"
        projects={projectNodes}
      ></Portfolio>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
