import '../style/ItemListContainer.css';
import ItemDetailConteiner from './ItemDetailConteiner';
import { ItemList } from "./itemList";

const ItemListContainer = () => {

    return(
        <div className="cards">
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;