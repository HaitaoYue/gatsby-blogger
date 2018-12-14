import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import config from "../../../../config/site";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    display: "flex"
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150
  }
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container>
          <Grid item md={3} />
          <Grid item xs={12} md={6}>
            <Grid container justify="center" alignItems="center">
              <Typography variant="caption">{config.copyright}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  pure,
  withStyles(styles)
)(AppFooter);
