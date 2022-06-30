import localData from "../assets/db/mock_data.js";
import "../assets/css/userShowcase.css";
import { Link } from "react-router-dom";


/**
 * Component for parsing the mock data and listing the users FOR TESTING PURPOSES.
 *
 * @component
 */
function UserSelect() {

    return (
        <div className="userSelection">
            {/** For each user generate a Link to user's page (ex: /users/18) */}
            {localData.USER_MAIN_DATA.map((user) =>(
                <Link to={`users/${user.id}`} className="singleUserSelect" data-userid={user.id} key={user.id}>
                    <span>{user.userInfos.firstName}</span>
                </Link>
            ))}
        </div>
        
    );
}

export default UserSelect;
