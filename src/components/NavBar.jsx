import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { AccountCircle } from "@material-ui/icons";
import '../style/NavBar.css';

function NavBar(){
    return(
        <nav className="black">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo white-text center">I-Star</Link>
                <Link to='/cart' className="left"><CartWidget /></Link>
                <ul className="right">
                    <Link to='/users'><AccountCircle /></Link>
                </ul>
            </div>
      </nav>
    );
};

export default NavBar;