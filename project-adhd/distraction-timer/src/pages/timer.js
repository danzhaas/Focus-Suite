import React from "react"
import { AnchorButton, ButtonGroup, Button, InputGroup } from "@blueprintjs/core";
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import SEO from "../components/seo"

const CustomTimePanel = () => (
  <div id="nonhover" class="bp3-button" style={{ display: `flex`, flexDirection: `row`, width:`60%`}}>
    <InputGroup id="text-input" placeholder="Custom #" style={{ width: `100px`}} />
    <Button >Submit</Button>
</div>
)

const DistractedButtonPanel = () => (
  <div style={{ display: `flex`, flexDirection: `column`}}>
      <h3>How many minutes were you distracted?</h3>
      <ButtonGroup large>
        <Button id="w20">30 sec</Button>
        <Button id="w20">1</Button>
        <Button id="w20">3</Button>
        <Button id="w20">5</Button>
        <Button id="w20">10</Button>
      </ButtonGroup>
      <ButtonGroup >
        <Button id="w20" large>20</Button>
        <Button id="w20" large>30</Button>
        <CustomTimePanel />
      </ButtonGroup>
    </div>
)

const TimePanel = () => (
  <div style={{marginLeft:`1.0875rem`}}>
    <h3>Total Task Time:</h3>
    <TimerFace />
    <Button id="w50" text="Hide Timer" large style={{padding:0}}/>
    <AnchorButton id="w50" text="Stop" href="/report/" large />
  </div>
)

const TimerPage = () => (
  // <div style={{ maxWidth: `500px`}}>
  <div>
    <SEO title="Timer" />
    <Layout>
      <h2>Task in Progress</h2>
      <div style={{ display: `flex`, }}>
        <DistractedButtonPanel />
        <TimePanel />
      </div>
    </Layout>
  </div>
)

export default TimerPage