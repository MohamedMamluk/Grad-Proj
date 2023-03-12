import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, //x axis related
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

import {Line} from 'react-chartjs-2';

ChartJS.register={
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
};

const LineChart = () => {
    const data={
        labels:['Mon','Tue','Wed'],
        datasets:[
            {
                labels:'Week Sales',
                data:[9,3,6],
                backgroundColor:'aqua',
                borderColor:'black',
                // pointBorderColor:'aqua',
                tension: 0.4, //for curves on the line
            }
        ]
    };
    const options = {
        plugins:{
            legend:true
        },
        scales:{
            y:{
                // min:3,
                // max:6,
            }
        }
    };
    return (
        <div>
            <h1>Line Chart</h1>
            <div style={
                {
                    width:'100px',
                    height:'100px'
                }}>
                <Line 
                    data={data}
                    options={options}
                >

                </Line>
            </div>
        </div>
    );
};

export default LineChart;