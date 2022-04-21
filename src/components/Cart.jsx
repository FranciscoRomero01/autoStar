import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/cart.css';
import { CartContext } from './CartContext';


const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <div className="cart">
            {
                cart.cartList.length > 0
                ?
                <div>
                    <a className='emptyCart' onClick={cart.clearItem}>BORRAR TODOS LOS PRODUCTOS</a>
                </div>
                : <h3>Su carrito se encuentra vacio!</h3>
            }
            <ul className='menu'>
                <li>Imagen</li>
                <li>Nombre</li>
                <li>Precio</li>
                <li>Cantidad</li>
                <li>Total</li>
            </ul>
            <div className='products'>
            {
                cart.cartList.length > 0 ?
                cart.cartList.map(item => 
                <>
                    <div className='product' key={item.itemId}>
                        <img src={item.itemImg} />
                        <p>{item.itemName}</p>
                        <p>{item.itemPrice}</p>
                        <p>{item.itemQty}</p>
                        <p>{item.itemTotal}</p>
                    </div>
                    <div className='detele'>
                        <a className='deteleCart' onClick={() => cart.deleteItem(item.itemId)}>Borrar producto</a>
                    </div>
                    
                </>
                )
                : <p></p>
            }
            </div>
            <div>
                <Link className='red-text' to='/'>IR A LA LISTA DE PRODUCTOS!</Link>
            </div>
            <div className='total'>
                <p>Total:</p>
            </div>
        </div>
    );
}

export default Cart;