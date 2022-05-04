import { Link } from 'react-router-dom';
import '../style/ItemListContainer.css';
import { ItemList } from "./itemList";
import SearchForm from './SearchForm';

const ItemListContainer = () => {

    return(
        <div className='itemListContainer'>
            <div className='menu'>
                <div className='categorias'>
                    <h5>Categorias:</h5>
                    <ul>
                        <li><Link to='/'>Todos</Link></li>
                        <li><Link to='/category/1'>Microprocesador</Link></li>
                        <li><Link to='/category/2'>Motherboard</Link></li>
                        <li><Link to='/category/3'>Memoria RAM</Link></li>
                        <li><Link to='/category/4'>Placa de Video</Link></li>
                        <li><Link to='/category/5'>Almacenamiento</Link></li>
                        <li><Link to='/category/6'>Fuente</Link></li>
                    </ul>
                </div>
                <div className='busqueda'>
                    <SearchForm />
                </div>
            </div>
            <div className="cards">
                <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer;