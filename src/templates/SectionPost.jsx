import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ReactMarkdown from "react-markdown/with-html";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

class SectionPost extends React.Component {
  render() {
    const { classes, post } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>{post.frontmatter.title}</h2>
              <h4>{post.frontmatter.date}</h4>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <ReactMarkdown source={post.html} escapeHtml={false} />
              </div>
            </GridContainer>
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

SectionPost.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(SectionPost);
