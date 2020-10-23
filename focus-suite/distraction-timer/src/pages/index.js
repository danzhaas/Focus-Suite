import React from "react"
import { Button } from "@blueprintjs/core"
import { myContext } from '../components/provider'
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return(
    <myContext.Consumer>
      {context => (
        <Layout>
          <h2>Home</h2>
          <SEO title="Home" />
          <p>This is a tool for keeping track of how many times you are distracted during a task and how long you are distracted.  With an awareness of exactly how much time you lose to distraction, you can appreciate how valuable it is to prevent the distractions.</p>
          <Button 
            text="Start" 
            style={{ float:`right` }} 
            onClick={ () => {context.toggleTimer(); navigate("/timer/") }}
          />
          <br />
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
