import '../assets/css/singleUser.css'
import Header from "../components/Header.js";
import Sidebar from "../components/Sidebar.js";
import DailyActivity from "../components/DailyActivity.js";
import KeyInformation from "../components/KeyInformation.js";
import ActivityType from "../components/ActivityType.js";
import Score from "../components/Score.js";
import AvgSession from "../components/AvgSession.js";
import { Navigate, useParams } from "react-router-dom";

import { FetchAPIData } from '../utils/FetchAPIData';
import { FetchLocalData } from '../utils/FetchLocalData';


/**
 * Component for showing training data of the user.
 *
 * @component
 */

function SingleUser() {
    /** Gets selected userId from the URL */
    let urlId = useParams();
    /** Converts the userID to an int */
    urlId = parseInt(urlId.id)

    /** Controller for using local or API data */
    const useLocalData = false;

    /** Logic for using local or API data */
    const {loaded, data, error} = useLocalData ? FetchLocalData(urlId) : FetchAPIData(urlId)
    console.log(loaded, data, error)
    /** If data is loaded then display the user's information */
    if(loaded){
        if(error === "ERREUR"){
            return <Navigate to="/404"/>
        }else{
            return (
                <>
                <Header />
                <div className='content'>
                    <Sidebar />
                    <div className="userContent">
                        <header>
                            <h2>Bonjour <span>{data.responseUserGeneralData.data.userInfos.firstName}</span></h2>
                            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        </header>
                        <div className="userDataWrapper">
                            <div className="graphSection">
                                <DailyActivity activityData = {data.responseUserActivityData} />
                                <div className="secGraphs">
                                    <AvgSession sessionData = {data.responseUserSessionsData} />
                                    <ActivityType performanceData = {data.responseUserPerformanceData} />
                                    <Score scoreData= {data.responseUserGeneralData} />
                                </div>
                            </div>
                            <div className="userMeta">
                                <KeyInformation keyInfoData = {data.responseUserGeneralData} />
                            </div>
                        </div>
                    </div>
                </div>
                </>
            );
        }
    /** If data is not loaded yet, then display 'loading messsage' */ 
    }else{
        return(
            <div className="loading">
                <h1>LOADING</h1>
            </div>
        )
    }
}
    

export default SingleUser;
