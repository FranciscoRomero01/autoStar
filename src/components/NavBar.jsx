import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav>
            <div className="nav-wrapper black">
                <a href="#" className="brand-logo center white-text">AutoStar</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#" className="white-text">Inicio</a></li>
                    <li><a href="#" className="white-text">Servicios</a></li>
                    <li><a href="#" className="white-text">Novedades</a></li>
                    <li><a href="#" className="white-text">Contacto</a></li>
                </ul>
                <ul className="right">
                    <li><CartWidget /></li>
                    <li><a href="#" className="white-text">Iniciar Sesion</a></li>
                    <li><a href="#" className="white-text">Registrarse</a></li>
                </ul>
            </div>
      </nav>
    )
}

export default NavBar;

