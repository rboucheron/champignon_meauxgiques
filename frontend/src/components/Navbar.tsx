import Logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <>
        <header className="header-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.2rem 2rem 6.5rem 2rem' }}>
            <nav>
            <ul className='nav-element' style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '6rem' }}>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center', color: 'white' }}>Home</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center', color: 'white'}}>About</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px' }}><img src={Logo} style={{ height: '50px' }}></img></a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center', color: 'white' }}>Contact</a></li>
                <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center', color: 'white' }}>Lorem</a></li>
            </ul>
            </nav>
        </header>
        </>
    );
  };
  
  export default Navbar;