import React from "react"
import { AnchorButton, Button } from "@blueprintjs/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { myContext } from '../components/provider'

const IndexPage = () => {
  return(
    <myContext.Consumer>
      {context => (
        <Layout>
          <h2>Home</h2>
          <SEO title="Home" />
          {/* <p>{context.timeInit}</p> */}
          <p>This is a tool for keeping track of how many times you are distracted during a task and how long you are distracted.  With an awareness of exactly how much time you lose to distraction, you can appreciate how valuable it is to prevent the distractions.</p>
          <AnchorButton text="Start" href="/timer/" style={{ float:`right` }} onClick={ () => context.begin() }/><br />
          {/* <Button id="w50" large style={{padding:0, textAlign:`center`}} onClick={ () => context.beginApp() }> Fart</Button> */}
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
