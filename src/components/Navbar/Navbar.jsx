import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className='navbar-nav'>
        <ul>
          <li><a href="#banner">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#partners">Aliados</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
