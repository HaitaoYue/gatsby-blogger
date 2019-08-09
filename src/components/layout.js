import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SiteMetadata from "./site-metadata";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

const Layout = ({ children, headerColor = "transparent" }) => (
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
        <Header
          color={headerColor}
          routes={[]}
          brand="Haitao's Blog"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        {children}
        <Footer />
      </React.Fragment>
    )}
  />
);

export default Layout;
