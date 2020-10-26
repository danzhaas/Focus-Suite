import React from "react"
import { myContext } from '../components/provider'
import { Chart } from "react-google-charts"

//Adjust timeline for inconsistencies of event time reporting
function validateTimeline (array) {
    var validatedTimeline =[];
    //When i > i+1, set i+1 = i.
    for ( var i = 0; i < array.length; i = i + 2 ) {
        var num;
        array[i] >= array[i+1] ? (num = i) : (num = i+1);
        validatedTimeline.push(array[i], array[num]);
    }
    return validatedTimeline;
}

function makeDatatable (array) {
    //Adjust timeline for inconsistencies of event time reporting
    const validatedTimeline = validateTimeline (array);
    
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
    for ( var i = 0; i < validatedTimeline.length-1; i++ ) { 
        var row = [
            "focus",
            i%2 === 0 ? ("focus") : ("distracted"),
            validatedTimeline[i],
            validatedTimeline[i+1],
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
                    hAxis: {format:'hh:mm aa'}
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        )}
    </myContext.Consumer>
)


export default Timeline