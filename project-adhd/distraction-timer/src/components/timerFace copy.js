import React, { useState, useEffect } from "react"


function sumDurations (eventArray, eventType) {
  console.log(eventArray);
  var startIndex;
  var durations = [];
  eventType === "tasks" ? ( startIndex = 0 ) : ( startIndex = 1 );
  for ( var i=startIndex; i<(eventArray.length-1); i = (i + 2)) {
      var eventDuration = (eventArray[(i+1)] - eventArray[i]);
      durations.push(eventDuration);
  };
  if (durations.length === 0) {
      durations = 0;
  } else {
  durations = durations.reduce((total, num) => (total + num));
  }
  return durations
}

const TimerFace = (props) => {
  const { distraction, paused, timedEvents } = props;
  const [ renderInterval, addASecond ] = useState(0);

  //switch to set timeElapsed


  //calculate time elapsed since task started.
  //if paused, display task duration and do not refresh
  var timeElapsed;
  if (distraction) {
    timeElapsed = sumDurations( timedEvents, "distractions" )
  } else {
    paused ?
    (timeElapsed = timedEvents[timedEvents.length-1] - timedEvents[0])
    :
    (timeElapsed = Date.now() - timedEvents[0])
  }
  // (console.log("test"))

  //format the time from Date.now() ms count into hh:mm:ss format
  function formatDoubleDigits (value) {
    if (value < 10) value = "0" + value;
    return value;
  };
  const sec = 1000, min = (sec * 60), hour = (min * 60), day = (hour * 24);
  var hoursPassed = Math.floor((timeElapsed % day) / hour);
  var minutesPassed = formatDoubleDigits(Math.floor((timeElapsed % hour) / min));
  var secondsPassed = formatDoubleDigits(Math.floor((timeElapsed % min) / sec));

  // rerender this element every second
  useEffect(() => {
    const id = setInterval(() => {
      addASecond( Date.now() );
    }, 1000);
  return () => clearInterval(id);
  }, [])

  //return the time in hh:mm:ss format
  return (
    <p id="time">
      {hoursPassed }:{ minutesPassed }:{ secondsPassed }
    </p>
  )

}

export default TimerFace
