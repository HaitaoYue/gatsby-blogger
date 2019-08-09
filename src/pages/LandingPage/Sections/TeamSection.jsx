import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "gatsby";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

class TeamSection extends React.Component {
  render() {
    const { classes, posts } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            {posts.map(post => (
              <GridItem xs={12} sm={12} md={4} key={post.node.id}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={post.node.frontmatter.thumb || "/img/tech.jpg"}
                      alt="..."
                      className={imageClasses}
                    />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    <Button
                      color="transparent"
                      component={AdapterLink}
                      to={`/posts${post.node.fields.slug}`}
                      className={classes.navLink}
                    >
                      {post.node.frontmatter.title}
                    </Button>
                    <br />
                    <small className={classes.smallTitle}>
                      {post.node.frontmatter.date}
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>{post.node.excerpt}</p>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
