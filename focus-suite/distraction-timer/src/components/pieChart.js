import React from "react"
import { myContext } from '../components/provider'
import { Chart } from "react-google-charts"


function sumDurations (array, eventType) {
    
    // adjust timeline for inconsistent time reporting
    var adjustedTimeline =[];
    
    //When distraction n start time is before distraction n-1 end time, reset the distraction n begin time to equal distraction n-1 end.  If i > i+1, set i+1 = i 
    for ( var i = 0; i < array.length; i = i + 2 ) {
        var num;
        array[i] >= array[i+1] ? (num = i) : (num = i+1);
        adjustedTimeline.push(array[i], array[num]);
    }
    
    // pick appropriate sets of event times to count duration of either task or distractions.
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

function displayPercent (array) {
    const distractionTotal = (sumDurations(array, "distractions"));
    const timeElapsed = (array[array.length-1] - array[0]);
    const distractionPercent = Math.floor((distractionTotal/timeElapsed)*100);

    return (
        <h4 style={{ color: `blue` }} >Distracted {distractionPercent}% of total task time</h4>
    )
}


const PieChart = () => (
    <myContext.Consumer>
        {context => (
            <>
                <Chart
                    id="pie"
                    timedEvents={context.timedEvents}
                    width={'25vw'}
                    height={'25vw'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Distracted', sumDurations(context.timedEvents, "distractions")],
                        ['Task', sumDurations(context.timedEvents, "tasks")],
                        
                    ]}
                    options={{
                        tooltip: { trigger: 'none' },
                        legend: 'none',
                        pieSliceText: 'none',
                        colors: ['#4266f5', '#818181'],
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                {displayPercent(context.timedEvents)}
            </>
        )}
    </myContext.Consumer>
)


export default PieChart