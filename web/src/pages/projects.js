import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/Footer";
import Portfolio from "../containers/Portfolio";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
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
                gatsbyImageData
              }
            }
          }
          previewImage {
            asset {
              gatsbyImageData
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
    <>
      <SEO title="My Projects" />
      <Header></Header>
      <Portfolio projects={projectNodes}></Portfolio>
      <Footer></Footer>
    </>
  );
};

export default Projects;
