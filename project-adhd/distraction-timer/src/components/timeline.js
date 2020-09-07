import React from "react"
import { myContext } from '../components/provider'
import { Chart } from "react-google-charts"

function makeDatatable (array) {
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
    for ( var i = 0; i < array.length-1; i++ ) { 
        var row = [
            "focus",
            i%2 === 0 ? ("focus") : ("distracted"),
            array[i],
            array[i+1],
        ];
        datatable.push(row);
    }
    console.log(datatable);
    return datatable;
}


const Timeline = () => (
    <myContext.Consumer>
        {context => (
            <Chart
                width={'100%'}
                height={'100px'}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={makeDatatable(context.timedEvents)}
                options={{
                    timeline: {
                        showRowLabels: false,
                        showBarLabels: true
                    },
                    avoidOverlappingGridLines: false
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        )}
    </myContext.Consumer>
)


export default Timeline