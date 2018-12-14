import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProductHero from "../components/modules/views/Hero";
import ProductValues from "../components/modules/views/ProductValues";
import AppFotter from "../components/modules/views/AppFooter";
import ProductCategories from "../components/modules/views/ProductCategories";

export default ({ data }) => (
  <Layout>
    <ProductHero />
    <ProductValues features={data.allFeaturesJson} />
    {data.allMarkdownRemark.totalCount > 0 && (
      <ProductCategories posts={data.allMarkdownRemark} />
    )}
    <AppFotter />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
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
