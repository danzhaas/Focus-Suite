import React from "react"
import { Button } from "@blueprintjs/core"
import { myContext } from '../components/provider'
import { navigate } from "gatsby"
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import PieChart from "../components/pieChart"
import Timeline from "../components/timeline"
// import SEO from "../components/seo"


const ResultsPanel = () => (
  <div style={{ width: `70vw` }}>
    <div className="row" style={{ display: `flex` }}>
      <PieChart />
      <div style={{ marginLeft: `1.0875rem`, width: `25vw`, color: `blue` }}>
        <TimerFace timerName={`Distracted Time`} paused distraction />
      </div>
    </div>
    <div className="row">
      <Timeline />
    </div>
  </div>
)

const TimePanel = () => (
  <myContext.Consumer>
    {context => (
      <div style={{ marginLeft: `1.0875rem`, width: `20vw` }}>
        <TimerFace timerName={`Total Time`} paused />
        <br />
        <Button
          id="w50"          
          text="Resume Task"
          style={{ textAlign: `center` }}
          large
          onClick={() => { context.toggleTimer(); navigate("/timer/") }}
        />
        <Button
          id="w50"          
          text="New Task"
          style={{ textAlign: `center` }}
          large
          onClick={() => { context.resetTimer(); navigate("/") }}
        />
      </div>
    )}
  </myContext.Consumer>
)

const ReportPage = () => {
  return (
    <Layout>
      <h2>Report</h2>
      {/* <SEO title="Report" /> */}
      <div className="row" style={{ display: `flex` }}>
        <ResultsPanel />
        <TimePanel />
      </div>
    </Layout>
  )
}

export default ReportPage
