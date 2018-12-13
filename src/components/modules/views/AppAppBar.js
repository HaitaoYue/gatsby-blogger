import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import Typography from "../components/Typography";
import CustomLink from "../next/Link";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function AppAppBar(props) {
  const { classes, title } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            component={linkProps => (
              <CustomLink {...linkProps} to="/" variant="button" />
            )}
          >
            {title}
          </Typography>
          <div className={classes.right}>
            <Typography
              color="inherit"
              variant="h6"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              component={linkProps => (
                <CustomLink {...linkProps} to="/" variant="button" />
              )}
            >
              {"Home"}
            </Typography>
            <Typography
              variant="h6"
              className={classes.rightLink}
              component={linkProps => (
                <CustomLink {...linkProps} to="/about/" variant="button" />
              )}
            >
              {"About"}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
