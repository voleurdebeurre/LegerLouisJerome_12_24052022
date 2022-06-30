import logo from '../assets/images/logo.svg';

function Logo() {
    return (
       <div className='brandLogo'>
           <img src={logo} alt='SportSee' />
           <h1>SportSee</h1>
       </div>
    );
}
  
  export default Logo;
  