import React, { useState, useEffect } from "react"
import { myContext } from '../components/provider'


// function sumDurations(eventArray, eventType) {
//   var startIndex;
//   var durations = [];
//   eventType === "tasks" ? (startIndex = 0) : (startIndex = 1);
//   for (var i = startIndex; i < (eventArray.length - 1); i = (i + 2)) {
//     var eventDuration = (eventArray[(i + 1)] - eventArray[i]);
//     durations.push(eventDuration);
//   };
//   if (durations.length === 0) {
//     durations = 0;
//   } else {
//     durations = durations.reduce((total, num) => (total + num));
//   }
//   return durations
// }

function sumDurations (array, eventType) {
  // adjust timeline for inconsistent time reporting
  var adjustedTimeline =[];
      //When i > i+1, set i+1 = i.
      for ( var i = 0; i < array.length; i = i + 2 ) {
          var num;
          array[i] >= array[i+1] ? (num = i) : (num = i+1);
          adjustedTimeline.push(array[i], array[num]);
      }
  // pick appropriate sets of event times to count duration of either task or distractions
  var startIndex;
  var durations = [];
  eventType === "tasks" ? ( startIndex = 0 ) : ( startIndex = 1 );
  for ( var i = startIndex; i < ( adjustedTimeline.length-1); i = (i + 2)) {
      var eventDuration = (adjustedTimeline[(i+1)] - adjustedTimeline[i]);
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
  const { timerName, distraction, paused } = props;
  const [renderInterval, addASecond] = useState(0);


  function formatTime(array) {
    //calculate time elapsed since task started.
    //if paused, display task duration and do not refresh
    var timeElapsed;
    if (distraction) {
      timeElapsed = sumDurations(array, "distractions")
    } else {
      paused ?
        (timeElapsed = array[array.length - 1] - array[0])
        :
        (timeElapsed = Date.now() - array[0])
    };
  
    //format the time from Date.now() ms count into hh:mm:ss format
    function formatDoubleDigits(value) {
      if (value < 10) value = "0" + value;
      return value;
    };
    const sec = 1000, min = (sec * 60), hour = (min * 60), day = (hour * 24);
    var hoursPassed = Math.floor((timeElapsed % day) / hour);
    var minutesPassed = formatDoubleDigits(Math.floor((timeElapsed % hour) / min));
    var secondsPassed = formatDoubleDigits(Math.floor((timeElapsed % min) / sec));
  
    //return the time in hh:mm:ss format
    return (
      <p id="time">
        {hoursPassed}:{ minutesPassed}:{ secondsPassed}
      </p>
    )
  }


  // rerender this element every second
  useEffect(() => {
    const id = setInterval(() => {
      addASecond(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [])


  return (
    <myContext.Consumer>
      {context => (
        <>
          <h4>{ timerName }</h4>
          <div className ="timer-face">
            {formatTime( context.timedEvents )}
          </div>
        </>
      )}
    </myContext.Consumer>
  )

}

export default TimerFace
