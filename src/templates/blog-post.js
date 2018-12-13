import React from "react";
import { graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    height: 140,
    width: 100
  },
  content: {
    width: "100%"
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const BlogPost = ({ data, classes }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Grid container>
            <Grid container justify="center" alignItems="center">
              <Typography component="h2" variant="h1" gutterBottom>
                {post.frontmatter.title}
              </Typography>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="row"
            >
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(BlogPost);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
