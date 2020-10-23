import React from "react"
import { Chart } from "react-google-charts"


const PieChart = (props) => {
    const { distractionDuration, taskDuration } = props;
    return (
        <>
            <Chart
                id="pie"
                width={'100%'}
                height={ (window.width<600) ? '200px' : '100px'}
                // height={'100px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Distracted', distractionDuration],
                    ['Task', taskDuration],
                ]}
                options={{
                    tooltip: { trigger: 'none' },
                    legend: 'none',
                    pieSliceText: 'none',
                    colors: ['#4266f5', '#818181'],
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </>
    )
    // document.querySelector(ellipse).style
}


export default PieChart