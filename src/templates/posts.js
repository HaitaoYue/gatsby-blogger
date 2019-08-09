import React from "react";
import classNames from "classnames";
import Layout from "../components/layout";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import postsBg from "assets/img/bg2.jpg";

import SectionPostList from "./SectionPostList";

const Posts = ({ pageContext, classes }) => {
  return (
    <Layout>
      {typeof window !== "undefined" && (
        <Parallax small filter image={postsBg} />
      )}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPostList pageContext={pageContext} />
      </div>
    </Layout>
  );
};

export default withStyles(profilePageStyle)(Posts);
