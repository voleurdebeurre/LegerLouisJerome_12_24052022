import { Link } from 'react-router-dom';
import '../assets/css/homeScreen.css'
import logo from '../assets/images/logo.svg';

function PageNotFound() {

    return (
        <div className="homeScreen">
            <div className='brandLogo'>
                <img src={logo} alt='SportSee' />
                <h1>SportSee</h1>
            </div>
            <div className="pageNotFound">
                <h1>Oups ! Cette page n'existe pas...</h1>
                <Link to={`/`}>
                    Revenir à l'index
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;
