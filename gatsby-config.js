const config = require("./config/site");
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Haitao Yue",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    siteUrl: `https://www.yuehaitao.cn`,
    twitter: `@gatsbyjs`,
    author: "@gatsbyjs"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/data/markdown/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/data/json`
      }
    },
    {
      resolve: "gatsby-source-github-repo",
      options: {
        repoUrl: "https://github.com/hyperledger/cello"
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        assets: path.join(__dirname, "src/assets"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components")
      }
    }
  ]
};
