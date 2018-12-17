import React from "react";
import { graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { withPrefix } from "gatsby";
import BioCard from "../components/bioCard";
import theme from "../theme";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Layout from "../components/layout";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    paddingBottom: 20
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
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

class About extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { data, classes } = this.props;
    const { value } = this.state;
    return (
      <Layout>
        <img
          src={withPrefix("/img/productCurvyLines.png")}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container className={classes.root}>
          <Grid item md={2} />
          <Grid item md={8}>
            <Grid container justify="center">
              <Typography variant="h3" gutterBottom>
                About Me
              </Typography>
            </Grid>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Work Experience" />
                <Tab label="Learning Experience" />
                <Tab label="Community Experience" />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Grid container justify="center">
                <Timeline lineColor={theme.palette.primary.main}>
                  {data.allWorkExperienceJson.edges.map(({ node }) => (
                    <TimelineItem
                      key={node.id}
                      dateText={node.date}
                      dateInnerStyle={{
                        background: node.dateStyle.background,
                        color: node.dateStyle.color
                      }}
                    >
                      <BioCard bio={node} />
                    </TimelineItem>
                  ))}
                </Timeline>
              </Grid>
            )}
            {value === 1 && (
              <Grid container justify="center">
                <Timeline lineColor={theme.palette.primary.main}>
                  {data.allLearningExperienceJson.edges.map(({ node }) => (
                    <TimelineItem
                      key={node.id}
                      dateText={node.date}
                      dateInnerStyle={{
                        background: node.dateStyle.background,
                        color: node.dateStyle.color
                      }}
                    >
                      <BioCard bio={node} />
                    </TimelineItem>
                  ))}
                </Timeline>
              </Grid>
            )}
            {value === 2 && (
              <Grid container justify="center">
                <Timeline lineColor={theme.palette.primary.main}>
                  {data.allCommunityExperienceJson.edges.map(({ node }) => (
                    <TimelineItem
                      key={node.id}
                      dateText={node.date}
                      dateInnerStyle={{
                        background: node.dateStyle.background,
                        color: node.dateStyle.color
                      }}
                    >
                      <BioCard bio={node} />
                    </TimelineItem>
                  ))}
                </Timeline>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(About);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWorkExperienceJson(sort: { fields: [index], order: ASC }) {
      edges {
        node {
          index
          id
          date
          dateStyle {
            background
            color
          }
          title
          location
          url
          descriptions
          logo
          projects {
            title
            description
            responsibilities
          }
        }
      }
    }
    allLearningExperienceJson(sort: { fields: [index], order: ASC }) {
      edges {
        node {
          index
          id
          date
          dateStyle {
            background
            color
          }
          title
          location
          url
          descriptions
          logo
        }
      }
    }
    allCommunityExperienceJson(sort: { fields: [index], order: ASC }) {
      edges {
        node {
          index
          id
          date
          dateStyle {
            background
            color
          }
          title
          location
          url
          descriptions
          logo
        }
      }
    }
  }
`;
