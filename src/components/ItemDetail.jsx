import '../style/ItemDetail.css';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        setItemCount(qty);
        if(qty === 0){
            alert('Por favor, comprar 1 o mas productos')  
        } else{
            alert(`Seguro quiere comprar ${qty} productos de ${item.name}`)
        }
    }

    return(
        <>
            {
                item && item.img
                ?
                <>
                <div className="item">
                    <div className="itemImg">
                        <img src={item.img} />
                    </div>
                    <div className="itemDetail">
                        <h2 className='itemDetailTitle'>{item.name}</h2>
                        <div className='itemDetailPrice'>
                            <h3>Precio Deposito/Transferencia </h3>
                            <h3 className='red-text bold'>${item.price}</h3>
                        </div>
                        <div className='itemDetailPriceMP'>
                            <h3>Precio Mercado Pago</h3>
                            <h3 className='blue-text bold'>${item.priceMP}</h3>
                        </div>
                        <div className='itemDetailStock right'>
                            <h4> Stock disponible: {item.stock}</h4>
                            {
                                itemCount === 0
                                ?<><ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/><onAdd></onAdd>
                                </>
                                :<div className="price red accent-4">
                                    <Link to='/cart' className="white-text"> VER CARRITO </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='description'>
                    <h5>
                        Descripcion
                    </h5>
                    <h6>
                        {item.description}
                    </h6>
                </div>
                </>
                :<div className="progress">
                    <div className="indeterminate"></div>
                </div>
            }
        </>
    )
}

export default ItemDetail;
