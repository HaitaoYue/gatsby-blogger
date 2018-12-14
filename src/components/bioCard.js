import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    height: 140,
    width: 100
  },
  card: {
    minWidth: 300
  },
  title: {
    fontSize: 14
  },
  content: {
    width: "100%"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  media: {
    objectFit: "cover"
  },
  actions: {
    display: "flex"
  },
  projectTitle: {
    color: theme.palette.secondary.dark
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  titleDivider: {
    marginBottom: 10
  }
});

class BioCard extends PureComponent {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { bio, classes } = this.props;
    const projects = bio.projects || [];
    return (
      <Card raised className={classes.card}>
        <CardActionArea>
          {bio.logo && (
            <CardMedia
              component="img"
              className={classes.media}
              alt="image"
              height="160"
              image={bio.logo}
            />
          )}
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {bio.location}
            </Typography>
            <Typography variant="h4" component="h4">
              {bio.title}
            </Typography>
            {bio.descriptions.map(description => (
              <Typography component="p" gutterBottom>
                {description}
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
        {projects.length > 0 && (
          <CardActions>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        )}
        {projects.length > 0 && (
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {projects.map(project => (
                <React.Fragment>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="secondary"
                  >
                    {project.title}
                  </Typography>
                  <Divider light />
                  <Typography variant="subtitle2" gutterBottom>
                    Description
                  </Typography>
                  <Divider variant="inset" />
                  <Typography paragraph gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Responsibilities
                  </Typography>
                  <Divider variant="inset" />
                  <Typography paragraph gutterBottom>
                    {project.responsibilities.map(responsibility => (
                      <Typography paragraph gutterBottom>
                        {responsibility}
                      </Typography>
                    ))}
                  </Typography>
                </React.Fragment>
              ))}
            </CardContent>
          </Collapse>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(BioCard);
