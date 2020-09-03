import React from "react"
import { Chart } from "react-google-charts"
import { AnchorButton, ButtonGroup, Button, InputGroup } from "@blueprintjs/core"
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import { myContext } from '../components/provider'
import SEO from "../components/seo"


const PieChart = () => (
<Chart
  width={'20vh'}
  height={'20vh'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Task', 2],
    ['Distracted', 11],
  ]}
  options={{
    tooltip: { trigger: 'none' },
    legend: 'none',
    pieSliceText: 'none',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
)

const Timeline = () => (
<Chart
  width={'100%'}
  height={'100px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'Focus' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      'Focus',
      'Task',
      new Date(0, 0, 0, 12, 0, 0),
      new Date(0, 0, 0, 13, 30, 0),
    ],
    [
      'Focus',
      'Distracted',
      new Date(0, 0, 0, 13, 30, 0),
      new Date(0, 0, 0, 15, 30, 0),
    ],
    [
      'Focus',
      'Task',
      new Date(0, 0, 0, 15, 30, 0),
      new Date(0, 0, 0, 17, 30, 0),
    ],
    [
      'Focus',
      'Distracted',
      new Date(0, 0, 0, 17, 30, 0),
      new Date(0, 0, 0, 19, 0, 0),
    ],
    [
      'Focus',
      'Task',
      new Date(0, 0, 0, 19, 0, 0),
      new Date(0, 0, 0, 22, 0, 0),
    ],
    [
      'Focus',
      'Distracted',
      new Date(0, 0, 0, 22, 0, 0),
      new Date(0, 0, 0, 23, 0, 0),
    ],
    [
      'Focus',
      'Task',
      new Date(0, 0, 0, 23, 0, 0),
      new Date(0, 0, 0, 23, 59, 0),
    ],
  ]}
  options={{
    timeline: {
      showRowLabels: false, 
      showBarLabels: true
    },
    avoidOverlappingGridLines: false
  }}
  rootProps={{ 'data-testid': '3' }}
/>
)

const ResultsPanel = () => (
  <div style={{ width:`70vw`}}>
    <div class="row" style={{ display:`flex`}}>
      <PieChart />
      <h4 style={{ color:`blue`}}>Distracted x % of total task time</h4>
      <div style={{ marginLeft:`1.0875rem`, width:`25vw`, color:`blue`}}>
        <h4>Distracted Time:</h4>
        <TimerFace />
      </div>
    </div>
    <br />
    <div class="row">
      <Timeline />
    </div>
  </div>
)

const TimePanel = () => (
  <div style={{marginLeft:`1.0875rem`, width:`20vw`}}>
    <h4>Total Task Time:</h4>
    <TimerFace />
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
        <div class="row" style={{ display:`flex`}}>
          <ResultsPanel />
          <TimePanel />
        </div>
      </Layout>
      )}
    </myContext.Consumer>
  )
}

export default ReportPage
