import React from "react";
import { graphql } from "gatsby";
import "assets/scss/material-kit-react.scss?v=1.7.0";
import Layout from "components/layout";
import LandingPage from "components/LandingPage/LandingPage";

export default ({ data }) => (
  <Layout>
    <LandingPage posts={data.allMarkdownRemark.edges || []} />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { image: { ne: null } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
            thumb
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`;
