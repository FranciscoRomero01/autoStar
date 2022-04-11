import '../style/Item.css';

export const Item = ({img, name, year, kilometres, price}) => {

    return(
        <div className="card">
            <div className="card-image">
                <a href="#">
                    <img src={img} />
                    <span className="card-title">{name}</span>
                </a>
            </div>
            <div className="card-content">
                <p>Año:{year}</p>
                <p>Kilometros:{kilometres}</p>
            </div>
            <div className="card-action">
                <a href="#">${price}</a>
            </div>
        </div>
    );
};