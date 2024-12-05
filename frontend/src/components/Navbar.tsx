import Logo from '../assets/react.svg'

const Navbar = () => {
    return (
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, gap: '6rem' }}>
            <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Home</a></li>
            <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>About</a></li>
            <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px' }}><img src={Logo} style={{ height: '50px' }}></img></a></li>
            <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Contact</a></li>
            <li style={{ display: 'flex' }}><a href="#" style={{ textDecoration: 'none', padding: '10px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>Lorem</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;