import React from "react";
import { css } from "@emotion/core";
import { graphql, StaticQuery } from "gatsby";
import SiteMetadata from "./site-metadata";
import AppAppBar from "./modules/views/AppAppBar";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            twitter
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title }
      }
    }) => (
      <React.Fragment>
        <SiteMetadata title={title} />
        <AppAppBar title={title} />
        <div
          css={css`
            margin: 0 auto;
            max-width: 900px;
          `}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
);

export default Layout;
