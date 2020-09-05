import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { myContext } from '../components/provider'


function getTimerValue(startTime) {

  //calculate time passed since task started
  var timeElapsed = Date.now() - startTime;

  //format the time from seconds to hh:mm:ss format
  function formatDoubleDigits (value) {
    if (value < 10) value = "0" + value;
    return value;
  };
  var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = formatDoubleDigits(Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = formatDoubleDigits(Math.floor((timeElapsed % (1000 * 60)) / 1000));

  //render time on the UI
  const timerValue = (
    <p id="time">
      {hours}:{ minutes}:{ seconds}
    </p>
  );

  // ReactDOM.render(timerValue, document.getElementById('insertTimerValue'));
  
};


const TimerFace = (props) => {
  // original reactdom.render method
  // const { timedEvents, timerDisplayed } = props;
  // setInterval( function(){ getTimerValue( timedEvents[0])}, 1000);
  
  //experiment: using regular state changes to rerender.  
  const [secondsPassed, addASecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      addASecond( Date.now() );
      // addASecond( secondsPassed + 1 );
      console.log( secondsPassed );
    }, 1000);
  return () => clearInterval(id);
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // console.log("Renders at " + Math.floor((Date.now()/1000)));
  
  return (
    <div id='insertTimerValue'></div>
    // <div id='fakeID'>
    //   <p>{secondsPassed}</p>
    // </div>
  )
}

export default TimerFace
