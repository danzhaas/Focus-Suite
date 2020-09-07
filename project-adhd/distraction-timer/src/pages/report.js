import React from "react"
import { AnchorButton } from "@blueprintjs/core"
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import PieChart from "../components/pieChart"
import Timeline from "../components/timeline"
import { myContext } from '../components/provider'
import SEO from "../components/seo"


const ResultsPanel = () => (
  <div style={{ width: `70vw` }}>
    <div className="row" style={{ display: `flex` }}>
      <PieChart />
      <div style={{ marginLeft: `1.0875rem`, width: `25vw`, color: `blue` }}>
        <h4>Distracted Time:</h4>
        <TimerFace paused distraction startTime="1599365409539" endTime="1599365412295" />
      </div>
    </div>
    <br />
    <div className="row">
      <Timeline />
    </div>
  </div>
)

const TimePanel = () => (
  <div style={{ marginLeft: `1.0875rem`, width: `20vw` }}>
    <h4>Total Task Time:</h4>
    <TimerFace paused startTime="1599365409539" endTime="1599365412295" />
    <br />
    <AnchorButton id="w50" text="Resume Task" href="/timer/" large />
    <AnchorButton id="w50" text="New Task" href="/timer/" large />
  </div>
)

const ReportPage = () => {
  return (
    <myContext.Consumer>
      {context => (
        <Layout>
          <h2>Report</h2>
          <SEO title="Report" />
          <div className="row" style={{ display: `flex` }}>
            <ResultsPanel context={context} />
            <TimePanel context={context} />
          </div>
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default ReportPage
