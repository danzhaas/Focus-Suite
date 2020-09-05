import React, { useState, useEffect } from "react"


const TimerFace = (props) => {
  //choose if standard timer face or distracted timer face 
  // distracted ?
  // (
  //   //elapsed time = sum of distraction periods
  // )
  // :
  // (return());

  const { distracted, paused, startTime, endTime } = props;
  const [ secondsPassed, addASecond ] = useState(0);

  //calculate time elapsed since task started.
  //if paused, display task duration and do not refresh
  var timeElapsed;

  paused ?
  (timeElapsed = Date.now() - startTime)
  :
  (timeElapsed = endTime - startTime);

  //format the time from Date.now() ms count into hh:mm:ss format
  function formatDoubleDigits (value) {
    if (value < 10) value = "0" + value;
    return value;
  };
  const sec = 1000, min = (sec * 60), hour = (min * 60), day = (hour * 24);
  var hoursPassed = Math.floor((timeElapsed % day) / hour);
  var minutesPassed = formatDoubleDigits(Math.floor((timeElapsed % hour) / min));
  var secondsPassed = formatDoubleDigits(Math.floor((timeElapsed % min) / sec));

  //rerender this element every second unless paused
  paused ? 
  ()
  :
  ( useEffect(() => {
      const id = setInterval(() => {
        addASecond( Date.now() );
      }, 1000);
    return () => clearInterval(id);
    }, [])
  );

  //return the time in hh:mm:ss format
  return (
    <p id="time">
      {hoursPassed }:{ minutesPassed }:{ secondsPassed }
    </p>
  )

}

export default TimerFace
