import React from "react"
import { Button } from "@blueprintjs/core"
import { myContext } from '../components/provider'
import { navigate } from "gatsby"
import Layout from "../components/layout"
import TimerFace from "../components/timerFace"
import PieChart from "../components/pieChart"
import Timeline from "../components/timeline"
import SEO from "../components/seo"


function sumDurations (array, eventType) {
// sumDurations returns total duration of the distraction or task events for the pie chart. 

  // first validate timeline for inconsistent time reporting; assures chronological order.
  // When distraction n start time is before distraction n-1 end time, reset the latter distraction begin time to equal former distraction end time.  If i > i+1, set i+1 = i 
  var validatedTimeline =[];  
  for ( var i = 0; i < array.length; i = i + 2 ) {
      var num;
      array[i] >= array[i+1] ? (num = i) : (num = i+1);
      validatedTimeline.push(array[i], array[num]);
  }
  
  // pick appropriate indexes of event times to return total duration of either task or distraction events.
  // Task event start and end indexes are (even, odd), and distraction event start and end indexes are (odd, even)
  var startingIndex;
  var durations = [];
  eventType === "tasks" ? ( startingIndex = 0 ) : ( startingIndex = 1 );
  for ( var j = startingIndex; j < ( validatedTimeline.length-1); j = (j + 2)) {
      var eventDuration = (validatedTimeline[(j+1)] - validatedTimeline[j]);
      durations.push(eventDuration);
  };
  // reduce all durations of the specified event type
  if (durations.length === 0) {
      durations = 0;
  } else {
  durations = durations.reduce((total, num) => (total + num));
  }
  //returns total duration of specified event type
  return durations
}

function distractionPercent (array) {
// distractionPercent returns the percent of total time that was distracted
  var distractionTotal = sumDurations(array, "distractions");
  var taskTotal = sumDurations(array, "tasks");
  var timeElapsed = distractionTotal + taskTotal;
  return (Math.floor((distractionTotal/timeElapsed)*100))
}


const ReportPage = () => {
  return (
    <myContext.Consumer>
      {context => (
        <Layout>
          <SEO title="Report" />
          <div className="report-page-layout" >
            <h2>Report</h2>
            <PieChart distractionDuration={sumDurations (context.timedEvents, "distractions")} taskDuration={sumDurations (context.timedEvents, "tasks")} />
            <h4 style={{ color: `blue` }} >Distracted {distractionPercent(context.timedEvents)}% of total task time</h4>
            <Timeline />
            <TimerFace timerName={`Distracted Time`} paused distraction />
            <TimerFace timerName={`Total Time`} paused />
            <div id="report-buttons">
              <Button
                // className="w50"
                text="Resume Task"
                large
                onClick={() => { context.toggleTimer(); navigate("/timer/") }}
              />
              <Button
                // className="w50"
                text="New Task"
                large
                onClick={() => { context.resetTimer(); navigate("/") }}
              />
            </div>
          </div>
        </Layout>
      )}
    </myContext.Consumer>
  )
}

export default ReportPage
