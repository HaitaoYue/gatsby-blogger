import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProductHero from "../components/modules/views/Hero";
import ProductValues from "../components/modules/views/ProductValues";

export default ({ data }) => (
  <Layout>
    <ProductHero />
    <ProductValues features={data.allFeaturesJson} />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
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
