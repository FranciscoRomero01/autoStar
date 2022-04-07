import '../style/Item.css';

export const Item = (props) => {

    return(
        <div className="card">
            <div className="card-image">
                <a href="#">
                    <img src={props.img} />
                    <span className="card-title">{props.name}</span>
                </a>
            </div>
            <div className="card-content">
                <p>Año:{props.year}</p>
                <p>Kilometros:{props.kilometres}</p>
            </div>
            <div className="card-action">
                <a href="#">${props.price}</a>
            </div>
        </div>
    );
};