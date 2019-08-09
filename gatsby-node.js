const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.allMarkdownRemark.edges,
        createPage: createPage,
        pageTemplate: "src/templates/posts.js",
        pageLength: 10, // This is optional and defaults to 10 if not used
        pathPrefix: "blogs", // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`
      });
      const edges = result.data.allMarkdownRemark.edges || [];
      edges.forEach(({ node, index }) => {
        createPage({
          path: `posts${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /src\/components\/Header/,
            use: loaders.null()
          },
          {
            test: /src\/components\/Parallax/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
