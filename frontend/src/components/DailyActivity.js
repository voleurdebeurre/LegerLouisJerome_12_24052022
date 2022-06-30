import '../assets/css/singleUser.css'
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

/** 
 * Function to customize the tooltip when hovering the lines
 * @param {Object} payload Data to be displayed in the tooltips
 * @param {Object} active Gets the point that's being hovered
 */

function CustomTooltip({payload, active}){
    if(active){
        return (
            
            <div className="dailyActivityTooltip">
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}kcal</p>
            </div>
        )
    }
    return null;
}

/**
 * Component for showing the bar chart.
 *
 * @component
 * @param {Object} data User's activity data object
 * @example {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
 */

function DailyActivity(data) {
    let sessions = data.activityData.data.sessions

    const tooltipStyle = {background:"var(--color-primary)", color:"var(--color-white)"}


    return (
        <>
        <div className="dailyActivity">
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer width="99%" height={300}>
                <BarChart data={sessions}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false}/>
                    <XAxis tickLine={false} axisLine={false} />
                    <YAxis axisLine={false} tickLine={false} orientation="right" tickCount={3}/>
                    <Tooltip content={<CustomTooltip/>} contentStyle={tooltipStyle} itemStyle={tooltipStyle}/>
                    <Legend verticalAlign="top" height={60} align="right" iconType="circle" iconSize={8}/>
                    <Bar dataKey="kilogram" fill="#E60000" barSize={8} radius={[5, 5, 0, 0]}/>
                    <Bar dataKey="calories" fill="#282D30" barSize={8} radius={[5, 5, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </>
    );
}

export default DailyActivity;
