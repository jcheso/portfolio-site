// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img`,
      },
    },
    "gatsby-transformer-sharp", // Needed for dynamic imagese for dynamic images
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        // ...clientConfig.sanity,
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // token: process.env.SANITY_READ_TOKEN,
        token: process.env.GATSBY_SANITY_TOKEN,

        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.jarrydcheso.me`,
  }
};
