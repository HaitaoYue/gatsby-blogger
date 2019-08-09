import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import TechSection from "./Sections/TechSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";

class LandingPage extends React.Component {
  render() {
    const { classes, posts } = this.props;
    return (
      <div>
        {typeof window !== "undefined" && (
          <Parallax filter image={require("assets/img/landing-bg.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Passionate</h1>
                  <h4>
                    I like all kinds of new technologies and are full of
                    curiosity about new dynamic moments in the field of
                    technology.
                  </h4>
                  <h4>Love life, love family, love technology.</h4>
                  <h3>天道酬勤</h3>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TechSection />
            <TeamSection posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
