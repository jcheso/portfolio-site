import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Header from "../components/header";
import Profile from "../containers/Profile";
import Footer from "../components/Footer";

import "../styles/layout.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    profile: sanityProfile {
      name
      location
      job
      education
      aboutMe
      skills {
        title
        skillType
        icon {
          asset {
            gatsbyImageData(height: 96, width: 96)
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  console.log(data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const profile = (data || {}).profile;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  return (
    <>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Header transparent="true" />
      <Profile profile={profile} />
      <Footer />
    </>
  );
};

export default IndexPage;
