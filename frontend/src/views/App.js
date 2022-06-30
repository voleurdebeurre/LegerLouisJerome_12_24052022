import '../assets/css/homeScreen.css'
import logo from '../assets/images/logo.svg';
import UserSelect from "../components/UserSelect.js";

/**
 * Component selecting the user from a list ONLY FOR TESTING PURPOSES 
 *
 * @component
 */
function App() {

  return (
    <>
      <div className="homeScreen">
        <div className='brandLogo'>
            <img src={logo} alt='SportSee' />
            <h1>SportSee</h1>
        </div>
        <UserSelect />
      </div>
      
    </>
  );
}

export default App;
