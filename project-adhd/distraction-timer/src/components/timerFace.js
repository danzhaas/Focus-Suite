import React, { useEffect } from "react"
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
    <p>
      {hours}:{ minutes}:{ seconds}
    </p>
  );
  ReactDOM.render(timerValue, document.getElementById('insertTimerValue'));
  
};


const TimerFace = (props) => {
  const { timedEvents, timerDisplayed } = props;

  setInterval( function(){ getTimerValue( timedEvents[0])}, 1000);

  return (
    <div id='insertTimerValue'></div>
  )
}

export default TimerFace
