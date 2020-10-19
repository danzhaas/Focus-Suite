import React, { useState } from 'react'
import { ButtonGroup, Button, InputGroup } from "@blueprintjs/core";
import { myContext } from '../components/provider'
import { navigate } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"


const CustomTimePanel = (props) => {
  var logDistraction = props.logDistraction;
  var customDuration;
  return(
    <div id="nonhover" className="bp3-button" style={{ display: `flex`, flexDirection: `row`, width:`60%`}}>
      <InputGroup id="text-input" placeholder="Custom #" style={{ width: `100px`}} />
      <Button onClick={() => {customDuration = 60000*(document.getElementById("text-input").value); logDistraction(customDuration)}} >Submit</Button>
    </div>  
  )
}

const DistractedButtonPanel = (props) => {
  const { logDistraction } = props;

  return(
    <div style={{ display: `flex`, flexDirection: `column`}}>
      <h4>How many minutes were you distracted?</h4>
      <ButtonGroup large>
        <Button id="w20" onClick={() => logDistraction(30000)} >30 sec</Button>
        <Button id="w20" onClick={() => logDistraction(60000)} >1</Button>
        <Button id="w20" onClick={() => logDistraction(180000)} >3</Button>
        <Button id="w20" onClick={() => logDistraction(300000)} >5</Button>
        <Button id="w20" onClick={() => logDistraction(600000)} >10</Button>
      </ButtonGroup>
      <ButtonGroup >
        <Button id="w20" onClick={() => logDistraction(1200000)}  large>20</Button>
        <Button id="w20" onClick={() => logDistraction(1800000)}  large>30</Button>
        <CustomTimePanel logDistraction={logDistraction} />
      </ButtonGroup>
    </div>
  )
}

const TimePanel = ( props ) => {
  const { toggleTimer } = props;
  const [timerDisplayed, toggleTimerDisplayed] = useState(true);

  return(
    <div style={{marginLeft:`1.0875rem`}}>
        { timerDisplayed ?
          ( <TimerFace timerName={`Total Task Time`} />) 
          : 
          ( <>
              <h4>Total Task Time</h4>
              <div className ="timer-face">
                <p>Hidden</p>
              </div>
            </> )
        }
      <br />

      <Button id="w50" 
        className="timerDisplayButton" 
        text={ timerDisplayed ? ("Hide Timer") : ("Show Timer") } 
        large 
        style={{padding:0, textAlign:`center`}} 
        onClick = {() => toggleTimerDisplayed(!timerDisplayed)} 
      />
      <Button id="w50" 
        text="Stop" 
        large 
        onClick={ () => { navigate("/report/") }} 
        onClick={ () => { toggleTimer(); navigate("/report/") }} 
      />
      <br />
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
            <DistractedButtonPanel logDistraction = {context.logDistraction} />
            {/* <DistractedButtonPanel logDistraction = {context.logDistraction} timedEvents = {context.timedEvents} /> */}
            <TimePanel toggleTimer={context.toggleTimer}/>
          </div>
        </Layout>
      )}
    </myContext.Consumer>
  )

}

export default TimerPage