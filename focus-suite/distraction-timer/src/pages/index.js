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
          <h2>Welcome</h2>
          <SEO title="Home" />
          <p>
            This stopwatch tracks how long you work on a task and how many times you were distracted.
            <br/><br/>
            <span style={{fontWeight:`bold`}}>How to use this app:</span> Press Start to begin timer.  During your task, anytime you realize you have been distracted, estimate how long you have been distracted, then press the corresponding button to log that time.  Press Stop Timer when the task is finished to see your results.  
            <br/><br/>
            With an awareness of exactly how much time you lose, you can appreciate how valuable it is to prevent distractions.
          </p>
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
