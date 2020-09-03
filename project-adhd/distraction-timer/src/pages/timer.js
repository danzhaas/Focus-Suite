import React from "react"
import { AnchorButton, ButtonGroup, Button, InputGroup } from "@blueprintjs/core";
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import { myContext } from '../components/provider'
import SEO from "../components/seo"



const CustomTimePanel = () => (
  <div id="nonhover" className="bp3-button" style={{ display: `flex`, flexDirection: `row`, width:`60%`}}>
    <InputGroup id="text-input" placeholder="Custom #" style={{ width: `100px`}} />
    <Button >Submit</Button>
</div>
)

const DistractedButtonPanel = (props) => {
  var distractions = props.distractions;
  var logDistraction = props.logDistraction;
  return(
    <div style={{ display: `flex`, flexDirection: `column`}}>
      <h4>How many minutes were you distracted?</h4>
      <ButtonGroup large>
        <Button id="w20" onClick={() => {logDistraction(30000)}}>30 sec</Button>
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
}

const TimePanel = () =>  {
  return(
    <div style={{marginLeft:`1.0875rem`}}>
      <h4>Total Task Time:</h4>
      <TimerFace />
      <br />
      <Button id="w50" text="Hide Timer" large style={{padding:0, textAlign:`center`}}/>
      <AnchorButton id="w50" text="Stop" href="/report/" large />
    </div>
  )
}

const TimerPage = () => {
  return (
    <myContext.Consumer>
      {context => (
        <Layout>
          <h2>Task in Progress</h2>
          <SEO title="Timer" />
          <div style={{ display: `flex`, }}>
            <DistractedButtonPanel logDistraction = {context.logDistraction} distractions = {context.distractions} />
            <TimePanel />
          </div>
        </Layout>
      )}
    </myContext.Consumer>
  )

}

export default TimerPage