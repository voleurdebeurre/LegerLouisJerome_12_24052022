import { useEffect, useState, Navigate } from 'react';
import axios from 'axios';

/** 
 * Function that gets data from the API for selected user 
 */

export function FetchAPIData(urlId){
    /** Sets the initial state of the app before pulling the data */
    /** loaded controls if the data is populated
     *  data contains the user's data
     *  error is not null if an error occurs
    */
    const [appState, setAppState] = useState({
        loaded: false,
        data: null,
        error: null
    });

    /** API source data URLs */
    const userGeneralData = 'http://localhost:3000/user/' + urlId;
    const userSessionsData = 'http://localhost:3000/user/' + urlId + '/average-sessions';
    const userActivityData = 'http://localhost:3000/user/' + urlId + '/activity';
    const userPerformanceData = 'http://localhost:3000/user/' + urlId + '/performance';

    /** Hook once page is loaded */
    useEffect(() => {
        async function fetchData(){
            try{
                /** Define axios call for each url */
                const userGeneralDataRequest = await axios.get(userGeneralData);
                const userSessionsDataRequest = await axios.get(userSessionsData);
                const userActivityDataRequest = await axios.get(userActivityData);
                const userPerformanceDataRequest = await axios.get(userPerformanceData);
                /** Axios calls */
                axios.all([userGeneralDataRequest, userSessionsDataRequest, userActivityDataRequest, userPerformanceDataRequest]).then(axios.spread((...responses) => {
                    const responseUserGeneralData = responses[0].data
                    const responseUserSessionsData = responses[1].data
                    const responseUserActivityData = responses[2].data
                    const responseUserPerformanceData = responses[3].data
                    /** Sets the app state with the loaded data */
                    /** loaded = true */
                    /** data = all the data pulled in an object */
                    /** error = null */
                    setAppState({loaded: true, data: { responseUserGeneralData, responseUserSessionsData, responseUserActivityData, responseUserPerformanceData}, error: null})
                }))
            }catch(err){
                console.log(err)
                setAppState({loaded: true, data: null, error: "ERREUR"})
            }
        }
        
        fetchData();
        
    }, []);

    return appState;

}