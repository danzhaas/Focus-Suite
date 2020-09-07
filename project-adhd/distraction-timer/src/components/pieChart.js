import React from "react"
import { myContext } from '../components/provider'
import { Chart } from "react-google-charts"

function adjustTimeline (array) {
    var adjustedTimeline =[];
        //When i > i+1, set i+1 = i.
        for ( var i = 0; i < array.length; i = i + 2 ) {
            var num;
            array[i] >= array[i+1] ? (num = i) : (num = i+1);
            adjustedTimeline = adjustedTimeline.push(array[i], array[num])
        }
        return adjustedTimeline;
    }

function sumDurations (eventArray, eventType) {
    var startIndex;
    var durations = [];
    eventType === "tasks" ? ( startIndex = 0 ) : ( startIndex = 1 );
    for ( var i=startIndex; i<(eventArray.length-1); i = (i + 2)) {
        var eventDuration = (eventArray[(i+1)] - eventArray[i]);
        durations.push(eventDuration);
    };
    durations = durations.reduce((total, num) => (total + num));
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
                    timedEvents={context.timedEvents}
                    width={'20vh'}
                    height={'20vh'}
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
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                {displayPercent(context.timedEvents)}
            </>
        )}
    </myContext.Consumer>
)


export default PieChart