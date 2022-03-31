import data from "./product"
import ItemCount from "./ItemCount";
import '../style/Cards.css';

const Cards = () => {
    return(
        data.map(item => 
            <div className="container">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img src={item.img} alt="imagen de Sandero" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"><a href="#" className="red-text text-accent-4">Nombre:{item.nombre}</a><i className="material-icons right">Kilometros:{item.kilometros}</i></span>
                        <p>Año:{item.año}</p>
                    </div>
                    <ItemCount />
                </div>
            </div>
        )
    )
}

export default Cards;