import React from "react";
import { graphql } from "gatsby";
import "assets/scss/material-kit-react.scss?v=1.7.0";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import Layout from "components/layout";

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
        <ProfilePage />
      </Layout>
    );
  }
}

export default About;

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
