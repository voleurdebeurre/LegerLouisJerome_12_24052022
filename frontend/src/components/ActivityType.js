import '../assets/css/singleUser.css'
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * Component for showing the radial chart.
 *
 * @component
 * @param {Object} data User's activity data object
 * @example {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
 */

function ActivityType(data) {
    /**
     * Parse the fetched performanceData object and store it
     */
    let activityData = data.performanceData.data.data;
    /**
     * Replace numbers in kind object key to performance names
     */
    activityData.forEach((kind) => {
        if(kind.kind === 1){
            kind.kind = "Cardio"
        }else if(kind.kind === 2){
            kind.kind = "Energie"
        }else if(kind.kind === 3){
            kind.kind = "Endurance"
        }else if(kind.kind === 4){
            kind.kind = "Force"
        }else if(kind.kind === 5){
            kind.kind = "Vitesse"
        }else if(kind.kind === 6){
            kind.kind = "Intensité"
        }
    })



    return (
        <div className="secGraph activityType">
            <ResponsiveContainer width="100%" minWidth={300} height="100%" minHeight={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={activityData}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tick={{ fill: 'white', fontSize: 10 }} />
                <PolarRadiusAxis axisLine={false} tickLine={false} tick={false}  />
                <Radar name="kind" dataKey="value" fill="var(--color-primary)" fillOpacity={0.6} label={false} />
            </RadarChart>
            </ResponsiveContainer>
        </div>

    );
}

export default ActivityType;
