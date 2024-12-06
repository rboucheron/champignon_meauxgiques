import Logo from '../assets/react.svg'
import Wave from './Wave'

const Navbar = () => {
    return (
        <>
        <header className="header-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.2rem 2rem 6.5rem 2rem', backgroundColor: '#A3FCFF' }}>
            <nav>
            <ul className='nav-element' style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '6rem' }}>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Home</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>About</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px' }}><img src={Logo} style={{ height: '50px' }}></img></a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Contact</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Lorem</a></li>
            </ul>
            </nav>
        </header>
        <div className="wave-container">
            <Wave style={{ position: 'absolute', rotate: '-.6deg', top: '-53px', zIndex: '100' }}/>
        </div>
        </>
    );
  };
  
  export default Navbar;