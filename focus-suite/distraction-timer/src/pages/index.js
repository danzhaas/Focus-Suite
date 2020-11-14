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
            Distraction Timer is a tool to measure how much time you are distracted during a task. 
            <br/><br/>
            <span style={{fontWeight:`bold`}}>Instructions:</span> Start the timer and begin your task.  When you realize you have been distracted, guess how long you were distracted, then press that button.  Press Stop Timer when the task is finished to see how much time you were distracted.              
          </p>
          <Button 
            text="Start Timer" 
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
