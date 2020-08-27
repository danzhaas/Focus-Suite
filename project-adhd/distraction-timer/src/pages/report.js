import React from "react"
import { AnchorButton, ButtonGroup, Button, InputGroup } from "@blueprintjs/core";
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import SEO from "../components/seo"

const PieChart = () => (
  <>
  </>
)

const Timeline = () => (
  <>
  </>
)

const ResultsPanel = () => (
  <>
    <div class="row">
      <PieChart />
      <>
        <h3>Distracted Time:</h3>
        <TimerFace />
      </>
    </div>
    <div class="row">
      <Timeline />
    </div>
  </>
)

const TimePanel = () => (
  <div style={{marginLeft:`1.0875rem`}}>
    <h3>Total Task Time:</h3>
    <TimerFace />
    <AnchorButton id="w50" text="Resume Task" href="/timer/" large />
    <AnchorButton id="w50" text="New Task" href="/timer/" large />
  </div>
)

const ReportPage = () => (
  // <div style={{ maxWidth: `500px`}}>
  <div>
  <Layout>
    <h2>Report</h2>
    <SEO title="Report" />
    <ResultsPanel />
    <TimePanel />
  </Layout>
  </div>
)

export default ReportPage
