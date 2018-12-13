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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/posts`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
  ]
};
