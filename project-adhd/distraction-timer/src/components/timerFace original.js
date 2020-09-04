import React, { useEffect } from "react"
import { myContext } from '../components/provider'


const RenderTime = (props) => {

  function formatDoubleDigits (value) {
    if (value < 10) value = "0" + value; 
    return value;
  };

  var timeElapsed = Date.now() - props.timedEvents[0];

  var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = formatDoubleDigits(Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = formatDoubleDigits(Math.floor((timeElapsed % (1000 * 60)) / 1000));

  function updateTimer (props) { 
    timeElapsed = Date.now() - props.timedEvents[0];
    ReactDOM.render(element, document.getElementById('root'))
  };
  // setInterval( updateTimer(), 1000 )

  return (
    <p>
      { hours }:{ minutes }:{ seconds }
    </p>
  )
}

const TimerFace = (props) => {
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);
  //   setInterval( ,1000)
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <myContext.Consumer>
      {context => (
        <div className="timer-face" style={{ display: props.timerDisplayed ? (`block`) : (`none`) }} >
          <RenderTime timedEvents={context.timedEvents}/>
        </div>
      )}
    </myContext.Consumer>
  )
}

export default TimerFace
