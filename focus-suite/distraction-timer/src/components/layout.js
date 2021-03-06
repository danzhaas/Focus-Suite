/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "./layout.css"
import "../styles.css"

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
    <div id="layout-level">
      <header>
        <div>
          <Link to="/" style={{color: `white`, textDecoration: `none`}} >
            <h1>Distraction Timer</h1>
          </Link>
        </div>
      </header>
      
      <div id="pages">
        <main>
          {children}
        </main>
      </div>

      <footer>
        <p>© Dan Z Haas {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout