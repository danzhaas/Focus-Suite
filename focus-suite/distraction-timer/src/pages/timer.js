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
    <div id="custom-time" className="bp3-button" >
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
      <ButtonGroup large id="timer-button-group" >
        <Button className="panel-button" onClick={() => logDistraction(30000)} >30 sec</Button>
        <Button className="panel-button" onClick={() => logDistraction(60000)} >1</Button>
        <Button className="panel-button" onClick={() => logDistraction(180000)} >3</Button>
        <Button className="panel-button" onClick={() => logDistraction(300000)} >5</Button>
        <Button className="panel-button" onClick={() => logDistraction(600000)} >10</Button>
        <Button className="panel-button" onClick={() => logDistraction(1200000)}  large>20</Button>
        <Button className="panel-button" onClick={() => logDistraction(1800000)}  large>30</Button>
        <CustomTimePanel logDistraction={logDistraction} />
      </ButtonGroup>
    </div>
  )
}

const TimePanel = ( props ) => {
  const { toggleTimer } = props;
  const [timerDisplayed, toggleTimerDisplayed] = useState(true);

  return(
    <div id="timer-page-timer" >
        { timerDisplayed ?
          ( <TimerFace timerName={`Total Time`} />) 
          : 
          ( <>
              <h4>Total Time</h4>
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
          <div id="timer-page-layout" >
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