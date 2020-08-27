import React from "react"
import { AnchorButton } from "@blueprintjs/core";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  // <div style={{ maxWidth: `500px`}}>
  <div>
  <Layout>
    <h1>Home</h1>
    <SEO title="Home" />
    <p>This is a tool for keeping track of how many times you are distracted during a task and how long you are distracted.  With an awareness of exactly how much time you lose to distraction, you can appreciate how valuable it is to prevent the distractions.</p>
    <AnchorButton text="Start" href="/timer/" /><br />
  </Layout>
  </div>
)

export default IndexPage
