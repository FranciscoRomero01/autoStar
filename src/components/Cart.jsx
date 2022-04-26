import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/cart.css';
import FormatNumber from '../utils/FormatNumber';
import { CartContext } from './CartContext';


const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <>
            <div className="cart">
                <div className="info">
                    {
                        cart.cartList.length > 0
                        ?
                        <div>
                            <a className='emptyInfo' onClick={cart.clearItem}>BORRAR TODOS LOS PRODUCTOS</a>
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
                                <p>{cart.totalItem(item.itemId)}</p>
                            </div>
                            <div className='detele'>
                                <a className='deteleInfo' onClick={() => cart.deleteItem(item.itemId)}>Borrar producto</a>
                            </div>
                            
                        </>
                        )
                        : <p></p>
                    }
                    </div>
                </div>
                <div>
                    <div className='total'>
                        <h4>Informacion de su compra</h4>
                        <div className='sub'>
                            <p>Subtotal:</p>
                            {
                                cart.cartList.length > 0 
                                ? <FormatNumber number={cart.subTotal()} />
                                : <p>-</p>
                            }
                        </div>
                        <div className='envio'>
                            <p>Envio:</p>
                            {
                                cart.cartList.length > 0 
                                ? <FormatNumber number={cart.envio()} />
                                : <p>-</p>
                            }
                        </div>
                        <div className='envioDisc'>
                            <p>Descuento de envio:</p>
                            {
                                cart.cartList.length > 0 
                                ? <FormatNumber number={-cart.envio()} />
                                : <p>-</p>
                            }
                        </div>
                        <div className='totalC'>
                            <p>Total:</p>
                            {
                                cart.cartList.length > 0 
                                ? <FormatNumber number={cart.total()} />
                                : <p>-</p>
                            }
                        </div>
                        <div className="confirm">
                            <a>Confirmar Compra</a>
                        </div>
                    </div>
                    <div className='back'>
                        <Link className='red-text' to='/'>IR A LA LISTA DE PRODUCTOS!</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;