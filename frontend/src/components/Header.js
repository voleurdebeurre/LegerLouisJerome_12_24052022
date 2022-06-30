import Logo from '../components/Logo.js';
import Nav from '../components/Nav.js';

import '../assets/css/header.css';
/**
 * Component that contains the Logo and Nav components
 *
 * @component
 */

function Header() {
    return (
        <header className='pageHeader'>
            <Logo />
            <Nav />
        </header>
            
    );
}
  
  export default Header;
  