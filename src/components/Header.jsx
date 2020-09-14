import React from 'react';

function Header (){
    return(
    <header>  
    <nav className="logo">
      <img src="./images/logo.webp" style={{ maxWidth: "100px"}} alt="Logo" />
      <h1>TSUTSUMI Jose Antonio</h1>
      <ul className="links">
        <li><a href="/">Acerca</a></li>
        <li><a href="/">Proyectos</a></li>
        <li><a href="/">Contacto</a></li>
      </ul>
    </nav>
    </header>
    )
}
export default Header;