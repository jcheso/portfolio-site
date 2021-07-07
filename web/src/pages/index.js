import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import Seo from "../components/seo";
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
      backgroundImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      subtitle
      description
      keywords
    }
    profile: sanityProfile {
      name
      portrait {
        asset {
          gatsbyImageData(height: 500, placeholder: BLURRED)
        }
      }
      location
      job
      education
      aboutMe
      skills {
        title
        skillType
        icon {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;
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
    <div className="flex flex-col justify-between h-screen">
      <Seo
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Header transparent="true" />
      <Profile
        className="relative flex-grow"
        profile={profile}
        backgroundImage={site.backgroundImage}
      />
      <Footer />
    </div>
  );
};

export default IndexPage;
