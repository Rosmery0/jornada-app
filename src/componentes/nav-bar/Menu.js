
function Menu(){
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-4">
        <a href="/Formulario" className="brand-logo">Jornada 2023</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/formulario">Formulario</a></li>
            <li><a href="/registros">Registros</a></li>
            <li><a href="/logout">Cerrar Sesión</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/formulario">Formulario</a></li>
        <li><a href="/registros">Registros</a></li>
        <li><a href="/logout">Cerrar Sesión</a></li>
      </ul>
    </div>);
}

export default Menu;