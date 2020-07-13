/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import LogoInsta from './assets/svg/insta.svg';
import LogoTwitter from './assets/svg/twitter.svg';
import LogoFacebook from './assets/svg/facebook.svg';
import './assets/css/stylesheet.css';
import './assets/css/myBootstrap.css';
import { Helmet } from "react-helmet";

const Layout = ({headerClass = "", children,...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} headerClass={headerClass}/>

        <main>{children}</main>
        <footer className={props.footerClassName}>
          <p>
            © {new Date().getFullYear()}, Everest roofings and plumbing
            Sydney Austrilia,+977 01 123456
          </p>
      <div className="intersection" />
          <div className="footer_social">
            <LogoTwitter />
            <LogoFacebook />
            <LogoInsta />
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
