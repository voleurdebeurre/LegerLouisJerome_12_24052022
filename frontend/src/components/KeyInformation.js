import '../assets/css/singleUser.css'
import React from 'react';

import caloriesIcon from '../assets/images/icon-calories.svg';
import glucidesIcon from '../assets/images/icon-carbs.svg';
import fatIcon from '../assets/images/icon-fat.svg';
import proteinIcon from '../assets/images/icon-protein.svg';

/**
 * Component for showing all the meta information in the sidebar.
 *
 * @component
 * @param {Object} data User's keyInfoData data object
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

function KeyInformation(data) {
    let keyData = data.keyInfoData.data.keyData;

    return (
        <>
        <div className="keyInformation kcal">
            <img src={caloriesIcon} alt="Calories" />
            <p>
                <span>{keyData.calorieCount} kCal</span><br />
                Calories
            </p>
        </div>
        <div className="keyInformation prot">
            <img src={proteinIcon} alt="Proteins" />
            <p>
                <span>{keyData.proteinCount}g</span><br />
                Proteines
            </p>
        </div>
        <div className="keyInformation glu">
            <img src={fatIcon} alt="fat" />
            <p>
                <span>{keyData.carbohydrateCount}g</span><br />
                Glucides
            </p>
        </div>
        <div className="keyInformation lip">
            <img src={glucidesIcon} alt="Glucides" />
            <p>
                <span>{keyData.lipidCount}g</span><br />
                Lipides
            </p>
        </div>
        </>
    );
}

export default KeyInformation;
