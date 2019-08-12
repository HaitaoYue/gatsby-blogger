import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import openstackImg from "assets/img/openstack.png";
import hyperledgerImg from "assets/img/hyperledger.png";

class TechSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Personal technology stack</h2>
            <h5 className={classes.description}>
              Linux embedded development, Web font and back development, Mobile
              application development, System operation and maintenance
              monitoring automatic deployment.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="OpenStack"
                description="
                Customized the user control panel of the company cloud platform based on the depth of the OpenStack horizon, greatly improving the user experience and speed.
                "
                image={openstackImg}
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Hyperledger"
                description={
                  <span>
                    Project maintainer of cello which is the open source baas
                    (BlockChain As a Service) project in hyperledger,{" "}
                    <a
                      href="https://github.com/hyperledger/cello"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Link
                    </a>
                  </span>
                }
                image={hyperledgerImg}
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TechSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(TechSection);
