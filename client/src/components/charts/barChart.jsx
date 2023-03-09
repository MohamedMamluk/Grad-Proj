import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,//y
    Tooltip,
    Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,//y
    Tooltip,
    Legend
) //to activate them
const BarChart = () => {
    const [instructors,setInstructors]=useState([]);
    const [students,setStudents]=useState([]);

    useEffect(()=>{
        axios.get(`/instructor`).then((res)=>{
            setInstructors(res.data.length);
            console.log('useEffect for instrucrors data '+ res.data.length)
        })
    },[])
    useEffect(()=>{
        axios.get(`/student`).then((res)=>{
            setStudents(res.data.length);
            console.log('useEffect for students data '+ res.data.length)
        })
    },[])


    const data= {
        labels:['Instructors','Students'],
        datasets:[
            {
                label: ['Instructors Vs. Students'],
                data: [instructors,students],
                backgroundColor:['#6D54DE','#EDEAFB'],
                borderColor:'black',
                borderWidth:2,
            },
            // {
            //     label: '333',
            //     data: [3,5,8],
            //     backgroundColor:'purple',
            //     borderColor:'black',
            //     borderWidth:2,
            // }, //to display to bar charts next to each other
        ]
    }
    const options ={

    }
    return (
        <div>
            <h1>Bar char</h1>
            <div>
                <Bar
                    data={data}
                    options={options}
                >

                </Bar>
            </div> 
        </div>
    );
};

export default BarChart;