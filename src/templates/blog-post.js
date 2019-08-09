import React from "react";
import classNames from "classnames";
import { graphql } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "components/layout";
import "assets/scss/material-kit-react.scss?v=1.7.0";
import Parallax from "components/Parallax/Parallax.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import SectionPost from "./SectionPost";

const BlogPost = ({ data, classes }) => {
  const post = data.markdownRemark;
  return (
    <Layout headerColor={post.frontmatter.image ? "transparent" : "info"}>
      {post.frontmatter.image && typeof window !== "undefined" ? (
        <Parallax small filter image={post.frontmatter.image} />
      ) : (
        <div className={classes.space50} />
      )}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPost post={post} />
      </div>
    </Layout>
  );
};

export default withStyles(profilePageStyle)(BlogPost);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image
      }
    }
  }
`;
