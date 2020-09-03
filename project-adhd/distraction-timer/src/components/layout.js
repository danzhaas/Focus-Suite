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
import "./layout.css"

const Layout = ({ children }) => {

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          width: `600px`,
          height: ``,
          padding: `0 1.0875rem 1rem`,
        }}>
        <main>{children}</main>
      </div>
      <footer 
        style={{ 
          background: `rebeccapurple`,
          padding: `1rem`,
          margin:0,
          color:`white`
        }}>
          © Dan Z Haas {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={{ color:`white` }}>Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
