import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import '../style/NavBar.css';

function NavBar(){
    return(
        <nav className="black">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo white-text center">AutoStar</Link>
                <Link to='/cart' className="left"><CartWidget /></Link>
                <ul className="right">
                    <li><a href="#" className="white-text">Iniciar Sesion</a></li>
                    <li><a href="#" className="white-text">Registrarse</a></li>
                </ul>
            </div>
      </nav>
    )
}

export default NavBar;

