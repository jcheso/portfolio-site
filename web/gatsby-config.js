// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://www.jarrydcheso.me`,
    title: "Jarryd Cheso",
    description: "My Portfolio and Blog",
    author: "Jarryd Cheso",
    keywords:
      "software, engineer, web, developer, imperial, college, react, gatsby, netlify, sanity, portfolio, blog",
    image: "../../seo-image-JC-icon.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.jarrydcheso.me/",
        sitemap: "https://www.jarrydcheso.me/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img/`,
      },
      __key: "img",
    },
    "gatsby-transformer-sharp",
    `gatsby-plugin-sitemap`,
    // Needed for dynamic images for dynamic images
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QVH2FVDFMH", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: false,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jarryd Cheso`,
        short_name: `Jarryd Cheso`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/img/android-chrome-512x512.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
