import { Link } from 'react-router-dom';
import '../style/Item.css';

export const Item = ({id, img, name, price}) => {

    return(
        <div className="card">
            <div className="card-image">
                <Link to={`/item/${id}`}>
                    <img src={img} />
                </Link>
            </div>
            <div className="card-content">
                <Link to={`/item/${id}`}>{name}</Link>
            </div>
            <div className="card-action">
                <a href="#" className='red-text'>${price}</a>
            </div>
        </div>
    );
};