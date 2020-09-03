import React, { useEffect } from "react"
import { myContext } from '../components/provider'

function formatDoubleDigits (value) {
  if (value < 10) {
    const shortNumber = value.toString(10);
    const zero = "0";
    const dubDigits = zero.concat(shortNumber);
    value = dubDigits;
  } 
  return value;
};

const RenderTime = (props) => {
  var diff = Date.now() - props.initTime;
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <p>
      { props.initTime }
      {/* { hours }:{ formatDoubleDigits(minutes) }:{ formatDoubleDigits(seconds) } */}
    </p>
  )
}

const TimerFace = () => {
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will run every second!');
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <myContext.Consumer>
    {context => (
    <div className="timer-face">
      <RenderTime initTime={context.initTime}/>
    </div>
          )}
          </myContext.Consumer>
  )
}

export default TimerFace
