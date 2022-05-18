import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/cart.css';
import FormatNumber from '../utils/FormatNumber';
import { CartContext } from '../context/CartContext';
import {collection, doc, getDoc, increment, query, serverTimestamp, setDoc, updateDoc} from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import swal from 'sweetalert';
import { UsersContext } from '../context/UsersContext';


const Cart = () => {

    // Acquiring from cart
    const cart = useContext(CartContext);

    // Acquiring from user
    const user = useContext(UsersContext);

    // Creating the purchase order
    const createOrder = () => {

        // Acquiring product information
        let item = cart.cartList.map(item => ({
            id: item.itemId,
            title: item.itemName,
            price: item.itemPrice,
            qty : item.itemQty
        }));

        
        cart.cartList.forEach(async (item) => {
            const itemStock = doc(db, "products", item.itemId);
            await updateDoc(itemStock, {
                stock: increment(-item.itemQty)
            });
        });

        // Order data
        let order = {
            buyer: user.users,
            price : cart.total(),
            items: item,
            date: serverTimestamp()
        };

        console.log(order);

        
        // Creating the order collection in firebase
        const createOrderInFirestore = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            return newOrder;
        }
        
        createOrderInFirestore()
            .then(result => swal({
                text: 'Gracias por su compra',
                title: `Su compra se ha reslizado con exito ${result.id}`,
                icon: 'success',
                Button: 'Ok',
            }))
            .catch(err => console.log(err));

        // Reset the cart by deleting all its products
        cart.clearItem();
    }
    
    
    return (
        <>
            <div className="cart">
                <div className="info">
                    {
                        // Si el carrito tiene mas de 1 producto
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
                        // Si el carrito tiene mas de 1 producto
                        cart.cartList.length > 0 ?
                        // Mapea los productos del carrito
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
                            <a onClick={createOrder}>Confirmar Compra</a>
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