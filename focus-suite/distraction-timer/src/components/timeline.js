import React from "react"
import { myContext } from '../components/provider'
import { Chart } from "react-google-charts"


function adjustTimeline (array) {
    var adjustedTimeline =[];
    //When i > i+1, set i+1 = i.
    for ( var i = 0; i < array.length; i = i + 2 ) {
        var num;
        array[i] >= array[i+1] ? (num = i) : (num = i+1);
        adjustedTimeline.push(array[i], array[num]);
    }
    return adjustedTimeline;
}

function makeDatatable (array) {
    //Adjust timeline for inconsistencies of event time reporting
    const adjustedTimeline = adjustTimeline (array);
    
    //Making the datatable
    const datatable = [
    //The first object in the datatable is columns:
        [
            { type: 'string', id: 'Focus' },
            { type: 'string', id: 'Name' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
        ]
    ];
    //the rest of the items are rows data corresponding to the columns
    for ( var i = 0; i < adjustedTimeline.length-1; i++ ) { 
        var row = [
            "focus",
            i%2 === 0 ? ("focus") : ("distracted"),
            adjustedTimeline[i],
            adjustedTimeline[i+1],
        ];
        datatable.push(row);
    }
    return datatable;
}


const Timeline = () => (
    <myContext.Consumer>
        {context => (
            <Chart
                // width={'100%'}
                height={'100px'}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={makeDatatable(context.timedEvents)}
                options={{
                    timeline: {
                        showRowLabels: false,
                        showBarLabels: true
                    },
                    avoidOverlappingGridLines: false,
                    colors: ['#818181', '#4266f5'],
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        )}
    </myContext.Consumer>
)


export default Timeline