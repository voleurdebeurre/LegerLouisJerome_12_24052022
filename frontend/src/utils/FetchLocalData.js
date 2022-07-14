import localData from "../assets/db/mock_data.js";
import { useEffect, useState } from 'react';

/** 
 * Function that gets data from the local json database for selected user 
 *
 * @param {string} urlId - A string param that contains the requested user ID
 *
 */

export function FetchLocalData(urlId){
    urlId = parseInt(urlId)
    // Fetches API Data
    const [appState, setAppState] = useState({
        loaded: false,
        data: null
    });

    let responseUserGeneralData = {};
    let responseUserSessionsData = {}
    let responseUserActivityData = {}
    let responseUserPerformanceData = {}

    // API source data URLs
    localData.USER_MAIN_DATA.forEach((data) =>{
        if(data.id === urlId){
            responseUserGeneralData = {data: data}
        }
    });

    localData.USER_ACTIVITY.forEach((data) =>{
        if(data.userId === urlId){
            responseUserActivityData = {data: data}
        }
    });

    localData.USER_AVERAGE_SESSIONS.forEach((data) =>{
        if(data.userId === urlId){
            responseUserSessionsData = {data: data}
        }
    });

    localData.USER_PERFORMANCE.forEach((data) =>{
        if(data.userId === urlId){
            responseUserPerformanceData = {data: data}
        }
    });
    
    // const userSessionsData = 'http://localhost:3000/user/' + urlId + '/average-sessions';
    // const userActivityData = 'http://localhost:3000/user/' + urlId + '/activity';
    // const userPerformanceData = 'http://localhost:3000/user/' + urlId + '/performance';

    useEffect(() => {
        setAppState({loaded: true, data: { responseUserGeneralData, responseUserActivityData, responseUserSessionsData, responseUserPerformanceData }})
        
    }, []);


    return appState;

}