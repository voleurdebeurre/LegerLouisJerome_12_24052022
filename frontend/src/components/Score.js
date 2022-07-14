import '../assets/css/singleUser.css'
import React from 'react';
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

/**
 * Component for showing the overall progression against user's objective.
 *
 * @component
 * @param {Object} data User's scoreData data object
 * @example {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    }
 */
function Score(data) {

    let scoreData = [{}];

    scoreData.name = "Score"
    scoreData.todayScore = data.scoreData.data.id
    scoreData.fill = "#FF0000";

    return (
        <div className="secGraph score">
            <h5>Score</h5>
            <div className="progressLabel" >
                <span>{scoreData.todayScore}%</span><br/>de votre<br/>objectif
            </div>
            <ResponsiveContainer width="100%" minWidth={300} height="100%" minHeight={300}>
            <RadialBarChart width={300} height={300} data={scoreData} innerRadius={150} barSize={8} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false}/>
                <RadialBar background dataKey={scoreData.todayScore} cornerRadius={30 / 2} fill="#FF0000" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>

    );
}

export default Score;
