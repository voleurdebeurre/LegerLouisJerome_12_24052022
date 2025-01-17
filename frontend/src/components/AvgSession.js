import '../assets/css/singleUser.css'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/** 
 * Function to customize the tooltip when hovering the points
 * @param {Object} payload Data to be displayed in the tooltips
 * @param {Object} active Gets the point that's being hovered
 */

function CustomTooltip({payload, active}){
    if(active){
        return (
            <div className="avgSessionTooltip">
                <p>{payload[0].payload.sessionLength}min</p>
            </div>
        )
    }
    return null;
}

/** 
 * Function to create a rectangle overlay when hovering the points
 * @param {Object} points Points on the line chart
 */

function CoverRectangle({points}){
    return (
        <rect className='coverRectangle' x={points[0].x} y={0} height="100%" width="100%" fill="rgba(0,0,0,0.1)" />
    )
}

/**
 * Component for showing the simple line chart.
 *
 * @component
 * @param {Object} data User's sessions data object
 * @example {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
 */

function AvgSession(data) {

    let avgSession = data.sessionData.data.sessions;
    
    avgSession.forEach((session) => {
        if(session.day === 1){
            session.day = "L"
        }else if(session.day === 2){
            session.day = "M"
        }else if(session.day === 3){
            session.day = "M"
        }else if(session.day === 4){
            session.day = "J"
        }else if(session.day === 5){
            session.day = "V"
        }else if(session.day === 6){
            session.day = "S"
        }else if(session.day === 7){
            session.day = "D"
        }
    })
    

    return (
        <div className="secGraph avgSession">
            <h5>Durée moyenne des sessions</h5>
            <ResponsiveContainer width="100%" minWidth={300} height="100%" minHeight={300}>
                <LineChart data={avgSession}>
                    <CartesianGrid width={0} />
                    <XAxis axisLine={false} tickLine={false}  tick={{ fill: 'white', fontSize: 12 }} dataKey="day"/>
                    <YAxis hide={true} axisLine={false} tickLine={false}   />
                    <Tooltip content={<CustomTooltip />} cursor={<CoverRectangle/>} wrapperStyle={{background : "white", color: "black"}}/>
                    <Line type="monotone" dataKey="sessionLength" stroke="var(--color-white)" activeDot={{ r: 4 }} strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default AvgSession;
