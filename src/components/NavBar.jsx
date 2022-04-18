import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../style/NavBar.css';

function NavBar(){
    return(
        <nav className="black">
            <div className="nav-wrapper ">
                <Link to='/' className="brand-logo left white-text">AutoStar</Link>
                <ul id="nav-mobile" className="center hide-on-med-and-down">
                    <li><Link to='/category/1' className="white-text micropcesador">Microprocesador</Link></li>
                    <li><Link to='/category/2'>Motherboard</Link></li>
                    <li><Link to='/category/3'>Memoria RAM</Link></li>
                    <li><Link to='/category/4'>Placa de Video</Link></li>
                    <li><Link to='/category/5'>Almacenamiento</Link></li>
                    <li><Link to='/category/6'>Fuente</Link></li>
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

